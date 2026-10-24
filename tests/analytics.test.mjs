import { describe, expect, test } from 'bun:test';
import { runInNewContext } from 'node:vm';
import {
  GA_MEASUREMENT_ID,
  analyticsBootstrap,
  enquiryAnalyticsEvent,
  linkAnalyticsEvent,
  sendAnalyticsEvent,
  shouldRenderAnalytics,
} from '../src/lib/analytics.ts';

function browserFixture(hostname) {
  const scripts = [];
  const window = { location: { hostname } };
  const context = {
    window,
    document: {
      createElement: () => ({}),
      head: { appendChild: (script) => scripts.push(script) },
    },
  };
  return { context, window, scripts };
}

describe('Production GA4 integration', () => {
  test('initializes the supplied property once and queues events before the SDK loads', () => {
    for (const hostname of ['sitc.lk', 'www.sitc.lk']) {
      const { context, window, scripts } = browserFixture(hostname);
      runInNewContext(analyticsBootstrap, context);
      runInNewContext(analyticsBootstrap, context);
      expect(scripts).toHaveLength(1);
      expect(scripts[0].async).toBe(true);
      expect(scripts[0].src).toBe(
        'https://www.googletagmanager.com/gtag/js?id=G-P3FB2R96T9',
      );
      const commands = window.dataLayer.map((args) => Array.from(args));
      expect(commands).toHaveLength(2);
      expect(commands[0][0]).toBe('js');
      expect(commands[1]).toEqual(['config', GA_MEASUREMENT_ID]);
      // No second manual page_view competes with Enhanced Measurement.
      expect(commands.some((args) => args[1] === 'page_view')).toBe(false);
      window.gtag('event', 'contact_click', { contact_method: 'phone' });
      expect(window.dataLayer).toHaveLength(3);
    }
  });

  test('never loads Google on localhost, IP, preview or lookalike hosts', () => {
    for (const hostname of [
      'localhost',
      '127.0.0.1',
      'sitc-campus.vercel.app',
      'sitc.lk.example.com',
      'staging.sitc.lk',
    ]) {
      const { context, window, scripts } = browserFixture(hostname);
      runInNewContext(analyticsBootstrap, context);
      expect(scripts).toHaveLength(0);
      expect(window.dataLayer).toBeUndefined();
      expect(window.gtag).toBeUndefined();
    }
    expect(shouldRenderAnalytics({ NODE_ENV: 'development' })).toBe(false);
    expect(
      shouldRenderAnalytics({ NODE_ENV: 'production', VERCEL_ENV: 'preview' }),
    ).toBe(false);
    expect(
      shouldRenderAnalytics({
        NODE_ENV: 'production',
        PREVENT_INDEXING: 'true',
      }),
    ).toBe(false);
    expect(shouldRenderAnalytics({ NODE_ENV: 'production' })).toBe(true);
  });

  test('contact tracking excludes destinations and personal query strings', () => {
    for (const [href, method] of [
      [
        'https://wa.me/94715258653?text=Private%20name%20and%20message',
        'whatsapp',
      ],
      ['mailto:private@example.com?body=Private%20message', 'email'],
      ['tel:+94770000000', 'phone'],
    ]) {
      expect(linkAnalyticsEvent(href, 'https://sitc.lk', 'footer')).toEqual({
        name: 'contact_click',
        params: { contact_method: method, placement: 'footer' },
      });
    }
    expect(
      linkAnalyticsEvent('javascript:alert(1)', 'https://sitc.lk', 'content'),
    ).toBeNull();
    expect(
      linkAnalyticsEvent(
        'https://example.com/private',
        'https://sitc.lk',
        'content',
      ),
    ).toBeNull();
  });

  test('programme, guide and resource clicks use stable reporting identifiers', () => {
    expect(
      linkAnalyticsEvent(
        '/program/diploma-in-psychology-and-counseling/?utm_source=facebook',
        'https://sitc.lk',
        'content',
      ),
    ).toEqual({
      name: 'select_content',
      params: {
        content_type: 'programme',
        content_id: 'psychology-diploma',
        placement: 'content',
      },
    });
    expect(
      linkAnalyticsEvent(
        '/guides/english-2026.pdf',
        'https://sitc.lk',
        'content',
      )?.params.programme_id,
    ).toBe('english-diploma');
    expect(
      linkAnalyticsEvent(
        '/guides/psychology-degree-2026.pdf',
        'https://sitc.lk',
        'content',
      )?.params.programme_id,
    ).toBe('psychology-degree');
    expect(
      linkAnalyticsEvent('https://portal.sitc.lk/', 'https://sitc.lk', 'header')
        ?.params.resource,
    ).toBe('student_portal');
  });

  test('valid enquiry handoffs queue only approved IDs and remain inert locally', () => {
    expect(enquiryAnalyticsEvent('Student name and message')).toEqual({
      name: 'enquiry_handoff',
      params: {
        contact_method: 'whatsapp',
        programme_id: 'undecided',
        placement: 'enquiry_form',
      },
    });
    const previous = Object.getOwnPropertyDescriptor(globalThis, 'window');
    const { context, window } = browserFixture('sitc.lk');
    runInNewContext(analyticsBootstrap, context);
    Object.defineProperty(globalThis, 'window', {
      value: window,
      configurable: true,
    });
    try {
      sendAnalyticsEvent(enquiryAnalyticsEvent('tamil-diploma'));
      expect(Array.from(window.dataLayer.at(-1))).toEqual([
        'event',
        'enquiry_handoff',
        {
          contact_method: 'whatsapp',
          programme_id: 'tamil-diploma',
          placement: 'enquiry_form',
          send_to: GA_MEASUREMENT_ID,
        },
      ]);
      const count = window.dataLayer.length;
      window.location.hostname = 'localhost';
      sendAnalyticsEvent(enquiryAnalyticsEvent('tamil-diploma'));
      expect(window.dataLayer).toHaveLength(count);
    } finally {
      if (previous) Object.defineProperty(globalThis, 'window', previous);
      else Reflect.deleteProperty(globalThis, 'window');
    }
  });
});

'use client';

import { useEffect } from 'react';
import {
  isAnalyticsHost,
  linkAnalyticsEvent,
  sendAnalyticsEvent,
} from '@/lib/analytics';

export function AnalyticsEvents() {
  useEffect(() => {
    if (!isAnalyticsHost(window.location.hostname)) return;
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a[href]');
      if (!link) return;
      const placement = link.closest('footer')
        ? 'footer'
        : link.closest('header')
          ? 'header'
          : link.closest('#enquire')
            ? 'enquiry'
            : 'content';
      const analyticsEvent = linkAnalyticsEvent(
        link.getAttribute('href') ?? '',
        window.location.origin,
        placement,
      );
      if (analyticsEvent) sendAnalyticsEvent(analyticsEvent);
    }
    // Capture runs before Next Link handles client navigation. Never delay it.
    document.addEventListener('click', handleClick, {
      capture: true,
      passive: true,
    });
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
  return null;
}

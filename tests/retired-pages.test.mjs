import { describe, expect, test } from 'bun:test';
import { GET as staffResponse } from '../src/app/academic-staff/route.ts';
import { GET as eventsResponse } from '../src/app/events/route.ts';

describe('Permanently retired pages', () => {
  for (const [label, handler] of [
    ['Staff', staffResponse],
    ['Events', eventsResponse],
  ]) {
    test(`${label} returns Gone, stays crawlable, and offers useful destinations`, async () => {
      const response = handler();
      expect(response.status).toBe(410);
      expect(response.headers.get('Location')).toBeNull();
      expect(response.headers.get('X-Robots-Tag')).toContain('noindex');
      expect(response.headers.get('Content-Type')).toContain('text/html');
      const html = await response.text();
      expect(html).toContain('href="/academic-programmes/"');
      expect(html).toContain('href="/contact-us/"');
      expect(html).not.toContain('rel="canonical"');
    });
  }
});

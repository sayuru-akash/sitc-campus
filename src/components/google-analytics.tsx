import Script from 'next/script';
import { AnalyticsEvents } from '@/components/analytics-events';
import { analyticsBootstrap, shouldRenderAnalytics } from '@/lib/analytics';

export function GoogleAnalytics() {
  if (!shouldRenderAnalytics(process.env)) return null;
  return (
    <>
      <Script id="sitc-ga4-init" strategy="afterInteractive">
        {analyticsBootstrap}
      </Script>
      <AnalyticsEvents />
    </>
  );
}

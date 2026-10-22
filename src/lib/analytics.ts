import { programmePath, programmeSlugs } from '@/content/programme-routes';

export const GA_MEASUREMENT_ID = 'G-P3FB2R96T9';
export const ANALYTICS_HOSTS = ['sitc.lk', 'www.sitc.lk'] as const;

export function isAnalyticsHost(hostname: string) {
  return ANALYTICS_HOSTS.some((host) => host === hostname);
}

export function shouldRenderAnalytics(environment: {
  NODE_ENV?: string;
  PREVENT_INDEXING?: string;
  VERCEL_ENV?: string;
}) {
  return (
    environment.NODE_ENV === 'production' &&
    environment.PREVENT_INDEXING !== 'true' &&
    environment.VERCEL_ENV !== 'preview'
  );
}

// The hostname check happens before requesting Google's script or setting cookies.
// One root config owns pageviews. GA4 Enhanced Measurement owns history changes.
export const analyticsBootstrap = `
(function () {
  if (!${JSON.stringify(ANALYTICS_HOSTS)}.includes(window.location.hostname) || window.__sitcAnalyticsEnabled) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', '${GA_MEASUREMENT_ID}');
  window.__sitcAnalyticsEnabled = true;
  var script = document.createElement('script');
  script.id = 'sitc-ga4-loader';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}';
  document.head.appendChild(script);
})();`;

type Placement = 'header' | 'footer' | 'enquiry' | 'content';
export type AnalyticsEvent = {
  name:
    | 'contact_click'
    | 'select_content'
    | 'programme_guide_click'
    | 'student_resource_click'
    | 'appointment_click'
    | 'location_map_click'
    | 'enquiry_handoff';
  params: Record<string, string>;
};

declare global {
  interface Window {
    __sitcAnalyticsEnabled?: boolean;
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendAnalyticsEvent(event: AnalyticsEvent) {
  if (
    typeof window === 'undefined' ||
    !isAnalyticsHost(window.location.hostname) ||
    !window.__sitcAnalyticsEnabled
  )
    return;
  window.gtag?.('event', event.name, {
    ...event.params,
    send_to: GA_MEASUREMENT_ID,
  });
}

// Only controlled categories/IDs are returned. Never send href query strings,
// link text, names, qualifications, message contents, phone numbers or emails.
export function linkAnalyticsEvent(
  href: string,
  origin: string,
  placement: Placement,
): AnalyticsEvent | null {
  let url: URL;
  try {
    url = new URL(href, origin);
  } catch {
    return null;
  }
  if (url.protocol === 'tel:' || url.protocol === 'mailto:')
    return {
      name: 'contact_click',
      params: {
        contact_method: url.protocol === 'tel:' ? 'phone' : 'email',
        placement,
      },
    };
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
  if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com')
    return {
      name: 'contact_click',
      params: { contact_method: 'whatsapp', placement },
    };
  if (url.hostname === 'calendly.com')
    return { name: 'appointment_click', params: { placement } };
  if (url.hostname === 'www.google.com' && url.pathname.startsWith('/maps'))
    return { name: 'location_map_click', params: { placement } };
  const resource =
    url.hostname === 'portal.sitc.lk'
      ? 'student_portal'
      : url.hostname === 'verify.sitc.lk'
        ? 'certificate_verification'
        : null;
  if (resource)
    return {
      name: 'student_resource_click',
      params: { resource, placement },
    };
  if (url.origin !== origin) return null;
  for (const id of Object.keys(programmeSlugs) as Array<
    keyof typeof programmeSlugs
  >) {
    if (url.pathname === programmePath(id))
      return {
        name: 'select_content',
        params: { content_type: 'programme', content_id: id, placement },
      };
  }
  const guide =
    /^\/guides\/(it|psychology|business|hrm|english|tamil)-2026\.pdf$/.exec(
      url.pathname,
    );
  if (guide)
    return {
      name: 'programme_guide_click',
      params: { programme_id: `${guide[1]}-diploma`, placement },
    };
  return null;
}

export function enquiryAnalyticsEvent(programmeId: string): AnalyticsEvent {
  return {
    // A handoff records intent, not a claim that a message was sent or accepted.
    name: 'enquiry_handoff',
    params: {
      contact_method: 'whatsapp',
      programme_id: Object.hasOwn(programmeSlugs, programmeId)
        ? programmeId
        : 'undecided',
      placement: 'enquiry_form',
    },
  };
}

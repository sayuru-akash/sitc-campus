import { PolicyPage } from '@/components/policy-page';
import { mainPageSeo } from '@/lib/page-seo';
export const metadata = mainPageSeo('privacy');
export default function PrivacyPage() {
  return <PolicyPage policyKey="privacy" />;
}

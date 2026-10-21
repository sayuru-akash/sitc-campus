import { PolicyPage } from '@/components/policy-page';
import { mainPageSeo } from '@/lib/page-seo';
export const metadata = mainPageSeo('terms');
export default function TermsPage() {
  return <PolicyPage policyKey="terms" />;
}

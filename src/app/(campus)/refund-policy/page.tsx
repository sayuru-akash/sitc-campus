import { PolicyPage } from '@/components/policy-page';
import { mainPageSeo } from '@/lib/page-seo';
export const metadata = mainPageSeo('refund');
export default function RefundPage() {
  return <PolicyPage policyKey="refund" />;
}

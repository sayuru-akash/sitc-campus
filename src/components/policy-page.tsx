import Link from 'next/link';
import { PageIntro, PageStructuredData } from '@/components/inner-page';
import { policies, type Policy } from '@/content/policies';

const policyNavigation = [
  { key: 'privacy', label: 'Privacy policy', href: '/privacy-policy/' },
  { key: 'refund', label: 'Refund policy', href: '/refund-policy/' },
  { key: 'terms', label: 'Terms & conditions', href: '/terms-and-conditions/' },
] as const;
export function PolicyPage({
  policyKey,
}: {
  policyKey: keyof typeof policies;
}) {
  const policy: Policy = policies[policyKey];
  return (
    <>
      <PageStructuredData pageKey={policyKey} />
      <div className="page-container policy-page">
        <PageIntro title={policy.title} description={policy.intro} />
        <nav className="policy-navigation" aria-label="Campus policies">
          {policyNavigation.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              aria-current={item.key === policyKey ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="policy-reading-layout">
          <aside className="policy-contents">
            <nav aria-label="On this page">
              <h2>On this page</h2>
              {policy.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>
          <article className="policy-body">
            {policy.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
        <div className="policy-contact">
          <h2>Questions about this policy?</h2>
          <a
            href={`mailto:info@sitc.lk?subject=${encodeURIComponent(policy.title)}`}
          >
            info@sitc.lk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}

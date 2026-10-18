import { Eyebrow } from '@/components/ui/eyebrow';
import { faqs } from '@/content/faqs';
export function FAQ() {
  return (
    <section className="section faq" aria-labelledby="faq-heading">
      <div>
        <Eyebrow>A LITTLE CLARITY</Eyebrow>
        <h2 id="faq-heading">
          Before you
          <br />
          <em>take the next step.</em>
        </h2>
      </div>
      <div>
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

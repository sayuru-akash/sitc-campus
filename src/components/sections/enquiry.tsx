'use client';

import type { FormEvent } from 'react';
import {
  programmeLabel,
  useProgrammeSelection,
} from '@/components/programme-selection';
import { Eyebrow } from '@/components/ui/eyebrow';
import { programmes } from '@/content/programmes';
import { site } from '@/content/site';
import { buildWhatsAppEnquiryUrl } from '@/lib/enquiry';

export function Enquiry() {
  const { selectedId, selectProgramme } = useProgrammeSelection();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem('name');

    if (!(nameInput instanceof HTMLInputElement)) return;
    nameInput.setCustomValidity(
      nameInput.value.trim() ? '' : 'Please enter your full name.',
    );
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const programme = programmes.find((item) => item.id === data.get('interest'));
    const url = buildWhatsAppEnquiryUrl({
      name: String(data.get('name') ?? ''),
      interest: programme ? programmeLabel(programme) : '',
      qualification: String(data.get('qualification') ?? ''),
      message: String(data.get('message') ?? ''),
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="enquire" className="enquire" aria-labelledby="enquiry-heading">
      <div>
        <Eyebrow>LET&apos;S TALK ABOUT YOUR FUTURE</Eyebrow>
        <h2 id="enquiry-heading">
          Your next step<br />
          starts with<br />
          <em>a conversation.</em>
        </h2>
        <p>
          Tell us what you would like to study. Continue on WhatsApp to speak with
          the SITC admissions team.
        </p>
        <a href={site.telephoneHref}>{site.telephone}</a>
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <form id="enquiry" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Your name
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            onInput={(event) => event.currentTarget.setCustomValidity('')}
          />
        </label>
        <label htmlFor="interest">
          I&apos;m interested in
          <select
            id="interest"
            name="interest"
            value={selectedId}
            onChange={(event) => selectProgramme(event.currentTarget.value)}
          >
            <option value="">Help me choose a programme</option>
            {programmes.map((programme) => (
              <option key={programme.id} value={programme.id}>
                {programmeLabel(programme)}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="qualification">
          Highest qualification
          <select id="qualification" name="qualification" defaultValue="G.C.E. O/L">
            <option>G.C.E. O/L</option>
            <option>G.C.E. A/L</option>
            <option>Diploma / Higher Diploma</option>
            <option>Bachelor&apos;s degree</option>
            <option>Other qualification</option>
          </select>
        </label>
        <label htmlFor="message">
          Anything you would like to ask? <span>(optional)</span>
          <textarea
            id="message"
            name="message"
            rows={2}
            placeholder="Study mode, fees, entry requirements..."
          />
        </label>
        <button className="button" type="submit">Continue on WhatsApp ↗</button>
        <p className="form-note">
          This opens WhatsApp with your enquiry ready to send. Your details are not
          stored on this website.
        </p>
      </form>
    </section>
  );
}

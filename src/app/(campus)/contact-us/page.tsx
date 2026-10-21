import { Fragment } from 'react';
import { PageIntro, PageStructuredData } from '@/components/inner-page';
import { ProgrammeSelectionProvider } from '@/components/programme-selection';
import { Enquiry } from '@/components/sections/enquiry';
import { site, locations, supportChannels, socialLinks } from '@/content/site';
import { mainPageSeo } from '@/lib/page-seo';
import type { CampusLocation } from '@/types/content';

export const metadata = mainPageSeo('contact');

export default function ContactPage() {
  return (
    <ProgrammeSelectionProvider>
      <PageStructuredData pageKey="contact" type="ContactPage" />
      <div className="page-container">
        <div className="contact-hero">
          <div>
            <PageIntro
              title="Contact SITC Campus"
              breadcrumb="Contact"
              accent="A conversation can be the start of something meaningful."
              description="Explore a programme, ask a question or connect with the campus team."
            />
            <div className="contact-direct">
              <a href={site.telephoneHref}>
                {site.telephone}
                <span>Main telephone</span>
              </a>
              <a href={`mailto:${site.email}`}>
                {site.email}
                <span>General enquiries</span>
              </a>
            </div>
          </div>
          <section
            className="admissions-panel"
            aria-labelledby="admissions-heading"
          >
            <h2 id="admissions-heading">Speak with admissions</h2>
            <p>
              Get guidance on programmes, entry requirements and your next step.
            </p>
            {supportChannels
              .filter((channel) => channel.type === 'WhatsApp')
              .map((channel) => (
                <div className="admissions-channel" key={channel.href}>
                  <span>{channel.label}</span>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {channel.number}
                    <span>Chat on WhatsApp ↗</span>
                  </a>
                </div>
              ))}
          </section>
        </div>
        <section className="contact-locations" aria-labelledby="visit-heading">
          <h2 id="visit-heading">Visit or connect with us</h2>
          <div className="contact-location-grid">
            {locations.map((location: CampusLocation) => (
              <article key={location.id}>
                <span className="location-role">{location.label}</span>
                <h3>{location.name}</h3>
                <address>
                  {location.address.map((line, i) => (
                    <Fragment key={line}>
                      {i > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </address>
                {location.phones.map((phone) => (
                  <a
                    className="location-phone"
                    href={phone.href}
                    key={phone.href}
                  >
                    {phone.label}
                  </a>
                ))}
                <div className="location-links">
                  <a
                    className="text-link"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on map ↗
                  </a>
                  {location.appointment && (
                    <a
                      className="text-link"
                      href={location.appointment}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a visit ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="contact-support"
          aria-label="Digital Affairs and social channels"
        >
          <div>
            <h2>Digital Affairs</h2>
            <p>Connect with the team for campus administrative support.</p>
            <div className="support-numbers">
              {supportChannels
                .filter((channel) => channel.type === 'Telephone')
                .map((channel) => (
                  <a href={channel.href} key={channel.href}>
                    {channel.number}
                  </a>
                ))}
            </div>
          </div>
          <div>
            <h2>Stay connected</h2>
            <nav aria-label="SITC social channels">
              {socialLinks.map((link) => (
                <a
                  className="text-link"
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
            <a
              className="contact-email"
              href={`mailto:${site.email}?subject=Feedback%20for%20SITC%20Campus`}
            >
              Send feedback by email ↗
            </a>
          </div>
        </section>
      </div>
      <div className="inner-enquiry">
        <Enquiry />
      </div>
    </ProgrammeSelectionProvider>
  );
}

import Image from 'next/image';
import wordmark from '../../public/images/sitc-wordmark.png';
import {
  footerLinks,
  site,
  socialLinks,
  supportChannels,
} from '@/content/site';
import { Locations } from '@/components/sections/locations';

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a
            href="#"
            className="footer-logo"
            aria-label="SITC Campus, back to top"
          >
            <Image
              src={wordmark}
              alt="Science and Information Technology City Campus, Sri Lanka, in Sinhala, Tamil and English"
              width={520}
              height={83}
              sizes="(max-width: 640px) 86vw, 520px"
              className="footer-wordmark"
            />
          </a>
          <p className="footer-tagline">
            Knowledge that opens doors.
            <br />
            Education that moves you forward.
          </p>
          <div className="footer-direct-contact">
            <a href={`mailto:${site.email}`}>
              {site.email}
              <span aria-hidden="true">↗</span>
            </a>
            <a href={site.telephoneHref}>{site.telephone}</a>
          </div>
          <nav className="footer-socials" aria-label="SITC social channels">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>
        <nav className="footer-nav" aria-label="Explore SITC">
          <h3>Explore SITC</h3>
          {footerLinks.explore.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="footer-nav" aria-label="Student resources">
          <h3>For our students</h3>
          {footerLinks.students.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
      <Locations />
      <section className="footer-support" aria-labelledby="support-heading">
        <h2 id="support-heading" className="footer-kicker">
          Speak to the right team
        </h2>
        <div className="footer-support-grid">
          {supportChannels.map((channel) => (
            <div key={channel.href}>
              <span className="footer-support-label">{channel.label}</span>
              <a href={channel.href}>
                {channel.number}
                <span aria-hidden="true">↗</span>
              </a>
              <span className="footer-contact-type">{channel.type}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} SITC Campus. All rights reserved.
        </small>
        <nav aria-label="Legal information">
          {footerLinks.legal.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

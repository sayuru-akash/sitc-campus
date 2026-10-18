import { Fragment } from 'react';
import { locations } from '@/content/site';
import type { CampusLocation } from '@/types/content';

export function Locations() {
  return (
    <section className="footer-locations" aria-labelledby="locations-heading">
      <div className="footer-section-heading">
        <p className="footer-kicker">Our locations</p>
        <h2 id="locations-heading">
          Connected. <em>Wherever you are.</em>
        </h2>
      </div>
      <div className="footer-location-grid">
        {locations.map((location: CampusLocation, index) => (
          <article className="footer-location" key={location.id}>
            <div className="footer-location-label">
              <span>{String(index + 1).padStart(2, '0')}</span>
              {location.label}
            </div>
            <h3>{location.name}</h3>
            <address>
              {location.address.map((line, lineIndex) => (
                <Fragment key={line}>
                  {lineIndex > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </address>
            <div className="footer-location-phones">
              {location.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.label}
                </a>
              ))}
            </div>
            <div className="footer-location-actions">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on map <span aria-hidden="true">↗</span>
              </a>
              {location.appointment && (
                <a
                  href={location.appointment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a visit <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

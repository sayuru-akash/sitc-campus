import { Fragment } from 'react';
import { Eyebrow } from '@/components/ui/eyebrow';
import { locations } from '@/content/site';
export function Locations() {
  return <section id="contact" className="locations" aria-labelledby="locations-heading"><div><Eyebrow>COME FIND US</Eyebrow><h2 id="locations-heading">Connected.<br /><em>Wherever you are.</em></h2></div>{locations.map(location=><article key={location.id}><h3>{location.name}</h3><p>{location.address.map((line,index)=><Fragment key={line}>{index > 0 && <br />}{line}</Fragment>)}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}>View on map ↗</a></article>)}</section>;
}

import { site } from '@/content/site';
export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        SITC <span>CAMPUS</span>
      </div>
      <p>
        Knowledge that opens doors.
        <br />
        Education that moves you forward.
      </p>
      <div>
        <a href={site.mainWebsite}>SITC main website ↗</a>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <small>
        © {new Date().getFullYear()} SITC Campus. All rights reserved.
      </small>
    </footer>
  );
}

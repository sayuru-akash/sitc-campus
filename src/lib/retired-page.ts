// A real 410 is deliberate: these removed pages have no equivalent destination.
// Do not replace this with a redirect to the homepage or block it in robots.txt.
export function retiredPageResponse(
  page: 'Academic staff' | 'Events' | 'Uncategorized archive',
) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><meta name="theme-color" content="#0b3554"><title>${page} page retired | SITC Campus</title><style>
@font-face{font-family:CampusSans;src:url('/fonts/dm-sans.woff2') format('woff2');font-weight:400 700;font-display:swap}@font-face{font-family:CampusSerif;src:url('/fonts/playfair-display.woff2') format('woff2');font-weight:500 600;font-display:swap}*{box-sizing:border-box}body{margin:0;background:#ffffff;color:#17202a;font:15px/1.7 CampusSans,Arial,sans-serif}header{padding:30px 7%;border-top:8px solid #0b3554;border-bottom:1px solid #d5dee7}header img{width:min(360px,85vw);height:auto;display:block}main{max-width:1020px;margin:0 auto;padding:100px 7% 120px}p{max-width:550px;color:#566370}h1{font:500 clamp(40px,6vw,72px)/1.15 CampusSerif,Georgia,serif;letter-spacing:-1px;color:#0b3554;margin:0 0 26px}nav{display:flex;flex-wrap:wrap;gap:16px;margin-top:35px}a{color:inherit;text-decoration:none;outline-offset:5px}nav a{border:1px solid #0b3554;padding:12px 22px;color:#0b3554}nav a:first-child{background:#a6193d;border-color:#a6193d;color:#fff}nav a:hover{background:#e9f0f6;color:#0b3554}footer{border-top:1px solid #d5dee7;padding:24px 7%;font-size:12px}small{display:block;margin-bottom:18px;color:#566370;letter-spacing:2px}
</style></head><body><header><a href="/" aria-label="SITC Campus home"><img src="/images/sitc-wordmark.png" width="1697" height="271" alt="SITC Campus"></a></header><main><small>410 / PAGE RETIRED</small><h1>This page has<br>been retired.</h1><p>The ${page.toLowerCase()} page is no longer available. You can explore our current programmes, learn about SITC or contact the campus directly.</p><nav aria-label="Continue exploring"><a href="/academic-programmes/">Explore programmes</a><a href="/about-us/">About SITC</a><a href="/contact-us/">Contact us</a></nav></main><footer>SITC Campus · Sri Lanka</footer></body></html>`;
  return new Response(html, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, follow',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

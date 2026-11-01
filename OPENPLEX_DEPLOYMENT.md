# OpenPlex website

The public site at https://oriplex.tech now introduces OpenPlex. Its HTML/CSS/JavaScript source and optimized project artwork are under `openplex-site/src/`. Build with `node openplex-site/build.mjs`; the GitHub Pages workflow uploads only `openplex-site/dist/`. No dependency installation or server runtime is required for this landing page.

Canonical source also lives in the OpenPlex app repository under `website/`: https://github.com/himanshuchawla0807-gif/OpenPlex. Keep the publishing copy in this repository synchronized when changing that source. The older Oriplex Next.js project remains in this repository and Git history, but is no longer the active Pages build. The older DEPLOYMENT.md applies to that archived build.

Name.com DNS and the GitHub Pages custom domain remain unchanged. HTTPS is enforced by Pages. Existing application subdomains, MX, SPF, and verification records are retained. Source includes `CNAME` and `.nojekyll`. GitHub Pages does not apply Cloudflare-style `_headers` files; security headers beyond its defaults are not claimed.

Rollback: restore the previous Pages workflow from commit `60ffe39` and redeploy. No DNS migration is necessary.

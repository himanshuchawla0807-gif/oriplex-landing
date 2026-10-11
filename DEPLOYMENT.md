# Oriplex landing page deployment

Public website: https://oriplex.tech

Use Node.js 22. Run `npm ci`, then `npm run dev` (port 3002).
`npm run build` exports the website into `out/` with directory-based routes.
Push changes to `main` to build and deploy automatically through GitHub Actions.
The repository Pages setting uses GitHub Actions and the custom domain `oriplex.tech`.

Name.com hosts DNS. The apex has four GitHub Pages A records:
185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
The four AAAA records are 2606:50c0:8000::153 through 2606:50c0:8003::153.
`www` is a CNAME to `himanshuchawla0807-gif.github.io`.
Retain existing application subdomains, MX records, SPF, and verification TXT records.

Contact and privacy links use `himanshu@oriplex.tech`. The contact form opens
an email draft; the visitor sends it from their email app. The demo booking URL is unchanged.
The original browser-local contact prototype does not collect messages centrally.
The video `public/assets/demo-web.mp4` is a compressed web copy of the local original.
Design drafts and unused media are excluded from Git to keep deployments small.

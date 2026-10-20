# Search & Local SEO Checklist & TODOs: 24 Hr FloodMasters

This document tracks verified facts, missing business data that must be acquired, manual platform setups, and production launch tasks for **24 Hr FloodMasters LLC**.

---

## 1. Missing Facts & Business Data Needed

To maintain strict NAP (Name, Address, Phone) consistency and unlock high-converting local map pack rankings, the following verified business data must be collected from the business owner (**Rene Molina**). **Do not invent any of these values.**

- [ ] **Physical Street Address:**
  - *Current Status:* Hub locations are designated as "Temple, TX" and "Pflugerville, TX" with dispatch coverage across Bell, McLennan, Coryell, Milam, and Williamson Counties.
  - *Needed:* Exact street address, suite/building number, and zip code (or confirmation of a Service Area Business (SAB) profile where the physical address is hidden on Google Maps).
  - *Action once known:* Update `companyData.address` in [src/data/companyData.js](file:///d:/24hr-Flood-Masters/src/data/companyData.js), which will automatically update footer NAP and LocalBusiness Schema (`PostalAddress`).
- [ ] **Official State / Municipal Contractor License Numbers:**
  - *Current Status:* Omitted to prevent compliance violations or inaccurate representation.
  - *Needed:* Texas state licensing credentials, IICRC certified firm numbers, or general contractor registration IDs.
- [ ] **Official Social Media & Profile URLs:**
  - *Current Status:* `sameAs` array in Schema.org is empty as no social links exist in the project repository.
  - *Needed:* Verified URLs for Facebook Business Page, LinkedIn Company Page, Instagram, YouTube, X (Twitter), and Better Business Bureau (BBB) listing.
  - *Action once known:* Add URLs to `companyData.socialProfiles` in [src/data/companyData.js](file:///d:/24hr-Flood-Masters/src/data/companyData.js).
- [ ] **Customer Reviews & First-Party Testimonials:**
  - *Current Status:* No reviews or aggregate ratings are embedded in Schema.org (strict compliance against review fraud).
  - *Needed:* Real verified Google / Facebook / BBB reviews from actual Central Texas water loss mitigation clients.

---

## 2. Manual SEO & Webmaster Setup Checklist

Complete these manual steps after deploying to production:

### A. Google Business Profile (GBP)
1. Claim or create the official **Google Business Profile** under name `24 Hr FloodMasters`.
2. Primary category: **Water Damage Restoration Service**. Secondary categories: **Fire Damage Restoration Service**, **Mold Remediation Service**.
3. Service area: Select the 15 verified Central Texas cities:
   - *Bell County:* Temple, Belton, Killeen, Harker Heights, Salado, Nolanville, Troy
   - *McLennan County:* Waco, Hewitt, Woodway
   - *Coryell County:* Copperas Cove, Gatesville
   - *Milam County:* Cameron
   - *Williamson County:* Georgetown, Round Rock
4. Hours: **Open 24 Hours / 7 Days a week**.
5. Phone: `(254) 482-1151`.
6. Website link: Set to production domain (`https://24hr-floodmasters.getmoreappts.com` or custom domain).

### B. Google Search Console (GSC) & Sitemap Submission
1. Add property via Domain Verification (DNS TXT record on Cloudflare).
2. Submit XML sitemap URL: `https://[YOUR_DOMAIN]/sitemap.xml`.
3. Verify that all 37 static URLs are crawled and indexed without errors.
4. Confirm no duplicate canonical warnings.

### C. Bing Webmaster Tools
1. Import verification directly from Google Search Console.
2. Submit sitemap: `https://[YOUR_DOMAIN]/sitemap.xml`.
3. Enable IndexNow for instant indexing of new blog articles and service updates.

### D. Local Citations & Directory Distribution
Ensure exact NAP match (`24 Hr FloodMasters`, `(254) 482-1151`, `floodmasters@myyahoo.com`) across:
- Apple Maps Connect / Apple Business Connect
- Yelp for Business
- YellowPages / Superpages
- Angi (formerly Angie's List) / HomeAdvisor
- Better Business Bureau (BBB Central Texas)
- Local Chambers of Commerce (Temple Chamber of Commerce, Belton Area Chamber, Greater Waco Chamber)

---

## 3. Production Launch Actions & Environment Variables

When migrating this site from the staging URL to the client's final domain:

1. **Update Domain Variable**:
   In Cloudflare Pages dashboard (or `.env.production`):
   ```bash
   VITE_SITE_URL="https://www.24hrfloodmasters.com" # (Replace with client's actual production domain)
   ```
2. **Indexing Control**:
   Keep `VITE_NOINDEX="false"` (or unset) for normal search engine indexing. If staging access needs to be hidden from search engines before launch, set:
   ```bash
   VITE_NOINDEX="true"
   ```
3. **Re-run Production Build**:
   ```bash
   npm run build
   ```
   The prerender script (`scripts/prerender.js`) will automatically regenerate:
   - All static HTML canonical links with the new base URL.
   - All Open Graph (`og:url`, `og:image`) tags.
   - All Twitter card image tags.
   - All JSON-LD Schema `@id`, `url`, and `logo` links.
   - `dist/sitemap.xml` with all 37 route `<loc>` entries pointing to the new domain.
   - `dist/robots.txt` pointing to `Sitemap: https://www.24hrfloodmasters.com/sitemap.xml`.

---

## 4. Technical Architecture & Cloudflare Pages Configuration

- **Static Prerendering**: Vite + React 19 + `react-dom/server` + custom SSG build script (`scripts/prerender.js`). Generates real crawlable HTML files for every route in `dist/`.
- **404 Routing**: Real static 404 page generated at `dist/404.html` with `<meta name="robots" content="noindex, nofollow">`. Unknown URLs return 404 naturally on Cloudflare Pages without a blanket SPA rewrite.
- **Cache Headers (`public/_headers`)**:
  - `/assets/*`: `Cache-Control: public, max-age=31536000, immutable`
  - Global security headers: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`
- **Node Environment**: `.nvmrc` configured to Node `22`; `package.json` engines configured to `>=20`.

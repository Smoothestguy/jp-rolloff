# Phase 2 — SEO Layer & Programmatic City Pages

Foundation is in place. Phase 2 layers in:

## 1. Programmatic city pages (`/locations/[city]`)
Each city page should follow the same template:
- Hero with `Dumpster Rental in {City}, {State}` H1
- Unique 2–3 paragraph intro mentioning landmarks, ZIPs served, response time
- Embedded size grid (reused from `/services`)
- Local trust strip (years serving this city, number of loads)
- Local testimonial(s) if available
- City-specific FAQ (permit info for this jurisdiction is great)
- Schema.org `LocalBusiness` with `areaServed` for that city only
- Internal links to neighboring city pages

### Target city pages (Tier 1 — high search volume)
- `/locations/beltsville`
- `/locations/greenbelt`
- `/locations/college-park`
- `/locations/laurel`
- `/locations/hyattsville`
- `/locations/bowie`
- `/locations/silver-spring`

### Tier 2 (medium volume)
- `/locations/takoma-park`
- `/locations/riverdale-park`
- `/locations/landover`
- `/locations/upper-marlboro`
- `/locations/lanham`
- `/locations/bladensburg`
- `/locations/cheverly`
- `/locations/rockville`

## 2. Size-specific service pages (`/services/[size]-yard-dumpster`)
- `/services/10-yard-dumpster`
- `/services/15-yard-dumpster`
- `/services/20-yard-dumpster`
- `/services/25-yard-dumpster`
- `/services/30-yard-dumpster`

Each should include:
- Hero with `{Size} Yard Dumpster Rental in the DMV` H1
- Specs table (dimensions, weight allowance, holds)
- "Best for" project list with photos
- Pricing snippet for this size
- Schema.org `Service` markup
- Cross-links to city pages

## 3. Use-case / vertical pages
Optional but valuable for ad landing pages:
- `/services/construction-dumpster`
- `/services/roofing-dumpster`
- `/services/residential-cleanout`
- `/services/concrete-disposal`
- `/services/commercial-dumpster`

## 4. Bilingual (ES) parity
- Either `/es/` route mirror, or per-page `?lang=es`
- Adopt `hreflang` tags
- Native ES rewrites (not direct translation) for the top 10 pages

## 5. Technical SEO checklist
- [ ] Replace `https://jprolloff.com` placeholder canonical URLs once the domain is live
- [ ] Add `og:image` per page (1200×630, branded)
- [ ] Add `BreadcrumbList` JSON-LD to inner pages
- [ ] Add `Review` / `AggregateRating` schema once Google review feed is wired
- [ ] Generate `sitemap.xml` automatically from filesystem on each deploy
- [ ] Add Plausible / GA4 with conversion events on phone clicks + quote form submit
- [ ] Configure Google Business Profile to point at this site

## 6. Backend wiring
- Quote form currently uses `mailto:` fallback. Swap for a real handler (Vercel Function or Formspree) and wire SMS notifications to dispatch.

## Repo structure for Phase 2
```
locations/
├── beltsville.html
├── greenbelt.html
├── college-park.html
├── laurel.html
├── hyattsville.html
└── ...

services/
├── 10-yard-dumpster.html
├── 15-yard-dumpster.html
├── 20-yard-dumpster.html
├── 25-yard-dumpster.html
└── 30-yard-dumpster.html
```

Each file follows the existing nav/footer pattern from `index.html`.

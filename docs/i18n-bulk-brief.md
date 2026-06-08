# Bulk pass brief — content cleanup + bilingual (template pages)

You are updating ONE Eleventy/Nunjucks page. Do BOTH jobs in one pass:

## Job 1 — Content cleanup (align with the owner's June 2026 decisions)
1. **Phone.** Replace every occurrence of the OLD number with the NEW primary number:
   - `(301) 252-3586` → `(301) 879-7040`
   - `+13012523586` → `+13018797040`
   - `+1-301-252-3586` → `+1-301-879-7040`
   Apply in JSON-LD `"telephone"`, `tel:` hrefs, and visible CTA phone text.
2. **Delivery messaging.** The owner is NEXT-DAY first. Change "same-day delivery / Same-Day Delivery / same-day"
   claims to next-day. Pattern: "Next-day delivery (same-day may be available depending on location and schedule)."
   In `<title>`/meta, "Same-Day Delivery" → "Next-Day Delivery". Soften absolute promises like
   "we'll be there before dinner" / "before dinner" / "same afternoon" to next-day language.
   Keep it truthful — never promise same-day as the default.
3. **Sizes.** "Five sizes" → "Six sizes"; "10–30" / "10 to 30" → "10–40" / "10 to 40". The size loop already
   includes the 40-yard; just fix prose counts/ranges.
4. **Pricing.** The owner removed published/headline pricing. Remove visible "starts at $NNN" / "From $NNN" /
   "$550–$665"-style headline prices from prose, meta, and FAQ answers — replace with quote-based language
   ("priced to your material — call or request a free quote"). KEEP conditional fine-print fees where they
   appear: `$5/day` extra days, `$105/ton` excess weight, `$250` trip charge, `$75` mattress/tire surcharge.
   In JSON-LD, REMOVE any `"offers"` block that publishes a `price`/`priceSpecification`; leave `"priceRange": "$$"`.
5. **"25 years".** If the page says "20+ years" / "two decades" / "since 2000 … 20 years", prefer
   "more than 25 years" / "25+ years" (the site standard). Keep "since 2000".

## Job 2 — Bilingual (EN/ES)
After the content cleanup, make every user-visible text node bilingual:
- Add matching `data-en="<English>"` and `data-es="<Spanish>"` on the element that directly contains the text.
  Leave the visible English text inside the element unchanged (English is the default).
- If the value contains HTML markup (nested `<a>`, `<strong>`, `<br>`…), ALSO add `data-html` and put full HTML
  in both attributes. If the text is plain, do NOT add data-html.
- Preserve all Nunjucks expressions verbatim inside both values (e.g. `{{ s.yd }}`, `{{ city.name }}`,
  `{{ site.phone.display }}`). They must appear identically in data-en and data-es.
- DO NOT translate proper nouns: city/neighborhood names, "JP Roll-Off Service", "DMV", county names,
  street/place names, phone numbers, ZIPs, "Se Habla Español", unit "yd". Keep dollar figures identical.
- Use the glossary at `docs/i18n-glossary.md` for terminology. Warm "tú" voice. Mirror the ES style already
  in `src/index.njk` and `src/services.njk`.
- Anchor links that are bare city/place names (e.g. `<a href="/locations/greenbelt">Greenbelt</a>`) are proper
  nouns — leave them with no data attributes.
- JSON-LD `<script>` blocks are NOT user-visible — do the Job-1 phone/price fixes there but do NOT add data-en/es.

## Rules
- Do not change layout, classes, structure, or `{{ }}` logic.
- Do not run a build. Edit the file in place (Read it first).
- Report: counts of phone/price/same-day fixes, number of elements made bilingual, and anything you were unsure about.

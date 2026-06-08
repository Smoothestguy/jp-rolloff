# Neighborhood article brief — content cleanup (EN) + Spanish translation

You are given ONE neighborhood SEO article: `content/neighborhoods/<name>.md` (body-only markdown,
no frontmatter). The `<name>` is `<neighborhood-slug>-<yd>` (e.g. `amber-meadows-20` = 20-yard).

Do TWO things:

## Job 1 — Clean up the ENGLISH body, editing the .md in place
1. **Phone.** `(301) 252-3586` → `(301) 879-7040` (every occurrence).
2. **Published prices.** REMOVE headline/starting dollar prices like "starts at $620", "$595", "from $550".
   Rewrite to quote-based: e.g. "…includes delivery, pickup on request, and a 14-day rental with a
   2-ton (4,000 lb) weight allowance — priced by material, so call for a quote." KEEP factual specs and
   conditional fees: the weight allowance (tons/lb), the 14-day rental, `$5 a day` extra days, `$105 per ton`
   excess weight. Only the up-front "starts at $NNN" SIZE price is removed.
3. **Same-day → next-day.** The owner is next-day-first. Change "same-day run / same afternoon / before dinner /
   today" delivery promises to next-day framing, e.g. "Most addresses here are scheduled within 24 hours, and an
   early call may still make a same-day run." Keep it truthful — next-day is the default, same-day is "may".
4. **Dimensions & loads.** Correct any per-size dimension/load figures to match the AUTHORITATIVE table below,
   rewriting surrounding narrative as needed (e.g. if the text leans on "five feet of wall height" but the real
   height is 4 ft, revise that sentence). Match the size of THIS article (the `<yd>` in the filename).

   | Size | Dimensions | ~Pickup loads | Weight allowance |
   |---|---|---|---|
   | 10-yard | 12 ft × 8 ft × 4 ft | ~3 | 1 ton (2,000 lb) |
   | 15-yard | 16 ft × 8 ft × 4 ft | ~7 | 1.5 ton (3,000 lb) |
   | 20-yard | 22 ft × 8 ft × 4 ft | ~9 | 2 ton (4,000 lb) |
   | 25-yard | 18 ft × 8 ft × 6 ft | ~10.5 | 2 ton (4,000 lb) |
   | 30-yard | 22 ft × 8 ft × 6 ft | ~14 | 3 ton (6,000 lb) |
   | 40-yard | 22 ft × 8 ft × 8 ft | ~17 | 4 ton (8,000 lb) |

5. **Do NOT change** factual local detail: street names, ZIPs, neighborhood history, drive-time/route facts,
   HOA notes, transfer-station references. Preserve the article's structure (same `##` sections).

## Job 2 — Create the Spanish translation
Write `content/neighborhoods/<name>.es.md` — a faithful Spanish translation of the CLEANED English body.
- Preserve markdown structure exactly: same `##` headings (translated), same lists, `**bold**`, links (URLs unchanged).
- Do NOT translate proper nouns: neighborhood/city/street/park names, ZIPs, county names, "JP Roll-Off Service".
- Keep the phone `(301) 879-7040`, all numbers, dimensions, and dollar fees identical.
- Use `docs/i18n-glossary.md` terminology, warm "tú" voice, natural Spanish (not word-for-word).

## Output
Edit the EN `.md` in place and create the `.es.md`. Do not run a build. Report: EN fixes made
(phone/price/same-day/dimension), and EN vs ES word counts.

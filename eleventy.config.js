export default function (eleventyConfig) {
  // Copy static assets straight through to the build output.
  // Object form: { "<source relative to project root>": "<dest relative to _site>" }
  // Assets live at the repo root (not in src/), so we map them explicitly.
  eleventyConfig.addPassthroughCopy({ "css": "css" });
  eleventyConfig.addPassthroughCopy({ "js": "js" });
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "icons": "icons" });
  eleventyConfig.addPassthroughCopy({ "favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  // sitemap.xml is now GENERATED from src/sitemap.njk — do not passthrough a static copy.

  // Format an integer with comma thousands separators (e.g. 2000 -> "2,000").
  eleventyConfig.addFilter("thousands", (n) =>
    Number(n).toLocaleString("en-US")
  );

  // ISO date for <lastmod> in the sitemap.
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  // Drop a trailing slash so sitemap <loc> matches the page's canonical
  // (canonicals on this site are written without a trailing slash). Root "/" stays.
  eleventyConfig.addFilter("trimSlash", (url) =>
    url.length > 1 ? url.replace(/\/$/, "") : url
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Process .njk and .html templates through Nunjucks; pass .md through too.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}

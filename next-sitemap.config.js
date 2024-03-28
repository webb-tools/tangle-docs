/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://docs.tangle.tools",
  generateRobotsTxt: true,
  exclude: ["/404", "/500", "/api/*"],
  outDir: "public",
  generateIndexSitemap: true,
};

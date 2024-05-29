/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`, // <==== Add here
      `${process.env.SITE_URL}/sitemap.xml`
    ],
  },
  // ...other options
}
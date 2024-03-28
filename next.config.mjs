import nextra from "nextra";
import { withPlausibleProxy } from "next-plausible";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
  },
  trailingSlash: true,
  rewrites() {
    return {
      // beforeFiles: [
      //   {
      //     source: "/sitemap.xml",
      //     destination:
      //     //TODO: SUBMIT SITE MAP
      //       "",
      //   },
      // ],
    };
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  staticImage: true,
  flexsearch: true,
  latex: true, // Ensure this is enabled to use Nextra's native LaTeX support
});

export default withPlausibleProxy()(withNextra(nextConfig));

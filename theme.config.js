import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";
import { Discord, Github, Twitter } from "./components/Social";

const SITE_ROOT = "https://docs.tangle.tools";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  docsRepositoryBase: "https://github.com/webb-tools/tangle-docs/tree/main",
  useNextSeoProps: function SEO() {
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle;

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – Tangle Network`,
    };
  },
  toc: {
    float: true,
  },
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    const router = useRouter();
    const { systemTheme = "dark" } = useTheme();
    const fullUrl =
      router.asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${router.asPath}`;

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/images/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon/favicon-16x16.png`}
        />
        <link
          rel="mask-icon"
          href={`/images/favicon/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link rel="shortcut icon" href={`/images/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#1F1D2B" />
        <meta name="twitter:card" content="summary_medium_image" />
        <meta name="twitter:site" content="@tangle_network" />
        <meta name="twitter:creator" content="@webbprotocol" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta
          property="twitter:image"
          content="https://assets-global.website-files.com/6494562b44a28080aafcbad4/6494599436915879aa403230_Tangle%20Logo.png"
        />
        <meta
          property="og:image"
          content="https://assets-global.website-files.com/6494562b44a28080aafcbad4/6494599436915879aa403230_Tangle%20Logo.png"
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Tangle Network" />
        <link rel="prefetch" href="/" as="document" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  navbar: {
    component: Navigation,
    extraContent: (
      <>
        <Github />
        <Discord />
        <Twitter />
      </>
    ),
  },
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: "light",
  },
  // Remove React warning in console https://github.com/shuding/nextra/issues/1213#issuecomment-1493038320
  search: {
    loading: "Loading...",
  },
};
export default theme;

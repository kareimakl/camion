import { Head, Html, Main, NextScript } from "next/document";

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)
  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

export default function Document() {
  return (
    <Html lang="en" className="h-full antialiased">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />

        {/* Favicon & Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Primary Meta Tajs */}
        <title>Taj House – Software Solutions & Web Development Company</title>
        <meta
          name="description"
          content="Taj House is a leading software company offering innovative web development, e-commerce solutions, and digital transformation services across Egypt and the Arab world."
        />
        <meta
          name="keywords"
          content="Taj House, Software Company Egypt, Web Development, E-commerce Design, UI/UX Design, SEO Services, Digital Transformation, React, Next.js, Node.js"
        />
        <meta name="author" content="Taj House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tajhouse.com/" />
        <meta
          property="og:title"
          content="Taj House – Software & Web Development Experts"
        />
        <meta
          property="og:description"
          content="Empowering businesses with cutting-edge software and digital solutions. Based in Egypt, serving the Arab world and beyond."
        />
        <meta
          property="og:image"
          content="https://tajhouse.com/assets/icons/apple-icon.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tajhouse.com/" />
        <meta
          name="twitter:title"
          content="Taj House – Software & Web Development Experts"
        />
        <meta
          name="twitter:description"
          content="Empowering businesses with cutting-edge software and digital solutions."
        />
        <meta
          name="twitter:image"
          content="https://tajhouse.com/assets/icons/apple-icon.png"
        />

        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Taj House",
              url: "https://tajhouse.com",
              logo: "https://tajhouse.com/",
              description:
                "Software development, web solutions, and digital transformation services.",
              sameAs: [
                "https://www.facebook.com/tajhouse",
                "https://www.linkedin.com/company/tajhouse",
                "https://x.com/tajhouse",
                "https://www.insTajram.com/tajhouse",
                "https://github.com/tajhouse",
                "https://www.tiktok.com/@tajhouse",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-1000447398",
                contactType: "Customer Service",
                areaServed: "EG",
                availableLanguage: ["Arabic", "English"],
              },
            }),
          }}
        />

        {/* RSS (Optional) */}
        {/* <link rel="alternate" type="application/rss+xml" href="/rss.xml" /> */}
      </Head>
      <body className="flex h-full flex-col bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

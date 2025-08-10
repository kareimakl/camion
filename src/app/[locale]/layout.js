import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CartProvider } from "@/componentsedit/context/CartContext";
import "../globals.css";
import { Saira, Almarai } from "next/font/google";
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
});

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["300", "400", "700"],
});
export const metadata = {
  title: "Camion – Software Solutions & Web Development Company",

  description:
    "Camion is a software solutions and web development company delivering modern, scalable digital products using React, Next.js, and Node.js.",
  keywords:
    "Camion, Software Solutions, Web Development, React Developer, Next.js Developer, Node.js Developer, Egypt, Full Stack Developer",
  authors: [{ name: "Camion", url: "https://tajhouse.com" }],
  creator: "Camion",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Camion – Software Solutions & Web Development Company",
    description:
      "Camion builds fast and scalable digital solutions using modern technologies like React and Node.js.",
    url: "https://tajhouse.com",
    siteName: "Camion",
    images: [
      {
        url: "https://tajhouse.com/assets/icons/apple-icon.png",
        width: 1200,
        height: 630,
        alt: "Camion Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    handle: "@tajhouse",
    site: "@tajhouse",
    cardType: "summary_large_image",
  },
  openGraph: {
    title: "Camion – Software Solutions & Web Development Company",
    description:
      "Custom software solutions and modern web development by Camion.",
    images: [
      {
        url: "https://tajhouse.com/assets/icons/apple-icon.png",
        width: 1200,
        height: 628,
        alt: "Camion Logo",
      },
    ],
  },
};

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      className={locale === "ar" ? almarai.className : saira.className}
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
    >
      <body className="antialiased">
        <NextIntlClientProvider>
          <CartProvider>{children}</CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

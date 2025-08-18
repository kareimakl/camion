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
  title: "Camion Store – High-Quality Products at Great Prices",
  description:
    "Camion Store is your trusted online destination for high-quality products. Enjoy curated offerings, unbeatable deals, and effortless shopping tailored to your daily needs.",
  keywords:
    "Camion Store, online shopping, high-quality products, best prices, deals, e-commerce",

  authors: [{ name: "Camion Store", url: "https://camion-app.com/en" }],
  creator: "Camion Store",
  viewport: "width=device-width, initial-scale=1",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Camion Store – High-Quality Products at Great Prices",
    description:
      "Shop with confidence at Camion Store—browse high-quality products, enjoy competitive prices, and experience seamless online shopping.",
    url: "https://camion-app.com/en",
    siteName: "Camion Store",
    images: [
      {
        url: "https://camion-app.com/assets/icons/apple-icon.png",
        width: 1200,
        height: 630,
        alt: "Camion Store Open Graph Image",
      },
    ],
    type: "website",
  },

  twitter: {
    handle: "@camionstore",
    site: "@camionstore",
    cardType: "summary_large_image",
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

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

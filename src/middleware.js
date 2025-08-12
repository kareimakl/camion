import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const localeMatch = pathname.match(/^\/(ar|en)/);
  const locale = localeMatch ? localeMatch[1] : "en";

  const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "");

  const publicPaths = [
    "/auth/login",
    "/auth/signup",
    "/auth/verify"
  ];

  if (publicPaths.some((path) => pathWithoutLocale.startsWith(path))) {
    if (token) {
      return NextResponse.redirect(new URL(`/${locale}/`, req.url));
    }
    return intlMiddleware(req);
  }

  if (!token) {
    return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};

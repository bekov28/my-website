import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the last locale for these paths
    "/(ko|en)/:path*",

    // Enable localized routing for all other paths except internals and static files
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

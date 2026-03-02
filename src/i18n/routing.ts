import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ko"],
  defaultLocale: "en",
  // Forces the locale to always be in the URL (e.g., /en/contact)
  // This prevents ambiguity that causes the double-prefixing loop.
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

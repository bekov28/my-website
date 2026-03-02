"use client";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale() || "en"; // Default to 'en' if locale is undefined
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ko" : "en";
    router.replace("/", { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 
            transition-colors cursor-pointer"
    >
      {locale === "en" ? "🇰🇷 한국어" : "🇺🇸 English"}
    </button>
  );
}

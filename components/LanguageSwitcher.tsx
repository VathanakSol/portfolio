"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {

    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded transition-colors ${
          locale === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("km")}
        className={`px-3 py-1 rounded transition-colors ${
          locale === "km"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        aria-label="Switch to Khmer"
      >
        ខ្មែរ
      </button>
    </div>
  );
}

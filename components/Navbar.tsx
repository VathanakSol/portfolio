"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";

export default function Navbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    router.refresh();
    setIsLanguageOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Show the flag of the CURRENT language
  const currentFlagSrc =
    locale === "km"
      ? "https://api.iconify.design/emojione:flag-for-cambodia.svg"
      : "https://api.iconify.design/emojione:flag-for-united-states.svg";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">PORTFOLIO</h1>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              {t("projects")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              {t("contact")}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              aria-label="Toggle language menu"
            >
              <Image
                src={currentFlagSrc}
                width={24}
                height={24}
                alt="Current language"
              />
              <svg
                className={`w-4 h-4 transition-transform text-white ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-blue-200 overflow-hidden">
                <button
                  onClick={() => switchLanguage("en")}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
                    locale === "en" ? "bg-blue-100" : ""
                  }`}
                >
                  <Image
                    src="https://api.iconify.design/emojione:flag-for-united-states.svg"
                    width={20}
                    height={20}
                    alt="United State flag"
                  ></Image>
                  <span className="text-sm font-medium text-gray-700">
                    English
                  </span>
                  {locale === "en" && (
                    <svg
                      className="w-4 h-4 ml-auto text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => switchLanguage("km")}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
                    locale === "km" ? "bg-blue-100" : ""
                  }`}
                >
                  <Image
                    src="https://api.iconify.design/emojione:flag-for-cambodia.svg"
                    width={20}
                    height={20}
                    alt="Cambodia flag"
                  ></Image>
                  <span className="text-sm font-medium text-gray-700">
                    ភាសាខ្មែរ
                  </span>
                  {locale === "km" && (
                    <svg
                      className="w-4 h-4 ml-auto text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </nav>
  );
}

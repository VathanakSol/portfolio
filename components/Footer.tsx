"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";

interface FooterProps {
  currentLocale: string;
}

export default function Footer({ currentLocale }: FooterProps) {
  const t = useTranslations("footer");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className={`bg-white border-t border-1 border-gray-200 dark:bg-blue-900 text-blue-900 dark:text-blue-100 pt-16 pb-8 px-4  ${
        currentLocale === "km" ? "font-kh" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo/Brand Section */}
          <div className="flex flex-col items-start">
            <Image
              src="https://utfs.io/a/30qinxb2cu/v2QQauFkR64MDprmx9CtyBzxYiFEdOhLMo4rQ7SIfbXkANw5"
              alt={t("brand")}
              width={96}
              height={96}
              className="rounded-full border-2 border-blue-600 dark:border-blue-400 mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              {t("brand")}
            </h3>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-600 dark:border-blue-400 pb-2 inline-block text-blue-800 dark:text-blue-200">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li className="pb-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-left"
                >
                  {t("home")}
                </button>
              </li>

              <li className="pb-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-left"
                >
                  {t("projects")}
                </button>
              </li>
              <li className="pb-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-left"
                >
                  {t("contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Social/Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-600 dark:border-blue-400 pb-2 inline-block text-blue-800 dark:text-blue-200">
              {t("connect")}
            </h4>
            <ul className="space-y-2">
              <li className="pb-2">
                <a
                  href="https://github.com/VathanakSol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  GitHub
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="https://www.linkedin.com/in/vathanak-sol-07b710353/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="pb-2">
                <a
                  href="https://x.com/VathanakSol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-300 dark:border-blue-600 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

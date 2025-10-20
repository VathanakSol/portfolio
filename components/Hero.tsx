"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

interface HeroProps {
  currentLocale: string;
}

export default function Hero({ currentLocale }: HeroProps) {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900 ${
        currentLocale === "km" ? "font-kh" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${currentLocale === "km" ? "md:order-1" : "md:order-1"}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black dark:text-blue-100 leading-tight">
              {t("title")}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-blue-400 dark:text-blue-200">
              {t("subtitle")}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-blue-300 mb-10 leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                {t("cta")}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 font-semibold"
              >
                {t("contact")}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${currentLocale === "km" ? "md:order-2" : "md:order-2"}`}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-300/10 rounded-3xl transform -rotate-6"></div>
              
              {/* Main image container */}
              <div className="relative z-10 w-full h-full bg-white dark:bg-gray-800 border-1 border-blue-600 dark:border-blue-400 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Placeholder for developer illustration */}
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-4 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded w-3/4 mx-auto"></div>
                    <div className="h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded w-1/2 mx-auto"></div>
                    <div className="h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -left-4 bg-blue-600 dark:bg-blue-500 border border-blue-700 dark:border-blue-400 px-4 py-2 rounded-lg shadow-lg z-20 animate-bounce">
                <span className="text-sm font-semibold text-white">React</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 dark:bg-blue-500 border border-blue-700 dark:border-blue-400 px-4 py-2 rounded-lg shadow-lg z-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-semibold text-white">Next.js</span>
              </div>
              <div className="absolute top-1/4 -right-8 bg-blue-600 dark:bg-blue-500 border border-blue-700 dark:border-blue-400 px-4 py-2 rounded-lg shadow-lg z-20 animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold text-white">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

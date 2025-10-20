"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  currentLocale: string;
}

export default function Projects({ currentLocale }: ProjectProps) {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className={`py-20 px-4 ${currentLocale === "km" ? "font-kh" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-blue-400">
          {t("title")}
        </h2>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg aspect-video overflow-hidden border border-gray-200 dark:border-gray-700 relative group">
                <Image
                  src={t("project1.image")}
                  alt={t("project1.title")}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                {t("project1.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {t("project1.description")}
              </p>
              <div className="flex flex-wrap gap-2">
                {(t.raw("project1.tech") as string[]).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <Link
                  href={t("project1.liveUrl")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
                >
                  {t("viewProject")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

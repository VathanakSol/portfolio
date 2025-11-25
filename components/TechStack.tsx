"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface TechStackProps {
  currentLocale: string;
}

export default function TechStack({ currentLocale }: TechStackProps) {
  const t = useTranslations("techStack");

  const technologies = [
    {
      name: "Next.js",
      icon: "https://api.iconify.design/devicon:nextjs.svg",
      target: "https://nextjs.org/",
    },
    {
      name: "Tailwind",
      icon: "https://api.iconify.design/devicon:tailwindcss.svg",
      target: "https://tailwindcss.com/",
    },
    {
      name: "FastAPI",
      icon: "https://api.iconify.design/devicon:fastapi.svg",
      target: "https://fastapi.tiangolo.com/",
    },
    {
      name: "Docker",
      icon: "https://api.iconify.design/skill-icons:docker.svg",
      target: "https://www.docker.com/",
    },
    {
      name: "Postgres",
      icon: "https://api.iconify.design/devicon:postgresql.svg",
      target: "https://www.postgresql.org/"
    },
    {
      name: "NeonDB",
      icon: "https://api.iconify.design/logos:neon-icon.svg",
      target: "https://neon.tech/"
    }
  ];

  return (
    <section
      id="tech-stack"
      className={` flex items-center justify-center px-4 pb-8 ${currentLocale === "km" ? "font-kh" : ""
        }`}
    >
      <div className="max-w-4xl w-full">
        {/* Title with underline */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h2>
        </div>

        {/* Tech circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-1 border-gray-200 dark:border-gray-600 flex items-center justify-center transition-all duration-300 hover:border-black dark:hover:border-white hover:scale-105">
                <Link
                  href={tech.target}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 md:w-20 md:h-20"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>
              <span className="text-lg font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

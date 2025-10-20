"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface ContactProps {
  currentLocale: string;
}

export default function Contact({ currentLocale }: ContactProps) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meorvgoa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 bg-white dark:bg-blue-900 ${
        currentLocale === "km" ? "font-kh" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black dark:text-blue-100">
          {t("title")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-blue-300 mb-12 text-center max-w-2xl mx-auto">
          {t("description")}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t("namePlaceholder")}
                  required
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 border-b-2 border-blue-600 dark:border-blue-400 bg-transparent focus:border-blue-800 dark:focus:border-blue-200 outline-none transition-colors disabled:opacity-50 text-blue-900 dark:text-blue-100 placeholder-blue-500 dark:placeholder-blue-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 border-b-2 border-blue-600 dark:border-blue-400 bg-transparent focus:border-blue-800 dark:focus:border-blue-200 outline-none transition-colors disabled:opacity-50 text-blue-900 dark:text-blue-100 placeholder-blue-500 dark:placeholder-blue-400"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  required
                  rows={4}
                  disabled={status === "submitting"}
                  className="w-full px-4 py-3 border-b-2 border-blue-600 dark:border-blue-400 bg-transparent focus:border-blue-800 dark:focus:border-blue-200 outline-none transition-colors resize-none disabled:opacity-50 text-blue-900 dark:text-blue-100 placeholder-blue-500 dark:placeholder-blue-400"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? t("sending") : t("sendButton")}
              </button>

              {status === "success" && (
                <p className="text-blue-900 dark:text-blue-100 font-medium">
                  {t("successMessage")}
                </p>
              )}

              {status === "error" && (
                <p className="text-blue-900 dark:text-blue-100 font-medium">
                  {t("errorMessage")}
                </p>
              )}
            </form>
          </div>

          {/* Image/Icon Section */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-2xl">
              <div className="text-white dark:text-white text-center">
                <div className="text-6xl mb-4">✉️</div>
                <p className="text-xl font-semibold">{t("getInTouch")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

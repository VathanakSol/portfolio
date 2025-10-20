import type { Metadata } from "next";
import { Jersey_15, Kantumruy_Pro } from "next/font/google";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "@/components/Navbar";

const jersey_15 = Jersey_15({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey-15",
  display: "swap",
});

const kantumruyPro = Kantumruy_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["khmer"],
  variable: "--font-kh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio 2.0",
  description: "Personal Website",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${jersey_15.variable} ${kantumruyPro.variable}`}
    >
      <body
        className={`antialiased ${
          locale === "km" ? "font-kh" : "font-jersey-15"
        }`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="pt-16">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

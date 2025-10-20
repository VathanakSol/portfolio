import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <Hero currentLocale={locale} />
      <TechStack currentLocale={locale} />
      <Projects currentLocale={locale} />
      <Contact currentLocale={locale} />
      <Footer currentLocale={locale}/>
    </main>
  );
}

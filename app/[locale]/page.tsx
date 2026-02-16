import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import TokenomicsSection from "../components/TokenomicsSection";
import PassportSection from "../components/PassportSection";
import GovernanceSection from "../components/GovernanceSection";
import RoadmapSection from "../components/RoadmapSection";
import FAQSection from "../components/FAQSection";
import ContractsSection from "../components/ContractsSection";
import Header from "../components/Header";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return ( 
    <> 
      <Header dict={dict.nav} locale={locale} /> 
      <main>
        <div className="hero-bg" />
        <HeroSection dict={dict.hero} />
        <AboutSection dict={dict.about} />
        <ProductsSection dict={dict.products} />
        <TokenomicsSection dict={dict.tokenomics} />
        <PassportSection dict={dict.passport} />
        <GovernanceSection dict={dict.governance} />
        <RoadmapSection dict={dict.roadmap} />
        <FAQSection dict={dict.faq} />
        <ContractsSection dict={dict.contracts} />
      </main> 
    </> 
  );
}

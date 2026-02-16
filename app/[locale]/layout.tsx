import type { Metadata } from "next";
import "../globals.css";
import ScrollBehavior from "../components/ScrollBehavior";
import AOSInit from "../components/AOSInit"; 
import Footer from "../components/Footer";
import { i18n, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: {
      icon: {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 293 344'><path d='M48.3794 0H96.8927L124.986 281.507L131.866 287.24L240.366 4.11155H287.306L144.201 344H86.1829L48.3794 0Z' fill='%23AA9245'/><path d='M15.2109 145.076L292.4 87.1466L277.517 121.547L0 178.88L15.2109 145.076Z' fill='%23AA9245'/><path d='M15.2109 213.876L292.4 155.947L277.517 190.347L0 247.68L15.2109 213.876Z' fill='%23AA9245'/></svg>",
        type: "image/svg+xml",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = '${locale}';`,
        }}
      />
      <ScrollBehavior />
      <AOSInit />
        
        {children}  
        <Footer dict={dict.footer} />
    </>
  );
}

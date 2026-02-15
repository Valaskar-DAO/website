import type { Metadata } from "next";
import "../globals.css";
import FooterLogo from "../components/FooterLogo";
import ScrollBehavior from "../components/ScrollBehavior";
import ValaskarLogo from "../components/ValaskarLogo";
import LanguageSwitcher from "../components/LanguageSwitcher";
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
    <html lang={locale}>
      <body>
        <ScrollBehavior />

        <header className="header">
          <div className="container header-inner">
            <a href="#hero" className="logo">
              <ValaskarLogo />
              <span>Valaskar</span>
            </a>
            <nav className="nav nav-main">
              <a href="#about">{dict.nav.about}</a>
              <a href="#tokenomics">{dict.nav.tokenomics}</a>
              <a href="#passport">{dict.nav.passports}</a>
              <a href="#governance">{dict.nav.governance}</a>
              <a href="#roadmap">{dict.nav.roadmap}</a>
              <a href="#faq">{dict.nav.faq}</a>
            </nav>

            <nav className="nav nav-secondary">
              <a href="#hero">{dict.nav.home}</a>
              <a href="#about">{dict.nav.about}</a>
              <a href="#tokenomics">{dict.nav.tokenomics}</a>
              <a href="#passport">{dict.nav.passports}</a>
              <a href="#governance">{dict.nav.governance}</a>
              <a href="#roadmap">{dict.nav.roadmap}</a>
              <a href="#faq">{dict.nav.faq}</a>
            </nav>

            <div className="header-actions">
                <a href="#passport" className="btn btn-primary btn-sm">
                    {dict.nav.getPassport}
                </a>
                <LanguageSwitcher locale={locale} />

            </div>
          </div>

          <div className="container header-secondary">
            <nav className="nav nav-secondary">
              <a href="#hero">{dict.nav.home}</a>
              <a href="#about">{dict.nav.about}</a>
              <a href="#tokenomics">{dict.nav.tokenomics}</a>
              <a href="#passport">{dict.nav.passports}</a>
              <a href="#governance">{dict.nav.governance}</a>
              <a href="#roadmap">{dict.nav.roadmap}</a>
              <a href="#faq">{dict.nav.faq}</a>
            </nav>
          </div>
        </header>
        <main>
          <div className="hero-bg" />
          {children}
        </main>
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-brand">
                <a href="#hero" className="logo">
                  <FooterLogo />
                  <span>Valaskar</span>
                </a>
                <p className="footer-tagline">{dict.footer.tagline}</p>
              </div>
              <div className="footer-links">
                <div className="footer-col">
                  <h4>{dict.footer.protocol}</h4>
                  <a href="#about">{dict.footer.about}</a>
                  <a href="#features">{dict.footer.ecosystem}</a>
                  <a href="#tokenomics">{dict.footer.tokenomics}</a>
                  <a href="#governance">{dict.footer.governance}</a>
                </div>
                <div className="footer-col">
                  <h4>{dict.footer.resources}</h4>
                  <a href="/white-paper.pdf" target="_blank">
                    {dict.footer.whitePaper}
                  </a>
                  <a href="#roadmap">{dict.footer.roadmap}</a>
                  <a href="#faq">{dict.footer.faq}</a>
                  <a href="#contracts">{dict.footer.contracts}</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>{dict.footer.disclaimer}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

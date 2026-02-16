import type { Dictionary } from "../i18n/get-dictionary";
import type { Locale } from "../i18n/config";
import ValaskarLogo from "./ValaskarLogo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ 
  dict, 
  locale 
}: { 
  dict: Dictionary["nav"]; 
  locale: Locale;
}) {
  return (
        <header className="header">
          <div className="container header-inner">
            <a href="#hero" className="logo">
              <ValaskarLogo />
              <span>Valaskar</span>
            </a>
            <nav className="nav nav-main">
              <a href="#about">{dict.about}</a>
              <a href="#tokenomics">{dict.tokenomics}</a>
              <a href="#passport">{dict.passports}</a>
              <a href="#governance">{dict.governance}</a>
              <a href="#roadmap">{dict.roadmap}</a>
              <a href="#faq">{dict.faq}</a>
            </nav>

            <nav className="nav nav-secondary">
              <a href="#hero">{dict.home}</a>
              <a href="#about">{dict.about}</a>
              <a href="#tokenomics">{dict.tokenomics}</a>
              <a href="#passport">{dict.passports}</a>
              <a href="#governance">{dict.governance}</a>
              <a href="#roadmap">{dict.roadmap}</a>
              <a href="#faq">{dict.faq}</a>
            </nav>

            <div className="header-actions">
                <a href="#passport" className="btn btn-primary btn-sm">
                    {dict.getPassport}
                </a>
                <LanguageSwitcher locale={locale} />

            </div>
          </div>

          <div className="container header-secondary">
            <nav className="nav nav-secondary">
              <a href="#hero">{dict.home}</a>
              <a href="#about">{dict.about}</a>
              <a href="#tokenomics">{dict.tokenomics}</a>
              <a href="#passport">{dict.passports}</a>
              <a href="#governance">{dict.governance}</a>
              <a href="#roadmap">{dict.roadmap}</a>
              <a href="#faq">{dict.faq}</a>
            </nav>
          </div>
        </header>
  );
}

import type { Dictionary } from "../i18n/get-dictionary";
import type { Locale } from "../i18n/config";
import ValaskarLogo from "./ValaskarLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import DocsSearch from "./DocsSearch";
import ArrowIcon from "./ArrowIcon";

export default function HeaderDocs({ 
  dict, 
  locale 
}: { 
  dict: Dictionary["nav"]; 
  locale: Locale;
}) {
  return (
        <header className="header wp-header-fixed">
          <div className="container header-inner">
            <a href="/" className="logo">
              <ValaskarLogo />
              <span>Valaskar</span>
            </a>

            <DocsSearch />
             
            <div className="header-actions">
                <a href="/" className="btn btn-primary btn-sm">
                    <span>
                      <ArrowIcon />
                    </span> 
                    {dict.backToHome}
                </a>
                <LanguageSwitcher locale={locale} />

            </div>
          </div>

         
        </header>
  );
}

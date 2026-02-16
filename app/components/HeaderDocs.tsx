import type { Dictionary } from "../i18n/get-dictionary";
import type { Locale } from "../i18n/config";
import ValaskarLogo from "./ValaskarLogo";
import LanguageSwitcher from "./LanguageSwitcher";

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
             
            <div className="header-actions">
                <a href="/" className="btn btn-primary btn-sm">
                    {dict.backToHome}
                </a>
                <LanguageSwitcher locale={locale} />

            </div>
          </div>

         
        </header>
  );
}

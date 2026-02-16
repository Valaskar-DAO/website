import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";
import WhitePaperSidebar from "../../components/WhitePaperSidebar";
import WhitePaperContent from "../../components/WhitePaperContent";
import HeaderDocs from "../../components/HeaderDocs";

export default async function WhitePaperPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return ( 
    <>
        <HeaderDocs dict={dict.nav} locale={locale} /> 
          <main>
            <div className="hero-bg" />
            <div className="wp-layout">
              <WhitePaperSidebar sections={dict.whitePaper.sections} />
              <article className="wp-content">
                <WhitePaperContent dict={dict.whitePaper} />
              </article>
            </div>
          </main>  
    </>
   );
}

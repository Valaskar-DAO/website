import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary"; 
import HeaderDocs from "../../components/HeaderDocs"; 
import MapGridWrapper from "../../components/MapGridWrapper";

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

            <section className="section" id="tokenomics">
              <div className="container">
                <div className="map">
                  <MapGridWrapper />
                </div>
              </div>
            </section> 
        </main>  
    </>
   );
}

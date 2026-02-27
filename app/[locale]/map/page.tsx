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
 
                <div className="map">
                  <MapGridWrapper />
                </div> 
    </>
   );
}

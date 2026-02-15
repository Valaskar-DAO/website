import type { Dictionary } from "../i18n/get-dictionary";

export default function GovernanceSection({ dict }: { dict: Dictionary["governance"] }) {
  return (
    <section className="section" id="governance">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
          <p className="section-sub">{dict.subtitle}</p>
        </div>
        <div className="gov-flow">

          <div className="gov-moving-line"></div>


          <div className="gov-step">
            <div className="gov-step-num">1</div>
            <h4>{dict.step1Title}</h4>
            <p>{dict.step1Desc}</p>
          </div>
          <div className="gov-step">
            <div className="gov-step-num">2</div>
            <h4>{dict.step2Title}</h4>
            <p>{dict.step2Desc}</p>
          </div>
          <div className="gov-step">
            <div className="gov-step-num">3</div>
            <h4>{dict.step3Title}</h4>
            <p>{dict.step3Desc}</p>
          </div>
          <div className="gov-step">
            <div className="gov-step-num">4</div>
            <h4>{dict.step4Title}</h4>
            <p>{dict.step4Desc}</p>
          </div>
          <div className="gov-step">
            <div className="gov-step-num">5</div>
            <h4>{dict.step5Title}</h4>
            <p>{dict.step5Desc}</p>
          </div>
        </div>
        <div className="gov-details">
          <div className="gov-detail-card">
            <h4>{dict.standardTitle}</h4>
            <p>{dict.standardDesc}</p>
          </div>
          <div className="gov-detail-card">
            <h4>{dict.criticalTitle}</h4>
            <p>{dict.criticalDesc}</p>
          </div>
          <div className="gov-detail-card">
            <h4>{dict.guardianTitle}</h4>
            <p>{dict.guardianDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

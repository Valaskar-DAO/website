import type { Dictionary } from "../i18n/get-dictionary";

export default function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
        </div>
        <div className="about-grid">
          <div className="about-text" data-aos="fade-right" data-aos-delay="100">
            <p>{dict.p1}</p>
            <p>{dict.p2}</p>
            <p>{dict.p3}</p>
          </div>
          <div className="about-stats" data-aos="fade-left" data-aos-delay="200">
            <div className="stat-card">
              <span className="stat-number">10,000</span>
              <span className="stat-label">{dict.statUniqueLands}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">128</span>
              <span className="stat-label">{dict.statPlayersPerLand}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">VALA</span>
              <span className="stat-label">{dict.statNativeGameCurrency}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">200+</span>
              <span className="stat-label">{dict.statAdjustableParams}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

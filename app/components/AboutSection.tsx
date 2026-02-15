import type { Dictionary } from "../i18n/get-dictionary";

export default function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>{dict.p1}</p>
            <p>{dict.p2}</p>
            <p>{dict.p3}</p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">10,000</span>
              <span className="stat-label">{dict.statUniqueLands}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">128</span>
              <span className="stat-label">{dict.statPlayersPerLand}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">16 km&sup2;</span>
              <span className="stat-label">{dict.statPerLand}</span>
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

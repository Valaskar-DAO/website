import type { Dictionary } from "../i18n/get-dictionary";

export default function RoadmapSection({ dict }: { dict: Dictionary["roadmap"] }) {
  return (
    <section className="section" id="roadmap">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
          <p className="section-sub">{dict.subtitle}</p>
        </div>
        <div className="roadmap-timeline" data-aos="fade-up" data-aos-delay="100">
          <div className="roadmap-item active" >
            <div className="roadmap-date">Q1 2026</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 0</span>
              <h4>{dict.phase0}</h4>
              <p>{dict.phase0Desc}</p>
            </div>
          </div>
          <div className="roadmap-item active" >
            <div className="roadmap-date">Q2 2026</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 1</span>
              <h4>{dict.phase1}</h4>
              <p>{dict.phase1Desc}</p>
            </div>
          </div>
          <div className="roadmap-item active" >
            <div className="roadmap-date">Q3 2026</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 2</span>
              <h4>{dict.phase2}</h4>
              <p>{dict.phase2Desc}</p>
            </div>
          </div>
          <div className="roadmap-item"  >
            <div className="roadmap-date">Q4 2026</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 3</span>
              <h4>{dict.phase3}</h4>
              <p>{dict.phase3Desc}</p>
            </div>
          </div>
          <div className="roadmap-item"  >
            <div className="roadmap-date">Q1 2027</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 4</span>
              <h4>{dict.phase4}</h4>
              <p>{dict.phase4Desc}</p>
            </div>
          </div>
          <div className="roadmap-item" >
            <div className="roadmap-date">Q2 2027</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 5</span>
              <h4>{dict.phase5}</h4>
              <p>{dict.phase5Desc}</p>
            </div>
          </div>
          <div className="roadmap-item"  >
            <div className="roadmap-date">Q3 2027</div>
            <div className="roadmap-content"  >
              <span className="roadmap-phase">Phase 6 &amp; 7</span>
              <h4>{dict.phase6}</h4>
              <p>{dict.phase6Desc}</p>
            </div>
          </div>
          <div className="roadmap-item" >
            <div className="roadmap-date">Q4 2027</div>
            <div className="roadmap-content"   >
              <span className="roadmap-phase">Phase 8</span>
              <h4>{dict.phase7}</h4>
              <p>{dict.phase7Desc}</p>
            </div>
          </div>
          <div className="roadmap-item"  >
            <div className="roadmap-date">Q1 2028</div>
            <div className="roadmap-content">
              <span className="roadmap-phase">Phase 9</span>
              <h4>{dict.phase8}</h4>
              <p>{dict.phase8Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

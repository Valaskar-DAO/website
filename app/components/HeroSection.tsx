import ArrowIcon from "./ArrowIcon";
import type { Dictionary } from "../i18n/get-dictionary";

export default function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            {dict.titleLine1} <br />
            {dict.titleLine2}
          </h1>
          <p className="subtitle">
            {dict.subtitleLine1}
            <br />
            {dict.subtitleLine2}
          </p>
          <div className="hero-buttons">
            <a href="#" target="_blank" className="btn btn-primary">
              {dict.whitePaper}
              <span>
                <ArrowIcon />
              </span> 
            </a>
            <a href="#about" className="btn btn-outline">
              {dict.readMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

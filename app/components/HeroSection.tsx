import ArrowIcon from "./ArrowIcon";
import type { Dictionary } from "../i18n/get-dictionary";

export default function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero" id="hero">
      <div className="green-shaddow1"/>
      <div className="green-shaddow211"/>
      <div className="container">
        <div className="hero-content">
          <h1 data-aos="fade-down" data-aos-delay="100">
            {dict.titleLine1} <br />
            {dict.titleLine2}
          </h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            {dict.subtitleLine1}
            <br />
            {dict.subtitleLine2}
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
            <a href="/white-paper.pdf" target="_blank" className="btn btn-primary">
              {dict.whitePaper}
              <span className="lefticon">
                <ArrowIcon />
              </span> 
            </a>
            <a href="/docs" target="_blank" className="btn btn-outline">
              {dict.documentation}
            </a>
           
          </div>
 
          <div className="scroll-down-box" data-aos="fade-up" data-aos-delay="500">
            <a href="#about" className="scroll-down">
              <div className="mouse-icon">
                <div className="mouse-wheel"></div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

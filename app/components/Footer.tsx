import type { Dictionary } from "../i18n/get-dictionary";
import FooterLogo from "../components/FooterLogo";

export default function Footer ({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <div className="footer-brand">
                <a href="#hero" className="logo">
                  <FooterLogo />
                  <span>Valaskar</span>
                </a>
                <p className="footer-tagline">{dict.tagline}</p>
              </div>
              <div className="footer-links">
                <div className="footer-col">
                  <h4>{dict.protocol}</h4>
                  <a href="#about">{dict.about}</a>
                  <a href="#features">{dict.ecosystem}</a>
                  <a href="#tokenomics">{dict.tokenomics}</a>
                  <a href="#governance">{dict.governance}</a>
                </div>
                <div className="footer-col">
                  <h4>{dict.resources}</h4>
                  <a href="/white-paper.pdf" target="_blank">
                    {dict.whitePaper}
                  </a>
                  <a href="#roadmap">{dict.roadmap}</a>
                  <a href="#faq">{dict.faq}</a>
                  <a href="#contracts">{dict.contracts}</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>{dict.disclaimer}</p>
            </div>
          </div>
    </footer>
  );
}

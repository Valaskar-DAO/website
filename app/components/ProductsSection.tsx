import type { Dictionary } from "../i18n/get-dictionary";

export default function ProductsSection({ dict }: { dict: Dictionary["products"] }) {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
          <p className="section-sub">{dict.subtitle}</p>
        </div>
        <div className="products-grid">
          <div className="product-card" data-aos="fade-up" data-aos-delay="0">
            <div className="product-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </div>
            <h3>{dict.valaWorldTitle}</h3>
            <p>{dict.valaWorldDesc}</p>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="100">
            <div className="product-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3>{dict.valaStudioTitle}</h3>
            <p>{dict.valaStudioDesc}</p>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="200">
            <div className="product-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <h3>{dict.valaTokenTitle}</h3>
            <p>{dict.valaTokenDesc}</p>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="300">
            <div className="product-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3>{dict.passportTitle}</h3>
            <p>{dict.passportDesc}</p>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="400">
            <div className="product-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z" />
              </svg>
            </div>
            <h3>{dict.walletTitle}</h3>
            <p>{dict.walletDesc}</p>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="500">
            <div className="product-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            </div>
            <h3>{dict.bridgeTitle}</h3>
            <p>{dict.bridgeDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

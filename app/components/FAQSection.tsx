import type { Dictionary } from "../i18n/get-dictionary";

export default function FAQSection({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>{dict.q1}</summary>
            <p>{dict.a1}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q2}</summary>
            <p>{dict.a2}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q3}</summary>
            <p>{dict.a3}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q4}</summary>
            <p>{dict.a4}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q5}</summary>
            <p>{dict.a5}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q6}</summary>
            <p>{dict.a6}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q7}</summary>
            <p>{dict.a7}</p>
          </details>
          <details className="faq-item">
            <summary>{dict.q8}</summary>
            <p>{dict.a8}</p>
          </details>
        </div>
      </div>
    </section>
  );
}

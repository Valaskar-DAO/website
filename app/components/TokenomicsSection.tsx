import type { Dictionary } from "../i18n/get-dictionary";

export default function TokenomicsSection({ dict }: { dict: Dictionary["tokenomics"] }) {
  return (
    <section className="section" id="tokenomics">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
          <p className="section-sub">{dict.subtitle}</p>
        </div>
        <div className="token-total">
          <span className="token-total-label">{dict.totalSupplyLabel}</span>
          <span className="token-total-number">{dict.totalSupplyValue}</span>
        </div>
        <div className="tokenomics-grid">
          <div className="token-card">
            <div className="token-pct">47%</div>
            <h3>{dict.daoTreasuryTitle}</h3>
            <p className="token-amount">{dict.daoTreasuryAmount}</p>
            <p>{dict.daoTreasuryDesc}</p>
          </div>
          <div className="token-card">
            <div className="token-pct">25%</div>
            <h3>{dict.pioneerTitle}</h3>
            <p className="token-amount">{dict.pioneerAmount}</p>
            <p>{dict.pioneerDesc}</p>
          </div>
          <div className="token-card">
            <div className="token-pct">16%</div>
            <h3>{dict.teamTitle}</h3>
            <p className="token-amount">{dict.teamAmount}</p>
            <p>{dict.teamDesc}</p>
          </div>
          <div className="token-card">
            <div className="token-pct">12%</div>
            <h3>{dict.publicTitle}</h3>
            <p className="token-amount">{dict.publicAmount}</p>
            <p>{dict.publicDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

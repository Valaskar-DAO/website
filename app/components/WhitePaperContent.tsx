import type { Dictionary } from "../i18n/get-dictionary";

type WPDict = Dictionary["whitePaper"];

export default function WhitePaperContent({ dict }: { dict: WPDict }) {
  return (
    <>
      {/* Title Block */}
      <div className="wp-hero">
        <div className="wp-version">{dict.version}</div>
        <h1>{dict.title}</h1>
        <p className="wp-status">{dict.status}</p>
      </div>

      {/* 1. Executive Summary */}
      <section id="executive-summary" className="wp-section">
        <h2>
          <span className="wp-heading-num">1.</span> {dict.executiveSummary.title}
        </h2>
        <p>{dict.executiveSummary.p1}</p>
        <p>{dict.executiveSummary.p2}</p>
        <p>{dict.executiveSummary.p3}</p>
        <p>{dict.executiveSummary.p4}</p>
      </section>

      {/* 1.1 Platform Components */}
      <section id="platform-components" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">1.1</span>{" "}
          {dict.platformComponents.title}
        </h3>
        <p>{dict.platformComponents.intro}</p>
        <div className="wp-product-list">
          {dict.platformComponents.items.map((item, i) => (
            <div key={i} className="wp-product-item">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. VALA WORLDS */}
      <section id="vala-worlds" className="wp-section">
        <h2>
          <span className="wp-heading-num">2.</span> {dict.valaWorlds.title}
        </h2>
        <p>{dict.valaWorlds.p1}</p>
        <p>{dict.valaWorlds.p2}</p>
        <p>{dict.valaWorlds.p3}</p>
      </section>

      {/* 3. Protocol Assets – VALA Token */}
      <section id="vala-token" className="wp-section">
        <h2>
          <span className="wp-heading-num">3.</span> {dict.valaToken.title}
        </h2>
        <p>{dict.valaToken.p1}</p>
        <p>{dict.valaToken.p2}</p>
        <div className="wp-highlight-box">
          <ul>
            {dict.valaToken.unlocks.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Valaskar Passports */}
      <section id="passports" className="wp-section">
        <h2>
          <span className="wp-heading-num">4.</span> {dict.passports.title}
        </h2>
        <p>{dict.passports.p1}</p>
        <p>{dict.passports.p2}</p>
        <div className="wp-props-grid">
          {dict.passports.properties.map((prop, i) => (
            <div key={i} className="wp-prop-card">
              <span className="wp-prop-label">{prop.label}</span>
              <span className="wp-prop-value">{prop.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4.1 World Map */}
      <section id="world-map" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">4.1</span> {dict.worldMap.title}
        </h3>
        <p>{dict.worldMap.p1}</p>
        <div className="wp-code-block">
          <code>
            Index = TokenId − 1
            <br />
            X = Floor(Index / 100) + 1
            <br />
            Y = (Index % 100) + 1
            <br />
            TokenId = (X − 1) × 100 + (Y − 1) + 1
          </code>
        </div>
        <p>{dict.worldMap.p2}</p>
      </section>

      {/* 4.2 Passport Metadata */}
      <section id="passport-metadata" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">4.2</span>{" "}
          {dict.passportMetadata.title}
        </h3>
        <p>{dict.passportMetadata.p1}</p>
        <p>{dict.passportMetadata.p2}</p>
      </section>

      {/* 5. DAO Governance */}
      <section id="governance" className="wp-section">
        <h2>
          <span className="wp-heading-num">5.</span> {dict.governance.title}
        </h2>
        <p>{dict.governance.p1}</p>
        <p>{dict.governance.p2}</p>
        <div className="wp-flow">
          <div className="wp-flow-step">Propose</div>
          <div className="wp-flow-arrow">→</div>
          <div className="wp-flow-step">4h Delay</div>
          <div className="wp-flow-arrow">→</div>
          <div className="wp-flow-step">2d Vote</div>
          <div className="wp-flow-arrow">→</div>
          <div className="wp-flow-step">Queue</div>
          <div className="wp-flow-arrow">→</div>
          <div className="wp-flow-step">24h Timelock</div>
          <div className="wp-flow-arrow">→</div>
          <div className="wp-flow-step">Execute</div>
        </div>
        <h4>{dict.governance.quorumTitle}</h4>
        <ul>
          <li>{dict.governance.quorum1}</li>
          <li>{dict.governance.quorum2}</li>
        </ul>
      </section>

      {/* 5.1 Guardian */}
      <section id="guardian" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">5.1</span> {dict.guardian.title}
        </h3>
        <p>{dict.guardian.p1}</p>
        <p>{dict.guardian.p2}</p>
        <p>{dict.guardian.p3}</p>
      </section>

      {/* 6. Tokenomics */}
      <section id="tokenomics" className="wp-section">
        <h2>
          <span className="wp-heading-num">6.</span> {dict.tokenomics.title}
        </h2>
        <p>{dict.tokenomics.p1}</p>

        <div className="wp-alloc-grid">
          {dict.tokenomics.allocations.map((a, i) => (
            <div key={i} className="wp-alloc-card">
              <div className="wp-alloc-pct">{a.pct}</div>
              <div className="wp-alloc-name">{a.name}</div>
              <div className="wp-alloc-amount">{a.amount}</div>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6.1 Public Token Sale */}
      <section id="public-sale" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">6.1</span> {dict.publicSale.title}
        </h3>
        <p>{dict.publicSale.p1}</p>
        <div className="wp-highlight-box">
          <ul>
            {dict.publicSale.splits.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <p>{dict.publicSale.p2}</p>
      </section>

      {/* 6.2 NFT Sale Proceeds */}
      <section id="nft-sale" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">6.2</span> {dict.nftSale.title}
        </h3>
        <p>{dict.nftSale.p1}</p>
        <div className="wp-highlight-box">
          <ul>
            {dict.nftSale.splits.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <p>{dict.nftSale.p2}</p>
      </section>

      {/* 6.3 Gameplay Loop */}
      <section id="gameplay-loop" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">6.3</span> {dict.gameplayLoop.title}
        </h3>
        <p>{dict.gameplayLoop.p1}</p>
        <ul>
          {dict.gameplayLoop.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{dict.gameplayLoop.p2}</p>
      </section>

      {/* 6.4 VALA Utility */}
      <section id="vala-utility" className="wp-section wp-subsection">
        <h3>
          <span className="wp-heading-num">6.4</span> {dict.valaUtility.title}
        </h3>
        <p>{dict.valaUtility.p1}</p>
        <ul>
          {dict.valaUtility.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{dict.valaUtility.p2}</p>
      </section>

      {/* 7. Security */}
      <section id="security" className="wp-section">
        <h2>
          <span className="wp-heading-num">7.</span> {dict.security.title}
        </h2>
        <p>{dict.security.p1}</p>
        <ul>
          {dict.security.risks.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <p>{dict.security.p2}</p>
      </section>

      {/* 8. Roadmap */}
      <section id="roadmap" className="wp-section">
        <h2>
          <span className="wp-heading-num">8.</span> {dict.roadmapSection.title}
        </h2>
        <p>{dict.roadmapSection.intro}</p>
        <div className="wp-roadmap-table">
          <div className="wp-roadmap-header">
            <span>{dict.roadmapSection.colQuarter}</span>
            <span>{dict.roadmapSection.colPhase}</span>
            <span>{dict.roadmapSection.colTitle}</span>
            <span>{dict.roadmapSection.colScope}</span>
          </div>
          {dict.roadmapSection.phases.map((p, i) => (
            <div key={i} className="wp-roadmap-row">
              <span>{p.quarter}</span>
              <span>{p.phase}</span>
              <span>{p.name}</span>
              <span>{p.scope}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Key Facts */}
      <section id="key-facts" className="wp-section">
        <h2>
          <span className="wp-heading-num">9.</span> {dict.keyFacts.title}
        </h2>
        <ul>
          {dict.keyFacts.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 10. Control Matrix */}
      <section id="control-matrix" className="wp-section">
        <h2>
          <span className="wp-heading-num">10.</span> {dict.controlMatrix.title}
        </h2>
        <p>{dict.controlMatrix.intro}</p>
        <div className="wp-matrix-table">
          <div className="wp-matrix-header">
            <span>{dict.controlMatrix.colAction}</span>
            <span>DAO</span>
            <span>Guardian</span>
            <span>Backup</span>
          </div>
          {dict.controlMatrix.rows.map((r, i) => (
            <div key={i} className="wp-matrix-row">
              <span>{r.action}</span>
              <span>{r.dao}</span>
              <span>{r.guardian}</span>
              <span>{r.backup}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Implementation Status */}
      <section id="implementation" className="wp-section">
        <h2>
          <span className="wp-heading-num">11.</span>{" "}
          {dict.implementation.title}
        </h2>
        <div className="wp-status-table">
          <div className="wp-status-header">
            <span>{dict.implementation.colComponent}</span>
            <span>{dict.implementation.colStatus}</span>
            <span>{dict.implementation.colWhere}</span>
          </div>
          {dict.implementation.rows.map((r, i) => (
            <div key={i} className="wp-status-row">
              <span>{r.component}</span>
              <span
                className={
                  r.status.toLowerCase().includes("live")
                    ? "wp-status-live"
                    : "wp-status-planned"
                }
              >
                {r.status}
              </span>
              <span>{r.where}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Glossary */}
      <section id="glossary" className="wp-section">
        <h2>
          <span className="wp-heading-num">12.</span> {dict.glossary.title}
        </h2>
        <dl className="wp-glossary">
          {dict.glossary.items.map((item, i) => (
            <div key={i} className="wp-glossary-item">
              <dt>{item.term}</dt>
              <dd>{item.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 13. Disclaimer */}
      <section id="disclaimer" className="wp-section">
        <h2>
          <span className="wp-heading-num">13.</span> {dict.disclaimer.title}
        </h2>
        {dict.disclaimer.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* 14. Contract Addresses */}
      <section id="contract-addresses" className="wp-section">
        <h2>
          <span className="wp-heading-num">14.</span>{" "}
          {dict.contractAddresses.title}
        </h2>
        <h4>Ethereum Mainnet</h4>
        <div className="wp-contracts-table">
          {dict.contractAddresses.mainnet.map((c, i) => (
            <div key={i} className="wp-contract-row">
              <span className="wp-contract-name">{c.name}</span>
              <a
                href={`https://etherscan.io/address/${c.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wp-contract-addr"
              >
                {c.address}
              </a>
            </div>
          ))}
        </div>
        <h4 style={{ marginTop: 32 }}>Ethereum Sepolia</h4>
        <div className="wp-contracts-table">
          {dict.contractAddresses.sepolia.map((c, i) => (
            <div key={i} className="wp-contract-row">
              <span className="wp-contract-name">{c.name}</span>
              <a
                href={`https://sepolia.etherscan.io/address/${c.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wp-contract-addr"
              >
                {c.address}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

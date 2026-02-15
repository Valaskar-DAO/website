import Image from "next/image";
import ScrollBehavior from "./components/ScrollBehavior";
import ValaskarLogo from "./components/ValaskarLogo";
import FooterLogo from "./components/FooterLogo";
import ExternalLinkIcon from "./components/ExternalLinkIcon";

export default function Home() {
  return (
    <>
      <ScrollBehavior />

      <header className="header">
        <div className="container header-inner">
          <a href="#hero" className="logo">
            <ValaskarLogo />
            <span>Valaskar</span>
          </a>
          <nav className="nav nav-main">
            <a href="#about">About</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#passport">Passports</a>
            <a href="#governance">Governance</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>

          <nav className="nav nav-secondary">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#passport">Passports</a>
            <a href="#governance">Governance</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <a href="#passport" className="btn btn-primary btn-sm">
              Get Passport
            </a>
          </div>
        </div>

        <div className="container header-secondary">
          <nav className="nav nav-secondary">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#passport">Passports</a>
            <a href="#governance">Governance</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero-bg" />

        {/* Hero */}
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Own Land. Rule Worlds. <br />
                Play to Survive.
              </h1>
              <p className="subtitle">
                A decentralized virtual world of 10,000 independent lands,
                <br />
                powered by blockchain. Built around a flagship AAA survival
                game.
              </p>
              <div className="hero-buttons"> 
                <a href="#" target="_blank" className="btn btn-primary">
                  Read White Paper
                </a>
                <a href="#about" className="btn btn-outline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">About</p>
              <h2>What is Valaskar?</h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Valaskar is a decentralized, blockchain-based virtual world
                  defined by a fixed set of 10,000 independent lands, each owned
                  by a Valaskar Passport (NFT) holder. Each land is operated by
                  its owner and can host gameplay and social interaction for
                  players, with a maximum of 128 concurrent players per land.
                </p>
                <p>
                  The ecosystem is built around a flagship, AAA 3D survival game
                  inspired by Rust/DayZ-style post-apocalyptic PvP, built with
                  Unreal Engine 5 as a standalone original title. It serves as
                  the main entry point with frictionless onboarding &mdash; no
                  crypto needed to start.
                </p>
                <p>
                  Land owners retain full control over gameplay rules, content,
                  and monetization models. Land ownership and control are
                  enforced on the blockchain, making cryptographically verifiable
                  ownership.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">10,000</span>
                  <span className="stat-label">Unique Lands</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">128</span>
                  <span className="stat-label">Players per Land</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">16 km&sup2;</span>
                  <span className="stat-label">Per Land (4x4 km)</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Adjustable Parameters</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Products */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">Ecosystem</p>
              <h2>Platform Components</h2>
              <p className="section-sub">
                A modular product suite centered around a flagship AAA 3D game
              </p>
            </div>
            <div className="products-grid">
              <div className="product-card">
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
                <h3>VALA WORLD</h3>
                <p>
                  Flagship survival 3D game set in a post-apocalyptic world with
                  hardcore PvP gameplay inspired by Rust and DayZ, built around
                  scavenging, crafting, base-building, clan warfare, and
                  territory control.
                </p>
              </div>
              <div className="product-card">
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
                <h3>VALA STUDIO</h3>
                <p>
                  Official creator software used to configure and operate lands
                  and to create 3D assets. Build land content and items,
                  distribute and trade across the ecosystem via the Marketplace.
                </p>
              </div>
              <div className="product-card">
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
                <h3>VALA Token</h3>
                <p>
                  The native ERC-20 token used across the Valaskar ecosystem.
                  Serves as the in-game currency and as the main token for
                  protocol-wide payments, fees, and incentives.
                </p>
              </div>
              <div className="product-card">
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
                <h3>Valaskar Passport</h3>
                <p>
                  A protocol-issued ERC-721 collection of 10,000 NFTs. Each
                  Passport represents one specific land and grants on-chain
                  administrative control to its holder.
                </p>
              </div>
              <div className="product-card">
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
                <h3>VALA Wallet</h3>
                <p>
                  A browser-based wallet extension for managing the VALA
                  ecosystem token and signing transactions. Optional for
                  players, required for Passport holders.
                </p>
              </div>
              <div className="product-card">
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
                <h3>VALA Bridge / L2 Hub</h3>
                <p>
                  Official bridge and execution layer for DAO-approved transfers
                  from Ethereum to an Ethereum-compatible L2, enabling low-fee,
                  high-throughput ecosystem operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section className="section" id="tokenomics">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">Tokenomics</p>
              <h2>VALA Token Distribution</h2>
              <p className="section-sub">
                Fixed supply. Non-inflationary. Hard cap enforced at contract
                level.
              </p>
            </div>
            <div className="token-total">
              <span className="token-total-label">Total Supply</span>
              <span className="token-total-number">3,000,000,000 VALA</span>
            </div>
            <div className="tokenomics-grid">
              <div className="token-card">
                <div className="token-pct">47%</div>
                <h3>DAO Treasury</h3>
                <p className="token-amount">1,410,000,000 VALA</p>
                <p>
                  Locked for 180 days from launch. Thereafter, governance-gated
                  with proposed 10-year on-chain vesting. Reserved for in-game
                  rewards, creator grants, tournaments, and ecosystem growth.
                </p>
              </div>
              <div className="token-card">
                <div className="token-pct">25%</div>
                <h3>Pioneer Rewards</h3>
                <p className="token-amount">750,000,000 VALA</p>
                <p>
                  Split equally across all 10,000 Passport NFTs (75,000 VALA
                  each). Linear vesting over 12 months from activation.
                  Claim-only via smart contract.
                </p>
              </div>
              <div className="token-card">
                <div className="token-pct">16%</div>
                <h3>Team</h3>
                <p className="token-amount">480,000,000 VALA</p>
                <p>
                  Locked in a TeamVesting contract. 12-month cliff followed by
                  36-month linear release. Only designated team treasury can
                  claim.
                </p>
              </div>
              <div className="token-card">
                <div className="token-pct">12%</div>
                <h3>Public Sale + Liquidity</h3>
                <p className="token-amount">360,000,000 VALA</p>
                <p>
                  Sale tranche: 240M VALA. Liquidity/MM tranche: 120M VALA.
                  Locked for 30 days. Movements executed only under DAO or
                  guardian controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Passport NFT */}
        <section className="section" id="passport">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">NFT Collection</p>
              <h2>Valaskar Passports</h2>
              <p className="section-sub">
                Your key to the Valaskar world &mdash; own, govern, earn
              </p>
            </div>
            <div className="passport-layout">
              <div className="passport-image">
                <Image
                  src="/valaskar-pasport.webp"
                  alt="Valaskar Passport NFT"
                  width={467}
                  height={467}
                  priority
                />
              </div>
              <div className="passport-info">
                <p className="passport-desc">
                  Valaskar Passports is a limited NFT collection of 10,000 items
                  (ERC-721), which acts as the main digital passport in
                  Valaskar, provides on-chain proof of ownership of a game land,
                  and simultaneously functions as the DAO governance system.
                </p>
                <div className="passport-props">
                  <div className="prop-item">
                    <span className="prop-label">Supply Cap</span>
                    <span className="prop-value">10,000 NFTs</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Land Grid</span>
                    <span className="prop-value">100 x 100</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Governance</span>
                    <span className="prop-value">1 NFT = 1 Vote</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Mint Price</span>
                    <span className="prop-value">0.08 ETH (default)</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Pioneer Reward</span>
                    <span className="prop-value">75,04400 VALA / NFT</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Revenue Split</span>
                    <span className="prop-value">50% DAO / 50% Team</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Balance Cap</span>
                    <span className="prop-value">100 NFTs per address</span>
                  </div>
                  <div className="prop-item">
                    <span className="prop-label">Admin Mint Cap</span>
                    <span className="prop-value">200 NFTs (2%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DAO Governance */}
        <section className="section" id="governance">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">Governance</p>
              <h2>DAO Governance</h2>
              <p className="section-sub">
                On-chain governance by Passport holders. 1 NFT = 1 Vote.
              </p>
            </div>
            <div className="gov-flow">

              <div className="gov-moving-line"></div>


              <div className="gov-step">
                <div className="gov-step-num">1</div>
                <h4>Propose</h4>
                <p>Backed by 25+ Passports</p>
              </div> 
              <div className="gov-step">
                <div className="gov-step-num">2</div>
                <h4>4h Delay</h4>
                <p>Waiting period before vote</p>
              </div> 
              <div className="gov-step">
                <div className="gov-step-num">3</div>
                <h4>2d Vote</h4>
                <p>FOR must exceed AGAINST</p>
              </div> 
              <div className="gov-step">
                <div className="gov-step-num">4</div>
                <h4>24h Timelock</h4>
                <p>Review period before execution</p>
              </div> 
              <div className="gov-step">
                <div className="gov-step-num">5</div>
                <h4>Execute</h4>
                <p>On-chain enforcement</p>
              </div>
            </div>
            <div className="gov-details">
              <div className="gov-detail-card">
                <h4>Standard Proposals</h4>
                <p>
                  Quorum: 5% of snapshot supply, minimum 100 votes (FOR +
                  ABSTAIN).
                </p>
              </div>
              <div className="gov-detail-card">
                <h4>Critical DAO Actions</h4>
                <p>
                  Quorum: max(5% of supply, 300), with at least 300 FOR votes
                  required.
                </p>
              </div>
              <div className="gov-detail-card">
                <h4>Guardian Safety</h4>
                <p>
                  3-of-5 team multisig can veto proposals. Guardian-change
                  proposals are non-vetoable by design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section" id="roadmap">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">Roadmap</p>
              <h2>Development Roadmap</h2>
              <p className="section-sub">
                The protocol is already live. Roadmap is indicative and may
                change based on DAO decisions.
              </p>
            </div>
            <div className="roadmap-timeline">
              <div className="roadmap-item active">
                <div className="roadmap-date">Q1 2026</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 0</span>
                  <h4>Foundation</h4>
                  <p>Guardian mint, timelock hardening, documentation</p>
                </div>
              </div>
              <div className="roadmap-item active">
                <div className="roadmap-date">Q2 2026</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 1</span>
                  <h4>Distribution</h4>
                  <p>NFT minting/activations, governance onboarding</p>
                </div>
              </div>
              <div className="roadmap-item active">
                <div className="roadmap-date">Q3 2026</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 2</span>
                  <h4>IDO / Audit</h4>
                  <p>
                    Third-party audit, public token sale (IDO) and initial
                    liquidity program
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q4 2026</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 3</span>
                  <h4>Game Pre-Production</h4>
                  <p>Core game design, VALA economy design</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q1 2027</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 4</span>
                  <h4>L2 / Bridge &amp; Scaling</h4>
                  <p>
                    VALA BRIDGE / L2 HUB design and deployment (DAO-approved)
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q2 2027</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 5</span>
                  <h4>Ecosystem Infrastructure</h4>
                  <p>
                    Marketplace MVP, VALA Wallet, governance ops UI and
                    monitoring
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q3 2027</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 6 &amp; 7</span>
                  <h4>VALA Studio &amp; Demo</h4>
                  <p>
                    Creator tools MVP, official demo version and game trailers
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q4 2027</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 8</span>
                  <h4>Alpha / Beta</h4>
                  <p>Alpha and Beta versions of Valaskar on PC</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-date">Q1 2028</div>
                <div className="roadmap-content">
                  <span className="roadmap-phase">Phase 9</span>
                  <h4>Launch</h4>
                  <p>Valaskar launch on Steam</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">FAQ</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>What is Valaskar?</summary>
                <p>
                  Valaskar is a decentralized, blockchain-based virtual world
                  consisting of 10,000 independent lands. Each land is owned by
                  a Valaskar Passport (NFT) holder and can host gameplay for up
                  to 128 concurrent players. The ecosystem is built around a
                  flagship AAA 3D survival game inspired by Rust and DayZ.
                </p>
              </details>
              <details className="faq-item">
                <summary>What is a Valaskar Passport?</summary>
                <p>
                  A Valaskar Passport is an ERC-721 NFT from a limited
                  collection of 10,000 items. Each Passport represents one
                  specific land on the 100x100 grid, grants on-chain
                  administrative control to its holder, and provides 1
                  governance vote in the DAO. Each Passport also earns 75,000
                  VALA through Pioneer Rewards vesting.
                </p>
              </details>
              <details className="faq-item">
                <summary>What is the VALA token?</summary>
                <p>
                  VALA is the native ERC-20 token with a fixed,
                  non-inflationary supply of 3 billion. It serves as the in-game
                  currency and is used for protocol-wide payments, fees, land
                  entry, crafting, marketplace transactions, and incentives. VALA
                  does not grant governance votes &mdash; only Passport NFTs do.
                </p>
              </details>
              <details className="faq-item">
                <summary>How does governance work?</summary>
                <p>
                  Valaskar is governed by a DAO of Passport holders. Each NFT
                  grants 1 vote. Proposals require backing by 25+ Passports,
                  followed by a 4-hour delay, 2-day voting period, and 24-hour
                  timelock before execution. All governance is enforced on-chain
                  via smart contracts.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do I need crypto to play?</summary>
                <p>
                  No. The game is designed with frictionless onboarding &mdash;
                  no crypto is needed to start playing. VALA is used for in-game
                  economy, but the entry point is free. Owning a Passport NFT is
                  only required if you want to own and operate a land.
                </p>
              </details>
              <details className="faq-item">
                <summary>What can land owners do?</summary>
                <p>
                  Land owners have full control over content, rules, and
                  gameplay mechanics within their land. This includes tuning
                  progression, resource/loot rates, PvP/PvE rules, spawn logic,
                  difficulty, monetization, and 200+ adjustable parameters. They
                  can create custom game modes and publish their land as a
                  standalone product.
                </p>
              </details>
              <details className="faq-item">
                <summary>Are the smart contracts live?</summary>
                <p>
                  Yes. Core smart contracts are live on Ethereum mainnet,
                  including VALA (ERC-20), Valaskar Passport (ERC-721),
                  Governor, Timelock, Pioneer Vesting, and Team Vesting. The
                  game itself is still under development.
                </p>
              </details>
              <details className="faq-item">
                <summary>What is the Guardian role?</summary>
                <p>
                  The Guardian is a 3-of-5 team multisig that acts as an
                  early-stage safety mechanism. It can veto governance proposals
                  (except those that replace the Guardian itself) and manage
                  certain NFT sale controls. It cannot bypass timelocks, upgrade
                  contracts, or transfer funds to arbitrary addresses.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Contracts */}
        <section className="section" id="contracts">
          <div className="container">
            <div className="section-header">
              <p className="section-tag">On-Chain</p>
              <h2>Contract Addresses</h2>
              <p className="section-sub">
                Ethereum Mainnet &mdash; all contracts are live and verifiable
              </p>
            </div>
            <div className="contracts-table">
              <div className="contract-row">
                <span className="contract-name">VALA ERC-20</span>
                <a
                  href="https://etherscan.io/address/0x5EB163fe1A9EC7660f2DAc2C685Ea5633459ef88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contract-link"
                >
                  <code className="contract-addr">
                    0x5EB163fe1A9EC7660f2DAc2C685Ea5633459ef88
                  </code>
                  <ExternalLinkIcon />
                </a>
              </div>
              <div className="contract-row">
                <span className="contract-name">ValaskarNFT (ERC-721)</span>
                <a
                  href="https://etherscan.io/address/0x0395d6a10C1847D25721c5D30C230a0544376B0D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contract-link"
                >
                  <code className="contract-addr">
                    0x0395d6a10C1847D25721c5D30C230a0544376B0D
                  </code>
                  <ExternalLinkIcon />
                </a>
              </div>
              <div className="contract-row">
                <span className="contract-name">Governor</span>
                <a
                  href="https://etherscan.io/address/0x7bBBee1082B52DEF3dCe244483F40af152F776C7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contract-link"
                >
                  <code className="contract-addr">
                    0x7bBBee1082B52DEF3dCe244483F40af152F776C7
                  </code>
                  <ExternalLinkIcon />
                </a>
              </div>
              <div className="contract-row">
                <span className="contract-name">Timelock</span>
                <a
                  href="https://etherscan.io/address/0x8f1169247Fe8230bc76A5Ac151F9Ef9d82078d85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contract-link"
                >
                  <code className="contract-addr">
                    0x8f1169247Fe8230bc76A5Ac151F9Ef9d82078d85
                  </code>
                  <ExternalLinkIcon />
                </a>
              </div>
              <div className="contract-row">
                <span className="contract-name">Pioneer Vesting</span>
                <a
                  href="https://etherscan.io/address/0xAa785831AaE2eDcC532e8f997aeD96BFa0c9cA8e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contract-link"
                >
                  <code className="contract-addr">
                    0xAa785831AaE2eDcC532e8f997aeD96BFa0c9cA8e
                  </code>
                  <ExternalLinkIcon />
                </a>
              </div>
              <div className="contract-row">
                <span className="contract-name">Team Vesting</span>
                <a
                  href="https://etherscan.io/address/0xB295225a6267313fF2667Cc53f6AF083d2C95CC2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contract-link"
                >
                  <code className="contract-addr">
                    0xB295225a6267313fF2667Cc53f6AF083d2C95CC2
                  </code>
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="#hero" className="logo">
                <FooterLogo />
                <span>Valaskar</span>
              </a>
              <p className="footer-tagline">
                Decentralized virtual world. 10,000 lands. One flagship game.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Protocol</h4>
                <a href="#about">About</a>
                <a href="#features">Ecosystem</a>
                <a href="#tokenomics">Tokenomics</a>
                <a href="#governance">Governance</a>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <a href="/white-paper.pdf" target="_blank">
                  White Paper
                </a>
                <a href="#roadmap">Roadmap</a>
                <a href="#faq">FAQ</a>
                <a href="#contracts">Contracts</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Valaskar Protocol &mdash; Built on Ethereum. This document is for
              informational purposes only and does not constitute financial,
              investment, legal, tax, or accounting advice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

import ExternalLinkIcon from "./ExternalLinkIcon";
import type { Dictionary } from "../i18n/get-dictionary";

export default function ContractsSection({ dict }: { dict: Dictionary["contracts"] }) {
  return (
    <section className="section" id="contracts">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
          <p className="section-sub">{dict.subtitle}</p>
        </div>
        <div className="contracts-table" data-aos="fade-up" data-aos-delay="100">
          <div className="contract-row">
            <span className="contract-name">{dict.valaErc20}</span>
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
            <span className="contract-name">{dict.valaskarNft}</span>
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
            <span className="contract-name">{dict.governor}</span>
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
            <span className="contract-name">{dict.timelock}</span>
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
            <span className="contract-name">{dict.pioneerVesting}</span>
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
            <span className="contract-name">{dict.teamVesting}</span>
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
  );
}

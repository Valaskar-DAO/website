"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import type { Dictionary } from "../i18n/get-dictionary";

export default function PassportSection({ dict }: { dict: Dictionary["passport"] }) {
  return (
    <section className="section" id="passport">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-tag">{dict.tag}</p>
          <h2>{dict.title}</h2>
          <p className="section-sub">{dict.subtitle}</p>
        </div>
        <div className="passport-layout">
          <div className="passport-image" data-aos="fade-right" data-aos-delay="100">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="#000000"
              glarePosition="all"
              scale={1.05}
              transitionSpeed={400}
            >
              <Image
                src="/valaskar-pasport.webp"
                alt="Valaskar Passport NFT"
                width={467}
                height={467}
                priority
              />
            </Tilt>
          </div>
          <div className="passport-info" data-aos="fade-left" data-aos-delay="200">
            <p className="passport-desc">{dict.description}</p>
            <div className="passport-props">
              <div className="prop-item">
                <span className="prop-label">{dict.supplyCap}</span>
                <span className="prop-value">{dict.supplyCapValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.landGrid}</span>
                <span className="prop-value">{dict.landGridValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.governanceLabel}</span>
                <span className="prop-value">{dict.governanceValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.mintPrice}</span>
                <span className="prop-value">{dict.mintPriceValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.pioneerReward}</span>
                <span className="prop-value">{dict.pioneerRewardValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.revenueSplit}</span>
                <span className="prop-value">{dict.revenueSplitValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.balanceCap}</span>
                <span className="prop-value">{dict.balanceCapValue}</span>
              </div>
              <div className="prop-item">
                <span className="prop-label">{dict.adminMintCap}</span>
                <span className="prop-value">{dict.adminMintCapValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

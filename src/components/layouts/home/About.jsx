import React from "react";
//assets
import aboutCardData from "../../../assets/fake-data/data-aboutcard";
import AboutCard from "./AboutCard";
function About() {
  return (
    <div id="about" className="about">
      <div className="about_seperator">
        <div className="about_left" data-aos-delay="500" data-aos="zoom-out-up">
          <AboutCard data={aboutCardData} />
        </div>
        <div className="about_right" data-aos="fade-up">
          <h4 className="about_title">妻ステーションへようこそ</h4>
          <h2 className="about_title2">
            Welcome to <br /> Waifustation
          </h2>
          <p className="about_desc">
            Waifustation is a new NFT infrastructure consisting of virtual
            gachapon arcades built across multiple realities, including
            metaverses, VR/AR, web2, and the physical world. Our goal is to
            provide users a chance to obtain their favorite NFTs at a fractional
            cost via fun gamified experiences. The Waifustation DAO, governed by
            Waifustation NFT owners, allows the community to take part in
            decision making and steer the direction of the project as we expand
            further into new frontiers.
          </p>
          <div className="btn-div">
            <a href="/documents/WaifustationEN.pdf" target="__blank">
              <button className="about_buy">Whitepaper</button>
            </a>
            <a href="/documents/WaifustationCN.pdf" target="__blank">
              <button className="about_create" style={{ marginLeft: "20px" }}>
                计划书
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

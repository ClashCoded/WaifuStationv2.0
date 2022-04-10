import React from "react"
import img3 from "../../../assets/images/home/Images/iridescent.jpg"
import smallLogo from "../../../assets/images/home/Images/about-logo.png"
//assets
function Governance() {
  return (
    <div id="governance" className="governance">
        <div className="about_seperator">
      <div data-aos="fade-up" className="governance_right">
        <h4 className="about_title">ガバナンス</h4>
        <h2 className="governance_title2">Governance</h2>
        <p className="governance_desc">
          Waifustation is a new DAO-governed NFT infrastructure consisting of
          virtual gachapon arcade storefronts built across multiple metaverses,
          including Sandbox, Decentraland, Matrix World, and others voted by the
          community. Our custom gachapon machines collect NFTs from various
          sources and redistributes them to users of the metaverse at a fixed
          price with different probabilities for obtaining different NFTs. As a
          Waifustation NFT owner, you are entitled to a portion of gachapon
          revenue paid in ETH. The goal of Waifustation is to continuously
          expand our network of gachapon arcades across all metaverses and let
          the community steer the direction of the project via the DAO.
        </p>
        {/* <div className="btn-div">
          <button className="hero_buy">Whitepaper</button>
          <button className="hero_create">计划书</button>
        </div> */}
      </div>
      <div data-aos="fade-up" className="governance_left">
        <div className="card-mine-gov big_card-mine">
          <img
            data-aos="zoom-out-up"
            className="absolute-image"
            data-aos-delay="500"
            src={smallLogo}
            alt=""
          />
          <img className="card-mine-img big_img" src={img3} alt="..." />
          <p className="card-mine-title-gov">Waifu</p>
          <div className="card-mine-lower-gov">
            <p className="card-mine-lower-number-gov">#???</p>
            <p className="card-mine-lower-rarity-gov">Iridescent</p>
          </div>
        </div>
      </div>
      </div>
      <svg class="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--background-color2)"></path></svg>
    </div>
  )
}

export default Governance

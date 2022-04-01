import React from "react"
import img3 from "../../../assets/images/home/Images/iridescent.jpg"
import smallLogo from "../../../assets/images/home/Images/about-logo.png"
//assets
function Governance() {
  return (
    <div id="governance" className="governance">
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
  )
}

export default Governance

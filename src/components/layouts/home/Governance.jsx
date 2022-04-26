import React from "react";
import iridescent from "../../../assets/images/home/Images/iridescent.jpg"
import smallLogo from "../../../assets/images/home/Images/about-logo.png";
//assets
function Governance() {
  return (
    <div id="governance" className="governance">
      <div className="about_seperator">
        <div data-aos="fade-up" className="governance_right">
          <h4 className="about_title">ガバナンス</h4>
          <h2 className="governance_title2">Governance</h2>
          <p className="governance_desc">
            Waifustation DAO is governed by a collection of 8888 algorithmically
            drawn waifu NFTs. Each NFT is a unique 1 of 1 waifu that represents
            membership and ownership in Waifustation. By owning a waifustation
            NFT, you gain access to exclusive members-only giveaways, raffles,
            airdrops, alpha, and more. Waifustation NFT owners also receive a
            portion of earnings made by our network of gachapon arcades.
          </p>
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
            <img className="card-mine-img big_img" style={{marginTop: "0.5rem", marginBottom: "0"}} src={iridescent} alt="..." />
            <p className="card-mine-title-gov">Waifu</p>
            <div className="card-mine-lower-gov">
              <p className="card-mine-lower-number-gov">#???</p>
              <p className="card-mine-lower-rarity-gov">Iridescent</p>
            </div>
          </div>
        </div>
      </div>
      <svg
        class="wave-qsoVIt"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          class="wavePath-22lfEN"
          d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
          fill="var(--background-color2)"
        ></path>
      </svg>
    </div>
  );
}

export default Governance;

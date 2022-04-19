import React from "react";
import opensea from "../../../assets/images/home/Powered/opensea.png";
import rarible from "../../../assets/images/home/Powered/rarible.png";
import looksrare from "../../../assets/images/home/Powered/looksrare.png";
import crunchyroll from "../../../assets/images/home/Powered/crunchyroll.png"
import playstation from "../../../assets/images/home/Powered/playstation.png"
import ana from "../../../assets/images/home/Powered/ANA.png"
import arweave from "../../../assets/images/home/Powered/arweave.png";
import cybertruck from "../../../assets/images/home/Powered/cybertruck.png";
import decentraland from "../../../assets/images/home/Powered/decentraland.png";
import gatebox from "../../../assets/images/home/Powered/gatebox.png";
import kyotoanimation from "../../../assets/images/home/Powered/kyotoanimation.png";
import nvidia from "../../../assets/images/home/Powered/nvidia.png";
import sandbox from "../../../assets/images/home/Powered/sandbox.png";
import somnium from "../../../assets/images/home/Powered/somnium.png";
import matrix from "../../../assets/images/home/Powered/matrix.png";
import partner1 from "../../../assets/images/home/Powered/partners (2).png";
import bgpowered from "../../../assets/images/home/Images/background.jpg";


function Powered() {
  return (
    <div className="powered">
              <svg class="wave-poweredby" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{overflow: "visible"}} viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" fill="var(--background-color2)"></path></svg>
    <h4 className="powered_title" data-aos="fade-up">パートナー</h4>
    <h1 data-aos="fade-up" className="partners-h1">Partners</h1>
    <div data-aos="fade-up" data-aos-delay="300" className="power_grid">
    <img src={partner1} alt="" className="power_img" />
    <img src={partner1} alt="" className="power_img" />
    <img src={partner1} alt="" className="power_img" />
    </div>
      <h1 data-aos="fade-up" className="powered-by-title">Powered By</h1>
      <div data-aos="fade-up" data-aos-delay="300" className="power_grid" style={{paddingBottom: 0}}>
        <img src={rarible} alt="" className="power_img" />
        <img src={looksrare} alt="" className="power_img" />
        <img src={opensea} alt="" className="power_img" />
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="power_grid">

        <img src={ana} alt="" className="power_img" />
        <img src={gatebox} alt="" className="power_img" />
        <img src={nvidia} alt="" className="power_img" />

        <img src={kyotoanimation} alt="" className="power_img" />
        <img src={playstation} alt="" className="power_img" />
        <img src={crunchyroll} alt="" className="power_img" />

        <img src={sandbox} alt="" className="power_img" />
        <img src={decentraland} alt="" className="power_img" />
     
        <img src={matrix} alt="" className="power_img" />
        <img src={somnium} alt="" className="power_img" />
        </div>
      <svg class="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--background-color1)"></path></svg>
    </div>
  );
}

export default Powered;

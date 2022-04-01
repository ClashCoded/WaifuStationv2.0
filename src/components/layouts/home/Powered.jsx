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
import partner1 from "../../../assets/images/home/Powered/partners (2).png"


function Powered() {
  return (
    <div className="powered">
    <h4 className="about_title" data-aos="fade-up">パートナー</h4>
    <h1 data-aos="fade-up" className="partners-h1">Partners</h1>
    <div data-aos="fade-up" data-aos-delay="300" className="power_grid">
    <img src={partner1} alt="" className="power_img" />
    <img src={partner1} alt="" className="power_img" />
    <img src={partner1} alt="" className="power_img" />
    </div>
      <h1 data-aos="fade-up" className="powered-by-title">Powered By</h1>
      <div data-aos="fade-up" data-aos-delay="300" className="power_grid">
        <img src={cybertruck} alt="" className="power_img" />
        <img src={ana} alt="" className="power_img" />
        <img src={gatebox} alt="" className="power_img" />
        <img src={nvidia} alt="" className="power_img" />

        <img src={kyotoanimation} alt="" className="power_img" />
        <img src={playstation} alt="" className="power_img" />
        <img src={crunchyroll} alt="" className="power_img" />
        <img src={arweave} alt="" className="power_img" />

        <img src={sandbox} alt="" className="power_img" />
        <img src={decentraland} alt="" className="power_img" />
        <img src={somnium} alt="" className="power_img" />
        <img src={matrix} alt="" className="power_img" />
        

        <img src={opensea} alt="" className="power_img" />
        <img src={looksrare} alt="" className="power_img" />
        <img src={rarible} alt="" className="power_img" />
      </div>
    </div>
  );
}

export default Powered;

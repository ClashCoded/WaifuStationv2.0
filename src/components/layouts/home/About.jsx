import React from "react"
//assets
import aboutCardData from "../../../assets/fake-data/data-aboutcard"
import AboutCard from "./AboutCard"
function About() {
  return (
    <div id="about" className="about">
    <div className="about_seperator">
      <div className="about_left" data-aos-delay="500" data-aos="zoom-out-up">
         <AboutCard data={aboutCardData}/>
      </div>
      <div className="about_right" data-aos="fade-up">
        <h4 className="about_title">妻ステーションへようこそ</h4>
        <h2 className="about_title2">
          Welcome to <br /> Waifustation
        </h2>
        <p className="about_desc">
          Waifustation is a collection of 8888 algorithmically drawn waifu NFTs.
          Each NFT is a unique 1 of 1 waifu that represents membership and
          unlimited metaverse ownership in Waifustation. By owning a waifustation NFT,
          you gain access to exclusive members-only giveaways, raffles,
          airdrops, gachapon ownership, and more.
        </p>
        <div className="btn-div">
          <a href="/documents/WaifustationEN.pdf" target="__blank"><button className="about_buy">Whitepaper</button></a>
          <a href="/documents/WaifustationCN.pdf" target="__blank"><button className="about_create" style={{marginLeft:"20px"}}>计划书</button></a>
        </div>
      </div>
      </div>
      <svg class="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--background-color2)"></path></svg>
    </div>
  )
}

export default About

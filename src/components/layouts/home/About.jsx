import React from "react"
//assets
import aboutCardData from "../../../assets/fake-data/data-aboutcard"
import AboutCard from "./AboutCard"
function About() {
  return (
    <div id="about" className="about">
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
  )
}

export default About

import React, { useState } from "react"
import img from "../../../assets/images/home/Images/fair-launch.png"
import img2 from "../../../assets/images/home/Images/good-cause.png"
import img3 from "../../../assets/images/home/Images/win-prizes.png"
import img4 from "../../../assets/images/home/Images/unique-art.png"
import img5 from "../../../assets/images/home/Images/make-history.png"
import img6 from "../../../assets/images/home/Images/royalties.png"
import img7 from "../../../assets/images/home/Images/ownership.png"
import img8 from "../../../assets/images/home/Images/limited.png"
import circle from "../../../assets/images/home/Images/circle2.png"
import shape1 from "../../../assets/images/backgroup-secsion/bg-gradient1.png"
import shape2 from "../../../assets/images/backgroup-secsion/bg-gradient2.png"
import shape3 from "../../../assets/images/backgroup-secsion/bg-gradient3.png"
import imgbg from "../../../assets/images/backgroup-secsion/img_bg_page_title.jpg"
function Perk() {

  // const [dataTab] = useState([
  //   {
  //     id: 1,
  //     title: "Round 1",
  //   },
  //   {
  //     id: 2,
  //     title: "Round 2",
  //   },
  //   {
  //     id: 3,
  //     title: "Round 3",
  //   },
  //   {
  //     id: 4,
  //     title: "Round 4",
  //   },
  // ]);
  // const [dataPanel] = useState([
  //   {
  //     id: 1,
  //     dataContent: [
  //       {
  //         id: 1,
  //         title: "Playable A P2E NFT Fantasy Sports Platform",
  //         content:
  //           "The launch includes 3 rounds: Community Presale, Partner Presale, Public Sale. No bonding curve.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     dataContent: [
  //       {
  //         id: 2,
  //         title: "Playable A P2E NFT Fantasy Sports Platform",
  //         content:
  //           " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     dataContent: [
  //       {
  //         id: 3,
  //         title: "Playable A P2E NFT Fantasy Sports Platform",
  //         content:
  //           " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     dataContent: [
  //       {
  //         id: 4,
  //         title: "Playable A P2E NFT Fantasy Sports Platform",
  //         content:
  //           " al;skdfjl;kasjdf;laksdfjl;a jasdfljalksdfjl;askdfjalk sdfjkasdhfklasdjfkla jsdflkajsdflaksjhdf ahsdf ksadhgklhdfksdhgkjahdgfklahf alksdhf klashdgjkahsdgklahsdglka hsdgkljhaskdljghlaksdhflkjfhkslahfklasjd hfklasdhflkjashdfkjl asglaskg hlkasjhglkjasdh flkashdflkahsfjkl",
  //       },
  //     ],
  //   },
  // ]);
  
  // const clickHandler = (e) => {
  //   const mobile = window.innerWidth;
  //   if (mobile <= 1000) {
  //     if (document.querySelector(".open_hidden") !== null) {
  //       document.querySelector(".open_hidden").classList.remove("open_hidden");
  //       document.querySelector(".translate_y").classList.remove("translate_y");
  //     }
  //     e.target.classList.add("translate_y");
  //     e.target.lastChild.classList.add("open_hidden");
  //   }
  // };
  return (
    <div id="perk" className="perk">
    <div className="flat-title-page" style={{backgroundImage: `url(${imgbg})`, padding: "0"}}>
    <div className="overlay"></div>
    <svg class="wave-poweredby" style={{overflow: "visible"}} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--background-color2)"></path></svg>
        <img className="bgr-gradient gradient1" src={shape1} alt="Waifu" />
        <img className="bgr-gradient gradient2" src={shape2} alt="Waifu" />
        <img className="bgr-gradient gradient3" src={shape3} alt="Waifu" />
        <div className="shape item-w-16"></div>
        <div className="shape item-w-22"></div>
        <div className="shape item-w-32"></div>
        <div className="shape item-w-48"></div>
        <div className="shape style2 item-w-51"></div>
        <div className="shape style2 item-w-51 position2"></div>
        <div className="shape item-w-68"></div>

      <h4 className="perk_title" data-aos="fade-up">
        利点
      </h4>
      <h1 className="perk_head" data-aos="fade-up">
        Benefits
      </h1>
      <p className="perk_p" data-aos="fade-up">
        Learn more about the perk features below!
      </p>
      <div className="perk_grid">
        <img
          data-aos="fade-down"
          data-aos-delay="600"
          src={circle}
          alt=""
          style={{opacity: 0}}
          className="circle-img"
        />
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="perk-div perk_number1"
        >
          <div className="perk_left">
            <h1>Fair Launch</h1>
            <p className="hover-p">
              The launch includes 3 rounds: Community Presale, Partner Presale,
              Public Sale. No bonding curve.
            </p>
          </div>
          <div className="perk_right">
            <img src={img} alt="" className="perk_img" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="perk-div perk_number2"
        >
          <div className="perk_left">
            <h1>Win Prizes</h1>
            <p className="hover-p">
              Each waifu NFT is a ticket to participate in each Prize Lottery
              draw.
            </p>
          </div>
          <div className="perk_right">
            <img src={img3} alt="" className="perk_img" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="perk-div perk_number3"
        >
          <div className="perk_left">
            <h1>Limited</h1>
            <p className="hover-p">
              Only a total of 8,888 waifus will ever be minted into existence,
              making them super rare. 8 color rarities gives you a chance to
              mint an extra rare one!
            </p>
          </div>
          <div className="perk_right">
            <img src={img8} alt="" className="perk_img" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="perk-div perk_number4"
        >
          <div className="perk_left">
            <h1>Make History</h1>
            <p className="hover-p">
              All Waifustation NFT owners will forever be engraved in history
              via Waifustation storefronts within metaverses such as Sandbox,
              Decentraland, Matrix World, and more.
            </p>
          </div>
          <div className="perk_right">
            <img src={img5} alt="" className="perk_img" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="perk-div perk_number5"
        >
          <div className="perk_left">
            <h1>Unique Art</h1>
            <p className="hover-p">
              Each NFT waifu is a uniquely designed 1 of 1 piece of artwork. No
              two waifus are the same!
            </p>
          </div>
          <div className="perk_right">
            <img src={img4} alt="" className="perk_img" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="perk-div perk_number6"
        >
          <div className="perk_left">
            <h1>Good Cause</h1>
            <p className="hover-p">
              Upon the completion of our launch, 10 ETH will be donated to Kyoto
              Animation to support creators and commemorate the 2019 tragedy.
            </p>
          </div>
          <div className="perk_right">
            <img src={img2} alt="" className="perk_img" />
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="perk-div perk_number7"
        >
          <div className="perk_left">
            <h1>Ownership</h1>
            <p className="hover-p">
              All waifu NFTs come with full commercial usage rights. Do as you
              please with your waifus!
            </p>
          </div>
          <div className="perk_right">
            <img src={img7} alt="" className="perk_img" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="perk-div perk_number8"
        >
          <div className="perk_left">
            <h1>Royalties</h1>
            <p className="hover-p">
              NFT owners are entitled to a portion of gachapon revenue across
              all metaverses.
            </p>
          </div>
          <div className="perk_right">
            <img src={img6} alt="" className="perk_img" />
          </div>
        </div>
        </div>
        <svg class="wave-qsoVIt"  style={{overflow: "visible"}} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--background-color1)"></path></svg>
        </div>
    
    </div>
  )
}

export default Perk

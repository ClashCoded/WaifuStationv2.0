import React from "react"
import img from "../../../assets/images/home/Images/fair-launch.png"
import img2 from "../../../assets/images/home/Images/good-cause.png"
import img3 from "../../../assets/images/home/Images/win-prizes.png"
import img4 from "../../../assets/images/home/Images/unique-art.png"
import img5 from "../../../assets/images/home/Images/make-history.png"
import img6 from "../../../assets/images/home/Images/royalties.png"
import img7 from "../../../assets/images/home/Images/ownership.png"
import img8 from "../../../assets/images/home/Images/limited.png"
import circle from "../../../assets/images/home/Images/circle.png"
function Collection() {
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
    <div id="collection" className="collection">
      <h4 className="about_title" data-aos="fade-up">
        利点
      </h4>
      <h1 className="collection_head" data-aos="fade-up">
        Benefits
      </h1>
      <p className="collection_p" data-aos="fade-up">
        Learn more about the collection features below!
      </p>
      <div className="collection_grid">
        <img
          data-aos="fade-down"
          data-aos-delay="600"
          src={circle}
          alt=""
          className="circle-img"
        />
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="collect-div number1"
        >
          <div className="collect_left">
            <h1>Fair Launch</h1>
            <p className="hover-p">
              The launch includes 3 rounds: Community Presale, Partner Presale,
              Public Sale. No bonding curve.
            </p>
          </div>
          <div className="collect_right">
            <img src={img} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="collect-div number2"
        >
          <div className="collect_left">
            <h1>Win Prizes</h1>
            <p className="hover-p">
              Each waifu NFT is a ticket to participate in each Prize Lottery
              draw.
            </p>
          </div>
          <div className="collect_right">
            <img src={img3} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="collect-div number3"
        >
          <div className="collect_left">
            <h1>Limited</h1>
            <p className="hover-p">
              Only a total of 8,888 waifus will ever be minted into existence,
              making them super rare. 8 color rarities gives you a chance to
              mint an extra rare one!
            </p>
          </div>
          <div className="collect_right">
            <img src={img8} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="collect-div number4"
        >
          <div className="collect_left">
            <h1>Make History</h1>
            <p className="hover-p">
              All Waifustation NFT owners will forever be engraved in history
              via Waifustation storefronts within metaverses such as Sandbox,
              Decentraland, Matrix World, and more.
            </p>
          </div>
          <div className="collect_right">
            <img src={img5} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="collect-div number5"
        >
          <div className="collect_left">
            <h1>Unique Art</h1>
            <p className="hover-p">
              Each NFT waifu is a uniquely designed 1 of 1 piece of artwork. No
              two waifus are the same!
            </p>
          </div>
          <div className="collect_right">
            <img src={img4} alt="" className="collect_img" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="collect-div number6"
        >
          <div className="collect_left">
            <h1>Good Cause</h1>
            <p className="hover-p">
              Upon the completion of our launch, 10 ETH will be donated to Kyoto
              Animation to support creators and commemorate the 2019 tragedy.
            </p>
          </div>
          <div className="collect_right">
            <img src={img2} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="collect-div number7"
        >
          <div className="collect_left">
            <h1>Ownership</h1>
            <p className="hover-p">
              All waifu NFTs come with full commercial usage rights. Do as you
              please with your waifus!
            </p>
          </div>
          <div className="collect_right">
            <img src={img7} alt="" className="collect_img" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="collect-div number8"
        >
          <div className="collect_left">
            <h1>Royalties</h1>
            <p className="hover-p">
              {/* 50% of ETH obtained from all gachapon machines will be
              continuously airdropped to the NFT owners. */}
              NFT owners are entitled to a portion of gachapon revenue across
              all metaverses.
            </p>
          </div>
          <div className="collect_right">
            <img src={img6} alt="" className="collect_img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection

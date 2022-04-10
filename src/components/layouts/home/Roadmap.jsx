import React from "react"
import bg from "../../../assets/images/home/Images/roadmap-bg.jpg"
import launch from "../../../assets/images/home/Images/launch2.png"
import q4 from "../../../assets/images/home/Images/q4.png"
import q2 from "../../../assets/images/home/Images/q2.png"
import q3 from "../../../assets/images/home/Images/q3.png"
import beyond from "../../../assets/images/home/Images/beyond.png"
function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <h4 className="about_title" >ロードマップ</h4>
      <h1 data-aos="fade-down">RoadMap</h1>
      <div className="roadmap-image">
        <img
          data-aos-delay="200"
          data-aos="fade-down"
          className="roadmap-bg"
          src={bg}
          alt=""
        />
        <div
          data-aos-delay="300"
          data-aos="fade-down"
          className="pointer-div pointer-div1"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="350"
              src={launch}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Launch</h4>
            <p>• Waifu Auctions</p>
            <p>• Spring Drop</p>
          </div>
        </div>
        <div
          data-aos-delay="400"
          data-aos="fade-down"
          className="pointer-div pointer-div2"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="450"
              src={q2}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Q2 2022</h4>
            <p>
              • Summer Drop
              <br /> • Metaverse storefronts
              <br /> • Prize Lottery
            </p>
          </div>
        </div>
        <div
          data-aos-delay="500"
          data-aos="fade-down"
          className="pointer-div pointer-div3"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="550"
              src={q3}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Q3 2022</h4>
            <p>
              • Fall Drop
              <br />• Community-owned gachapons
              <br />• Kyoto Animation Donation
            </p>
          </div>
        </div>
        <div
          data-aos-delay="600"
          data-aos="fade-down"
          className="pointer-div pointer-div4"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="650"
              src={q4}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Q4 2022</h4>
            <p>
              • Winter Drop
              <br /> • User-owned gachapons
              <br /> • Special Event
            </p>
          </div>
        </div>
        <div
          data-aos-delay="700"
          data-aos="fade-down"
          className="pointer-div pointer-div5"
        >
          <div className="left-pointer2">
            <img
              data-aos="zoom-in"
              data-aos-delay="750"
              src={beyond}
              alt=""
              className="pointer-img"
            />
          </div>
          <div className="right-pointer">
            <h4 className="roadmap-title">Beyond</h4>
            <p>
              • 2023 Roadmap
              <br />
              • Waifustation DAO
              <br />
              • Multi-chain
              <br />
              • Multiverse Expansion
            </p>
          </div>
        </div>
      </div>
      <svg class="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path class="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="var(--background-color1)"></path></svg>
    </div>
  )
}

export default Roadmap

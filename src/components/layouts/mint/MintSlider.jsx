import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import TimerxMint from "../timer/timerXMinting";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import MintBar from "../timer/MintBar";
import InputButton from "./InputButton";
import Web3 from "web3";
import img1 from "../../../assets/images/box-item/img_item1.png";
import img2 from "../../../assets/images/box-item/img_item2.png";
import img3 from "../../../assets/images/box-item/img_item3.png";
import img4 from "../../../assets/images/box-item/img_item4.png";
import img5 from "../../../assets/images/box-item/img_item5.png";
import img6 from "../../../assets/images/box-item/img_item6.png";
import img7 from "../../../assets/images/box-item/img_item7.png";
import img8 from "../../../assets/images/box-item/img_item8.png";
import { useWeb3React } from "@web3-react/core";
import useLayerZero from "../../../contracts/useLayerZero";
import styled from "styled-components";
// import shape1 from '../../../assets/images/backgroup-secsion/bg-gradient1.png'
// import shape2 from '../../../assets/images/backgroup-secsion/bg-gradient2.png'
// import shape3 from '../../../assets/images/backgroup-secsion/bg-gradient3.png'

const MintSlider = () => {
  // const [mintAmount, setMintAmout] = useState(0);
  // const contract = useLayerZero();
  // const { account, chainId } = useWeb3React();

  // const MAX_MINT = 3;
  // const SUPPORTED_CHAINS = {
  //     1: "Ethereum",
  //     3: "Ropsten",
  //     4: "Rinkeby",
  //     137: "Polygon Mainnet",
  //     80001: "Polygon Testnet",
  // };

  // const mintNft = async () => {
  //     if (!SUPPORTED_CHAINS[chainId]) {
  //         alert("Selected chain not supported!");
  //         return;
  //     }
  //     if (mintAmount <= 0 || mintAmount > MAX_MINT) {
  //         alert(`Please enter mint amount between 1-${MAX_MINT}`);
  //         return;
  //     }

  //     await contract.methods
  //         .mint(mintAmount)
  //         .send({ from: Web3.utils.toChecksumAddress(account) });
  // };
  return (
    <div>
      <section className="flat-title-page style3 mainslider">
        {/* <img className="bgr-gradient gradient1" src={shape1} alt="Waifu" />
                <img className="bgr-gradient gradient2" src={shape2} alt="Waifu" />
                <img className="bgr-gradient gradient3" src={shape3} alt="Waifu" /> */}
        <div className="overlay"></div>
        <div className="themesflat-container ">
          <div className="wrap-heading flat-slider flex">
            <div className="content mint-content-section">
              <h2 className="heading mt-15" style={{ textAlign: "center" }}>
                Waifustation
              </h2>
              <h1 className="heading mb-style" style={{ textAlign: "center" }}>
                <span className="tf-text s1">Minting</span>
              </h1>
              {/* <h1
                                className="heading"
                            >
                                in the multiverse
                            </h1> */}
              <p
                className="sub-heading mt-19 mb-40"
                style={{ textAlign: "center" }}
              >
                Participate in the founders drop!
              </p>
              <div style={{ marginTop: "8rem", width: "70%", marginLeft:"auto", marginRight:"auto"}}>
              <MintBar />
              </div>
              <div style={{ width: "90%", margin: "0 auto" }}>
                <TimerxMint />
              </div>
              {/* <InputButton count={mintAmount} setCount={setMintAmout} />
                            <div className="flat-bt-slider timer-container">
                                <Input2
                                    value={"Minting on " + SUPPORTED_CHAINS[chainId]}
                                    disabled
                                />
                                <button
                                    onClick={() => mintNft()}
                                    className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                    style={{borderRadius: "15px"}}
                                >
                                    <span>Mint</span>
                                </button>
                            </div> */}
            </div>
            <Swiper
              modules={[Autoplay]}
              direction={"vertical"}
              spaceBetween={25}
              slidesPerView="auto"
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2000}
            >
              <SwiperSlide>
                <img src={img1} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="Waifu" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Autoplay]}
              direction={"vertical"}
              spaceBetween={25}
              slidesPerView="auto"
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1800}
            >
              <SwiperSlide>
                <img src={img6} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="Waifu" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Autoplay]}
              direction={"vertical"}
              spaceBetween={25}
              slidesPerView="auto"
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={2200}
            >
              <SwiperSlide>
                <img src={img8} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img7} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img8} alt="Waifu" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="Waifu" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MintSlider;

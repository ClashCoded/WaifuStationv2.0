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

const MintSlider = () => {

  return (
    <div>
      <section className="flat-title-page style3 mainslider">
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

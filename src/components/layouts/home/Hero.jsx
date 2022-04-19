import React, { useState, useRef, useEffect } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import MintBar from '../timer/MintBar';
import Timer from '../timer/timer';
import styled from 'styled-components';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../../assets/images/box-item/item-h5.1.png'
import img2 from '../../../assets/images/box-item/item-h5.2.png'
import img3 from '../../../assets/images/box-item/item-h5.3.png'
import img4 from '../../../assets/images/box-item/item-h5.4.png'
import img5 from '../../../assets/images/box-item/item-h5.5.png'
import img6 from '../../../assets/images/box-item/item-h5.6.png'
import img7 from '../../../assets/images/box-item/item-h5.7.png'
import img8 from '../../../assets/images/box-item/item-h5.8.png'
import img9 from '../../../assets/images/box-item/item-h5.9.png'
import img10 from '../../../assets/images/box-item/item-h5.10.png'
import img11 from '../../../assets/images/box-item/item-h5.11.png'
import img12 from '../../../assets/images/box-item/item-h5.12.png'
import img13 from '../../../assets/images/box-item/item-h5.13.png'

const MintBarContainer = styled.div`
    margin-top: 4rem;
    width: 70%;
`

const Hero = () => {

    const subtitle = 'Waifustation'
    const title = 'Community owned gachapon arcades'
    const title2 = " in the multiverse"
    const description = 'Participate in the founders drop'
    return (
        <section className="flat-title-page home5">
            <div className="overlay"></div>
            <div className="themesflat-container">
                <div className="wrap-heading flat-slider d-flex align-items-center">
                    <div className="content">
                        <h4 className="mg-bt-11"><span className="fill">{subtitle}</span></h4>
                        <h1 className="heading">{title}                                                                                      
                        </h1>	
                        <h1 className="heading">{title2}                                                                                      
                        </h1>
                        <p className="sub-heading mg-t-7 mg-bt-39">{description}
                        </p>
                        <Timer />
                        <MintBarContainer>
                        <MintBar />
                        </MintBarContainer>
                        <div className="flat-bt-slider style2 flex">
                            <Link to="/mint" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Mint
                            </span></Link>
                            {/* <a href="/explore-01" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Explore
                            </span></a> */}
                        </div>
                    </div>

                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView='auto'
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {2000}
                    >
                        <SwiperSlide><img src={img1} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img4} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img5} alt="Waifus" /></SwiperSlide>

                    </Swiper>
                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView='auto'
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {2100}
                    >
                        <SwiperSlide><img src={img6} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img7} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img8} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img9} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img10} alt="Waifus" /></SwiperSlide>

                    </Swiper>
                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView='auto'
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {2200}
                    >
                        <SwiperSlide><img src={img11} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img12} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img13} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img8} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img9} alt="Waifus" /></SwiperSlide>

                    </Swiper>
                    <Swiper
                        modules={[ Autoplay ]}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView='auto'
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed= {2000}
                        className="end"
                    >
                        <SwiperSlide><img src={img3} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img1} alt="Waifus" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="Waifus" /></SwiperSlide>

                    </Swiper>
                   
                    
                </div>
            </div>                           
        </section>
    );
}



export default Hero;

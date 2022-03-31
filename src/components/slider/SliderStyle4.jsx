import React  from 'react';
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import img1 from '../../assets/images/box-item/img_item1.png'
import img2 from '../../assets/images/box-item/img_item2.png'
import img3 from '../../assets/images/box-item/img_item3.png'
import img4 from '../../assets/images/box-item/img_item4.png'
import img5 from '../../assets/images/box-item/img_item5.png'
import img6 from '../../assets/images/box-item/img_item6.png'
import img7 from '../../assets/images/box-item/img_item7.png'
import img8 from '../../assets/images/box-item/img_item8.png'
import img9 from '../../assets/images/box-item/img_item9.png'
import shape1 from '../../assets/images/backgroup-secsion/bg-gradient1.png'
import shape2 from '../../assets/images/backgroup-secsion/bg-gradient2.png'
import shape3 from '../../assets/images/backgroup-secsion/bg-gradient3.png'

const SliderStyle4 = () => {
    
    return (
        <div>
            <section className="flat-title-page style3 mainslider">
                <img className="bgr-gradient gradient1" src={shape1} alt="Axies" />
                <img className="bgr-gradient gradient2" src={shape2} alt="Axies" />
                <img className="bgr-gradient gradient3" src={shape3} alt="Axies" />
                <div className="overlay"></div>
                <div className="themesflat-container ">
                        <div className="wrap-heading flat-slider flex">
                            <div className="content">
                                <h2 className="heading mt-15">Discover and find
                                </h2>	
                                <h1 className="heading mb-style"><span className="tf-text s1">Gachapons</span>                                          
                                </h1>
                                <h1 className="heading">Filled With NFTs</h1>
                                <p className="sub-heading mt-19 mb-40">Marketplace for Gachapons and NFTs
                                </p>
                                <div className="flat-bt-slider flex style2">
                                    <Link to="/explore-01" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                    </span></Link>
                                    <Link to="/create-item" className="sc-button header-slider style style-1 note fl-button pri-1"><span>New Release
                                    </span></Link>
                                </div>
                            </div>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2000}
                            >
                            <div className="swiper-wrapper">
                                <SwiperSlide><img src={img1} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Waifus" /></SwiperSlide>
                            </div>
                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {1800}
                            >
                             <div className="swiper-wrapper">
                                <SwiperSlide><img src={img6} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img4} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img6} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img4} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img5} alt="Waifus" /></SwiperSlide>
                            </div>
                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2200}
                            >
                            <div className="swiper-wrapper">
                                <SwiperSlide><img src={img9} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img7} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img9} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img7} alt="Waifus" /></SwiperSlide>
                                <SwiperSlide><img src={img8} alt="Waifus" /></SwiperSlide>
                            </div>
                            </Swiper>
                        </div>
                        
                    </div>
            </section>
        </div>
    );
}


export default SliderStyle4;

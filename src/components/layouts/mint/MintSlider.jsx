import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper';
import Timer from '../timer/timer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Web3 from 'web3';
import img1 from '../../../assets/images/box-item/img_item1.png'
import img2 from '../../../assets/images/box-item/img_item2.png'
import img3 from '../../../assets/images/box-item/img_item3.png'
import { useWeb3React } from '@web3-react/core';
import useLayerZero from '../../../contracts/useLayerZero';
// import shape1 from '../../../assets/images/backgroup-secsion/bg-gradient1.png'
// import shape2 from '../../../assets/images/backgroup-secsion/bg-gradient2.png'
// import shape3 from '../../../assets/images/backgroup-secsion/bg-gradient3.png'

const MintSlider = () => {
    const contract = useLayerZero(3) 
    // const { account } = useWeb3React()
    useEffect(() => {
    window.ethereum
    .request({ method: 'eth_accounts' })
    .then((account) => {console.log(account)})
    .catch((err) => {
    console.error(err);
  });
    }, [])
    
    const mintNft = async () => {
        const account = window.ethereum.selectedAddress
        console.log(account)
        const mintPrice = 1 * 10**18 
        const mintAmount = 1
        await contract.methods.mint(mintAmount).send({from:Web3.utils.toChecksumAddress(account)})
    }
    return (
        <div>
            <section className="flat-title-page style3 mainslider">
                {/* <img className="bgr-gradient gradient1" src={shape1} alt="Waifu" />
                <img className="bgr-gradient gradient2" src={shape2} alt="Waifu" />
                <img className="bgr-gradient gradient3" src={shape3} alt="Waifu" /> */}
                <div className="overlay"></div>
                <div className="themesflat-container ">
                        <div className="wrap-heading flat-slider flex">
                            <div className="content">
                                <h2 className="heading mt-15" style={{textAlign:"center"}}>Discover, find,
                                </h2>	
                                <h1 className="heading mb-style" style={{textAlign:"center"}}><span className="tf-text s1">Sell extraordinary</span>                                          
                                </h1>
                                <h1 className="heading" style={{textAlign:"center"}}>Gachapon NFTs</h1>
                                <p className="sub-heading mt-19 mb-40" style={{textAlign:"center"}}>Marketplace for Gachapon cllections non fungible token NFTs
                                </p>
                                <div  style={{width: "90%", margin: "0 auto"}} >
                                <Timer/>
                                </div>
                                <div className="flat-bt-slider flex style" >
                                    <button onClick={()=> mintNft()} className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Mint
                                    </span></button>
                                </div>
                            </div>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView='auto'
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2000}
                            >
                                <SwiperSlide><img src={img1} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Waifu" /></SwiperSlide>

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView='auto'
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {1800}
                            >
                                <SwiperSlide><img src={img3} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifu" /></SwiperSlide>

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={25}
                                slidesPerView='auto'
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed= {2200}
                            >
                                <SwiperSlide><img src={img2} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img3} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img2} alt="Waifu" /></SwiperSlide>
                                <SwiperSlide><img src={img1} alt="Waifu" /></SwiperSlide>

                            </Swiper>
                        </div>
                        
                    </div>
            </section>
        </div>
    );
}


export default MintSlider;

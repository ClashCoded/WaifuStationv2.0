import React from 'react';
import Header from '../components/header/HeaderStyle2';
import heroSliderData from '../assets/fake-data/data-gachahero';
import GachaHero from '../components/layouts/gacha/GachaHero';
import Gachapons from '../components/layouts/gacha/Gachapons';
import Footer from '../components/footer/Footer';



const Gacha = () => {
    return (
        <div className='home-2'>
            <Header />
            <GachaHero data={heroSliderData}/>
            <Gachapons />
            <Footer />
        </div>
    );
}

export default Gacha;

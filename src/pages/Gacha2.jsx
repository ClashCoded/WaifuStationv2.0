import React from 'react';
import Header from '../components/header/HeaderStyle2';
import Category from '../components/layouts/gacha2/Category';
import heroSliderData from '../assets/fake-data/data-slider-2';
import SliderStyle1 from '../components/slider/SliderStyle1';
import TodayPicks from '../components/layouts/gacha2/TodayPicks'
import todayPickData from '../assets/fake-data/data-today-pick';
import Footer from '../components/footer/Footer';



const Gacha2 = () => {
    return (
        <div className='home-2'>
            <Header />
            <SliderStyle1 data={heroSliderData} />
            <Category />
            <TodayPicks data={todayPickData} />
            <Footer />
        </div>
    );
}

export default Gacha2;
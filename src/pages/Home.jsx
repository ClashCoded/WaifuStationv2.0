import React from 'react';
import Header from '../components/header/HeaderStyle2';
import About from '../components/layouts/home/About';
import Collection from '../components/layouts/home/Collection';
import Governance from '../components/layouts/home/Governance';
import Roadmap from '../components/layouts/home/Roadmap';
import Powered from '../components/layouts/home/Powered';
import Gang from '../components/layouts/home/Gang';
import Footer from '../components/footer/Footer';
import SliderStyle2 from '../components/slider/SliderStyle2';
import heroSliderData from '../assets/fake-data/data-slider';

const Home = () => {
    return (
        <div className='home-5'>
            <Header />
            <SliderStyle2 data={heroSliderData} />
            <About />
            <Collection />
            <Governance />
            <Roadmap />
            <Powered />
            <Gang />
            <Footer />
        </div>
    );
}

export default Home;

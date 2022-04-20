import React from 'react';
import Header from '../components/header/HeaderStyle2';
import About from '../components/layouts/home/About';
import Perk from '../components/layouts/home/PerkTest';
import Governance from '../components/layouts/home/Governance';
import Roadmap from '../components/layouts/home/Roadmap';
import Powered from '../components/layouts/home/Powered';
import Gang from '../components/layouts/home/Gang';
import Footer from '../components/footer/Footer';
import Hero from '../components/layouts/home/Hero';
import heroSliderData from '../assets/fake-data/data-slider';

const Home = () => {
    return (
        <div className='home-5'>
            <Header />
            <Hero data={heroSliderData} />
            <About />
            <Perk />
            <Governance />
            <Roadmap />
            <Powered />
            <Gang />
            <Footer />
        </div>
    );
}

export default Home;

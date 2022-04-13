import React from 'react';
import Header from '../components/header/HeaderStyle2';
import MintSlider from "../components/layouts/mint/MintSlider"
import MintCollection from '../components/layouts/mint/MintCollection';
import Footer from '../components/footer/Footer';



const Mint = () => {
    return (
        <div className='home-7'>
            <Header />
            <MintSlider />
            <MintCollection />
            <Footer />
        </div>
    );
}

export default Mint;
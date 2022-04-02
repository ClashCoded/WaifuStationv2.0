import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import {   Routes , Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import routes from './pages/index'

function getLibrary(provider) {
    return new Web3(provider)
}

const App = () => {

    useEffect(() => {
        AOS.init({
          once: true,
        });
        let scrollRef = 0;

window.addEventListener('scroll', function() {
  // increase value up to 10, then refresh AOS
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});
      }, []);
    

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
</Web3ReactProvider>
    );
}

export default App;

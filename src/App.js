import './App.css';
import {   Routes , Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import routes from './pages/index'

function getLibrary(provider) {
    return new Web3(provider)
}

const App = () => {

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

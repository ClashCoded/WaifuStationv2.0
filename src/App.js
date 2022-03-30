import './App.css';
import {   Routes , Route } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import routes from './pages/index'

const moralisAppId = "R0iyVUllzbxv57nn0WLIlxW8Sz3fBB3YLtGKRc59";
const moralisServerURL = "https://ajg5parj7pae.usemoralis.com:2053/server";

const App = () => {

    return (
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
        <Routes >
            {
            routes.map((data,index) => (
                <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
      </Routes>
      </MoralisProvider>
    );
}

export default App;

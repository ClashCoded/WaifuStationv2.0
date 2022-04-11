// import Home01 from "./Home01";
// import Home02 from "./Home02";
// import Home03 from "./Home03";
// import Home04 from "./Home04";
// import Home05 from "./Home05";
// import Home06 from "./Home06";
// import Home07 from "./Home07";
import Home from "./Home";
import Gacha from "./Gacha";
import GachaDetails from "./GachaDetails";
// import Home08 from "./Home08";
// import Explore01 from "./Explore01";
// import Explore02 from "./Explore02";
// import Explore03 from "./Explore03";
// import Explore04 from "./Explore04";
// import LiveAuctions from "./LiveAuctions";
// import ItemDetails01 from "./ItemDetails01";
// import ItemDetails02 from "./ItemDetails02";
// import Activity01 from "./Activity01";
// import Activity02 from "./Activity02";
// import Blog from "./Blog";
// import BlogDetails from "./BlogDetails";
// import HelpCenter from "./HelpCenter";
// import Authors01 from "./Authors01";
// import Authors02 from "./Authors02";
// import WalletConnect from "./WalletConnect";
// import CreateItem from "./CreateItem";
// import EditProfile from "./EditProfile";
// import Ranking from "./Ranking";
// import Login from "./Login";
// import SignUp from "./SignUp";
// import NoResult from "./NoResult";
import FAQ from "./FAQ";
// import Contact01 from "./Contact01";
// import Contact02 from "./Contact02";


const routes = [
  { path: '/', component: <Home />},
  { path: '/gacha', component: <Gacha/>},
  { path: '/gacha-details', component: <GachaDetails/>},
  { path: '/faq', component: <FAQ />},
]

export default routes;
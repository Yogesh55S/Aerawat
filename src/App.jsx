import "./css/styles.css"
import Navbar from "./components/header";
//import Work from "./components/work";
import Content from "./components/content";
import FullScreenGrid from "./components/content2";
import MandalaCards from "./components/content3";
import FeaturedProducts from "./components/content4";
import RecentlyViewed from "./components/content5";
 import Footer from "./components/Footer";
const Aerawat =()=>{
  return <>
    <Navbar/>
    <Content/>
    <FullScreenGrid/>
    <MandalaCards/>
    <FeaturedProducts/>
    <RecentlyViewed/>
    <Footer/> 
    
  </>
}
export default Aerawat;
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./css/styles.css";
import Navbar from "./Landing-Page/header";
import Content from "./Landing-Page/content";
import FullScreenGrid from "./Landing-Page/content2";
import MandalaCards from "./Landing-Page/content3";
import FeaturedProducts from "./Landing-Page/content4";
import RecentlyViewed from "./Landing-Page/content5";
import Footer from "./Landing-Page/Footer";
import ProductDetail from "./Product-Page/product-overview";
import CartPage from "./Product-Page/cart";
const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHome && (
        <>
          <Content />
          <FullScreenGrid />
          <MandalaCards />
        </>
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
};

const Aerawat = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<><FeaturedProducts /><RecentlyViewed /></>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Aerawat;

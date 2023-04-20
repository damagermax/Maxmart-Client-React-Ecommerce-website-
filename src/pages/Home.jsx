import React from "react";
import Brands from "../component/Brands";
import Categories from "../component/Categories";
import Featured from "../component/Featured";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NewsLetter from "../component/NewsLetter";
import Services from "../component/Services";
import SpecialOffer from "../component/SpecialOffer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <Categories />
      <Featured />

      <Brands />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

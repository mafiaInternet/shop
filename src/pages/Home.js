import React from "react";
import Header from "../components/Header";
import Sale from "../components/Sale";
import FlashSale from "../components/FlashSale";
import ProductPortfolio from "../components/ProductPortfolio";
import ProductTrends from "../components/ProductTrends";
import Footer from "../components/Footer";
import ProductOfSchool from "../components/ProductOfSchool";
import BookPsychologySkill from "../components/BookPsychologySkill";

const Home = () => {
  return (
    <div className="home">
      <img className="img-top"
        style={{ width: "100%" }}
        src="/accest/SaleT3_Header_1263x60.jpg"
      ></img>
      <Header />
     <div className="container">
     <Sale />
      <FlashSale />
      <ProductPortfolio />
      <ProductTrends />
      <BookPsychologySkill/>
      <ProductOfSchool />
     </div>
      <Footer />
      
    </div>
  );
};

export default Home;

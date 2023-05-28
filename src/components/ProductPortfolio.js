import React, { useState } from "react";
import { productPortfolioDatas } from "../data/productPortfolio/productPortfolioData";
const ProductPortfolio = () => {
  const [datas] = useState(productPortfolioDatas)
  return (
    <div className="productPortfolio">
      <div className=" productPortfolio__content">
        <div className=" productPortfolio__content__header">
          <img src="/accest/productPortfolio/ico_menu_red.svg"></img>
          <h2>Danh mục sản phẩm</h2>
        </div>
        <div className="productPortfolio__content__body">

          {datas.map((data) => (
            <div className="productPortfolio__content__item" key={data.id}>
            <img className="img-fluid" src={data.image}></img>
            <h4>{data.title}</h4>
          </div>
          ))};
          
        </div>
      </div>
    </div>
  );
};

export default ProductPortfolio;

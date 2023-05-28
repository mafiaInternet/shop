import React, { Component, useState } from "react";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { productOfSchoolDatas } from "../data/productSchool/productSchoolsData";
const ProductOfSchool = () => {
  const [datas] = useState(productOfSchoolDatas);
  return (
    <div className="productOfSchool">
      <div className="productOfSchool__content">
        <Slider
          className="productOfSchool__slider"
          speed={500}
          slidesToShow={9}
          slidesToScrool={9}
        >
          {datas.map((data, index) => (
            <div className="productOfSchool__content__item" key={data.id}>
              <a>
                <img className="img-fluid" src={data.image}></img>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductOfSchool;

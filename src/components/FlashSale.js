import React, { Component, useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import { flashSaleDatas } from "../data/flashSale/flashSaleData";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const FlashSale = () => {
  
  
const [flashSaleData, setFlashSaleData] = useState(flashSaleDatas);


 
  
  // speed={500} slidesToScroll={4} slidesToShow={5}
  return (
    <div className="flashSale">
      <div className="flashSale__header">
          <img className="flashSale__header__icon" src="/accest/flaseSale/ico_flashsale@3x.png"></img>
          <span>FLASE SALE</span>
          <span>Bắt Đầu Trong</span>
      
      </div>
      <Slider
       {...settings} 
        className="flashSale__slider "
      >
        {flashSaleData.map((flashSale, index) => (
          <div className="flashSale__slider__item">
          <div className="flashSale__slidder_item__img">
          <img className="img-fluid" src={flashSale.image}></img>

          </div>
          <div className="flashSale__slider__item__info">
            <h4 className="flashSale__slider__item__info__title">
              {flashSale.title}
            </h4>
            <p className="flashSale__slider__item__info__priceNew">{flashSale.priceNew}</p>
            <p className="flashSale__slider__item__info__priceOld">{flashSale.priceOld}</p>
            <div class="flashSale__slider__item__info__progress progress">
              <span>Đã bán</span>
              <div
                class="progress-bar"
                role="progressbar"
                style={{width: "5%"}}
                aria-valuenow="50"
                aria-valuemin="3"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        ))}
        
      </Slider>
      <div className=" flashSale__button">

        <button className="btn btn-button-orange">Xem Thêm</button>
      </div>
    </div>
    
   
  );

};

export default FlashSale



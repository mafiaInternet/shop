import React, { useState } from "react";
import Slider from "react-slick";
import {dataPychologys} from "../data/psychologySkill/dataPychology";
import {AiFillStar} from "react-icons/ai"
const BookPsychologySkill = () => {
  const [datas] = useState(dataPychologys) 
  // const [goodPrices] = useState(goodPriceDatas);
  return (
    <div className="bookPsychologySkill">
      <div className="bookPsychologySkill__content">
        <h5 className="bookPsychologySkill__content__title">
          tâm lý - kỹ năng
        </h5>
        <ul
          class="nav nav-pills mb-3 bookPsychologySkill__content__nav"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active show"
              id='pysChology-1-tab'
              data-bs-toggle="pill"
              data-bs-target='#pysChology-1'
              type="button"
              role="tab"
              aria-controls='pysChology-1'
              aria-selected="true"
            >
              Giá tốt
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id='pysChology-2-tab'
              data-bs-toggle="pill"
              data-bs-target="#pysChology-2"
              type="button"
              role="tab"
              aria-controls='pysChology-2'
              aria-selected="false"
            >
              Bán chạy
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id='pysChology-3-tab'
              data-bs-toggle="pill"
              data-bs-target='#pysChology-3'
              type="button"
              role="tab"
              aria-controls='pysChology-3'
              aria-selected="false"
            >
              Sách mới
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id='pysChology-4-tab'
              data-bs-toggle="pill"
              data-bs-target='#pysChology-4'
              type="button"
              role="tab"
              aria-controls='pysChology-4'
              aria-selected="false"
            >
              Tâm lý
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id='pysChology-5-tab'
              data-bs-toggle="pill"
              data-bs-target='#pysChology-5'
              type="button"
              role="tab"
              aria-controls='pysChology-5'
              aria-selected="false"
            >
              Phong cách sống
            </button>
          </li>
        </ul>
        <hr></hr>
        <div
          class="tab-content bookPsychologySkill__content__product"
          id="pills-tabContent"
        >
          {datas.map((data, index) => (
            data.id === 'pysChology-1' ? 
            <div
            class="tab-pane fade show active"
            // id={`pills-${data.id}`}
            id='pysChology-1'
            role="tabpanel"
            // aria-labelledby={`pills-${data.id}-tab`}
            aria-labelledby='pysChology-1-tab'
            key={data.id}
          >
            <div className="row">
              <div className="col-4 bookPsychologySkill__content__product__left">
              <div className="bookPsychologySkill__content__product__left__img">
              <img className="img-fluid" src="/accest/PyschologySkill/BannerBlock10_TamLyKyNang_350x415.jpg"></img>
              </div>
              </div>
              <div className="col-8 bookPsychologySkill__content__product__right">
                
                <Slider speed={500} slidesToShow={2} slidesToScroll={1}>
                  {data.products.map((goodPrice, index) => (
                    <div>
                      <div
                        className="bookPsychologySkill__slider__item"
                        key={index}
                      >
                        <div className="bookPsychologySkill__slider__item__img">
                          <img
                            className="img-fluid"
                            src={goodPrice.image}
                          ></img>
                        </div>
                        <div className="bookPsychologySkill__slider__item__info">
                          <h4 className="bookPsychologySkill__slider__item__info__title">
                            {goodPrice.title}
                          </h4>
                          <p className="bookPsychologySkill__slider__item__info__price">
                            {goodPrice.price}
                          </p>
                          <p className="bookPsychologySkill__slider__item__info__star">
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                          </p>
                        </div>
                      </div>
                      <div
                        className="bookPsychologySkill__slider__item"
                        key={index}
                      >
                        <div className="bookPsychologySkill__slider__item__img">
                          <img
                            className="img-fluid"
                            src={goodPrice.image}
                          ></img>
                        </div>
                        <div className="bookPsychologySkill__slider__item__info">
                          <h4 className="bookPsychologySkill__slider__item__info__title">
                            {goodPrice.title}
                          </h4>
                          <p className="bookPsychologySkill__slider__item__info__price">
                            {goodPrice.price}
                          </p>
                          <p className="bookPsychologySkill__slider__item__info__star">
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                    <div className="bookPsychologySkill__content__product__right__button">
                    <button className="btn btn-button-transparent">Xem thêm</button>
                    </div>
              </div>
            </div>
          </div>
          :  <div
            class="tab-pane fade "
            // id={`pills-${data.id}`}
            id='pysChology-2'
            role="tabpanel"
            // aria-labelledby={`pills-${data.id}-tab`}
            aria-labelledby='pysChology-2-tab'
            key={data.id}
          >
            <div className="row">
              <div className="col-4 bookPsychologySkill__content__product__left">
              <div className="bookPsychologySkill__content__product__left__img">
              <img className="img-fluid" src="/accest/PyschologySkill/BannerBlock10_TamLyKyNang_350x415.jpg"></img>
              </div>
              </div>
              <div className="col-8 bookPsychologySkill__content__product__right">
                
                <Slider speed={500} slidesToShow={2} slidesToScroll={1}>
                  {data.products.map((goodPrice, index) => (
                    <div>
                      <div
                        className="bookPsychologySkill__slider__item"
                        key={index}
                      >
                        <div className="bookPsychologySkill__slider__item__img">
                          <img
                            className="img-fluid"
                            src={goodPrice.image}
                          ></img>
                        </div>
                        <div className="bookPsychologySkill__slider__item__info">
                          <h4 className="bookPsychologySkill__slider__item__info__title">
                            {goodPrice.title}
                          </h4>
                          <p className="bookPsychologySkill__slider__item__info__price">
                            {goodPrice.price}
                          </p>
                          <p className="bookPsychologySkill__slider__item__info__star">
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                          </p>
                        </div>
                      </div>
                      <div
                        className="bookPsychologySkill__slider__item"
                        key={index}
                      >
                        <div className="bookPsychologySkill__slider__item__img">
                          <img
                            className="img-fluid"
                            src={goodPrice.image}
                          ></img>
                        </div>
                        <div className="bookPsychologySkill__slider__item__info">
                          <h4 className="bookPsychologySkill__slider__item__info__title">
                            {goodPrice.title}
                          </h4>
                          <p className="bookPsychologySkill__slider__item__info__price">
                            {goodPrice.price}
                          </p>
                          <p className="bookPsychologySkill__slider__item__info__star">
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                            <AiFillStar size={20} color="silver"/>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                    <div className="bookPsychologySkill__content__product__right__button">
                    <button className="btn btn-button-transparent">Xem thêm</button>
                    </div>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default BookPsychologySkill;

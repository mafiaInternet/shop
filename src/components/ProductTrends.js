import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { productTrendsDayData } from "../data/productTrendsData/productTrendsDayData.js";
import { productTrendsHotData } from "../data/productTrendsData/productTrendsHotData.js";
import { productTrendsBestseSellerData } from "../data/productTrendsData/productTrendsBestseSellerData.js";
import { dataProductTrends } from "../data/productTrendsData/dataProductTrends.js";
import { Link } from "react-router-dom";
const ProductTrends = () => {
  const [productTrendsDay] = useState(productTrendsDayData);
  const [productTrendsHot] = useState(productTrendsHotData);
  const [productTrendsBestseSeller] = useState(productTrendsBestseSellerData);
  const [datas] = useState(dataProductTrends)

  return (
    <div className="productTrend ">
      <div className="productTrend__content">
        <div className="productTrend__content__header">
          <img src="/accest/productTrends/ico_dealhot.png"></img>
          <h2>xu hướng mua sắm</h2>
        </div>
        <div className="productTrend__content__container ">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active show"
                id='productTrend-1-tab'
                data-bs-toggle="pill"
                data-bs-target='#productTrend-1'
                type="button"
                role="tab"
                aria-controls='productTrend-1'
                aria-selected="true"
              >
                xu hướng theo ngày
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id='productTrend-2-tab'
                data-bs-toggle="pill"
                data-bs-target='#productTrend-2'
                type="button"
                role="tab"
                aria-controls='productTrend-2'
                aria-selected="false"
              >
                sách hot - giảm sốc
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id='productTrend-3-tab'
                data-bs-toggle="pill"
                data-bs-target='#productTrend-3'
                type="button"
                role="tab"
                aria-controls='productTrend-3'
                aria-selected="false"
              >
                bestseller ngoại văn
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
          {datas.map((data, index) => (
            data.id === 'productTrend-1' ? 
            <div
              class="tab-pane fade show active"
              id='productTrend-1'
              role="tabpanel"
              aria-labelledby='productTrend-1-tab'
            >
              <div className="productTrend__content__container">
                <div className="row">
                  {productTrendsDay.map((productTrend) => (
                    <div
                      className="col productTrend__content__container__item"
                      key={productTrend.id}
                    >
                      <div className="productTrend__content__container__item__img">
                        <Link to={`/detail`}>
                        <img
                          className="img-fluid"
                          src="/accest/productTrends/productTrends-day/8934974185581.jpg"
                        ></img>
                        </Link>
                      </div>
                      <div className="productTrend__content__container__item__info">
                        <h4 className="productTrend__content__container__item__info__title">
                          <Link to={`/detail`} style={{textDecoration: 'none', color: 'black'}}>
                          {productTrend.title}
                          </Link>
                        </h4>
                        <p className="productTrend__content__container__item__info__priceNew">
                          {productTrend.priceNew}
                        </p>
                        <p className="productTrend__content__container__item__info__priceOld">
                          {productTrend.priceOld}
                        </p>
                        <div className="productTrend__content__container__item__info__star">
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                        </div>
                        <div class="productTrend__content__container__item__info__progress progress">
                          <span>Đã bán</span>
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "5%" }}
                            aria-valuenow="50"
                            aria-valuemin="3"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <span className="productTrend__content__container__item__discount">
                        40%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" productTrend__button">
                <button className="btn btn-button-orange">Xem Thêm</button>
              </div>
            </div>
            :  <div
              class="tab-pane fade "
              id={data.id}
              role="tabpanel"
              aria-labelledby={`${data.id}-tab`}
            >
              <div className="productTrend__content__container">
                <div className="row">
                  {productTrendsDay.map((productTrend) => (
                    <div
                      className="col productTrend__content__container__item"
                      key={productTrend.id}
                    >
                      <div className="productTrend__content__container__item__img">
                        <Link to={`/detail`}>
                        <img
                          className="img-fluid"
                          src="/accest/productTrends/productTrends-day/8934974185581.jpg"
                        ></img>
                        </Link>
                      </div>
                      <div className="productTrend__content__container__item__info">
                        <h4 className="productTrend__content__container__item__info__title">
                          <Link to={`/detail`} style={{textDecoration: 'none', color: 'black'}}>
                          {productTrend.title}
                          </Link>
                        </h4>
                        <p className="productTrend__content__container__item__info__priceNew">
                          {productTrend.priceNew}
                        </p>
                        <p className="productTrend__content__container__item__info__priceOld">
                          {productTrend.priceOld}
                        </p>
                        <div className="productTrend__content__container__item__info__star">
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                          <AiFillStar size={15} color="silver" />
                        </div>
                        <div class="productTrend__content__container__item__info__progress progress">
                          <span>Đã bán</span>
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "5%" }}
                            aria-valuenow="50"
                            aria-valuemin="3"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <span className="productTrend__content__container__item__discount">
                        40%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" productTrend__button">
                <button className="btn btn-button-orange">Xem Thêm</button>
              </div>
            </div>
          ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTrends;

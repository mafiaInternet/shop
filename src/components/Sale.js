import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { saleDatas } from "../data/sale/saleData";
const Sale = () => {
  const [datas] = useState(saleDatas)
  return (
    <div className="sale">
      <div className="row sale__content ">
        <div className="row sale__content__top">
        <div className="col-12 col-xl-8 sale__content__top__left">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/accest/sale/sale-top/FahasaT4w2_mainbanner_Slide_840x320.jpg"
                  class="d-block w-100 img-fluid"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/accest/sale/sale-top/PLATINUM_NCC1980_T42023_Slide_840x320.png"
                  class="d-block w-100 img-fluid"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/accest/sale/sale-top/FAHASA_840x320potico.png"
                  class="d-block w-100 img-fluid"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/accest/sale/sale-top/Management_mainbanner_T4_840x320_1.jpg"
                  class="d-block w-100 img-fluid"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              {/* <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span> */}
              <GrFormPrevious class="carousel-control-prev-icon" size={30} />
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              {/* <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span> */}
              <GrFormNext class="carousel-control-next-icon" size={30} />
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col col-xl-4 sale__content__top__right">
          <div className="sale__content__top__right__item">
            <img className="img-fluid" src="/accest/sale/sale-top/FahasaT4w2_mainbanner_Subbanner_392x156.jpg"></img>
          </div>
          <div className="sale__content__top__right__item">
            <img className="img-fluid" src="/accest/sale/sale-top/FahasaT4w2_flashsale_Subbanner_392x156.jpg"></img>
          </div>
        </div>
        </div>

        <div className="sale__content__img">
          <div className="sale__content__img__item">
            <img className="img-fluid" src="/accest/sale/sale-middle/FahasaT4_Bo3_SmallB_310x210.png"></img>
          </div>
          <div className="sale__content__img__item">
            <img className="img-fluid"  src="/accest/sale/sale-middle/NCCT4_Smallbanner_310x210.png"></img>
          </div>
          <div className="sale__content__img__item">
            <img className="img-fluid" src="/accest/sale/sale-middle/SLIVER_NCCMOREPRODUCTION_T42023_Smallbanner_310x210.png"></img>
          </div>
          <div className="sale__content__img__item">
            <img className="img-fluid" src="/accest/sale/sale-middle/FAHASA310x210pnj.png"></img>
          </div>
        </div>

        <div className="sale__content__bottom row">
        {datas.map((data) => (
          <div className="sale__content__bottom__item" key={data.id}>
            <img className="img-fluid"  src={data.image}></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
        ))}
          {/* <div className="sale__content__bottom__left" >
          <div className="sale__content__bottom__item">
            <img className="img-fluid"  src="/accest/sale/sale-bottom/Icon_FlashSale_Hot_8px_1.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Icon_MaGiamGia_8px_1.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Icon_Trending_Hot_8px_1.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Icon_SanPhamMoi_8px_1.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/IconT4_F3.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          </div>
          <div className="sale__content__bottom__right" >
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Icon_VanHoc_50.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/TamLyKyNang_50.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Icon_MangaCommic_8px_1.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Icon_PhienChoCu_8px_1.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          <div className="sale__content__bottom__item">
            <img src="/accest/sale/sale-bottom/Hoisach_icon_logo_03.png"></img>
            <p className="sale__content__bottom__item__text">abc</p>
          </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sale;

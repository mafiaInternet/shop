import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineAppstore,
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header ">
      <div className="header__logo d-lg-none">
          <img className="img-fluid" src="/accest/fahasa-logo.png"></img>
        </div>
      <div className=" header__content ">
        <div className="header__logo d-none d-lg-block">
          <img className="img-fluid" src="/accest/fahasa_logo.png"></img>
        </div>
     
          <div className="header__middle">
            <img className="d-none d-lg-block" src="/accest/ico_menu.svg"></img>
            <img className="d-block d-lg-none" src="/accest/ico_menu_white.svg"></img>
            <AiOutlineDown size={15} />
            <div className="header__middle__input">
              <input
                className="header__middle__input__search"
                placeholder="Tìm kiếm sản phẩm mong muốn..."
              ></input>
              <button className="btn btn-danger">
                <AiOutlineSearch size={20} />
              </button>
            </div>
     
        </div>

      
          <div className="header__icons">
            <div className="header__icons__item header__icons__item__bell">
              <AiOutlineBell size={25} />
              <span className="header__icons__item__text">Thông báo</span>
              <div className  ="header__icons__item__bell__card">
                <div className="header__icons__item__bell__card__content">
                  <div className="header__icons__item__bell__card__content__title">
                    <AiOutlineBell size={20} />
                    Thông báo
                  </div>
                  <div className="header__icons__item__bell__card__content__info">
                    <img src="/accest/ico_login.svg"></img>
                    <p className="header__icons__item__bell__card__content__info__text">
                      Vui lòng đăng nhập
                    </p>
                    <p className="header__icons__item__bell__card__content__info__text">
                      để xem thông báo
                    </p>
                    <div className="header__icons__item__bell__card__content__info__button">
                      <button className="btn btn-danger">Đăng nhập</button>
                      <button className="btn btn-outline-danger">
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__icons__item header__icons__item__cart">
              <Link to={`/cart`}>
                <AiOutlineShoppingCart size={25} />
                <span className="header__icons__item__text">Giỏ Hàng</span>
              </Link>
            </div>
            <div className="header__icons__item header__icons__item__account">
              <Link to={`/account`}>
                <AiOutlineUser size={25} />
                <span className="header__icons__item__text">Tài khoản</span>
                <div className="header__icons__item__account__card">
                  <div className="header__icons__item__account__card__content">
                    <button className="btn btn-danger">Đăng nhập</button>
                    <button className="btn btn-outline-danger">Đăng ký</button>
                    <button className="btn btn-primary">
                      <FaFacebookF />
                      Đăng nhập bằng facebook
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="header__icons__item">
              <img src="/accest/default.svg"></img>
              <AiOutlineDown size={10} />
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Header;

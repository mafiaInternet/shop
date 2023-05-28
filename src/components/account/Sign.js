import React from "react";
import { FaFacebookF } from "react-icons/fa";
const Sign = () => {
  return (
 
      <div className="sign__content">
        <form className="sign__content__form">
          <div className="sign__content__form__name">
            <label>Số điện thoại/Email</label>
            <input
              className="sign__content__form__name__input"
              type="text"
              placeholder="Nhập số điện thoại hoặc email"
            ></input>
          </div>
          <label>Mật khẩu</label>
          <div className="sign__content__form__pass">
            <input
              className="sign__content__form__pass__input"
              type="password"
              placeholder="Nhập mật khẩu"
            ></input>
            <span className="sign__content__form__pass__show">Hiện</span>
          </div>
          <p>Quên mật khẩu?</p>
          <div className="sign__content__button">
            <button className="btn btn-sign">Đăng nhập</button>
            <button className="btn btn-sign-facebook">
              <FaFacebookF /> Đăng nhập bằng facebook
            </button>
          </div>
        </form>
      </div>
  
  );
};

export default Sign;

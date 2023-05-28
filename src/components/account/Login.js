import React from "react";

const Login = () => {
  return (
    <form className="login__content__form">
      <label>Số điện thoại</label>
      <div className="login__content__form__name">
        <input
          className="login__content__form__name__input"
          type="text"
          placeholder="Nhập số điện thoại"
        ></input>
        <span>Gửi mã OTP</span>
      </div>
      <label>Mã xác nhận OTP</label>
      <div className="login__content__form__otp">
        <input
          className="login__content__form__otp__input"
          style={{ width: "100%" }}
          type="text"
          placeholder="6 ký tự"
          disabled
        ></input>
      </div>
      <label>Mật khẩu</label>
      <div className="login__content__form__pass">
        <input
          className="login__content__form__pass__input"
          type="text"
          placeholder="Nhập mật khẩu"
          disabled
        ></input>
        <span>Hiện</span>
      </div>
      <div className="login__content__form__submit">
        <button className="btn btn-login-submit" disabled>
          Đăng ký
        </button>
      </div>
      <div className="login__content__form__text">
        <p>Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về</p>
        <p>
          <a href="#">Điều khoản dịch vụ</a> &{" "}
          <a href="#">Chính sách bảo mật</a>
        </p>
      </div>
    </form>
  );
};

export default Login;

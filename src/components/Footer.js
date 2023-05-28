import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaTumblr, FaPinterestP } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__sign">
          <form className="footer__content__sign__form">
            <label>
              <AiOutlineMail size={20} style={{ marginRight: "10px" }} /> đăng
              ký nhận bản tin
            </label>
            <div className="footer__content__sign__form__input">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
              ></input>
              <button className="btn btn-warning">Đăng ký</button>
            </div>
          </form>
        </div>
        <div className="footer__content__contact">
          <div className="row my-4 ">
            <div className="col-12 col-lg-4 footer__content__contact__left">
              <div className="footer__content__contact__left__img">
                <img src="/accest/fahasa_logo.png"></img>
              </div>
              <div className="footer__content__contact__left__text">
                <p>
                  Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát
                  Hành Sách TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt
                  Nam
                </p>
                <p>
                  Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi.
                  KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng
                  như tất cả Hệ Thống Fahasa trên toàn quốc.
                </p>
              </div>
              <div className="footer__content__contact__left__certification">
                <a
                  target="_blank"
                  href="http://online.gov.vn/Home/WebDetails/19168"
                >
                  <img src="/accest/logo-bo-cong-thuong-da-thong-bao1.png"></img>
                </a>
              </div>
              <div className="footer__content__contact__left__icons">
                <a target="_blank" title="Facebook">
                  <img src="/accest/footer/Facebook-on.png"></img>
                </a>
                <a target="_blank" title="Instargam">
                  <img src="/accest/footer/Insta-on.png"></img>
                </a>
                <a target="_blank" title="Youtube">
                  <img src="/accest/footer/Youtube-on.png"></img>
                </a>
                <a target="_blank" title="Tumblr">
                  <img src="/accest/footer/tumblr-on.png"></img>
                </a>
                <a target="_blank" title="Twitter">
                  <img src="/accest/footer/twitter-on.png"></img>
                </a>
                <a target="_blank" title="Printerest">
                  <img src="/accest/footer/pinterest-on.png"></img>
                </a>
              </div>
              <div className="footer__content__contact__left__app">
                <a>
                  <img src="/accest/footer/android1.png"></img>
                </a>
                <a>
                  <img src="/accest/footer/appstore1.png"></img>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-8 footer__content__contact__right">
              <div className="row">
                <div className="col-4">
                  <ul>
                    <h5>dịch vụ</h5>
                    <li>
                      <a>Điều khoản sử dụng</a>
                    </li>
                    <li>
                      <a>Chính sách bảo mật thông tin cá nhân</a>
                    </li>
                    <li>
                      <a>Chính sách bảo mật thanh toán</a>
                    </li>
                    <li>
                      <a>Giới thiệu Fahasa</a>
                    </li>
                    <li>
                      <a>Hệ thống trung tâm - nhà sách</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <h5>hỗ trợ</h5>
                    <li>
                      <a>Chính sách đổi - trả - hoàn tiền</a>
                    </li>
                    <li>
                      <a>Chính sách bảo hành - bồi hoàn</a>
                    </li>
                    <li>
                      <a>Chính sách vận chuyển</a>
                    </li>
                    <li>
                      <a>Chính sách khách sỉ</a>
                    </li>
                    <li>
                      <a>Phương thức thanh toán và xuất HĐ</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <h5>tài khoản của tôi</h5>
                    <li>
                      <a>Đăng nhập/Tạo mới tài khoản</a>
                    </li>
                    <li>
                      <a>Thay đổi địa chỉ khách hàng</a>
                    </li>
                    <li>
                      <a>Chi tiết tài khoản</a>
                    </li>
                    <li>
                      <a>Lịch sử mua hàng</a>
                    </li>
                  </ul>
                </div>
                <h5>liên hệ</h5>
                <div className="col-4">
                  <ImLocation /> 60-62 Lê Lợi, Q.1, TP.HCM
                </div>
                <div className="col-4">
                  <GrMail /> cskh@fasaha.com.vn
                </div>
                <div className="col-4">
                  <BsFillTelephoneFill /> 1900636467
                </div>
              </div>
              <div className="footer__content__contact__right__icons">
                <div className=" my-4 list-icons">
                  <div className=" list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-ship/vnpost1.png"
                    ></img>
                  </div>
                  <div className=" list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-ship/ahamove_logo3.png"
                    ></img>
                  </div>
                  <div className=" list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-ship/icon_giao_hang_nhanh1.png"
                    ></img>
                  </div>
                  <div className=" list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-ship/icon_snappy1.png"
                    ></img>
                  </div>
                </div>
                <div className=" list-icons">
                  <div className="list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-pay/logo_moca_120.jpg"
                    ></img>
                  </div>
                  <div className="list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-pay/momopay.png"
                    ></img>
                  </div>
                  <div className="list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-pay/shopeepay_logo1.png"
                    ></img>
                  </div>
                  <div className="list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-pay/vnpay_logo.png"
                    ></img>
                  </div>
                  <div className="list-icons__item">
                    <img
                      className="img-fluid"
                      src="/accest/footer/footer-pay/ZaloPay-logo-130x83.png"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content__text">
          Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu
          tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ
          10, ngày 20/05/2022.
        </div>
      </div>
    </div>
  );
};

export default Footer;

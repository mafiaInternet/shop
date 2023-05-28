import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { AiFillStar, AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import {BsTruck} from "react-icons/bs"
import {TbArrowsExchange2} from "react-icons/tb"
const DetailProduct = () => {
  const names = [
    "Mã hàng",
    "Dự kiến có hàng",
    "Độ tuổi",
    "Tên nhà cung cấp",
    "Tác giả",
    "Người dịch",
    "NXB",
    "Năm XB",
    "Ngôn ngữ",
    "Trọng lượng (gr)",
    "Kích thước bao bì",
    "Số trang",
    "Hình thức",
    "Sản phẩm bán chạy nhất",
  ];
  const values = [
    "8935244890280",
    "17/04/2023",
    "17+",
    "Nhà Xuất Bản Kim Đồng",
    "Gege Akutami, Ballad Kitagumi, Hiroshi Seko",
    "Hitokiri",
    "Kim Đồng",
    "2023",
    "Tiếng Việt",
    "350",
    "19 x 13 x 1.5cm",
    "300",
    "Bìa Mềm",
    "Top 100 sản phẩm Tiểu thuyết bán chạy của tháng",
  ];

  const [state] = useState({
    maHang: "8935244890280",
    duKienCoHang: "17/04/2023",
    doTuoi: "17+",
    tenNhaCungCap: "Nhà Xuất Bản Kim Đồng",
    tacGia: "Gege Akutami, Ballad Kitagumi, Hiroshi Seko",
    nguoiDich: "Hitokiri",
    NXB: "Kim Đồng",
    namXB: "2023",
    ngonNgu: "Tiếng Việt",
    trongLuong: "350",
    kichThuocBaoBi: "19 x 13 x 1.5cm",
    soTrang: "300",
    hinhThuc: "Bìa Mềm",
    sanPhamBanChayNhat: "Top 100 sản phẩm Tiểu thuyết bán chạy của tháng",
  });

 
  return (
    <div className="detailProduct">
      <Header></Header>
      <div className="detailProduct__content">
        <div className="nav"></div>
        <div className="detailProduct__content__view">
          <div className="row">
            <div className="col-5 detailProduct__content__view__img">
              <img
                className="img-fluid"
                src="/accest/detailProduct/tieu-thuyet-the-movie-chu-thuat-hoi-chien---tap-0---kem-obi.jpg"
              ></img>
              <button className="btn btn-outline-danger">
                <AiOutlineShoppingCart size={20} /> Thêm vào giỏ hàng
              </button>
              <button className="btn btn-danger">Đặt Trước</button>
            </div>
            <div className="col-7 detailProduct__content__view__info">
              <h4 className="detailProduct__content__view__info__title">
                tiểu thuyết the moview chú thuật hồi chiến
              </h4>
              <div className="row">
                <div className="col-6 detailProduct__content__view__info__text">
                  <p>
                    Nhà cung cấp: <span>Nhà Xuất Bản Kim Đồng</span>
                  </p>
                  <p>
                    Nhà xuất bản: <span>Kim Đồng</span>
                  </p>
                </div>
                <div className="col-6 detailProduct__content__view__info__text">
                  <p>
                    Tác giả: <span>Gege Akutami, Ballad Kitagun...</span>
                  </p>
                  <p>
                    Hình thức bìa: <span>Bìa mềm</span>
                  </p>
                </div>
              </div>

              <div className="detailProduct__content__view__info__star">
                <AiFillStar size={15} color="silver" />
                <AiFillStar size={15} color="silver" />
                <AiFillStar size={15} color="silver" />
                <AiFillStar size={15} color="silver" />
                <AiFillStar size={15} color="silver" />
              </div>
              <div className="detailProduct__content__view__info__price">
                <span className="detailProduct__content__view__info__price__new">
                  63.000 đ
                </span>
                <p className="detailProduct__content__view__info__price__old">
                  70.000 đ
                </p>
                <span className="detailProduct__content__view__info__price__discount">
                  -10%
                </span>
              </div>
              <div className="detailProduct__content__view__info__delivery">
                <p>
                  <span>Thời gian giao hàng</span>
                  <span style={{ margin: "0 20px 0 38px" }}>Giao hàng đến</span>
                  <span
                    style={{
                      cursor: "pointer",
                      color: "blueviolet",
                      fontWeight: "700",
                    }}
                  >
                    Thay đổi
                  </span>
                </p>
                <p>
                  <span>Chính sách đổi trả</span>
                  <span style={{ margin: "0 20px 0 50px" }}>
                    Đổi trả sản phẩm trong 30 ngày
                  </span>
                  <span
                    style={{
                      cursor: "pointer",
                      color: "blueviolet",
                      fontWeight: "700",
                    }}
                  >
                    Xem thêm
                  </span>
                </p>
              </div>
              <div className="detailProduct__content__view__info__quantity">
                <span>Số lượng: </span>
                <form className="detailProduct__content__view__info__quantity__value">
                  <button>-</button>
                  <input type="text" value={state}></input>
                  <button>+</button>
                </form>
              </div>
              <div className="detailProduct__content__view__info__nnxb">
                Ngày NXB dự kiến phát hành 17/04/2023
              </div>
            </div>
          </div>
        </div>
        {/* <div className="detailProduct__content__voucher">
          <ul class="nav nav-pills">
            <li class="active">
              <a data-toggle="pill" href="#all">
                Tất cả
              </a>
            </li>
            <li>
              <a data-toggle="pill" href="#discount">
                Mã giảm giá
              </a>
            </li>
            <li>
              <a data-toggle="pill" href="#other">
                Ưu đãi khác
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div id="all" class="tab-pane fade in active">
              <img></img>
            </div>
            <div id="menu1" class="tab-pane fade">
              <h3>Menu 1</h3>
              <p>Some content in menu 1.</p>
            </div>
            <div id="menu2" class="tab-pane fade">
              <h3>Menu 2</h3>
              <p>Some content in menu 2.</p>
            </div>
          </div>
        </div> */}
        <div className="detailProduct__content__info" id="abc">
          <h5 className="detailProduct__content__info__title">
            Thông tin sản phẩm
          </h5>
          <div className="row">
            <div className="col-3">
              {names.map((name) => (
                <p className="detailProduct__content__info__name">{name}</p>
              ))}
            </div>
            <div className="col-3">
              {values.map((value) => (
                <p className="detailProduct__content__info__value">{value}</p>
              ))}
            </div>
          </div>
          <p className="detailProduct__content__info__text">
            Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành.Bên cạnh đó, tùy vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
          </p>
          <div className="detailProduct__content__info__intro">
          <h6 className="detailProduct__content__intro__title">
            Tiểu thuyết theo movie chú thuật hồi chiến tập 0
          </h6>
          <p className="detailProduct__content__intro__text">
          Cậu học sinh trung học Okkotsu Yuta luôn khốn đốn vì bị Rika - cô bạn thanh mai trúc mã hóa thành “lời nguyền” ám theo. Đúng lúc đó, Gojo Satoru - chú thuật sư mạnh nhất xuất hiện, dẫn dắt cậu vào trường chuyên chú thuật. Tại ngôi trường học về “lời nguyền” để thanh tẩy “lời nguyền” ấy, Yuta hạ quyết tâm giải trừ lời nguyền của Rika và cùng các bạn đặt chân lên con đường trở thành chú thuật sư.
          </p>
          <h6 className="detailProduct__content__intro__title">
          Nguyên tác Gege Akutami
          </h6>
          <p className="detailProduct__content__intro__text">Họa sĩ truyện tranh. Năm 2014 ra mắt với tác phẩm “Kamishiro Sousa”. Năm 2017, tác phẩm “Trường chuyên chú thuật Tokyo” được đăng ngắn kì trên Jump GIGA. Từ năm 2018, tác phẩm “Chú thuật hồi chiến” được đăng dài kì trên tuần san Shonen Jump.</p>
          <h6 className="detailProduct__content__intro__title">Phóng tác Ballad Kitaguni</h6>
          <p className="detailProduct__content__intro__text">Tiểu thuyết gia. Năm 2015 ra mắt với tác phẩm “Apricot red”. Là người chấp bút cho nhiều tiểu thuyết, tiêu biểu là tiểu thuyết chuyển thể “Chú thuật hồi chiến”.</p>
          <h6 className="detailProduct__content__intro__title">Kịch bản Hiroshi Seko</h6>
          <p className="detailProduct__content__intro__text">Nhà biên kịch. Tác phẩm tiêu biểu có thể kể đến như phim hoạt hình “Chú thuật hồi chiến”, “Attack on Titan The Final Season”...</p>
        </div>
        <div className="detailProduct__content__info__button">
        <button className="btn btn-outline-danger" >Rút Gọn</button>
        </div>
        </div>
       
        <div className="detailProduct__content__icons">
          <div className="row">
            <div className="col-4"><AiOutlineShop size={40} color="black"/>  Chính sách khách sỉ</div>
            <div className="col-4"><BsTruck size={40} color="black"/>  Thời gian giao hàng</div>
            <div className="col-4"><TbArrowsExchange2 size={40} color="black"/>  Chính sách đổi trả</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailProduct;

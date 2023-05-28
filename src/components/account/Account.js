import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaFacebookF } from "react-icons/fa";
import Login from "./Login";
import Sign from "./Sign";
const Account = () => {
  return (
    <div className="account">
      <Header></Header>
      <div className="account__content container">
       
          <div className="account__content__body">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-sign-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-sign"
                  type="button"
                  role="tab"
                  aria-controls="pills-sign"
                  aria-selected="true"
                >
                  Đăng nhập
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-login-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-login"
                  type="button"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="false"
                >
                  Đăng ký
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-sign"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <Sign></Sign>
              </div>
              <div
                class="tab-pane fade"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
     
        <Footer></Footer>
    </div>
  );
};

export default Account;

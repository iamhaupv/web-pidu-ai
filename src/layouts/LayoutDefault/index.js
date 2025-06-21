import React, { useState, Fragment } from "react";

import { Helmet } from "react-helmet";

import Navbar8 from "../../components/navbar8";
import Hero17 from "../../components/hero17";
import Features24 from "../../components/features24";
import CTA26 from "../../components/cta26";
import Features25 from "../../components/features25";
import Pricing14 from "../../components/pricing14";
import Steps2 from "../../components/steps2";
import Testimonial17 from "../../components/testimonial17";
import Contact10 from "../../components/contact10";
import Footer4 from "../../components/footer4";
import "../../views/home.css";
import { Outlet } from "react-router-dom";
import ContactModal from "../../components/ContactModal";
import ContactPopup from "../../components/ContactPopup";
import ContactFormPopup from "../../components/ContactFormPopup";
const LayoutDefault = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="home-container">
      <Helmet>
        <title>Pidu Digital</title>
        <meta property="og:title" content="Pidu Digital" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Get in touch with us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Liên hệ ngay</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">Giới thiệu</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Trang chủ</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Liên hệ</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Phát triển doanh nghiệp của bạn với sức mạnh AI & Automation!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">Explore our range of services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">Dịch vụ</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Portfolio</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Check out our portfolio of work
            </span>
          </Fragment>
        }
        // action2={
        //   <Fragment>
        //     <button onClick={() => setShowModal(true)} className="home-text113">
        //       Liên hệ chúng tôi
        //     </button>
        //   </Fragment>
        // }
      ></Navbar8>

      <Outlet />
      {/* <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              <b>📅 Đặt lịch tư vấn miễn phí – chỉ mất 30 giây!</b> <br />
              Bạn cần AI để tăng trưởng doanh nghiệp ngay? <br />
              📞 Chỉ 1 cuộc hẹn, bạn sẽ nhận được kế hoạch tăng doanh số từ 10 -
              50% trong 30 ngày. <br />
              👉 Đặt lịch tư vấn <br />
              📍 Liên hệ <br />
              📧 pidumarketing@gmail.com <br />
              📱 (+84) 938 905 347 <br />
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Số 7 đường số 7, khu đô thị Vạn Phúc City, phường Hiệp Bình
              Phước,Thành Phố Thủ Đức
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Liên hệ chúng tôi</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Park Avenue, Los Angeles, CA 90012
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Los Angeles Office</span>
          </Fragment>
        }
      ></Contact10> */}
      <ContactModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        // onSubmit={handleSendContact}
      />
      {/* popup contact */}
      
      {/* footer */}
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">Portfolio</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms &amp; Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Contact</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
      <ContactPopup />
    </div>
  );
};

export default LayoutDefault;

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import logo from "../assets/icon.png"
import zalo from "../assets/icons8-zalo-96.png"
import x from "../assets/icons8-x-100.png"
import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-container flex flex-col md:flex-row items-start justify-between bg-gray-50">
          {/* LEFT COL – logo + mô tả */}
          <div className="footer4-logo1 flex flex-col items-start gap-2 max-w-xs margin-right-4">
            <img
              alt={props.logoAlt}
              src={logo}
              className="footer4-logo2"
            />
          </div>

         {/* MID COL – Thông tin liên hệ */}
            <div className="flex-1 min-w-[360px] space-y-2 margin-left-4">
              <h4 className="text-lg font-bold uppercase border-b border-sky-600 pb-2 mb-3">THÔNG TIN</h4>
              <ul className="space-y-1 text-sm leading-relaxed">
                <li><span className="font-semibold" ><strong>Pidu Digital</strong></span> Số 7 đường số 7, KĐT Vạn Phúc City</li>
                <li><span className="font-semibold" ><strong>Văn phòng:</strong></span> Số 7 đường số 7, KĐT Vạn Phúc City</li>
              </ul>
            </div>
         {/* RIGHT COL – Chính sách & Liên hệ */}
          <div className="flex-1 min-w-[360px] space-y-2 margin-left-4  ">
            <h4 className="text-lg font-bold uppercase border-b border-sky-600 pb-2 mb-3">CÁC CHÍNH SÁCH</h4>
            <ul className="space-y-1 text-sm">
              <li>Chính sách bảo hành</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
           {/*Chính sách & Liên hệ */}
          <div className="flex-1 min-w-[360px] space-y-2 margin-left-4  ">
            <h4 className="text-lg font-bold uppercase border-b border-sky-600 pb-2 mb-3">LIÊN HỆ KINH DOANH</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Email:</strong>pidumarketing@gmail.com</li>
              <li><strong>Số điện thoại</strong> (+84) 938 905 347</li>
            
            </ul>
          </div>
        </div>

        {/* <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">pidumarketing@gmail.com</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text21">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text17">
                      Terms &amp; Conditions
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: "Facebook",
  termsLink: undefined,
  link2: "Zalo",
  link4: undefined,
  logoAlt: 'Digital Agency Logo',
  cookiesLink: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  privacyLink: undefined,
}

Footer4.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer4

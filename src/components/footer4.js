import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import logo from "../assets/icon.png"
import zalo from "../assets/icons8-zalo-96.png"
import x from "../assets/icons8-x-100.png"
import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={logo}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {(
                <Fragment>
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="#1877F2"
>
  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-2v7A10 10 0 0 0 22 12Z" />
</svg>
 
                </Fragment>
              )}

            </a>
            <a
              href="https://example.com"
             
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {(
                <Fragment>
                  <img src={zalo} alt="Zalo" width="32" height="32" />
                  
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
             
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              { (
                <Fragment>
                  <img src={x} alt="Zalo" width="32" height="32" />
                  
                </Fragment>
              )}
            </a>
            
          </div>
        </div>
        <div className="footer4-credits">
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
        </div>
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

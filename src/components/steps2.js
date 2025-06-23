import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'
const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
            AI & Automation giúp bạn giải quyết ra sao?
            </h2>
            <p className="thq-body-large" >
              <ul className='feature-list'>
                <li style={{ fontSize: '18px' }}>✅ Tự động hóa quy trình marketing 24/7</li>
                <li style={{ fontSize: '18px' }}>✅ Tăng lượng khách hàng tiềm năng nhờ AI Lead Gen</li>
                <li style={{ fontSize: '18px' }}>✅ Sản xuất nội dung video, SEO content nhanh, chuẩn tối ưu</li>
                <li style={{ fontSize: '18px' }}>✅ Quản lý dữ liệu & phân tích hiệu quả realtime trên dashboard thông minh</li>
              </ul>
               <strong style={{ marginLeft: '20px' }}>→ Tiết kiệm 60% chi phí – Tăng doanh số từ 30% </strong>
            </p>
            {/* <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small"> Liên hệ ngay</span>
              </button>
            </div> */}
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text29">Initial Consultation</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      We start by understanding your business goals and
                      requirements in a detailed consultation.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Design &amp; Development
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Our team of experts will design and develop a custom
                      website tailored to your brand and target audience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Testing &amp; Refinement
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      We rigorously test the website for functionality,
                      responsiveness, and user experience, making refinements as
                      needed.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Launch &amp; Optimization
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Once everything is perfect, we launch your website and
                      provide ongoing support and optimization services.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step3Description: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2

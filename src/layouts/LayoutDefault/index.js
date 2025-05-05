import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../../components/navbar8'
import Hero17 from '../../components/hero17'
import Features24 from '../../components/features24'
import CTA26 from '../../components/cta26'
import Features25 from '../../components/features25'
import Pricing14 from '../../components/pricing14'
import Steps2 from '../../components/steps2'
import Testimonial17 from '../../components/testimonial17'
import Contact10 from '../../components/contact10'
import Footer4 from '../../components/footer4'
import "../../views/home.css"
import { Outlet } from 'react-router-dom'

const LayoutDefault = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Plush Nautical Salamander</title>
        <meta property="og:title" content="Plush Nautical Salamander" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Get in touch with us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
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
            <span className="home-text108">Welcome to our digital agency</span>
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
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Our Digital Agency</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              We specialize in building modern and responsive websites tailored
              to your needs.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Outlet/>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Get in touch with us to discuss your project or any inquiries you
              may have.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
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
      ></Contact10>
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
    </div>
  )
}

export default LayoutDefault

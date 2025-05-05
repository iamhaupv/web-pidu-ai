import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
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
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Custom Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Tailored Solutions</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Responsive Layouts</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Creative Designs</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">Unique and Engaging Designs</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Mobile Optimization</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to take your online presence to the next level?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let our team of experts help you build a stunning website that
              drives results.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch with us today</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              We implement SEO best practices to help your website rank higher
              in search engine results.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              We create unique and visually appealing designs tailored to your
              brand.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Responsive Layouts</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Custom Design</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Our websites are optimized for all devices to ensure a seamless
              user experience.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">SEO Optimization</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$1499</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get Started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Responsive Layout</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Content Management System</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$9999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">
              Custom Design &amp; Development
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Social Media Integration</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Advanced SEO Package</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">E-commerce Integration</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$999</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$14999</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">SEO Optimization</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$4999</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Custom Design</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Priority Support</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$499</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              We start by understanding your business goals and requirements in
              a detailed consultation.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              We rigorously test the website for functionality, responsiveness,
              and user experience, making refinements as needed.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Design &amp; Development</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Our team of experts will design and develop a custom website
              tailored to your brand and target audience.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Initial Consultation</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Testing &amp; Refinement</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Once everything is perfect, we launch your website and provide
              ongoing support and optimization services.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Launch &amp; Optimization</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">
              Marketing Director, Company DEF
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Company ABC</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              I was impressed by the level of expertise and dedication shown by
              Digital Agency XYZ. They transformed our outdated website into a
              modern and user-friendly platform.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">
              Creative Director, Design Studio JKL
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Working with the team at Digital Agency XYZ was a game-changer for
              our online presence. They delivered a stunning website that
              exceeded our expectations.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Founder, Startup GHI</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              The team at Digital Agency XYZ was professional, creative, and
              attentive to our needs throughout the entire process. I highly
              recommend their services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Digital Agency XYZ truly understands the importance of branding
              and user experience. Our new website has helped us attract more
              customers and grow our business.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              I couldn&apos;t be happier with the website created by Digital
              Agency XYZ. Their attention to detail and design skills are
              unmatched in the industry.
            </span>
          </Fragment>
        }
      ></Testimonial17>
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

export default Home

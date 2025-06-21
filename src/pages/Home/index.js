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
import '../../views/home.css'
import "./Home.css"

const Home = (props) => {
  return (
    <div className="home-container">
      <Hero17
        // action2={
        //   <Fragment>
        //     <span className="home-text114">Xem thêm</span>
        //   </Fragment>
        // }
        action1={
          <Fragment>
            <span className="home-text115">Liên hệ ngay</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Phát triển doanh nghiệp của bạn với sức mạnh AI & Automation!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
            Khi bạn đang nghỉ ngơi, hệ thống của chúng tôi vẫn làm việc 24/7 để tối ưu hóa hoạt động marketing, chăm sóc khách hàng và tăng trưởng doanh thu cho doanh nghiệp bạn.
            </span>
          </Fragment>
        }
      ></Hero17>
      {/* <Features24
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
            <span className="home-text121">🎯 Tự động hóa – Tiết kiệm chi phí – Tăng doanh số
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">👉 Đặt lịch tư vấn miễn phí</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Mobile Optimization</span>
          </Fragment>
        }
      ></Features24> */}
      {/* <CTA26
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
      ></CTA26> */}
      {/* <Features25
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
      ></Features25> */}
      {/* <Pricing14
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
      ></Pricing14> */}
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
Tạo video quảng cáo, giới thiệu sản phẩm, viral clip nhanh chóng với Heygen, AI Video Generator và Automation Workflow.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
            Thiết kế website, landing page chuẩn UI/UX, tích hợp chatbot AI, automation sale & quản trị hệ thống thông minh.

            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">2️⃣ Dịch vụ SEO Website ứng dụng AI & Automation
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
            Tối ưu website lên top Google nhờ AI Keyword Research, AI Content và tự động hóa tracking thứ hạng.

            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">1️⃣ Sản xuất nội dung Video AI
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">3️⃣ Dịch vụ Dev Website & ứng dụng AI Automation
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
                <ul class="feature-list">
                    <li>✔ Theo dõi tiến độ công việc</li>
                    <li>✔ Kiểm soát số liệu kinh doanh realtime </li>
                    <li>✔ Quản lý khách hàng – chăm sóc tự động</li>
                    <li>✔ Xem báo cáo và điều chỉnh ngay trên nền tảng</li>
                </ul>
             <br/>
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">📊 Dashboard thông minh dành riêng cho bạn</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">
            AI có thể thay thế hoàn toàn nhân viên không?
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Chi phí triển khai AI marketing bao nhiêu?</span>
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
            Không — AI & Automation giúp giảm tải công việc lặp lại để nhân viên tập trung vào sáng tạo và chiến lược.

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
            AI có đảm bảo bảo mật dữ liệu khách hàng không?
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
            <b>Đơn vị tiên phong ứng dụng AI & Automation vào marketing tại Việt Nam.</b> <br/>
Tận tâm – Chuyên nghiệp – Luôn đồng hành cùng doanh nghiệp kiến tạo thành công bền vững trong kỷ nguyên số.
            </span>
            <br/>
            <h1 class="faq-title" > Câu hỏi thường gặp (FAQ)</h1>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Dùng AI có bị “phụ thuộc công nghệ”?</span>
          </Fragment>
        }
        
        review1={
          <Fragment>
            <span className="home-text202">
            Chi phí linh hoạt từ 5 triệu/tháng tùy vào nhu cầu, doanh nghiệp có thể chọn từng dịch vụ hoặc gói trọn bộ.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">🥇 Chúng tôi là Pidu Digital</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
            AI là công cụ hỗ trợ ra quyết định, không thay thế hoàn toàn con người. Quan trọng là doanh nghiệp hiểu rõ cách dùng và kiểm soát quy trình, không để AI vận hành “mù quáng”.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
            Tùy theo nhà cung cấp giải pháp AI. Pidu cam kết tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật quốc tế và đảm bảo dữ liệu khách hàng được bảo vệ an toàn tuyệt đối.
            </span>
          </Fragment>
        }
      ></Testimonial17>
    </div>
  )
}

export default Home

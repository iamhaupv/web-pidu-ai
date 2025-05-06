import React from "react";
import "./Services.css"; 

const Services = () => {
  return (
    <div className="container">
      <h1 className="service-heading">Giải pháp AI & Automation dành riêng cho doanh nghiệp hiện đại</h1>
      <p>Tại Pidu Digital, chúng tôi cung cấp hệ thống dịch vụ marketing toàn diện, ứng dụng trí tuệ nhân tạo (AI) và tự động hóa hiện đại vào từng quy trình. Từ sản xuất nội dung video, tối ưu SEO đến phát triển website và phần mềm, mỗi giải pháp của Pidu đều được thiết kế để nâng cao hiệu suất, tiết kiệm thời gian, giảm chi phí và giúp doanh nghiệp bứt phá doanh thu bền vững trong kỷ nguyên số.
      </p>
      <b>Chọn Pidu — chọn hiệu quả, chọn thành công dài hạn.</b>
      <h3>3 DỊCH VỤ CHÍNH TẠI PIDU</h3>
      <div className="services">
        {/* Service 1 */}
        <div className="service-card">
          <h3>🎥 Dịch vụ Sản xuất nội dung Video ứng dụng AI</h3>
          <p> 
          Mô tả dịch vụ: <br/>
          Pidu Digital cung cấp dịch vụ sản xuất nội dung video marketing chất lượng cao, kết hợp <b>Heygen, AI Generative Video </b> và công nghệ <b>Automation Workflow</b>, giúp tạo ra các video quảng cáo, giới thiệu sản phẩm, video viral và video dạng short-form (Reels/TikTok/YouTube Shorts) nhanh chóng, sáng tạo và chuẩn chiến lược thương hiệu.
          </p>
          <p>Lợi ích dịch vụ:</p>
          <ul>
            <li className="benefit">Tiết kiệm chi phí & thời gian sản xuất nhờ tự động hóa quy trình dựng, lồng tiếng, phụ đề và chuyển đổi định dạng.
            </li>
            <li className="benefit">Nội dung cá nhân hóa linh hoạt cho từng nhóm đối tượng khách hàng mục tiêu.</li>
            <li className="benefit">Tối ưu hóa hiệu quả truyền thông với video đạt chuẩn SEO video và thuật toán nền tảng mạng xã hội.
            </li>
            <li>Tăng tỷ lệ chuyển đổi và nhận diện thương hiệu bằng nội dung video ngắn chất lượng, dễ lan tỏa.
            </li>
          </ul>
          <p>Quy trình làm việc:</p>
          <ul>
            <li>1. Tiếp nhận & phân tích yêu cầu</li>
            <li>2. Xây dựng kịch bản & ý tưởng video bằng AI</li>
            <li>3. Sản xuất video (dựng, chỉnh sửa, lồng tiếng, tạo phụ đề AI)</li>
            <li>4. Hiệu chỉnh & tối ưu nội dung video</li>
            <li>5. Bàn giao sản phẩm & tư vấn phương án phân phối</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <h3>🔍 2. Dịch vụ SEO Website ứng dụng AI & Automation</h3>
          <p>Mô tả dịch vụ:
          </p>
          <p>
          Pidu Digital triển khai dịch vụ SEO tổng thể và SEO từ khóa, tích hợp công nghệ <b>AI Content Generation, AI Keyword Research</b> và hệ thống <b>Automation Tracking</b> giúp doanh nghiệp tăng trưởng thứ hạng website và doanh thu hiệu quả, bền vững.
          </p>
          <p>Lợi ích dịch vụ:</p>
          <ul>
            <li className="benefit">Phân tích từ khóa và đối thủ bằng AI, chính xác và nhanh chóng.</li>
            <li className="benefit">Sản xuất nội dung chuẩn SEO, tối ưu hóa tự động theo thuật toán Google mới nhất.
            </li>
            <li className="benefit">Theo dõi thứ hạng, backlink và traffic realtime tự động hóa.</li>
            <li>Tăng trưởng lượng truy cập chất lượng và tỷ lệ chuyển đổi khách hàng.</li>
            <li>Tiết kiệm chi phí vận hành và nhân sự SEO truyền thống.</li>
          </ul>
          <p>Quy trình làm việc:</p>
          <ul>
            <li>1. Tiếp nhận yêu cầu & khảo sát website</li>
            <li>2. Nghiên cứu từ khóa và phân tích thị trường bằng AI</li>
            <li>3. Lên chiến lược SEO & hệ thống content plan</li>
            <li>4. Triển khai nội dung và tối ưu onpage/offpage</li>
            <li>5. Theo dõi và báo cáo hiệu suất SEO realtime            </li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <h3>💻 3. Dịch vụ Dev Website & ứng dụng AI Automation</h3>
          <p>Mô tả dịch vụ:
            </p>
          <p>
          Pidu Digital cung cấp dịch vụ thiết kế website, landing page và lập trình web application tích hợp AI và Automation, hỗ trợ tối ưu hóa trải nghiệm người dùng, vận hành tự động và nâng cao hiệu suất kinh doanh online.
          </p>
          <p>Lợi ích dịch vụ:</p>
          <ul>
            <li className="benefit">Giao diện website thân thiện, chuẩn UI/UX, chuẩn SEO.</li>
            <li className="benefit">Tích hợp AI chatbot, AI recommendation và hệ thống automation sale trực tiếp trên website.
            </li>
            <li className="benefit">Quản lý đơn hàng, dữ liệu khách hàng và quy trình marketing tự động hóa.</li>
            <li>Tiết kiệm chi phí vận hành nhờ hệ thống quản trị thông minh, dễ sử dụng.</li>
            <li>Tăng tỷ lệ giữ chân khách hàng và chuyển đổi đơn hàng.</li>
          </ul>
          <p>Quy trình làm việc:</p>
          <ul>
            <li>1. Tiếp nhận yêu cầu & tư vấn giải pháp phù hợp</li>
            <li>2. Lập kế hoạch thiết kế giao diện & tính năng</li>
            <li>3. Phát triển hệ thống web và tích hợp AI Automation</li>
            <li>4. Test thử nghiệm và chỉnh sửa theo yêu cầu</li>
            <li>5. Bàn giao, hướng dẫn vận hành và bảo hành website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

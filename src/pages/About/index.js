import React from 'react';
import './About.css'; // Ensure your CSS file supports the new styling
import downloadImage from './image/images.jpg'; // Update this path if necessary
import downloadImage1 from './image/tải xuống.jpg'; // Update this path if necessary
import hinh1 from "../../assets/Hinh_trang_chu_pidu_10.png"



const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">
          Pidu Digital - Tiên phong ứng dụng AI và Automation trong marketing
        </h1>
        <h2 className="about-subtitle">
          Đồng hành cùng doanh nghiệp trong kỷ nguyên số với giải pháp marketing thông minh.
        </h2>
        <p>
          Pidu Digital là đơn vị tiên phong tại Việt Nam trong việc ứng dụng AI và Automation vào lĩnh vực marketing. Được thành lập vào năm 2022, Pidu ra đời với sứ mệnh đồng hành cùng doanh nghiệp trong kỷ nguyên số bằng những giải pháp ứng dụng AI và Automation vượt trội. Chúng tôi cam kết mang đến các giải pháp marketing tối ưu, góp phần nâng cao hiệu suất kinh doanh, tối ưu hóa nguồn lực và gia tăng giá trị bền vững cho đối tác.
        </p>
      </div>
      <div className="about-image-section">
        <img src={hinh1} alt="Marketing Visual" className="about-image" />
        {/* <img src={downloadImage1} alt="Marketing Visual" className="about-image" /> */}
      </div>
      <div style={{marginTop: 40}}></div>
      <section className="history">
        <h2>Lịch sử hình thành và phát triển Công ty Pidu</h2>
        <p>
          Pidu đã không ngừng mở rộng quy mô và cập nhật các xu hướng công nghệ mới nhất, trở thành một trong những đơn vị tiên phong trong việc triển khai các giải pháp AI Marketing Automation tại Việt Nam. Trong hành trình phía trước, Pidu tiếp tục giữ vững tinh thần đổi mới, lấy khách hàng làm trung tâm và hướng đến mục tiêu trở thành đối tác chiến lược tin cậy của các doanh nghiệp trong và ngoài nước.
        </p>
        <div className="timeline">
          <div className="timeline-item">
            <span>2022 🎉</span>
            <p>Thành lập Công ty Pidu, tập trung nghiên cứu và phát triển các giải pháp AI & Automation trong marketing.</p>
          </div>
          <div className="timeline-item">
            <span>2023 🚀</span>
            <p>Ra mắt các dịch vụ AI Marketing Automation đầu tiên cho thị trường SME. Hợp tác chiến lược với các đối tác công nghệ lớn tại Việt Nam.</p>
          </div>
          <div className="timeline-item">
            <span>2024 🌐</span>
            <p>Mở rộng hệ sinh thái giải pháp AI cho các doanh nghiệp ngành bán lẻ, thương mại điện tử và dịch vụ. Đạt cột mốc 100+ khách hàng doanh nghiệp.</p>
          </div>
          <div className="timeline-item">
            <span>2025 🎯</span>
            <p>Hoàn thiện nền tảng AI Marketing Automation phiên bản nâng cao và mở rộng hoạt động sang thị trường quốc tế khu vực Đông Nam Á.</p>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <h2>Tầm nhìn</h2>
        <p>
          Trở thành đơn vị hàng đầu tại Việt Nam trong việc ứng dụng AI và tự động hóa vào marketing, đồng hành cùng doanh nghiệp kiến tạo thành công bền vững trong kỷ nguyên số.
        </p>
        <h2>Sứ mệnh</h2>
        <p>
          Pidu Digital cam kết cung cấp các giải pháp marketing tối ưu, ứng dụng công nghệ AI và Automation hiện đại, nhằm nâng cao hiệu quả kinh doanh cho đối tác và khách hàng. Chúng tôi không ngừng đổi mới, lấy sự tận tâm và chuyên nghiệp làm nền tảng để tạo ra giá trị thực tiễn và lâu dài cho cộng đồng doanh nghiệp.
        </p>
      </section>

      <section className="core-values">
        <h2>Giá trị cốt lõi của Pidu</h2>
        <ul>
          <li><strong>Công nghệ tiên phong</strong>: Chúng tôi không ngừng cập nhật, ứng dụng và làm chủ các công nghệ AI & Automation mới nhất, mang đến giải pháp marketing đột phá, giúp doanh nghiệp tạo lợi thế cạnh tranh bền vững trong môi trường số hóa.</li>
          <li><strong>Hiệu quả tối ưu</strong>: Mọi giải pháp của Pidu đều đặt mục tiêu tối ưu hóa hiệu quả kinh doanh, gia tăng giá trị thực tiễn cho khách hàng và đối tác thông qua hệ thống tự động hóa thông minh và chiến lược marketing hiệu quả.</li>
          <li><strong>Đổi mới sáng tạo</strong>: Pidu đề cao tinh thần sáng tạo và cải tiến liên tục, không ngừng nghiên cứu và phát triển các phương pháp mới để nâng cao chất lượng dịch vụ và hiệu suất hoạt động cho doanh nghiệp.</li>
          <li><strong>Tận tâm và chuyên nghiệp</strong>: Đội ngũ nhân sự của Pidu luôn làm việc với tinh thần tận tâm, trách nhiệm và thái độ chuyên nghiệp, cam kết đồng hành và hỗ trợ khách hàng tối đa trên từng chặng đường phát triển.</li>
          <li><strong>Giá trị bền vững</strong>: Chúng tôi xây dựng các giải pháp không chỉ phục vụ mục tiêu trước mắt mà còn hướng đến giá trị lâu dài, góp phần vào sự phát triển ổn định và bền vững của cộng đồng doanh nghiệp trong nước và quốc tế.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

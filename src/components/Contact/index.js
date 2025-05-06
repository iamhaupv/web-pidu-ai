import React from "react";
import "./Contact.css";

const Contact = () => {
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  
    await fetch("https://your-backend-url.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    alert("Gửi thành công!");
  };
  
  return (
    <div className="contact-container">
      <h1 className="contact-heading">🚀 Kết nối ngay với đội ngũ Pidu</h1>
      <p className="contact-paragraph">
        Chúng tôi luôn sẵn sàng lắng nghe, đồng hành và hỗ trợ bạn tối ưu hiệu suất marketing, nâng cao hiệu quả kinh doanh trong kỷ nguyên số. Hãy để Pidu trở thành đối tác đáng tin cậy cùng bạn bứt phá!
      </p>

      <div className="contact-info">
        <h2>📞 Thông tin liên hệ</h2>
        <p>📧 Email: <a href="mailto:pidumarketing@gmail.com">pidumarketing@gmail.com</a></p>
        <p>📱 Hotline / Zalo: (+84) 938 905 347</p>
        <p>📍 Trụ sở chính: Số 7, Đường số 7, Khu đô thị Vạn Phúc City, Phường Hiệp Bình Phước, TP. Thủ Đức, TP. HCM</p>
      </div>

      <h2>🗺️ Vị trí văn phòng Pidu Digital</h2>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62696.956288399946!2d106.67082980431675!3d10.84496296270163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752870260879c3%3A0xd67104cd9c2c8772!2zNyDEkC4gU-G7kSA3LCBLaHUgxJHDtCBUaOG7iyBW4bqhbiBQaMO6YywgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1746506570460!5m2!1svi!2s"
  width="100%"
  height="450"
  style={{ border: 0, borderRadius: "8px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      <button className="schedule-button">👉 Đặt lịch hẹn trực tuyến chỉ mất 30 giây</button>

      <div className="contact-form">
        <h2>💬 Gửi tin nhắn trực tiếp cho Pidu</h2>
        <form onSubmit={handleSubmit}>
  <label htmlFor="name">Họ và tên</label>
  <input type="text" id="name" name="name" required />

  <label htmlFor="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label htmlFor="phone">Số điện thoại</label>
  <input type="text" id="phone" name="phone" required />

  <label htmlFor="message">Nội dung cần tư vấn</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <p><em>🕒 Thời gian phản hồi: Trong vòng 2 giờ làm việc (Thứ 2 – Thứ 6, 8:30 – 17:30)</em></p>
  <button type="submit">Gửi liên hệ</button>
</form>

      </div>
    </div>
  );
};

export default Contact;

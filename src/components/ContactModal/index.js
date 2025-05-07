import React from "react";
import "../../components/Contact/Contact.css"; // dùng lại CSS cũ
import "./ContactModal.css"
import {sendContactForm} from "../../apis/index"
const ContactModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
      
          try {
            await sendContactForm(data);
            alert("🎉 Gửi thành công! Cảm ơn bạn đã liên hệ.");

            e.target.reset(); // reset form
            onClose(); 
          } catch (error) {
            alert("❌ Gửi thất bại: " + error.message);
            console.error("Lỗi gửi liên hệ:", error);
          }
        };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
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
    </div>
  );
};

export default ContactModal;

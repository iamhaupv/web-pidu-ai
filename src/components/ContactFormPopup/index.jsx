import React, { useState } from "react";

const ContactFormPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thông tin đã được gửi!");
    // Thực hiện xử lý gửi dữ liệu ở đây (ví dụ: gọi API, gửi email)
  };

  return (
    <div>
      {/* Chat Bubble Button */}
      <div
        onClick={togglePopup}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-700"
      >
        <span role="img" aria-label="chat bubble" className="text-2xl">
          💬
        </span>
      </div>

      {/* Contact Form Popup */}
      {isPopupVisible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 w-80">
          <h2 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Họ và tên:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Lời nhắn:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Gửi
              </button>
              <button
                type="button"
                onClick={togglePopup}
                className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Đóng
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactFormPopup;

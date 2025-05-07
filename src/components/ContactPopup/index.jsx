import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import ContactModal from "../ContactModal";

const ContactPopup = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div
        onClick={() => setShowModal(true)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#007bff",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          zIndex: 1000,
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#0056b3";
          e.target.style.transform = "translateY(-5px)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#007bff";
          e.target.style.transform = "translateY(0)";
        }}
      >
        <FaRocketchat />
      </div>
    </>
  );
};

export default ContactPopup;

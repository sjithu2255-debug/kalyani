import React from 'react';

const WhatsAppCTA = ({ className = "btn btn-whatsapp animate-fade-in-up", style = {}, children }) => {
  const phoneNumber = "919446516826";
  const message = encodeURIComponent("Hello, I would like to inquire about booking Kalyani Auditorium.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      <i className="fab fa-whatsapp"></i> {children || "Chat on WhatsApp"}
    </a>
  );
};

export default WhatsAppCTA;

import React from "react";
import { FaYoutube, FaVk, FaTelegramPlane, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="text-center mt-6 w-full md:w-[800px] lg:w-[1200px] mx-auto">
      <h2 className="text-lg font-bold mb-[30px] text-gray-900">Мы с Вами всегда на связи</h2>
      
      {/* Social Links */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-4 md:space-y-0 md:space-x-8">
        {[
          { icon: <FaYoutube className="text-gray-900 text-xl" />, name: "YouTube", handle: "technodeus24" },
          { icon: <FaVk className="text-gray-900 text-xl" />, name: "VK", handle: "technodeus_ru" },
          { icon: <FaTelegramPlane className="text-gray-900 text-xl" />, name: "Telegram", handle: "@technodeus2023" },
        ].map((social, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="bg-yellow-400 p-3 rounded-full">{social.icon}</div>
            <div>
              <p className="text-gray-900 font-medium">{social.name}</p>
              <p className="text-yellow-600">{social.handle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="mt-8 w-full max-w-sm mx-auto rounded-lg p-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">Контакты</h3>
        <p className="text-yellow-600 font-bold text-lg mt-2">+7 (499) 322-30-20</p>
        {[
          { icon: <FaEnvelope />, text: "technodeus.ru@gmail.com" },
          { icon: <FaMapMarkerAlt />, text: "Москва, ул. Барклая 10, магазин А-49" },
          { icon: <FaClock />, text: "Пн-Вс: 11:00 - 21:00" },
        ].map((contact, index) => (
          <div key={index} className="flex items-center justify-center space-x-2 text-gray-700 mt-2">
            {contact.icon}
            <p>{contact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;

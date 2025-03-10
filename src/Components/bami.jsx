import React from "react";
import { FaYoutube, FaVk, FaTelegramPlane , FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="text-center mt-6">
      <h2 className="text-lg font-bold text-gray-900">
        Мы с Вами всегда на связи
      </h2>
      <div className="flex flex-col item-start ml-[90px] mt-4 space-y-4">
        <div className="text-left flex items-center space-x-3">
          <div className="bg-yellow-400 p-3 rounded-full">
            <FaYoutube className="text-gray-900 text-xl" />
          </div>
          <div>
            <p className="text-gray-900 font-medium">YouTube</p>
            <p className="text-yellow-600">technodeus24</p>
          </div>
        </div>
        <div className="text-left flex items-center space-x-3">
          <div className="bg-yellow-400 p-3 rounded-full">
            <FaVk className="text-gray-900 text-xl" />
          </div>
          <div>
            <p className="text-gray-900 font-medium">VK</p>
            <p className="text-yellow-600">technodeus_ru</p>
          </div>
        </div>
        <div className="text-left flex items-center space-x-3">
          <div className="bg-yellow-400 p-3 rounded-full">
            <FaTelegramPlane className="text-gray-900 text-xl" />
          </div>
          <div>
            <p className="text-gray-900 font-medium">Telegram</p>
            <p className="text-yellow-600">@technodeus2023</p>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full max-w-sm  rounded-lg p-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">Контакты</h3>
        <p className="text-yellow-600 font-bold text-lg mt-2">
          +7 (499) 322-30-20
        </p>
        <div className="flex items-center justify-center space-x-2 text-gray-700 mt-2">
          <FaEnvelope />
          <p>technodeus.ru@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-700 mt-2">
          <FaMapMarkerAlt />
          <p>Москва, ул. Барклая 10, магазин А-49</p>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-700 mt-2">
          <FaClock />
          <p>Пн-Вс: 11:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

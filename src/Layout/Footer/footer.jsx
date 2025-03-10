import React from "react";
import SocialLinks from "../../Components/bami";
import { FaYoutube, FaVk, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div>
        <SocialLinks />
      </div>
      <div className="w-full max-w-xs mb-6">
        {/* Kategoriyalar */}
        <div>
          <h3 className="text-lg font-bold text-black">Категории</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>Смартфоны</li>
            <li>Планшеты</li>
            <li>Ноутбуки</li>
            <li>Умные часы</li>
            <li>Аксессуары</li>
          </ul>
        </div>

        {/* Menyu */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-black">Меню</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>Гарантия</li>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>О компании</li>
            <li>Контакты</li>
            <li>Trade-In</li>
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-black">Мы в соц.сетях</h3>
          <div className="flex items-center space-x-3 mt-3 text-yellow-500">
            <FaYoutube size={24} />
            <FaVk size={24} />
            <FaTelegramPlane size={24} />
          </div>
        </div>

        {/* Pastdagi eslatma */}
        <p className="mt-4 text-sm text-gray-500">
          Сайт носит сугубо информационный характер и не является публичной
          офертой.
        </p>

        {/* Qizil chat tugmasi */}
        <button className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg">
          💬
        </button>
      </div>
    </div>
  );
};

export default Footer;

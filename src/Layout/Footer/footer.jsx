import React from "react";
import SocialLinks from "../../Components/bami";
import { FaYoutube, FaVk, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div>
        <SocialLinks />
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Kategoriyalar */}
        <div>
          <h3 className="text-lg font-bold text-black">Категории</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            {["Смартфоны", "Планшеты", "Ноутбуки", "Умные часы", "Аксессуары"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Menyu */}
        <div>
          <h3 className="text-lg font-bold text-black">Меню</h3>
          <ul className="mt-2 space-y-1 text-gray-700">
            {["Гарантия", "Доставка", "Оплата", "О компании", "Контакты", "Trade-In"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h3 className="text-lg font-bold text-black">Мы в соц.сетях</h3>
          <div className="flex items-center space-x-3 mt-3 text-yellow-500">
            {[FaYoutube, FaVk, FaTelegramPlane].map((Icon, index) => (
              <Icon key={index} size={24} />
            ))}
          </div>
        </div>
      </div>

      {/* Pastdagi eslatma */}
      <p className="mt-4 text-sm text-gray-500 text-center">
        Сайт носит сугубо информационный характер и не является публичной офертой.
      </p>

      {/* Qizil chat tugmasi */}
      <button className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition">
        💬
      </button>
    </div>
  );
};

export default Footer;

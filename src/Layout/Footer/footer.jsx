import React from "react";
import {
  FaYoutube,
  FaVk,
  FaTelegram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-bold mb-6">
          Мы с Вами всегда на связи
        </h2>

        {/* Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 mb-10 md:gap-[170px]">
          <div className="flex gap-2 items-center text-yellow-500">
            <FaYoutube size={40} />
            <div>
              <p>YouTube</p>
              <span className="text-gray-600">technodeus24</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-yellow-500">
            <FaVk size={40} />
            <div>
              <p>VK</p>
              <span className="text-gray-600">technodeus_ru</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-yellow-500">
            <FaTelegram size={40} />
            <div>
              <p>Telegram</p>
              <span className="text-gray-600">@technodeus2023</span>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t pt-6">
          <div>
            <h3 className="font-bold">Контакты</h3>
            <p className="text-yellow-500 font-bold text-lg">+7(499) 322-30-20</p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> technodeus.ru@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Москва, ул. Барклая 10, магазин А-49
            </p>
            <p className="flex items-center gap-2">
              <FaClock /> Пн-Вс: 11:00 – 21:00
            </p>
          </div>

          <div>
            <h3 className="font-bold">Категории</h3>
            <p>Смартфоны</p>
            <p>Планшеты</p>
            <p>Ноутбуки</p>
            <p>Умные часы</p>
            <p>Аксессуары</p>
          </div>

          <div>
            <h3 className="font-bold">Меню</h3>
            <p>Гарантия</p>
            <p>Доставка</p>
            <p>Оплата</p>
            <p>О компании</p>
            <p>Контакты</p>
            <p>Trade-In</p>
          </div>

          <div>
            <h3 className="font-bold">Мы в соц.сетях</h3>
            <div className="flex gap-4 text-yellow-500">
              <FaYoutube size={24} />
              <FaVk size={24} />
              <FaTelegram size={24} />
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Сайт носит сугубо информационный характер и не является публичной
          офертой, определяемой Статьей 437 (2) ГК РФ.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import img_1 from "../../assets/icon/logos_mobile.png";
import img_2 from "../../assets/icon/logo.png";
import img_3 from "../../assets/icon/search.png";
import img_4 from "../../assets/icon/scan.jpg";
import xabar from "../../assets/icon/xabar.svg";
import Kirish from "../../Components/boyti";
import Slider from "../../Components/Slider";
import Banner_mobile from "../../Components/banner";
import Banner_mob from "../../Components/banners";
// import '../index.css';

const Header = () => {
  return (
    <div className="section">
      <div className="container w-full md:w-[800px] lg:w-[1200px] py-4 px-4 mx-auto">
        {/* Logo va Qo‘shimcha elementlar */}
        <div className="flex items-center justify-between py-4">
          <a href="/">
            <img
              className="w-[78px] md:w-[100px] lg:w-[120px]"
              src={img_1}
              alt="logo"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Акции
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Магазины
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Доставка
            </a>

            {/* Dropdown menyu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 flex items-center">
                Покупателям <span className="ml-1">▾</span>
              </button>

              {/* Dropdown tarkibi */}
              <div
                className="absolute left-0 mt-2 w-52 bg-white z-10 shadow-lg rounded-md p-2 
                      opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Доставка
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Подарочные карты
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Бонусная программа
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Узнать статус заказа
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Обмен, возврат, гарантия
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Кредиты
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Сервисные центры
                </a>
              </div>
            </div>

            
          </div>

          <div className="flex items-center gap-4">
           <p className="title_use">cdffd</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex md:flex-row items-center gap-4 mt-4">
          <div className="bg-[#f7f7f7] flex items-center px-4 rounded-[8px] w-full md:w-[500px] lg:w-full">
            <div className="flex items-center gap-2 flex-grow">
              <img
                className="w-[24px] h-[24px] text-[#333]"
                src={img_3}
                alt="search"
              />
              <input
                className="text-[#333] outline-none h-[44px] w-full bg-transparent"
                type="text"
                placeholder="Поиск по сайту"
              />
            </div>
            <img className="w-[24px] h-[24px]" src={img_4} alt="scan" />
          </div>

          {/* Chat Tugmasi */}
          <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[48px] lg:h-[48px] bg-[#f7f7f7] rounded-[8px] flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] md:w-[40px] md:h-[40px] lg:w-[30px] lg:h-[30px]"
              src={xabar}
              alt="chat"
            />
          </div>
        </div>

        {/* Slider */}
        <div className="mt-6">
          <Slider />
        </div>
      </div>
      <Banner_mob/>

      <Banner_mobile />
    </div>
  );
};

export default Header;

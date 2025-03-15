import React from "react";
import img_1 from "../../assets/icon/logos_mobile.png";
import img_2 from "../../assets/icon/logo.png";
import img_3 from "../../assets/icon/search.png";
import img_4 from "../../assets/icon/scan.jpg";
import xabar from "../../assets/icon/xabar.svg";
import Kirish from "../../Components/boyti";
import Slider from "../../Components/Slider";
import Banner_mobile from "../../Components/banner";

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
          <div className="flex items-center gap-4">
            <img
              className="w-[20px] md:w-[30px] lg:w-[40px] h-auto"
              src={img_2}
              alt="icon"
            />
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
          <div className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] bg-[#f7f7f7] rounded-[8px] flex items-center justify-center">
            <img
              className="w-[34px] h-[34px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px]"
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

      {/* Mobil Banner */}
      <Banner_mobile />
    </div>
  );
};

export default Header;

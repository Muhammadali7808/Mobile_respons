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
      <div className=" w-[400px] py-[10px] px-[6px] ">
        <div className="flex items-center justify-between py-4">
          <a href="/">
            <img className="w-[78px] bg-auto" src={img_1} alt="img" />
          </a>
          <div className="flex items-center gap-1">
            <img className="w-[20px] h-[20px]" src={img_2} alt="img" />
            
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 mt-[10px] mb-[10px]">
            <div className="bg-[#f7f7f7] flex items-center justify-between px-4 rounded-[8px] w-[352px]">
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px] h-[24px] text-[#333]"
                  src={img_3}
                  alt="img"
                />
                <input
                  className="text-[#333] outline-none h-[44px]"
                  type="text"
                  placeholder="Поиск по сайту"
                />
              </div>
              <img className="w-[24px] h-[24px]" src={img_4} alt="img" />
            </div>
            <div className="w-[44px] h-[44px] bg-[#f7f7f7] rounded-[8px]">
              <img
                className="w-[34px] h-[34px] m-[5px]"
                src={xabar}
                alt="img"
              />
            </div>
          </div>
          {/* <div>
            <Kirish />
          </div> */}
          <div>
            <Slider />
          </div>
        </div>
      </div>
        <Banner_mobile />
    </div>
  );
};

export default Header;

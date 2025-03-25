import React from "react";
import img_2 from "../assets/icon/img_slider.png";
import img_3 from "../assets/icon/img_2.jpg";

const Banner_mobile = () => {
  return (
    <div className="w-full lg:w-[1500px] mx-auto p-2">
      {/* Mobil versiya */}
      <div className="grid md:hidden gap-4 mt-6">
        <div className="flex flex-col items-center text-center p-4 rounded-lg shadow bg-white transition-transform duration-300 hover:scale-105">
          <h2 className="text-lg font-bold text-black">POCO X5 Pro 5G</h2>
          <p className="text-gray-600 text-sm">Snapdragon® 778G | 120 Гц AMOLED</p>
          <img src={img_2} alt="POCO X5 Pro 5G" className="w-full h-40 object-contain" />
          <button className="text-[#fea306] hover:underline mt-2">Купить &gt;</button>
        </div>

        <div className="flex flex-col items-center text-center p-4 rounded-lg shadow bg-white transition-transform duration-300 hover:scale-105">
          <h2 className="text-lg font-bold text-black">Серия Xiaomi TV A2</h2>
          <p className="text-gray-600 text-sm">Умная работа, безграничное изображение</p>
          <img src={img_3} alt="Xiaomi TV A2" className="w-full h-40 object-contain" />
          <button className="text-[#fea306] hover:underline mt-2">Купить &gt;</button>
        </div>
      </div>

      {/* Desktop versiya */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* POCO X5 Pro 5G */}
        <div className="cursor-pointer flex flex-col justify-between items-center text-center p-6 border-none rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 md:w-[716px] md:h-[476px] overflow-hidden">
          <h2 className="text-xl font-bold text-black">POCO X5 Pro 5G</h2>
          <p className="text-gray-600">
            Процессор Snapdragon® 778G | 120 Гц <br /> FHD+ AMOLED DotDisplay
          </p>
          <div className="flex justify-center gap-4 mt-4 font-semibold">
            <button className="text-[#fea306] hover:underline">Купить &gt;</button>
            <button className="text-[#090909] hover:underline">Узнать больше &gt;</button>
          </div>
          <div className="w-full h-[250px] md:h-[300px] flex justify-center items-center overflow-hidden">
            <img
              src={img_2}
              alt="POCO X5 Pro 5G"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Xiaomi TV A2 */}
        <div className="cursor-pointer flex flex-col justify-between items-center text-center p-6 border-none rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 md:w-[716px] md:h-[476px] overflow-hidden">
          <h2 className="text-xl font-bold text-black">Серия Xiaomi TV A2</h2>
          <p className="text-gray-600">Умная работа, безграничное изображение</p>
          <div className="flex justify-center gap-4 mt-4 font-semibold">
            <button className="text-[#fea306] hover:underline">Купить &gt;</button>
            <button className="text-[#090909] hover:underline">Узнать больше &gt;</button>
          </div>
          <div className="w-full h-[250px] md:h-[300px] flex justify-center items-center overflow-hidden">
            <img
              src={img_3}
              alt="Xiaomi TV A2"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_mobile;

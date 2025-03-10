import React from "react";
import img_1 from "../assets/icon/banner_img.jpg";
import img_2 from "../assets/icon/img_slider.jpg";
import img_3 from "../assets/icon/img_2.jpg";

const Banner_mobile = () => {
  return (
    <>
      <div
        className="bg-cover bg-center p-10 text-center max-w-sm mx-auto mt-6"
        style={{ backgroundImage: `url(${img_1})` }}
      >
        <h2 className="text-xl font-bold text-gray-800">Redmi 12C</h2>
        <p className="text-gray-400">
          MediaTek Helio G85 | Иммерсивный дисплей 6,71"
        </p>
        <p className="text-lg font-semibold mt-2 text-white">
          От <span className="text-yellow-300">6 990 ₽</span>{" "}
          <span className="text-gray-400 line-through">9 990 ₽</span>
        </p>
        <div className="flex justify-center cursor-pointer gap-4 mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Купить
          </button>
          <button className="border border-gray-400 text-gray-500 px-4 py-2 rounded-lg">
            Узнать больше
          </button>
        </div>
      </div>
      <div>
        <div className="bg-white p-6 text-center max-w-sm mx-auto mt-6 shadow-lg rounded-lg overflow-hidden group relative">
          <h2 className="text-xl font-bold text-black">POCO X5 Pro 5G</h2>
          <p className="text-gray-600">
            Процессор Snapdragon® 778G | 120 Гц <br />
            FHD+ AMOLED DotDisplay
          </p>
          <div className="flex justify-center gap-4 mt-4 font-semibold">
            <button className="text-[#fea306] hover:underline">
              Купить &gt;
            </button>
            <button className="text-[#090909] hover:underline">
              Узнать больше &gt;
            </button>
          </div>
          <div className="mt-4 transform transition-transform duration-500 ease-in-out group-hover:scale-110">
            <img src={img_2} alt="POCO X5 Pro 5G" className="w-[430px]" />
          </div>
        </div>
        <div className="bg-white p-6 text-center max-w-sm mx-auto mt-6 shadow-lg rounded-lg overflow-hidden group relative">
          <h2 className="text-xl font-bold text-black">Серия Xiaomi TV A2</h2>
          <p className="text-gray-600">
            Умная работа, безграничное изображение
          </p>
          <div className="flex justify-center gap-4 mt-4 font-semibold">
            <button className="text-[#fea306] hover:underline">
              Купить &gt;
            </button>
            <button className="text-[#090909] hover:underline">
              Узнать больше &gt;
            </button>
          </div>
          <div className="mt-4 transform transition-transform duration-500 ease-in-out group-hover:scale-110">
            <img src={img_3} alt="Xiaomi TV A2" className="w-[430px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner_mobile;

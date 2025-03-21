import React from "react";
import banner_img from "../assets/icon/banner_img.jpg";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-start px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner_img})` }}
    >
      <div className="container max-w-lg text-black">
        <h1 className="text-4xl font-bold">Redmi 12C</h1>
        <p className="text-lg text-gray-700 mt-2">
          MediaTek Helio G85 | Иммерсивный дисплей 6,71"
        </p>
        <div className="flex items-center gap-4 mt-4 text-xl font-semibold">
          <span className="text-black">
            От <span className="text-2xl font-bold">6 990 ₽</span>
          </span>
          <span className="text-gray-500 line-through">9 990 ₽</span>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            Купить
          </button>
          <button className="text-black hover:underline">Узнать больше &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

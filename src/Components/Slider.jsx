import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import React from 'react';
import img_1 from '../assets/icon/img_1.jpeg';

const categories = [
  { title: "Каталог", img: img_1 },
  { title: "Акции", img: img_1 },
  { title: "Собрать ПК", img: img_1 },
  { title: "Подарок", img: img_1 },
  { title: "Смартфоны", img: img_1 },
  { title: "Ноутбуки", img: img_1 },
  { title: "Комплектующие", img: img_1 },
  { title: "Игровые приставки", img: img_1 },
  { title: "Аудиотехника", img: img_1 },
  { title: "Телевизоры", img: img_1 },
  { title: "Аксессуары", img: img_1 },
  { title: "Сетевое оборудование", img: img_1 },
  { title: "Бытовая техника", img: img_1 },
  { title: "Гаджеты", img: img_1 },
  { title: "Распродажа", img: img_1 },
];

export const Slider = () => {
  return (
    <div className="w-full md:w-[800px] lg:w-[1200px] mt-[20px] mx-auto relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white w-full rounded-2xl border border-gray-200 p-4 flex flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination ni pastroqqa tushirish uchun absolute va margin qo‘shildi */}
      <div className="swiper-pagination absolute bottom-[-30px] left-1/2 transform -translate-x-1/2"></div>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import React from 'react'
import img_1 from '../assets/icon/img_1.jpeg'
// import img_2 from '../assets/icon/img_2.jpeg'
// import img_3 from '../assets/icon/img_3.jpeg'
// import img_4 from '../assets/icon/img_4.jpeg'


const categories = [
  { title: "Каталог", img: img_1 },
  { title: "Акции", img: img_1 },
  { title: "Собрать ПК", img: img_1 },
  { title: "Подарочные карты", img: img_1 },
];

export const Slider = () => {
  return (
    <>
      <div className="w-[400px] mt-[20px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white w-full rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
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
      </div>
    </>
  );
};

export default Slider;

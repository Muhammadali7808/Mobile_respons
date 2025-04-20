import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../src/assets/icon/nid_1.png";
import img2 from "../../src/assets/icon/nid_2.png";
import img3 from "../../src/assets/icon/nid_3.png";
import img4 from "../../src/assets/icon/nid_4.png";
import img5 from "../../src/assets/icon/nid_5.png";
import img6 from "../../src/assets/icon/nid_6.png";
import img7 from "../../src/assets/icon/nid_7.png";

const slides = [
  { title: "Карплей", image: img1, bgColor: "bg-blue-50" },
  { title: "Манитор", image: img2, bgColor: "bg-green-50" },
  { title: "Видео регистратор", image: img3, bgColor: "bg-gray-50" },
  { title: "Радар", image: img4, bgColor: "bg-purple-50" },
  { title: "Сервис", image: img5, bgColor: "bg-blue-50" },
  { title: "Акция", image: img6, bgColor: "bg-orange-50" },
  { title: "Падаришний карта", image: img7, bgColor: "bg-yellow-50" },
];

const Slider_1 = () => {
  return (
    <div className="w-full bg-white py-3 px-2">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        spaceBetween={6}
        slidesPerView={4}
        breakpoints={{
          480: { slidesPerView: 5 },
          640: { slidesPerView: 6 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 8 },
        }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`flex flex-col justify-between h-[88px] rounded-2xl p-2 ${item.bgColor}`}
            >
              <h3 className="text-[10px] font-semibold text-gray-800 leading-tight">
                {item.title}
              </h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-6 h-6 object-contain self-end"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider_1;

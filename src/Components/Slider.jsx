import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../src/assets/icon/nid_1.png";
import img2 from "../../src/assets/icon/nid_2.png";
import img3 from "../../src/assets/icon/nid_3.png";
import img4 from "../../src/assets/icon/nid_4.png";
import img5 from "../../src/assets/icon/nid_5.png";
import img6 from "../../src/assets/icon/nid_6.png";
import img7 from "../../src/assets/icon/nid_7.png";

const slides = [
  { title: "Карплей ", description: "Большой выбор техники для дома и ...", image: img1, bgColor: "bg-blue-50" },
  { title: "Манитор", description: "Без проблем с совместимостью", image: img2, bgColor: "bg-gray-50" },
  { title: "Видео регистратор ", description: "Скидки, рассрочки, выгодные комплекты", image: img3, bgColor: "bg-green-50" },
  { title: "Радар", description: "Дарите любимым", image: img4, bgColor: "bg-purple-50" },
  { title: "Сервис ", description: "Сборки ПК от пользователей", image: img5, bgColor: "bg-blue-50" },
  { title: "Акция", description: "Цифровые платежи и услуги", image: img6, bgColor: "bg-orange-50" },
  { title: "Падаришний карта", description: "Дополнительные удобства", image: img7, bgColor: "bg-yellow-50" },
];

const Slider = () => {
  return (
    <div className="w-full bg-white py-4 px-3 relative group/slider">
      {/* Custom navigation buttons - appear on hover */}
      <div className="custom-prev absolute top-1/2 -left-4 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transform -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="custom-next absolute top-1/2 -right-4 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transform -translate-y-1/2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={10}
          slidesPerView={2.2}
          breakpoints={{
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={`group ${item.bgColor} h-[120px] md:h-[200px] p-3 md:p-4 rounded-xl shadow-sm flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-xs md:text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1 leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[36px] h-[36px] md:w-[68px] md:h-[68px] object-contain self-end"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import {
  FaStore,
  FaUniversity,
  FaPlane,
  FaBook,
  FaBuilding,
  FaBus,
  FaLandmark,
  FaWarehouse,
} from "react-icons/fa";

const applications = [
  { id: 1, icon: <FaWarehouse className="w-10 h-10 text-white" />, title: "نمایشگاه ها", description: "تحلیل موفقیت کمپین‌ها و غرفه‌ها" },
  { id: 2, icon: <FaBus className="w-10 h-10 text-white" />, title: "صنعت حمل ونقل", description: "پایش تراکم مسافر" },
  { id: 3, icon: <FaLandmark className="w-10 h-10 text-white" />, title: "موزه ها و مراکز فرهنگی", description: "تحلیل اثربخشی برنامه های فرهنگی" },
  { id: 4, icon: <FaStore className="w-10 h-10 text-white" />, title: "فروشگاه‌های زنجیره‌ای", description: "بهینه سازی چیدمان و موجودی کالا" },
  { id: 5, icon: <FaPlane className="w-10 h-10 text-white" />, title: "فرودگاه ها", description: "پیش بینی ازدحام و مدیریت صف ها" },
  { id: 6, icon: <FaUniversity className="w-10 h-10 text-white" />, title: "دانشگاه ها", description: "پایش هوشمند و تحلیل رفتار دانشجویان" },
  { id: 7, icon: <FaBuilding className="w-10 h-10 text-white" />, title: "ادارات", description: "مدیریت بهتر ارباب رجوع و مراجعین" },
  { id: 8, icon: <FaBook className="w-10 h-10 text-white" />, title: "کتابخانه ها", description: "مدیریت بهینه فضا و منابع انسانی" },
];

export default function ApplicationsSlider() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:bg-gradient-to-b dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] 
    transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          کاربردهای سامانه شمارش هوشمند افراد
        </h2>

        <div className="relative">
          <div className="absolute top-1/2 -right-6 z-10 -translate-y-1/2">
            <div className="swiper-button-next flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <RiArrowRightSLine size={14} />
            </div>
          </div>

          <div className="absolute top-1/2 -left-6 z-10 -translate-y-1/2">
            <div className="swiper-button-prev flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <RiArrowLeftSLine size={14} />
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            grabCursor={true}
          >
            {applications.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white/90 dark:bg-gray-900/80 rounded-xl shadow-lg p-8 h-80 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500 mb-6 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl md:text-2xl mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

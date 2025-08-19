"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTable, FaCoins, FaSignal, FaVolumeUp, FaWallet } from "react-icons/fa";
import { FcDataRecovery } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";

const ServicesData = [
  { id: 1, icon: <FaTable />, title: "داده‌های ساختاری و جداول داده‌ای" },
  { id: 2, icon: <FaCoins />, title: "داده‌های سری زمانی (مالی و بورسی)" },
  { id: 3, icon: <FcDataRecovery />, title: "داده‌های بازیابی و ذخیره‌سازی" },
  { id: 4, icon: <GrGallery />, title: "تصاویر و گرافیک" },
  { id: 5, icon: <IoVideocamOutline />, title: "استریم ویدئویی و صوتی" },
  { id: 6, icon: <FaSignal />, title: "متن‌های کوتاه و بلند" },
  { id: 7, icon: <FaVolumeUp />, title: "صوت و پردازش صدا" },
  { id: 8, icon: <FaWallet />, title: "سیگنال‌های زمانی و فرکانسی (مغزی و قلبی)" },
];

export default function IranPlatformData() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-[#f5f7fa] via-[#e0e0e0] to-[#cfd8dc] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] transition-colors duration-500">
      <div className="container mx-auto px-4">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            انواع داده‌های ورودی به سامانه
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            داده‌های متنوعی که سیستم ما پردازش می‌کند شامل داده‌های ساختاری، سری زمانی، صوت، تصویر و سیگنال‌های مختلف می‌باشد.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ServicesData.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="flex flex-col items-center text-center p-6 bg-white/90 dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-primary mb-4 text-5xl">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base line-clamp-3">
             
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData from "@/component/common/assets/animations/MyAnimation.json";

function FeaturesList() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-peyda">
      {/* Background gradient (تمام عرض) */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      </div>

      {/* کانتینر */}
      <div className="container mx-auto h-full relative px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 py-12">
        
        {/* دایره‌های بلوری - داخل container و بدون بیرون‌زدگی */}
        <div className="absolute top-0 left-0 translate-x-6 translate-y-6 w-64 h-64 bg-primary/20 dark:bg-primary/40 blur-[80px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-0 right-0 -translate-x-6 -translate-y-6 w-56 h-56 bg-yellow-300/20 blur-[70px] rounded-full z-0 animate-pulse" />

        {/* متن */}
        <div
          data-aos="fade-left"
          className="max-w-xl text-center md:text-right space-y-8 text-gray-900 dark:text-white relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            سامانه <span className="text-primary">ترددشمار جاده‌ای</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose">
            این دستگاه با اتصال به لوپ‌های القایی جاده‌ای، قابلیت شمارش،
            تخمین سرعت، طول خودرو و کلاس‌بندی دقیق خودرو را دارد. این روش یکی از
            پرکاربردترین و دقیق‌ترین روش‌ها برای تحلیل ترافیک است.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <button className="bg-primary hover:bg-[#64dd17] text-white font-bold py-3 px-8 rounded-2xl transition-all shadow-md hover:shadow-xl shadow-primary/40">
              درخواست محصول
            </button>
            <button className="border border-gray-400 hover:border-gray-600 dark:border-gray-300 dark:hover:border-white text-gray-800 dark:text-white font-bold py-3 px-8 rounded-2xl transition-all">
              مشاهده جزئیات
            </button>
          </div>
        </div>

        {/* انیمیشن Lottie */}
        <div
          data-aos="fade-right"
          className="flex justify-center items-center md:w-1/2 w-full relative z-10"
        >
          <Lottie
            animationData={animationData}
            loop
            className="w-full max-w-[350px] md:max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesList;

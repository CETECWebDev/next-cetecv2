"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData from "@/component/common/assets/animations/MyAnimation.json"; // مسیر جدید و نام فایل درست

function FeaturesList() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-peyda">
      
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      </div>

      
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/20 dark:bg-primary/40 blur-[120px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-yellow-300/20 blur-[100px] rounded-full z-0 animate-pulse" />

    
      <div className="container mx-auto h-full px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative z-10 py-12">
      
        <div
          data-aos="fade-left"
          className="max-w-xl text-center md:text-right space-y-8 text-gray-900 dark:text-white"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            سامانه <span className="text-primary">ترددشمار جاده‌ای</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed md:leading-loose">
            این دستگاه با اتصال به لوپ‌های القایی جاده‌ای، قابلیت شمارش،
            تخمین سرعت، طول خودرو و کلاس‌بندی دقیق خودرو را دارد. این روش یکی از
            پرکاربردترین و دقیق‌ترین روش‌ها برای تحلیل ترافیک است.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="bg-primary hover:bg-[#64dd17] text-white font-bold py-3 px-8 rounded-2xl transition-all shadow-md hover:shadow-xl shadow-primary/40">
              درخواست محصول
            </button>
            <button className="border border-gray-400 hover:border-gray-600 dark:border-gray-300 dark:hover:border-white text-gray-800 dark:text-white font-bold py-3 px-8 rounded-2xl transition-all">
              مشاهده جزئیات
            </button>
          </div>
        </div>

    
        <div
          data-aos="fade-right"
          className="flex justify-center items-center md:w-1/2 w-full"
        >
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-[500px] h-[500px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesList;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/component/common/assets/animations/MyAnimation.json";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eef2f3] via-[#dfe9f3] to-[#ffffff] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/20 dark:bg-primary/40 blur-[120px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-yellow-300/30 blur-[100px] rounded-full z-0 animate-pulse" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col md:flex-row items-center justify-between gap-16 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-right space-y-8 text-gray-900 dark:text-white"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            سامانه <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">ترددشمار جاده‌ای</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed md:leading-loose">
            این دستگاه با اتصال به لوپ‌های القایی جاده‌ای، قابلیت شمارش، تخمین سرعت و کلاس‌بندی دقیق خودرو را دارد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-[#64dd17] text-white font-bold py-3 px-8 rounded-2xl transition-all shadow-md hover:shadow-xl">
              درخواست محصول
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-400 hover:border-gray-600 dark:border-gray-300 dark:hover:border-white text-gray-800 dark:text-white font-bold py-3 px-8 rounded-2xl transition-all hover:bg-gray-100/20 dark:hover:bg-white/10">
              مشاهده جزئیات
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center md:w-1/2 w-full"
        >
          <div className="p-6 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-lg shadow-lg">
            <Lottie animationData={animationData} loop className="w-full max-w-[500px] h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

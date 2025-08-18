"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaRoad, FaProjectDiagram, FaLeaf, FaCoins } from "react-icons/fa";
import animationData from "@/component/common/assets/animations/MyAnimation.json";

const ServicesData = [
  {
    id: 1,
    icon: <FaRoad className="text-3xl text-primary" />,
    title: "تحلیل و مدیریت ترافیک",
    description:
      "اندازه‌گیری تعداد وسایل نقلیه عبوری در بازه‌های زمانی مختلف، شناسایی ساعات اوج ترافیک و کلاس‌بندی وسایل نقلیه.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram className="text-3xl text-primary" />,
    title: "برنامه‌ریزی زیرساخت‌ها",
    description:
      "طراحی بهتر راه‌ها و پل‌ها بر اساس حجم ترافیک، تصمیم‌ برای گسترش جاده‌ها و زمان‌بندی تعمیرات.",
  },
  {
    id: 3,
    icon: <FaLeaf className="text-3xl text-primary" />,
    title: "پایش محیط زیست",
    description:
      "برآورد میزان آلایندگی ترافیک و کنترل ورود خودروهای سنگین در ساعات خاص برای کاهش آلودگی.",
  },
  {
    id: 4,
    icon: <FaCoins className="text-3xl text-primary" />,
    title: "کاربرد اقتصادی‌–مالی",
    description:
      "محاسبه عوارض جاده‌ای بر اساس تردد، تحلیل سوددهی پروژه‌ها و جذب سرمایه‌گذاری با داده مستند.",
  },
];

function ProductPage() {
  return (
    <div className="overflow-x-hidden font-peyda">
      {/* سکشن اول: Lottie + توضیح محصول */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* پس‌زمینه */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eef2f3] via-[#dfe9f3] to-[#ffffff] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />

        {/* افکت بلور دایره‌ای */}
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/20 dark:bg-primary/40 blur-[120px] rounded-full z-0 animate-pulse" />
        <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-yellow-300/30 blur-[100px] rounded-full z-0 animate-pulse" />

        {/* کانتینر */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col md:flex-row items-center justify-between gap-16 py-20 relative z-10">
          
          {/* متن محصول */}
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
              این دستگاه با اتصال به لوپ‌های القایی جاده‌ای، قابلیت شمارش، تخمین سرعت، طول خودرو و کلاس‌بندی دقیق خودرو را دارد. این روش یکی از پرکاربردترین و دقیق‌ترین روش‌ها برای تحلیل ترافیک است.
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

          {/* انیمیشن Lottie */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center md:w-1/2 w-full"
          >
            <div className="p-6 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-lg shadow-lg">
              <Lottie
                animationData={animationData}
                loop
                className="w-full max-w-[400px] md:max-w-[500px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* سکشن دوم: کارت‌های کاربردها کوچک‌تر */}
      <section className="py-20 bg-gradient-to-b from-[#f5f7fa] via-[#e0e0e0] to-[#ffffff] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-[500px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">
              کاربردهای سامانه ترددشمار جاده‌ای
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              این سامانه در حوزه‌های مختلف ترافیک، زیرساخت، محیط زیست و اقتصاد کاربرد دارد.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {ServicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group rounded-3xl p-4 max-w-[240px] bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;

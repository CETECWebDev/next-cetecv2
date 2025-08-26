"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardBaseClasses =
    "bg-white/80 dark:bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl text-lg text-right leading-8 shadow-xl font-medium hover:scale-105 transition-transform";

  const cardWidthClass = "w-full sm:w-72 md:w-72";

  return (
    <section
      className="w-full py-16 md:py-20 relative
      bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]
      dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]
      transition-colors duration-500"
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        <h2
          className="text-lg font-bold text-yellow-500 mb-8 text-center
          text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 md:mb-12"
          data-aos="fade-up"
        >
          ویژگی‌های نرم‌افزاری و سخت‌افزاری
        </h2>

        <div
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-6 md:mb-8 justify-center flex-wrap max-w-5xl w-full"
          data-aos="fade-up"
        >
          <div className={`${cardBaseClasses} ${cardWidthClass}`}>
            قابلیت تشخیص چهره و جنسیت برای کاربردهای نظارتی و کنترل دسترسی
          </div>
          <div className={`${cardBaseClasses} ${cardWidthClass}`}>
            دارای نرم افزار تحت وب مرکزی مدیریت و نظارت
          </div>
          <div className={`${cardBaseClasses} ${cardWidthClass}`}>
            قابلیت ذخیره‌سازی داده‌ها در خود دستگاه در صورت عدم ارتباط با شبکه و ارسال داده‌ها به سرور پس از اتصال مجدد
          </div>
        </div>

        <div
          className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mb-6 md:mb-8 px-4 md:px-0 gap-8 md:gap-0"
          data-aos="zoom-in"
        >
          <div className={`${cardBaseClasses} ${cardWidthClass} mb-6 md:mb-0`} data-aos="fade-right">
            شمارش دقیق افراد و خودروها... بدون نیاز به نصب هیچگونه گیت یا محدود کردن مسیر تردد
          </div>

          <div className="z-10 flex-shrink-0 w-full max-w-xs md:max-w-none md:w-auto">
            <Image
              src="/images/products/product2.png"
              alt="Device"
              width={480}
              height={480}
              className="object-contain rounded-3xl"
              priority
            />
          </div>

          <div className={`${cardBaseClasses} ${cardWidthClass}`} data-aos="fade-left">
            قابلیت افزودن تعداد بی‌شمار دستگاه به هر سامانه مرکزی
          </div>
        </div>

        <div
          className={`${cardBaseClasses} ${cardWidthClass} max-w-5xl`}
          data-aos="fade-up"
        >
          داده‌کاوی و هوش مصنوعی روی داده‌های برخط
        </div>
      </div>
    </section>
  );
}

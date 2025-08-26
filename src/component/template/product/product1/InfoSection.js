"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMicrochip } from "react-icons/fa";

const features = [
  { title: "پردازنده ARM با سرعت پردازش بیش از ۴۰۰ مگاهرتز" },
  { title: "قابلیت پوشش گستره فرکانسی لوپ‌ها ۵۰ تا ۲۰۰ کیلوهرتز" },
  { title: "امکان توسعه‌ ذخیره‌سازی داده روی SD" },
  { title: "دارای حافظه ذخیره‌سازی روی بورد با سرعت بالا" },
  { title: "قابلیت افزودن پروتکل‌های اینترنت اشیاء و سایر پروتکل‌های سفارشی" },
  { title: "پشتیبانی از SD Card، درگاه USB و توسعه‌پذیری ماژولار" },
];

const toPersianNumber = (number) =>
  number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

export default function InfoSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const radius = 220;

  return (
    <section
      className="relative py-20 px-4 bg-gradient-to-br from-[#eef2f3] to-[#dbe9f4] dark:from-[#0f1115] dark:via-[#1a1d23] dark:to-[#2c313a] text-gray-800 dark:text-[#cfd8dc] font-peyda overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-16 text-[#007acc] dark:text-[#00bcd4]">
          مشخصات سخت‌افزاری محصول
        </h2>
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-[600px] h-[600px] sm:w-[320px] sm:h-[320px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#007acc] dark:text-[#00bcd4]">
              <FaMicrochip className="text-[80px] sm:text-[40px] drop-shadow-xl" />
            </div>
            {features.map((feature, index) => {
              const angle = (index / features.length) * 2 * Math.PI;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="absolute w-52 h-52 sm:w-32 sm:h-32 bg-white/90 dark:bg-white/5 backdrop-blur-md border border-[#cfd8dc] dark:border-[#37474f] rounded-full shadow-md p-4 flex flex-col items-start justify-center text-right transition-transform duration-300 hover:scale-105 hover:shadow-2xl pulse-effect"
                  style={{
                    top: `calc(50% + ${y}px - 104px)`,
                    left: `calc(50% + ${x}px - 104px)`,
                  }}
                >
                  <p className="text-sm sm:text-[10px] text-[#37474f] dark:text-[#cfd8dc] leading-relaxed font-medium break-words whitespace-normal">
                    <span className="text-[#007acc] dark:text-[#00bcd4] font-bold text-lg sm:text-sm ml-1">
                      {toPersianNumber(index + 1)}.
                    </span>
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .pulse-effect {
          box-shadow: 0 0 0 rgba(0, 188, 212, 0.4);
          animation: pulse 3s infinite;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0.4);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(0, 188, 212, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 188, 212, 0);
          }
        }
      `}</style>
    </section>
  );
}

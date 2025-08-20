"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DevicesSection() {
  const items = [
    `هر نوع سامانه و دستگاه جانبی که اطلاعات قابل پردازش برای پلتفرم ارسال کند 
    و فرمان کنترل یا هدایت دریافت کند. مانند پهپادها، خودروهای هوشمند، چراغ‌های راهنمایی رانندگی و...`,
    "انواع دستگاه‌های شمارنده هوشمند افراد شرکت CETEC",
    "انواع سنسورها و تجهیزات ثبت و ذخیره داده",
    "انواع جریان‌های داده‌ای حجیم و سری‌های زمانی از سایر پلتفرم‌ها یا سامانه‌های نرم‌افزاری و سخت‌افزاری",
    "انواع دستگاه‌های ثبت و ذخیره داده مانند دیتالاگرها و دیتا اکویزیشن‌ها",
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <section className="relative w-full py-20 font-peyda overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:to-[#203a43]">
      <div className="container mx-auto px-6 md:px-20 relative z-10">
      
        <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          انواع دستگاه‌ها و نودهای قابل تعریف
        </h1>
        <div className="h-1 w-[260px] bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded mb-12" />

       
        <div className="space-y-6">
          {items.map((text, i) => (
            <div
              key={i}
              data-aos="fade-right"
              data-aos-delay={i * 150}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative flex items-start gap-4 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <GradientCheckIcon />
              <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">{text}</p>

             
              <div
                className={`absolute -inset-1 rounded-3xl transition-all duration-700`}
                style={{
                  background: hoverIndex === i
                    ? "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(236,72,153,0.3), rgba(14,165,233,0.3), rgba(245,158,11,0.3))"
                    : "transparent",
                  filter: hoverIndex === i ? "blur(60px)" : "blur(0px)",
                  zIndex: -1,
                  transform: hoverIndex === i ? "scale(1.1)" : "scale(1)"
                }}
              />
            </div>
          ))}
        </div>
      </div>

   
      {items.map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full z-0 transition-all duration-500`}
          style={{
            width: i % 2 === 0 ? "28rem" : "26rem",
            height: i % 2 === 0 ? "28rem" : "26rem",
            top: i % 2 === 0 ? "-8rem" : "auto",
            bottom: i % 2 !== 0 ? "-8rem" : "auto",
            left: i % 2 === 0 ? "-8rem" : "auto",
            right: i % 2 !== 0 ? "-8rem" : "auto",
            background: i % 2 === 0
              ? "radial-gradient(circle, rgba(96,165,250,0.15) 0%, rgba(59,130,246,0.05) 70%)"
              : "radial-gradient(circle, rgba(253,224,71,0.15) 0%, rgba(250,204,21,0.05) 70%)",
            filter: "blur(120px)",
            animation: i % 2 === 0 ? "float1 6s ease-in-out infinite" : "float2 8s ease-in-out infinite"
          }}
        />
      ))}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 25px); }
        }
      `}</style>
    </section>
  );
}

function GradientCheckIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0 mt-1"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="light-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="dark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <path
        d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41L9 16.2z"
        fill="url(#light-gradient)"
        className="dark:fill-dark-gradient"
      />
    </svg>
  );
}

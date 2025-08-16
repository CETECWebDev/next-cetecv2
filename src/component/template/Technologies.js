"use client";

import React from "react";
import Image from "next/image";

function Technologies() {
  const techItems = [
    { id: 1, title: "هوش مصنوعی", icon: "/images/ai.svg" },
    { id: 2, title: "سخت افزار نهفته", icon: "/images/ai.svg" },
    { id: 3, title: "طراحی صنعتی", icon: "/images/ai.svg" },
    { id: 4, title: "نرم افزار توسعه وب", icon: "/images/ai.svg" },
    { id: 5, title: "آینده پژوهی و توسعه پذیری", icon: "/images/ai.svg" },
  ];

  return (
    <section
      className="
        py-20
        bg-gradient-to-b
        from-[#f0f4f8] via-[#cbd5e1] to-[#94a3b8]
        dark:from-[#1e293b] dark:via-[#334155] dark:to-[#475569]
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          فناوری‌های مورد استفاده قطب دانش
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          قطب دانش برای توسعه نرم‌افزار‌ها و اجرای پروژه‌های کوچک و بزرگ شما از چنین فناوری‌هایی بهره می‌گیرد.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-purple-500/20 blur-2xl opacity-70" />
              <div className="absolute inset-0 overflow-hidden z-0">
                {[...Array(20)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <img
              src="/images/technology.jpg"
              alt="Technologies"
              className="object-cover w-full h-full z-10 relative dark:brightness-90"
            />

            <div className="absolute inset-0 z-20 bg-black/40 dark:bg-black/50 flex flex-col justify-center items-center text-center p-6">
              <div className="w-full flex justify-start mb-2">
                <span className="text-white text-7xl leading-none">,,</span>
              </div>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed max-w-md">
                در قطب دانش، تمام ابزارهای به‌روز در مرز فناوری، برای تولید بهترین و 
                با کیفیت‌ترین محصولات بکار گرفته می‌شوند. سامانه‌های تولیدی ترکیبی از سخت‌افزارهای بهینه و حرفه‌ای، نرم‌افزارهای مدرن و پر سرعت، طراحی‌های صنعتی و مفهومی، و ترکیب بین‌رشته‌ای و جذاب در مرز فناوری هستند.
              </p>
            </div>
          </div>

        
          <div className="flex flex-col space-y-6">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center text-center
                    bg-white/30 dark:bg-white/5 backdrop-blur-md
                    rounded-2xl p-6 border border-white/10 transition hover:scale-[1.02]"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="mb-4 text-blue-700 dark:text-white"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                </div>
              ))}
            </div>

          
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {techItems.slice(3, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center text-center
                    bg-white/30 dark:bg-white/5 backdrop-blur-md
                    rounded-2xl p-6 border border-white/10 transition hover:scale-[1.02]"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="mb-4 text-blue-700 dark:text-white"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRoad, FaProjectDiagram, FaLeaf, FaCoins } from "react-icons/fa";

const ServicesData = [
  {
    id: 1,
    icon: <FaRoad className="text-4xl text-primary" />,
    title: "تحلیل و مدیریت ترافیک",
    description:
      "اندازه‌گیری تعداد وسایل نقلیه عبوری در بازه‌های زمانی مختلف، شناسایی ساعات اوج ترافیک و کلاس‌بندی وسایل نقلیه.",
  },
  {
    id: 2,
    icon: <FaProjectDiagram className="text-4xl text-primary" />,
    title: "برنامه‌ریزی زیرساخت‌ها",
    description:
      "طراحی بهتر راه‌ها و پل‌ها بر اساس حجم ترافیک، تصمیم‌ برای گسترش جاده‌ها و زمان‌بندی تعمیرات.",
  },
  {
    id: 3,
    icon: <FaLeaf className="text-4xl text-primary" />,
    title: "پایش محیط زیست",
    description:
      "برآورد میزان آلایندگی ترافیک و کنترل ورود خودروهای سنگین در ساعات خاص برای کاهش آلودگی.",
  },
  {
    id: 4,
    icon: <FaCoins className="text-4xl text-primary" />,
    title: "کاربرد اقتصادی‌–مالی",
    description:
      "محاسبه عوارض جاده‌ای بر اساس تردد، تحلیل سوددهی پروژه‌ها و جذب سرمایه‌گذاری با داده مستند.",
  },
];

function FeaturesList() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="py-10 bg-gradient-to-b from-[#ada996] via-[#dbdbdb] to-[#eaeaea] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center my-10 max-w-[400px] mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white py-5">
            کاربردهای سامانه ترددشمار جاده‌ای
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {ServicesData.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-duration="700"
              className="w-full max-w-[260px] rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow dark:bg-white/10 dark:border-white/10 hover:bg-primary dark:hover:bg-primary hover:text-white transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:rotate-1 group"
            >
              <div className="h-[100px] flex items-center justify-center">
                {service.icon}
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;

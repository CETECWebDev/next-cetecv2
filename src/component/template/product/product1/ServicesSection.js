"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import { FaRoad, FaProjectDiagram, FaLeaf, FaCoins } from "react-icons/fa";

const ServicesData = [
  { id: 1, icon: <FaRoad className="text-3xl text-primary" />, title: "تحلیل و مدیریت ترافیک", description: "اندازه‌گیری تعداد وسایل نقلیه عبوری در بازه‌های زمانی مختلف، شناسایی ساعات اوج ترافیک و کلاس‌بندی وسایل نقلیه." },
  { id: 2, icon: <FaProjectDiagram className="text-3xl text-primary" />, title: "برنامه‌ریزی زیرساخت‌ها", description: "طراحی بهتر راه‌ها و پل‌ها بر اساس حجم ترافیک، تصمیم‌ برای گسترش جاده‌ها و زمان‌بندی تعمیرات." },
  { id: 3, icon: <FaLeaf className="text-3xl text-primary" />, title: "پایش محیط زیست", description: "برآورد میزان آلایندگی ترافیک و کنترل ورود خودروهای سنگین در ساعات خاص برای کاهش آلودگی." },
  { id: 4, icon: <FaCoins className="text-3xl text-primary" />, title: "کاربرد اقتصادی‌–مالی", description: "محاسبه عوارض جاده‌ای بر اساس تردد، تحلیل سوددهی پروژه‌ها و جذب سرمایه‌گذاری با داده مستند." },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f7fa] via-[#e0e0e0] to-[#ffffff] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-[500px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white">کاربردهای سامانه ترددشمار جاده‌ای</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">این سامانه در حوزه‌های مختلف ترافیک، زیرساخت، محیط زیست و اقتصاد کاربرد دارد.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {ServicesData.map((s, i) => (
            <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

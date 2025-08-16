"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// آیکون‌ها از کتابخانه‌های پایدار
import { RiCpuLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineCloudServer, AiOutlineSetting, AiOutlineApi } from "react-icons/ai";

import OptionCard from "./OptionCard";

function Option() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const data = [
    {
      id: 1,
      title: "ویژگی های سخت افزاری",
      text: `استفاده از پردازشگر قدرتمند 8 هسته ای برای پردازش لبه ای و هوش مصنوعی نهفته و مجهز به دوربین 8 مگا پیکسل و دید در شب، پشتیبانی از پروتوکل های شبکه و اینترنت اشیا و قابلیت افزودن پروتوکل های ارتباطی و وب سرویس های جدید سفارشی.`,
    },
    {
      id: 2,
      title: "نظارت پیوسته",
      text: `با ارائه گزارشات برخط پیشرفته و تحلیل‌های آماری دقیق، مدیران قادرند به طور لحظه‌ای وضعیت مجموعه را پایش کنند و تصمیمات راهبردی بگیرند. بر اساس هر گروه کاربری، داشبوردها و نمودارها و گزارشات قابل سفارشی‌سازی هستند.`,
    },
    {
      id: 3,
      title: "پردازش لبه ای",
      text: `مزیت ویژه این سامانه، پردازش‌های هوش مصنوعی و یادگیری عمیق به طور لبه‌ای روی خود دستگاه شمارشگر است. تنها خروجی داده‌ها به سرور ارسال می‌شوند و پهنای باند شبکه درگیر نمی‌شود. داده‌ها در صورت قطع اتصال ذخیره و پس از اتصال، خودکار ارسال می‌شوند.`,
    },
    {
      id: 4,
      title: "قابلیت تعریف و طراحی سیستم ها",
      text: `قابلیت تعریف موجودیت‌های شمارش، تشخیص و شمارش افراد، خودروها و سایر اشیا، تنظیم انواع هشدارها و قوانین برای مدیریت دقیق‌تر.`,
    },
    {
      id: 5,
      title: "هوش مصنوعی و یادگیری ماشین",
      text: `با اجرای انواع مدل‌های یادگیری ماشین و هوش مصنوعی که به طور لحظه‌ای و برخط روی داده‌ها اعمال می‌شوند، سامانه می‌تواند پیش‌بینی‌های دقیقی از تردد، فروش یا سایر داده‌های مورد نیاز مدیران ارائه دهد.`,
    },
  ];

  const icons = [
  <RiCpuLine className="w-16 h-16" />,
  <FaRegEye className="w-16 h-16" />,
  <AiOutlineCloudServer className="w-16 h-16" />,
  <AiOutlineSetting className="w-16 h-16" />,
  <AiOutlineApi className="w-16 h-16" />,
];


  return (
    <section
      className="py-16 px-6 bg-gradient-to-br from-[#f5f7fa] to-[#eaeaea] 
      dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] 
      transition-colors duration-500"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-12">
          قابلیت‌های سامانه جامع شمارش هوشمند افراد
        </h1>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mb-8">
          {data.slice(0, 3).map((item, index) => (
            <OptionCard
              key={item.id}
              icon={icons[index]}
              title={item.title}
              text={item.text}
              delay={index * 100}
            />
          ))}
        </div>

                <div className="flex flex-wrap justify-center gap-6">
          {data.slice(3).map((item, index) => (
            <OptionCard
              key={item.id}
              icon={icons[index + 3]}
              title={item.title}
              text={item.text}
              delay={(index + 3) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Option;

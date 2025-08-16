"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AiOutlineCloudDownload,
  AiOutlineDatabase,
  AiOutlineBarChart,
  AiOutlineRobot,
  AiOutlineDashboard,
} from "react-icons/ai";

import OptionCard from "./OptionCard";

function Option() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const data = [
    {
      id: 1,
      title: "دریافت داده بلادرنگ از دستگاه‌ها",
      text: `پشتیبانی از ارتباط HTTP/HTTPS و پروتکل اختصاصی REST. قابلیت دریافت داده هم‌زمان از چند صد دستگاه. مکانیزم امنیتی احراز هویت و توکنینگ برای ارسال داده‌ها. نصب و راه اندازی آسان در جاده و اتصال به سرور به صورت plug and play.`,
    },
    {
      id: 2,
      title: "قابلیت‌های سخت‌افزاری سامانه و دستگاه‌های ترددشمار",
      text: `پردازنده ARM قدرتمند و کم‌مصرف مناسب برای نصب در شرایط محیطی سخت (جاده‌ها، مناطق گرم/سرد). قابلیت پردازش edge و محلی اولیه و کاهش ترافیک شبکه. پشتیبانی تا 8 لوپ القایی امکان پوشش چند لاین رفت و برگشت در یک مسیر.`,
    },
    {
      id: 3,
      title: "تحلیل آماری و گزارش‌گیری",
      text: `نمودارهای ساعتی، روزانه، هفتگی و ماهانه. گزارش کلاس‌بندی خودروها (LC1 تا LC12 یا به تفکیک وزن/طول/نوع). خروجی اکسل، PDF و API برای اتصال به سامانه‌های دیگر.`,
    },
    {
      id: 4,
      title: "ماژول پیش‌بینی ترافیک با استفاده از AI",
      text: `یادگیری الگوهای روزانه/هفتگی/فصلی ترافیک. پیش‌بینی حجم تردد آینده برای مدیریت بهینه راه‌ها. شناسایی رویدادهای پرترافیک یا غیرعادی با الگوریتم‌های هوشمند.`,
    },
    {
      id: 5,
      title: "پایش لحظه‌ای ترافیک",
      text: `داشبورد لحظه‌ای با گراف‌ها و نقشه‌ زنده. نمایش تعداد عبور وسایل نقلیه به تفکیک کلاس، جهت، زمان و نوع. محاسبه و نمایش سرعت متوسط، نرخ تراکم و نرخ اشباع مسیر.`,
    },
  ];

  const icons = [
    <AiOutlineCloudDownload className="text-indigo-600 w-16 h-16" />,
    <AiOutlineDatabase className="text-indigo-600 w-16 h-16" />,
    <AiOutlineBarChart className="text-indigo-600 w-16 h-16" />,
    <AiOutlineRobot className="text-indigo-600 w-16 h-16" />,
    <AiOutlineDashboard className="text-indigo-600 w-16 h-16" />,
  ];

  return (
    <section
      className="py-16 px-6 bg-gradient-to-br from-[#f5f7fa] to-[#eaeaea] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] transition-colors duration-500"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-12">
          قابلیت‌های سامانه جامع تردد شماری
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

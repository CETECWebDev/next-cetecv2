"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRoad, FaProjectDiagram, FaLeaf, FaCoins } from "react-icons/fa";

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
      {/* سکشن کارت‌های کاربرد */}
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

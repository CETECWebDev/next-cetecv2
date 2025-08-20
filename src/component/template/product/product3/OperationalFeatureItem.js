"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "قابلیت تعریف طراحی سیستم‌ها و روش‌های پردازشی",
    description: "از روش‌های پردازش ساده تا روش‌های پیشرفته هوش مصنوعی و یادگیری عمیق، به صورت بلوک دیاگرام یا جریان داده‌ای.",
    icon: "🛠️"
  },
  {
    title: "قابلیت تعریف انواع نودها و داده‌ها",
    description: "انواع داده‌ها، دستگاه‌ها و سنسورها قابل اتصال به پلتفرم.",
    icon: "📡"
  },
  {
    title: "سرعت پردازشی بالا و بلادرنگ",
    description: "با توجه به فناوری‌های به‌کار رفته در پیاده‌سازی پلتفرم.",
    icon: "⚡"
  },
  {
    title: "معماری قابل توسعه و ماژولار",
    description: "طراحی منعطف و ماژولار برای توسعه آسان و افزودن قابلیت‌های جدید.",
    icon: "🧩"
  },
  {
    title: "قابلیت تنظیم و سفارش‌سازی داشبورد مانیتورینگ",
    description: "امکان شخصی‌سازی محیط مانیتورینگ مطابق نیاز کاربران و سناریوها.",
    icon: "📊"
  },
  {
    title: "قابلیت گزارش‌گیری‌های مختلف",
    description: "امکان ایجاد گزارش‌های سفارشی، مشاهده لحظه‌ای داده‌ها و تحلیل عملکرد سیستم.",
    icon: "📈"
  },
];


export default function FloatingOperationalFeatures() {
  return (
    <section className="relative w-full py-24 font-peyda bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:to-[#203a43] overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-purple-400/20 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          ویژگی‌های عملیاتی IRAN Platform
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center cursor-pointer transform perspective-1000 overflow-hidden"
              whileHover={{ scale: 1.08, rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              {/* Floating gradient behind card */}
              <motion.div
                className="absolute -inset-1 rounded-3xl blur-2xl z-0 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #facc15)"
                }}
              />

              {/* Card content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[110vh] md:min-h-screen overflow-hidden">
      
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: "url('/images/bg1.png')",
          filter: "brightness(0.9)",
        }}
      />

      
      <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-[3px] dark:backdrop-blur-[4px]" />

      
      <div className="relative z-20 flex items-start justify-center h-full px-4 sm:px-6 pt-32 md:pt-44">
        <div className="container mx-auto">
          <div className="text-center max-w-xl sm:max-w-2xl mx-auto px-4 md:px-0">
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-6 text-white">
              <span className="bg-gradient-to-r from-[#7684ff98] via-[#2af598] to-[#00ffcc] text-transparent bg-clip-text">
                قطب دانش
              </span>{" "}
              دروازه‌ای به دنیای دیجیتال و هوشمندسازی
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-200 leading-8 max-w-lg mx-auto">
              پلتفرمی جامع برای شناسایی، تشخیص، شمارش حرارتی، احراز هویت و اجرای تحلیل هوشمند داده‌ها به کمک هوش مصنوعی.
            </p>
            <Link
              href="#contact"
              className="inline-block mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              همین حالا ببینید
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

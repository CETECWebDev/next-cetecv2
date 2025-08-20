"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function IranPlatform() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden py-10">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      </div>

      {/* Floating Blur elements */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-[28rem] sm:w-[22rem] h-[28rem] sm:h-[22rem] bg-primary/10 dark:bg-primary/30 blur-[140px] rounded-full z-0"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-[-8rem] right-[-8rem] sm:bottom-[-6rem] sm:right-[-6rem] w-[26rem] sm:w-[20rem] h-[26rem] sm:h-[20rem] blur-[120px] rounded-full z-0"
      />

      <div className="container mx-auto h-full px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-24 relative z-10 py-12">
        
        {/* Text content */}
        <motion.div
          data-aos="fade-left"
          className="text-right space-y-4 md:w-1/2"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-300 text-sm font-normal leading-4">
            (CETEC) شرکت قطب دانش و فناوری های مدرن
          </p>

          {/* Title with Gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold py-5 px-3 leading-snug 
            bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 
            text-transparent bg-clip-text">
            پلتفرم و سامانهٔ پیشرفتهٔ ایران
          </h1>

          {/* Text lines */}
          <motion.div className="space-y-2">
            {[
              "پلتفرمی جامع برای شناسایی، تشخیص، شمارش، احراز هویت، ردیابی، هدایت و مسیریابی هوشمند",
              "مبتنی بر تحلیل انواع جریان داده‌ها به صورت برخط",
              "بر اساس پردازش‌های هوش مصنوعی و یادگیری عمیق",
            ].map((line, idx) => (
              <motion.p
                key={idx}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-600 dark:text-gray-200 leading-7 sm:leading-8 text-lg sm:text-xl font-normal font-peyda text-justify"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* IRAN complete + letters */}
        <div data-aos="fade-right" className="flex flex-col space-y-4 sm:space-y-6 md:w-1/2 text-left" dir="ltr">
          
          {/* IRAN complete blink + rotation */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text cursor-pointer transition-all duration-300"
            animate={{
              rotate: [0, 5, -5, 0],
              opacity: [1, 0.7, 1],
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            IRAN
          </motion.h2>

          {/* Individual letters */}
          {["I", "R", "A", "N"].map((letter, idx) => (
            <motion.div
              key={idx}
              className="flex items-center cursor-pointer hover:scale-105 hover:-translate-y-1 hover:brightness-125 transition-all duration-300"
              custom={idx}
              variants={letterVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 text-4xl sm:text-5xl md:text-6xl font-bold mr-1">
                {letter}
              </span>
              <span className="text-gray-900 dark:text-white font-bold text-xl sm:text-2xl md:text-2xl capitalize">
                {letter === "I" ? "dentification" :
                 letter === "R" ? "ecognition" :
                 letter === "A" ? "uthentication" :
                 "avigation"}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

// pages/index.js
"use client";

import React from "react";
import { FaHandshake } from "react-icons/fa";

export default function TimeLines() {
  const cards = [
    { year: "1393", text: "عضویت در مرکز رشد دانشگاه علم و صنعت ایران" },
    { year: "1394", text: "ثبت رسمی شرکت به عنوان یک واحد فناور" },
    { year: "1396", text: "دریافت مجوز شرکت دانش بنیان" },
    { year: "1398", text: "عضویت در پارک علم و فناوری گیلان" },
    { year: "1402", text: "تأسیس موسسه رسمی در پارک علم و فناوری گیلان" },
  ];

  const TimelineItem = ({ direction = "top", year, text, gradientDirection = "to right" }) => {
    const isTop = direction === "top";
    const circlePos = isTop ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2";
    const barPos = isTop ? "bottom-0" : "top-0";

    return (
      <div className="relative p-4 w-full md:flex-1">
        <div className="relative z-10 text-center rounded-xl border border-gray-400 px-4 py-8
                        bg-white dark:bg-[#2e3440] dark:border-gray-600 shadow-lg transition-colors duration-500 h-full">
          <div
            className={`z-20 flex items-center justify-center w-20 h-20 absolute ${circlePos} left-1/2 -translate-x-1/2 rounded-full border-4 border-gray-300 dark:border-gray-500 bg-white dark:bg-[#434c5e] transition-colors duration-500`}
          >
            <FaHandshake className="text-4xl text-blue-500 dark:text-blue-400" />
          </div>
          <p className="font-bold py-4 text-gray-800 dark:text-gray-100">{year}</p>
          <h2 className="font-bold pb-2 text-gray-700 dark:text-gray-200">{text}</h2>
        </div>
        <div
          className={`absolute rounded-lg h-[50%] w-full ${barPos} z-0 left-1/2 -translate-x-1/2`}
          style={{ background: `linear-gradient(${gradientDirection}, #cbd5e1, #94a3b8)` }}
        />
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 font-peyda
                        bg-gradient-to-br from-[#f5f7fa] via-[#e0e7ff] to-[#c3cfe2] 
                        dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-3xl pb-16 font-bold text-gray-900 dark:text-gray-100">
          مسیر رشد و دستاوردها
        </h1>

        
        <div className="flex flex-col md:flex-row md:flex-nowrap justify-between gap-6">
          {cards.map((card, index) => (
            <TimelineItem
              key={index}
              year={card.year}
              text={card.text}
              direction={index % 2 === 0 ? "top" : "bottom"}
              gradientDirection={index % 2 === 0 ? "to right" : "to left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function AboutCETEC() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-peyda">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      </div>

      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/20 dark:bg-primary/40 blur-[120px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-yellow-300/20 blur-[100px] rounded-full z-0 animate-pulse" />

      <div className="container mx-auto px-6 md:px-20 py-20 relative z-10 text-right">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight text-right inline-block relative mb-3">
          درباره‌ی قطب دانش
        </h1>

        <div className="h-1 w-[220px] bg-gradient-to-r from-gray-400 via-blue-400 to-gray-500 rounded mb-10" />

        <div className="text-justify text-lg md:text-xl font-medium leading-relaxed text-gray-800 dark:text-gray-300 space-y-8">
          {[1, 2, 3].map((_, i) => (
            <p key={i} className="flex items-start gap-3">
              <GradientCheckIcon />
             
              {i === 0 && (
                <>
                  شرکت دانش بنیان قطب دانش و فناوری‌های مدرن پارس به اختصار شرکت قطب دانش یا CETEC (CETEC - Center of Excellence in Technologies)،
                  با تکیه بر تخصص، نوآوری و تعهد، از سال 1394 فعالیت رسمی خود را آغاز نمود. قطب دانش با هدف تولید محصولات با کیفیت در مرز فناوری،
                  قرارگیری به عنوان یک اهرم صنعتی ارزشمند در زنجیره تولید فناوری در کشور، توسعه فناوری‌های نوین و زیرساختی، ارتقاء کیفیت صنایع کشور،
                  و ایجاد تحول در فرآیندهای صنعتی، پژوهشی و اجرایی، طی سال‌ها تلاش و تجربه و همگام بودن با فناوری به یکی از شرکت‌های دانش بنیان
                  پیشرو در حوزه فناوری‌های پیشرفته در کشور تبدیل شده است.
                </>
              )}
              {i === 1 && (
                <>
                  در قطب دانش، تیم های تخصصی از بهترین فناوران کشور گرد هم می آیند و
                  در یک ساختار منظم و آینده نگر، محصولاتی جذاب خلق می کنند و پروژه های بزرگی را اجرا میکنند و هدف ما، تبدیل شدن به یک قطب فناوری
                  منطقه ای و حتی بین المللی است.
                </>
              )}
              {i === 2 && (
                <>
                  با برخورداری از تیمی متشکل از نخبگان دانشگاه‌های برتر کشور و پژوهشگاه دانش‌های بنیادی (IPM)،
                  ما مسیر رشد و توسعه خود را با اتکا به دانش عمیق،
                  تجربه فنی، و ارتباط مؤثر با صنایع استراتژیک کشور طی کرده‌ایم.
                </>
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradientCheckIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="light-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="dark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      <path
        d="M9 16.2l-3.5-3.5 1.41-1.41L9 13.38l7.09-7.09 1.41 1.41L9 16.2z"
        className="fill-light-gradient dark:fill-dark-gradient"
        fill="url(#light-gradient)"
      />
    </svg>
  );
}

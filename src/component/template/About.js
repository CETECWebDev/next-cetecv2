"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import aboutAnimation from "@/component/common/assets/animations/aboutAnimation.json";

function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
    
      className="py-12 overflow-x-hidden
                 bg-gradient-to-b from-[#eaeaea] via-[#f5f5f5] to-white 
                 dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] 
                 transition-colors duration-500"
    >
     
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12" dir="rtl">
          {/* متن */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-justify"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1 className="text-primary-title-light dark:text-primary-title-dark font-bold text-4xl md:text-3xl my-5 text-center md:text-right">
              درباره‌ی شرکت قطب دانش و فناوری‌های مدرن (CETEC)
            </h1>

            <p className="text-gray-600 dark:text-gray-300 my-6 leading-[2.2] font-medium tracking-wide text-2xl md:text-xl">
              شرکت قطب دانش و فناوری‌های مدرن ستاره پارس (CETEC - Center of Excellence in Technologies)،
              با تکیه بر تخصص، نوآوری و تعهد، از سال ۱۳۹۱ فعالیت رسمی خود را آغاز کرده است.
            </p>

            <div className="w-full flex justify-center md:justify-start">
              <button
                className="my-4 px-8 py-3 text-sm sm:text-base md:text-lg
                           rounded-full
                           bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#16a34a]
                           text-white border border-transparent
                           hover:from-[#16a34a] hover:via-[#22c55e] hover:to-[#4ade80]
                           transition-all duration-300
                           transform hover:-translate-y-1 hover:shadow-lg"
                aria-label="بیشتر بدانید درباره قطب دانش"
              >
                بیشتر بدانید
              </button>
            </div>
          </div>

       
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Lottie
              animationData={aboutAnimation}
              loop={true}
              className="w-[85%] sm:w-[75%] md:w-[90%] max-w-[480px] md:-translate-x-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

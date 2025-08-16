"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

function Product() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-peyda">
   
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]" />
      </div>


      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/20 dark:bg-primary/40 blur-[120px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-yellow-300/20 blur-[100px] rounded-full z-0 animate-pulse" />

    
      <div className="container mx-auto h-full px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 relative z-10 py-12">
      
        <div
          data-aos="fade-left"
          className="max-w-xl text-center md:text-right space-y-8 text-gray-900 dark:text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            سامانه <span className="text-primary">شمارش هوشمند افراد</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed md:leading-loose">
            دستگاه شمارنده هوشمند، بخشی از سامانه الکترونیکی و
             نرم افزاری پیشرفته است که معمولا در شریان های اصلی ورودی و خروجی مجموعه ها نصب می گردد. با استفاده از روش های پیشرفته پردازش تصویر لبه (edge) ، و هوش مصنوعی، تعداد دقیق افراد ورودی و خروجی در معابر بزرگ را به 
            طور لحظه ای ارائه میکند. نرم افزار تحت وب، ترافیک ورودی خروجی را به صورت برخط و با گزارشهای کامل نمایش می دهد. با استفاده از داده کاوی و هوش مصنوعی پیش بینی دقیقی از میزان تردد و فروش مجموعه ارائه می کند.
                </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="bg-primary hover:bg-[#64dd17] text-white font-bold py-3 px-8 rounded-2xl transition-all shadow-md hover:shadow-xl shadow-primary/40">
              درخواست محصول
            </button>
            <button className="border border-gray-400 hover:border-gray-600 dark:border-gray-300 dark:hover:border-white text-gray-800 dark:text-white font-bold py-3 px-8 rounded-2xl transition-all">
              مشاهده جزئیات
            </button>
          </div>
        </div>

       
        <div
          data-aos="fade-right"
          className="flex justify-center items-center md:w-1/2 w-full"
        >
          <Image
            src="/images/products/product2.png"
            alt="تصویر محصول"
            width={400}
            height={400}
            className="rounded-lg object-contain md:animate-spin-slow md:hover:animate-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Product;

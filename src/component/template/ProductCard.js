"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "سامانه هوشمند تردد شمار جاده‌ای",
    description:
      "این سامانه با بهره‌گیری از فناوری‌های پیشرفته بینایی ماشین و پردازش تصویر، برای شمارش دقیق وسایل نقلیه در مسیرهای جاده‌ای طراحی شده است. قابلیت تشخیص نوع وسیله نقلیه، سرعت، و سایر اطلاعات مفید را نیز دارا می‌باشد.",
    img: "/images/products/img2.png",
  },
  {
    id: 2,
    title: "سامانه شمارش هوشمند افراد",
    description:
      "دستگاه شمارنده هوشمند، بخشی از سامانه الکترونیکی و نرم‌افزاری پیشرفته است که معمولاً در شریان‌های اصلی ورودی و خروجی مجموعه‌ها نصب می‌گردد. با استفاده از روش‌های پیشرفته پردازش تصویر لبه (Edge Computing) و هوش مصنوعی، این سامانه توانایی تشخیص و شمارش دقیق افراد را دارد.",
    img: "/images/products/img2.png",
  },
  {
    id: 3,
    title: "سامانه نرم افزاری مدیریت زنجیره تولید",
    description:
      "سامانه جامع، نظارت و مدیریت برخط پروژه‌ها، وظایف و فرایندها و تولیدات، نظارت بر ماشین‌آلات و OEE آنها، کنترل مواد خام و بررسی برخط موجودی مواد خام در دسترس، تسهیل نیازمندی به مواد خام و زمان‌بندی درست بهره‌برداری از آنها",
    img: "/images/products/product3.png",
  },
  {
    id: 4,
    title: "دیتالاگرهای پیشرفته ورژن ۴.۵",
    description:
      "دیتالاگرهای پیشرفته صنعتی و نظامی برای ثبت، ذخیره و تحلیل داده‌ها از سنسورها و سیستم‌های مختلف به‌کار می‌روند. این دستگاه‌ها در محیط‌های سخت از لحاظ شرایط محیطی (دمای بالا، رطوبت، لرزش، نویز الکترومغناطیسی و ...) عملکرد قابل اطمینان دارند و با انواع نرخ بیت‌ها و فرکانس‌ها و تعداد کانال‌های ورودی و خروجی قابل سفارشی‌سازی هستند.",
    img: "/images/products/img3.png",
  },
  {
    id: 5,
    title: "پهپاد عمود پرواز هوشمند ورژن ۵.۰",
    description:
      "این محصول اولین نسل پهپادهای هوشمند عمودپرواز تولید شده در ایران است. دارای بخش کنترل پرواز پیشرفته‌ای است که آن را برای کاربردهای بسیاری از جمله امداد و نجات، مدیریت بحران، بازرسی و امنیت و سامانه‌های مدار بسته و... مناسب می‌سازد. به راحتی تنظیم و راه‌اندازی می‌شود.",
    img: "/images/products/img5.jpg",
  },
];

function Products() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="products"
      className="py-10 bg-gradient-to-b from-[#f0f0f0] to-white dark:from-[#0f2027] dark:to-[#203a43]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
          محصولات ما
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {products.slice(0, 3).map((product, index) => (
            <div key={product.id} className="h-full flex">
              <ProductCard product={product} delay={index * 150} />
            </div>
          ))}
        </div>

        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch">
          {products.slice(3, 5).map((product, index) => (
            <div key={product.id} className="h-full flex">
              <ProductCard product={product} delay={index * 150 + 450} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col justify-between h-full 
                 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 
                 rounded-2xl p-6 shadow-lg backdrop-blur-sm 
                 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
    >
      <div>
        <div className="w-full h-[220px] flex items-center justify-center my-5">
          <img
            src={product.img}
            alt={product.title}
            width={180}
            height={180}
            className="object-contain rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base font-medium text-justify leading-7">
          {product.description}
        </p>
      </div>
      <div className="flex justify-center my-2">
        <Link
          href="#"
          className="text-sm font-semibold text-white px-10 py-4 rounded-full 
                     bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 
                     transition duration-300"
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default Products;

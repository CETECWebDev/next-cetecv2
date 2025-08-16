"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRobot, FaCogs, FaPlane, FaBrain, FaProjectDiagram } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "سامانه‌های نرم‌افزاری مبتنی بر هوش مصنوعی",
    description: `سامانه‌های داده‌کاوی، یادگیری ماشین، پردازش تصویر و 
    صوت سیستم‌های تشخیص چهره، تحلیل ویدئو، نظارت هوشمند سامانه‌های نرم‌افزاری تصمیم‌یار در صنعت`,
    icon: <FaRobot className="text-6xl text-blue-500 dark:text-blue-400" />,
  },
  {
    id: 2,
    title: "سامانه‌های سخت‌افزاری و کنترلی",
    description:`سیستم‌های نهفته، داده‌برداری و پردازش زمان واقعی طراحی و ساخت بردهای الکترونیکی پیشرفته و تجهیزات کنترلی`,
    icon: <FaCogs className="text-6xl text-green-500 dark:text-green-400" />,
  },
  {
    id: 3,
    title: "پهپادهای هوشمند",
    description: `طراحی و تولید پهپادهای عمودپرواز خودران با قابلیت ردیابی، پردازش تصویر، ناوبری هوشمند و مخابرات بی‌سیم`,
    icon: <FaPlane className="text-6xl text-purple-500 dark:text-purple-400" />, // جایگزین FaDrone
  },
  {
    id: 4,
    title: "واسط مغز و کامپیوتر (BCI)",
    description: `توسعه سامانه‌هایی برای تحلیل سیگنال‌های مغزی و تعامل مستقیم انسان با سیستم‌های رایانه‌ای`,
    icon: <FaBrain className="text-6xl text-yellow-500 dark:text-yellow-400" />,
  },
  {
    id: 5,
    title: "شبیه‌سازی، تحقیق و مشاوره صنعتی",
    description: `پروژه‌های شبیه‌سازی پیشرفته در حوزه‌های برق، الکترونیک، کامپیوتر، مکاترونیک و سیستم‌های میان‌رشته‌ای - مشاوره در طراحی مفهومی، مهندسی معکوس و بهینه‌سازی فرآیندهای تولید`,
    icon: <FaProjectDiagram className="text-6xl text-red-500 dark:text-red-400" />,
  },
];

function Specialized() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="products"
      className="py-10 bg-gradient-to-b from-[#f0f0f0] to-white dark:from-[#0f2027] dark:to-[#203a43]"
    >
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white py-5">
          حوزه‌های تخصصی
        </h1>

        <p className="text-base md:text-lg font-medium text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed py-6 px-4">
          ستک در طی بیش از یک دهه فعالیت، توانسته در حوزه‌های فناوری اطلاعات، هوش مصنوعی و سامانه‌های نرم‌افزاری، راهکارهایی نوآورانه ارائه دهد.
        </p>

        {/* ردیف اول: 3 کارت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {products.slice(0, 3).map((product, index) => (
            <div key={product.id} className="h-full flex">
              <ProductCard product={product} delay={index * 150} />
            </div>
          ))}
        </div>

        {/* ردیف دوم: 2 کارت وسط چین */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-10 items-stretch justify-center">
          {products.slice(3, 5).map((product, index) => (
            <div key={product.id} className="h-full flex justify-center">
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
      className="flex flex-col justify-start h-full 
                 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 
                 rounded-2xl p-4 shadow-lg backdrop-blur-sm 
                 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-full h-[160px] flex items-center justify-center my-4">
        {product.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 text-center">
        {product.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-base font-medium text-justify leading-6">
        {product.description}
      </p>
    </div>
  );
}

export default Specialized;

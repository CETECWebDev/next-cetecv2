"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesData = [
  {
    id: 1,
    img: "/images/products/img1.png",
    title: "سازمانی",
    description: "به‌کارگیری فناوری‌های هوشمند برای بهینه‌سازی فرآیندها",
  },
  {
    id: 2,
    img: "/images/products/img2.png",
    title: "تجاری",
    description: "به‌کارگیری فناوری‌های هوشمند برای بهینه‌سازی فرآیندها",
  },
  {
    id: 3,
    img: "/images/products/img3.png",
    title: "صنعتی",
    description: "به‌کارگیری فناوری‌های هوشمند برای بهینه‌سازی فرآیندها",
  },
  {
    id: 4,
    img: "/images/products/img3.png",
    title: "هایتک",
    description: "به‌کارگیری فناوری‌های هوشمند برای بهینه‌سازی فرآیندها",
  },
];

function Services() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      className="py-10 
      bg-gradient-to-b from-[#ada996] via-[#dbdbdb] to-[#eaeaea]
      dark:bg-gradient-to-b dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] 
      transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-700 dark:text-white py-5">
            حوزه های فعالیت
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-10 place-items-center">
          {ServicesData.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-duration="700"
              className="w-full max-w-[260px] rounded-2xl 
                bg-white/80 backdrop-blur-sm border border-gray-200 shadow 
                dark:bg-white/10 dark:backdrop-blur-sm dark:border dark:border-white/10 
                hover:bg-primary dark:hover:bg-primary hover:text-white 
                relative duration-300 group transform 
                hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:rotate-1"
            >
              <div className="h-[140px] flex items-center justify-center">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="object-contain group-hover:scale-110 duration-300 shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-lg md:text-lg font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h1>
                <p className="text-md font-medium text-gray-600 dark:text-gray-300 
                  duration-300 line-clamp-2 py-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

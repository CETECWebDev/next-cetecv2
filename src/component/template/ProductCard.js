"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, delay }) {
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
        <div className="w-full h-[220px] flex items-center justify-center my-5 relative">
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-contain rounded-xl"
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

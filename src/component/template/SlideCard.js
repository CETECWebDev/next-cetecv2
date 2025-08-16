"use client";

import Image from "next/image";

export default function SlideCard({ img, id }) {
  return (
    <div className="bg-white/70 dark:bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 h-full flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
      <div className="relative h-40 sm:h-48 w-full rounded-xl mb-4 overflow-hidden">
        <Image src={img} alt={`اسلاید ${id}`} fill style={{ objectFit: "cover" }} priority />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">لورم ایپسوم عنوان</h3>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
        لورم ایپسوم متن نمونه برای توضیحات داخل کارت است که وسط چین شده.
      </p>
    </div>
  );
}

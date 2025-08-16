"use client";

import React from "react";

function OptionCard({ icon, title, text, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="
        w-full max-w-md
        bg-white/90 dark:bg-gray-900/80
        border border-gray-200 dark:border-gray-700
        backdrop-blur-md
        rounded-3xl
        p-8
        shadow-lg dark:shadow-black/40
        hover:shadow-2xl hover:scale-105
        transform transition-all duration-300
        flex flex-col justify-start items-center
      "
    >
      
      <div className="flex justify-center mb-5 text-5xl text-gradient-orange">
        {icon}
      </div>

    
      <h2 className="text-xl font-extrabold text-center text-gray-900 dark:text-white mb-3 truncate">
        {title}
      </h2>

    
      <p className="text-base font-normal text-center text-gray-700 dark:text-gray-300 px-3 leading-relaxed line-clamp-5">
        {text}
      </p>
    </div>
  );
}

export default OptionCard;

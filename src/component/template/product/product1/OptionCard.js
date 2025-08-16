"use client";

import React from "react";

function OptionCard({ icon, title, text, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="w-full max-w-md bg-white/80 dark:bg-white/10 border border-orange-200 dark:border-white/10 backdrop-blur-md 
      rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col justify-start"
    >
      <div className="flex justify-center mb-3 text-4xl text-orange-500 dark:text-white">
        {icon}
      </div>
      
      <h2 className="text-lg font-bold text-center text-gray-800 dark:text-white mb-4 line-clamp-1">
        {title}
      </h2>

    
      <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 px-2 leading-loose">
        {text}
      </p>
    </div>
  );
}

export default OptionCard;

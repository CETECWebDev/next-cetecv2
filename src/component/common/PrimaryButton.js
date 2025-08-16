"use client";

import React from "react";

export default function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-medium transition duration-300
        bg-blue-600 text-white hover:bg-blue-700
        dark:bg-green-600 dark:hover:bg-green-700
        ${className}`}
    >
      {children}
    </button>
  );
}

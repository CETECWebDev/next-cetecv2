"use client";

export default function NavigationButton({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-blue-200 dark:hover:bg-white/20 transition ${className}`}
    >
      {children}
    </button>
  );
}

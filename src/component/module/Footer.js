"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FooterAbout from "./footer/FooterAbout";
import FooterProducts from "./footer/FooterProduct";
import FooterContact from "./footer/FooterContact";
import FooterSocial from './footer/FooterSocial';
import NavbarLogo from "./navbar/NavbarLogo";

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <footer className="relative over-flow-hidden bg-gradient-to-r from-black via-gray-900 to-gray-800 backdrop-blur-md border-t border-gray-700 py-14 transition-colors duration-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 dark:border-gray-300">
      <div className="max-w-[90rem] mx-auto px-4 text-white dark:text-gray-200 w-full">
        <NavbarLogo/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-right font-semibold py-10">
          <FooterAbout />
          <FooterProducts />
          <FooterContact />
          <FooterSocial />
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="mt-14 text-center text-gray-400 dark:text-gray-500 text-sm select-none">
          © ۱۴۰۲ قطب دانش و فناوری‌های مدرن. کلیه حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}

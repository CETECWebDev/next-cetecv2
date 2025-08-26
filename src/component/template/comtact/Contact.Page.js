"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaTelegram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen w-full bg-gradient-to-b from-[#eaeaea] via-[#f5f5f5] to-white 
                 dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364] 
                 transition-colors duration-500">
      <section className="container mx-auto max-w-6xl px-4 py-12 w-full">
       
        <div className="flex items-center w-full  h-[600px]">
          
         
        <div
  className="relative text-white p-8 md:p-12 flex flex-col justify-between h-full w-1/2 redCard rounded-tr-xl rounded-br-xl"
  style={{
    backgroundImage: "url('/images/contact.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="absolute inset-0 bg-blue-800/50 rounded-tr-xl rounded-br-xl z-0"></div>

  {/* محتوا */}
  <div className="relative z-10">
    <h2 className="text-xl font-bold mb-4">سایر راه‌های ارتباطی</h2>

    <ul className="space-y-5 font-medium text-lg">
      <li className="flex items-start gap-3">
        <FaMapMarkerAlt className="text-lg mt-1" />
        <span> رشت، بلوار امام خمینی، نرسیده به میدان فرهنگ، کوچه شیرمحمدی، فرعی ۱، مرکز نوآوری صنایع خلاق</span>
      </li>
      <li className="flex items-start gap-3">
        <FaPhone className="text-lg mt-1" />
        <span>۰۱۳۵۵۴۵۱۳۲۳</span>
      </li>
      <li className="flex items-start gap-3">
        <FaEnvelope className="text-lg mt-1" />
        <span>info@cetec.com</span>
      </li>
      <li className="flex items-start gap-3">
        <FaClock className="text-lg mt-1" />
        <span>همه‌روزه غیر از جمعه‌ها: از 9 تا 14</span>
      </li>
    </ul>

    {/* نقشه */}
    <div className="mt-8 rounded-lg overflow-hidden h-48 bg-white">
      <iframe
        title="map"
        className="w-full h-full"
        src="https://www.openstreetmap.org/export/embed.html"
      />
    </div>

  
    <div className="mt-6 flex gap-4 text-xl justify-center">
      <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#487eb0] hover:bg-gray-100">
        <FaInstagram />
      </Link>
      <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#487eb0] hover:bg-gray-100">
        <FaTelegram />
      </Link>
      <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#487eb0] hover:bg-gray-100">
        <FaLinkedin />
      </Link>
      <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#487eb0] hover:bg-gray-100">
        <FaTwitter />
      </Link>
    </div>
  </div>
</div>


        
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center h-[90%] w-1/2 shadow-lg relative z-[200] rounded-tl-xl rounded-bl-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              <span className="text-[#0097e6]">تماس</span> با قطب دانش
            </h2>
            <p className="text-gray-700 leading-8 text-lg md:text-base font-medium">
              توصیه ما این است که ابتدا نگاهی به صفحه{" "}
              <Link href="#" className="text-blue-400 font-semibold hover:underline">
                سوالات متداول
              </Link>{" "}
              بیاندازید؛ اگر جواب سوال خود را پیدا نکردید، از طریق فرم زیر سوال خود را با ما به‌اشتراک بگذارید. کارشناسان قطب دانش در سریع‌ترین زمان ممکن با شما در ارتباط خواهند بود. جهت ارتباط با ما،
               می‌توانید از طریق فرم زیر و سایر پل‌های ارتباطی اقدام فرمایید و یا می‌توانید پاسخ خود را از صفحه دریافت کنید.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
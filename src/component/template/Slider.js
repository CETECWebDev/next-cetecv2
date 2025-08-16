"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { FaChevronLeft } from "react-icons/fa";

import SlideCard from "./SlideCard";
import NavigationButton from "./NavigationButton";

const slides = [
  { id: 1, img: "/images/slide1.jpg" },
  { id: 2, img: "/images/slide2.png" },
  { id: 3, img: "/images/slide3.jpg" },
];

export default function Slider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      className="py-20 bg-gradient-to-b from-[#e0eafc] via-[#cfdef3] to-[#f7fafd] dark:from-[#1a202c] dark:via-[#2d3748] dark:to-[#4a5568] transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">پروژه‌های قطب دانش</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 py-6 px-3 font-medium">
            قطب دانش و فناوری‌های پارس طی سال‌های متمادی با اجرای پروژه‌های پیشرفته در سطح کلان، تجربه‌ای ارزشمند کسب کرده است.
            این شرکت با گردآوری تیمی فنی، متخصص و کارآزموده، موفق به تولید محصولات باکیفیت و اجرای پروژه‌های صنعتی کاربردی شده است.
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={false}
          initialSlide={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={60}
          slidesPerView={3}
          navigation={false}
          modules={[EffectCoverflow, Navigation]}
          className="relative"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {slides.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <SlideCard img={img} id={id} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex justify-center items-center gap-6">
          <NavigationButton onClick={() => swiperRef.current?.slidePrev()} className="rotate-180">
            <FaChevronLeft />
          </NavigationButton>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  activeIndex === i ? "bg-gray-800 dark:bg-white" : "bg-gray-400/50 dark:bg-white/30"
                }`}
              />
            ))}
          </div>

          <NavigationButton onClick={() => swiperRef.current?.slideNext()}>
            <FaChevronLeft />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
}

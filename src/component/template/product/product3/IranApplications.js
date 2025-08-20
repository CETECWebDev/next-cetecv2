"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { steps } from "./stepsData";

export default function IranStepperAdvanced() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative w-full py-20 font-iranYekan overflow-hidden
      bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#0f2027] dark:to-[#203a43]">

      <motion.div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-[140px] bg-gradient-to-br from-teal-400/20 via-cyan-400/10 to-purple-500/20"
                  animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] rounded-full blur-[120px] bg-gradient-to-br from-purple-500/20 via-pink-400/10 to-yellow-400/20"
                  animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
            data-aos="fade-up">
          کاربردهای پلتفرم IRAN
        </h2>

        <div className="relative">
          <div className="absolute right-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-teal-400 via-cyan-400 to-purple-500"></div>
          <div className="space-y-20">
            {steps.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

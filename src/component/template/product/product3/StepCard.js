"use client";
import { motion } from "framer-motion";

export default function StepCard({ step, index }) {
  return (
    <motion.div
      className="relative flex items-start group"
      data-aos="fade-up"
      data-aos-delay={index * 200}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="z-10 flex items-center justify-center w-16 h-16 rounded-full 
                   bg-gradient-to-br from-teal-400 via-cyan-400 to-purple-500 text-white font-bold shadow-xl ml-6"
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {step.id}
      </motion.div>

      <motion.div
        className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 w-full overflow-hidden ml-6"
        whileHover={{ scale: 1.03, x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div
          className="absolute -inset-1 rounded-3xl blur-2xl opacity-30"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #facc15)",
          }}
        />
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
            {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed text-justify">
            {step.desc}
          </p>
        </div>
      </motion.div>

      {index < 4 && (
        <div className="absolute right-[3rem] top-16 w-1/2 h-6 border-t-2 border-dashed border-white/30 dark:border-gray-600 rounded-full transform rotate-12"></div>
      )}
    </motion.div>
  );
}

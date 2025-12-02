"use client";

import { motion } from "framer-motion";

const SankakuPhilosophySection = () => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-24 relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/인테리어/interior_5.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 sm:space-y-6"
          style={{fontFamily: "var(--font-cheongdo)"}}
        >
          <h2 className="text-[20px] sm:text-[28px] lg:text-[36px] font-bold text-white">
            대한민국 <span className="text-[#e63a3c]">최초</span><br/>라멘 & 오니기리 전문점
          </h2>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-white leading-relaxed max-w-4xl mx-auto">
            Sankaku(산카쿠)는 일본어로 &apos;삼각형&apos;을 뜻합니다.
          </p>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-white leading-relaxed max-w-4xl mx-auto">
            하나의 삼각형 안에는<br/> 우리의 세 가지 철학이 담겨 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SankakuPhilosophySection;


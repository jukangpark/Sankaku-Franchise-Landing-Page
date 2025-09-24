"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LogoSlider = () => {
  // 로고 아이템 생성 (원본 해상도 1581×658 적용)
  const logoItems = Array.from({ length: 80 }, (_, index) => (
    <div
      key={index}
      className="flex-shrink-0 mx-12 flex items-center justify-center"
    >
      <div className="relative w-[150px] h-[62px] sm:w-[200px] sm:h-[83px] lg:w-[300px] lg:h-[125px]">
        <Image
          src="/logo_slider.png"
          alt="산카쿠 로고"
          width={1581}
          height={658}
          className="object-contain"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  ));

  return (
    <div className="overflow-hidden" style={{ backgroundColor: "#f7f2e8" }}>
      <motion.div
        className="flex items-center"
        animate={{
          x: [+0, -960], // 6개 로고 × 160px = 960px
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* 첫 번째 세트 */}
        <div className="flex items-center">{logoItems}</div>
      </motion.div>
    </div>
  );
};

export default LogoSlider;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SimpleButDeepSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 
            className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold mb-8 sm:mb-12 lg:mb-16"
            style={{ color: "#402f20" }}
          >
            &quot;단순하지만 깊다.&quot;
          </h1>

          <div className="space-y-4 sm:space-y-6 text-[16px] sm:text-[20px] lg:text-[24px] text-[#222222] leading-relaxed max-w-4xl mx-auto relative">
            {/* 배경 로고 - description div 영역 뒤쪽 가운데 */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Image
                src="/SANKAKU_LOGO.jpg"
                alt="Sankaku Logo"
                width={800}
                height={800}
                className="w-[400px] sm:w-[600px] lg:w-[800px] opacity-[0.08] object-contain"
              />
            </div>
            
            <div className="relative z-10">
            <h2>
              산카쿠의 라멘은 화려하지 않습니다.
            </h2>
            <h2>
              하지만 국물 한 숟갈,
              <br />
              면 한 젓가락에 담긴 진심은 깊습니다.
            </h2>
            <h2>
              우리는 한 그릇에 정성을 담는 장인 정신
            </h2>
            <h2>
              직접 우려낸 깊은 국물과 균형 잡힌 맛
            </h2>
            <h2>
              누구나 편하게 머물 수 있는 공간을 통해
            </h2>
            <h2>
              <span 
                className="font-extrabold text-[18px] sm:text-[24px] lg:text-[34px]"
                style={{ color: "#a98e6e", fontFamily: "var(--font-cheongdo)" }}
              >
                &apos;단순하지만 진짜 맛있는 라멘&apos;
              </span>
              을 만듭니다.
            </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleButDeepSection;


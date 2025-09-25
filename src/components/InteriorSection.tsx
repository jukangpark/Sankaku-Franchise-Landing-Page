"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const InteriorSection = () => {
  const interiorImages = [
    "/인테리어/interior_1.jpg",
    "/인테리어/interior_2.jpg",
    "/인테리어/interior_3.jpg",
    "/인테리어/interior_4.jpg",
    "/인테리어/interior_5.jpg",
    "/인테리어/interior_6.jpg",
    "/인테리어/interior_7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prev) => (prev + 1) % interiorImages.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex(
      (prev) => (prev - 1 + interiorImages.length) % interiorImages.length
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);

    setCurrentIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  return (
    <section
      className="min-h-[600px] sm:min-h-[700px] lg:h-[978px] bg-cover bg-center bg-no-repeat relative flex items-center py-12 sm:py-16 lg:py-24 pb-20 sm:pb-16 lg:pb-24"
      style={{ backgroundImage: "url(/인테리어/인테리어bg.jpg)" }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full">
        <div className="text-center lg:text-left w-full lg:w-auto">
          <h3 className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-gray-400 mb-4 sm:mb-6 lg:mb-8">
            산카쿠만의 트렌디한 인테리어
          </h3>
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.25em] mb-6 sm:mb-8 lg:mb-[55px] text-white font-extrabold">
            산카쿠의 <span className="text-[#e18c12]">인테리어</span>는
            <br />
            10년이 지나도 <br />
            편안함을 드립니다.
          </h1>
          <p className="text-[16px] sm:text-[20px] lg:text-[28px] font-bold text-white mb-6 sm:mb-8">
            언제나 편안한 분위기에서
            <br />
            즐길 수 있도록 고안된 '산카쿠' 인테리어
          </p>
        </div>
        <div className="w-full lg:w-[780px] lg:h-[530px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={interiorImages[currentIndex]}
                alt={`인테리어 ${currentIndex + 1}`}
                width={780}
                height={530}
                className="w-full h-auto object-cover"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* 이미지 바로 아래 네비게이션 */}
          <div className="absolute -bottom-13 left-0 right-0 flex items-center justify-between w-full px-4">
            {/* 왼쪽 화살표 버튼들 */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="text-[0] w-[58px] h-[32px] rounded-[16px] border border-white bg-transparent bg-no-repeat bg-[length:13px] bg-center hover:opacity-80 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                style={{
                  backgroundImage: "url(/인테리어/interior_left.png)",
                }}
              />
              <button
                onClick={handleNext}
                className="text-[0] w-[58px] h-[32px] rounded-[16px] border border-white bg-transparent bg-no-repeat bg-[length:13px] bg-center hover:opacity-80 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                style={{
                  backgroundImage: "url(/인테리어/interior_right.png)",
                }}
              />
            </div>

            {/* 오른쪽 페이지 인디케이터 - 01 ------- 07 형태 */}
            <div className="flex items-center gap-2">
              <span className="text-white text-[18px] font-extrabold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <div className="w-16 h-px bg-white/50"></div>
              <span className="text-white/50 text-[18px] font-bold">
                {String(interiorImages.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorSection;

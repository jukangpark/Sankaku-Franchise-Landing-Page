"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import salesData from "@/mock/salesData";
import SalesCard from "./SalesCard";

const SalesSlider = () => {
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
    setCurrentIndex((prev) => (prev + 1) % salesData.length);
    setTimeout(() => setIsAnimating(false), 400); // 애니메이션 시간
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + salesData.length) % salesData.length);
    setTimeout(() => setIsAnimating(false), 400); // 애니메이션 시간
  };

  return (
    <div className="flex items-center gap-4 lg:gap-4">
      {/* 슬라이드 컨테이너 */}
      <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:w-[600px] h-[440px] sm:h-[500px] lg:h-[940px] overflow-hidden">
        {/* 카드 컨테이너 */}
        <div
          className="flex flex-col gap-2 sm:gap-3 lg:gap-4 transition-transform duration-400 ease-in-out sales-slider-transform"
          style={
            {
              "--transform-y": `-${currentIndex * 220}px`, // 모바일 기본값
              "--sm-transform-y": `-${currentIndex * 250}px`, // 태블릿 (2개씩 보이도록)
              "--lg-transform-y": `-${currentIndex * 316}px`, // PC
            } as React.CSSProperties & {
              "--transform-y": string;
              "--sm-transform-y": string;
              "--lg-transform-y": string;
            }
          }
        >
          {/* 모든 카드 렌더링 (모바일/태블릿: 2개씩, PC: 3개씩 보이도록) */}
          {Array.from({ length: salesData.length + 2 }, (_, i) => {
            const cardIndex = i % salesData.length;
            const displayIndex = i - currentIndex;
            return (
              <SalesCard
                key={`${salesData[cardIndex].id}-${i}`}
                card={salesData[cardIndex]}
                index={displayIndex}
                currentIndex={0} // 항상 0으로 전달 (첫 번째가 강조)
              />
            );
          })}
        </div>
      </div>

      {/* 화살표 버튼 */}
      <div className="flex flex-col gap-2 self-start">
        <button
          onClick={handlePrev}
          className="w-[30px] h-[50px] sm:w-[35px] sm:h-[60px] lg:w-[40px] lg:h-[70px] bg-white rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          <Image
            src="/sales_slider/up_button.png"
            alt="이전 버튼"
            width={15}
            height={15}
            className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] lg:w-[15px] lg:h-[15px] object-contain"
          />
        </button>
        <button
          onClick={handleNext}
          className="w-[30px] h-[50px] sm:w-[35px] sm:h-[60px] lg:w-[40px] lg:h-[70px] bg-white rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          <Image
            src="/sales_slider/down_button.png"
            alt="다음 버튼"
            width={15}
            height={15}
            className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] lg:w-[15px] lg:h-[15px] object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default SalesSlider;

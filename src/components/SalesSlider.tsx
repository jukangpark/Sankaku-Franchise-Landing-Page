"use client";

import { useState, useEffect } from "react";
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
    <div className="flex items-center gap-4">
      {/* 슬라이드 컨테이너 */}
      <div className="relative w-[600px] h-[940px] overflow-hidden">
        {/* 카드 컨테이너 */}
        <div
          className="flex flex-col gap-4 transition-transform duration-400 ease-in-out"
          style={{
            transform: `translateY(-${currentIndex * 316}px)`, // 카드 높이(300px) + 간격(16px)
          }}
        >
          {/* 모든 카드 렌더링 (3개씩 보이도록) */}
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
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SalesSlider;

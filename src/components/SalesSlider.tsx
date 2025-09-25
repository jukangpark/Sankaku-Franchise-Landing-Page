"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import salesData from "@/mock/salesData";
import SalesCard from "./SalesCard";

const SalesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // 1부터 시작 (첫 번째 복사본 제외)
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayData, setDisplayData] = useState([...salesData]);
  const [cardHeight, setCardHeight] = useState(220); // 기본값으로 시작

  // 카드 높이 계산 (클라이언트에서만)
  useEffect(() => {
    const updateCardHeight = () => {
      if (window.innerWidth >= 1024) {
        setCardHeight(316); // PC
      } else if (window.innerWidth >= 640) {
        setCardHeight(250); // 태블릿
      } else {
        setCardHeight(220); // 모바일
      }
    };

    // 초기 설정
    updateCardHeight();

    // 화면 크기 변화 감지
    window.addEventListener("resize", updateCardHeight);

    return () => window.removeEventListener("resize", updateCardHeight);
  }, []);

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

    // 애니메이션: 다음 카드로 이동
    setCurrentIndex(currentIndex + 1);

    // 애니메이션 완료 후 배열 순서 변경 (애니메이션 없이)
    setTimeout(() => {
      // 첫 번째 카드를 맨 뒤로 이동
      const newData = [...displayData];
      const firstCard = newData.shift(); // 첫 번째 카드 제거
      if (firstCard) {
        newData.push(firstCard); // 맨 뒤에 추가
      }
      setDisplayData(newData);
      // 애니메이션 상태를 먼저 false로 설정
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // 애니메이션: 이전 카드로 이동 (위로 올라가는 애니메이션)
    setCurrentIndex(currentIndex - 1);

    // 애니메이션 완료 후 배열 순서 변경 (애니메이션 없이)
    setTimeout(() => {
      // 마지막 카드를 맨 앞으로 이동
      const newData = [...displayData];
      const lastCard = newData.pop(); // 마지막 카드 제거
      if (lastCard) {
        newData.unshift(lastCard); // 맨 앞에 추가
      }
      setDisplayData(newData);
      // 애니메이션 상태를 먼저 false로 설정
      setIsAnimating(false);
    }, 500);
  };

  // 애니메이션 완료 후 위치 리셋
  useLayoutEffect(() => {
    if (!isAnimating && currentIndex !== 1) {
      setCurrentIndex(1);
    }
  }, [isAnimating, currentIndex]);

  return (
    <div className="flex items-center gap-4 lg:gap-4">
      {/* 슬라이드 컨테이너 */}
      <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:w-[600px] h-[440px] sm:h-[500px] lg:h-[940px] overflow-hidden">
        {/* 카드 컨테이너 */}
        <motion.div
          className="flex flex-col gap-2 sm:gap-3 lg:gap-4"
          animate={{
            y: `-${currentIndex * cardHeight}px`,
          }}
          transition={
            isAnimating
              ? {
                  type: "tween",
                  duration: 0.5,
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
          style={{
            height: `${displayData.length * cardHeight}px`,
          }}
        >
          {/* 모든 카드 렌더링 */}
          {displayData.map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className="w-full"
              style={{
                height: `${cardHeight}px`,
              }}
            >
              <SalesCard
                card={card}
                index={0} // 항상 0으로 전달 (첫 번째가 강조)
                currentIndex={0}
              />
            </div>
          ))}
        </motion.div>
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

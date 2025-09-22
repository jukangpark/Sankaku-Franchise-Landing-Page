"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { menuData, MenuItem } from "@/mock/menuData";

const MenuSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    const speed = 1.5; // 슬라이드 속도 (픽셀/프레임)

    // 초기 위치를 화면 너비만큼 왼쪽으로 설정하여 왼쪽이 비어있지 않게 함
    const containerWidth =
      slider.parentElement?.clientWidth || window.innerWidth;
    let position = -containerWidth;

    const animate = () => {
      position -= speed;

      // 슬라이드가 한 바퀴 돌면 위치를 리셋
      const slideWidth = slider.scrollWidth / 2; // 두 세트가 있으므로 절반
      if (Math.abs(position) >= slideWidth + containerWidth) {
        position = -containerWidth;
      }

      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section id="menu-guide" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-gray-800 mb-4 text-[80px] leading-[1]">
            산카쿠만의 <br />
            다양하고 특색있는 메뉴
          </h1>
          <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto text-[28px] leading-[1.3]">
            항상 신선하고 건강한 먹거리를 합리적인 가격으로 <br />
            풍성하게 준비하여 고객님께 행복과 만족감을 선사합니다.
          </p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 will-change-transform"
            style={{ width: "fit-content" }}
          >
            {/* 첫 번째 세트 */}
            {menuData.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
            {/* 두 번째 세트 (무한 슬라이드를 위해) */}
            {menuData.map((item) => (
              <MenuCard key={`duplicate-${item.id}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="flex-shrink-0 duration-300 relative">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={431}
          height={385}
          className="object-cover"
        />
      </div>
      <div className="flex justify-center items-center text-center text-3xl font-semibold text-white leading-tight max-w-[387px] w-full h-[90px] rounded-[45px] bg-black -mt-9 mx-auto relative z-10">
        {item.name}
      </div>
    </div>
  );
};

export default MenuSection;

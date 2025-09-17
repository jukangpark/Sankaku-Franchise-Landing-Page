"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BrandPowerSection = () => {
  const [showRotation, setShowRotation] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 후 회전 이미지 표시
    const timer = setTimeout(() => {
      setShowRotation(true);
    }, 500); // 0.5초 후 표시

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        padding: "0 0 120px",
        backgroundImage: "url(/brand_power/sec3_bg.jpg)",
      }}
    >
      {/* 회전하는 이미지 - 섹션 정중앙 위쪽 */}
      <div
        className="absolute top-[-250px] left-1/2 transform -translate-x-1/2 z-[998] animate-spin"
        style={{
          width: "985px",
          height: "985px",
          opacity: showRotation ? 1 : 0,
          transition: "opacity 800ms",
          animationDuration: "12s", // 20초에 한 바퀴 회전
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        <Image
          src="/brand_power/brand_power_rotation.png"
          alt="브랜드 파워 회전"
          width={985}
          height={985}
          className="object-contain"
        />
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* 좌우 이미지 배치 */}
        <div className="flex justify-between items-center h-full min-h-screen">
          {/* 왼쪽 이미지, 텍스트, 차트 */}
          <div className="flex-shrink-0 flex flex-col items-start w-[740px]">
            <Image
              src="/brand_power/brand_power.png"
              alt="브랜드 파워"
              width={455}
              height={333}
              className="object-contain mb-8 mt-150"
            />
            <div className="text-white text-[25px] leading-[1.54em] font-semibold text-left max-w-md mb-8">
              <p className="mb-[40px]">
                소비자가 선택한 1등! 상권을 만들어내는 힘!
                <br />
                좋은 브랜드는 시기와 상권을 탓하지 않습니다
              </p>
              <p>
                산카쿠는 오픈과 동시에 전 지점 지역 맛집으로 자리매김합니다.
                <br />
                이것이 브랜드파워입니다.
              </p>
            </div>
            {/* 왼쪽 차트 - 타브랜드대비평균매출 */}
            <Image
              src="/brand_power/타브랜드대비평균매출.png"
              alt="타브랜드 대비 평균 매출"
              width={606}
              height={453}
              className="object-contain"
            />
          </div>

          {/* 오른쪽 이미지, 텍스트, 차트 */}
          <div className="flex-shrink-0 flex flex-col items-end w-[740px]">
            <Image
              src="/brand_power/꾸준한 성장.png"
              alt="꾸준한 성장"
              width={455}
              height={333}
              className="object-contain mb-8 mt-150"
            />
            <div className="text-white text-[25px] leading-[1.54em] font-semibold text-right max-w-md mb-8">
              <p className="mb-[40px]">
                점주님들의 만족감과 본사에 대한
                <br />
                신뢰가 동반될 때 가능한 일입니다.
              </p>
              <p>
                10년, 20년 상생하는 것이 산카쿠가 추구하는 가치이며
                <br />
                든든한 성공 파트너로써 동행하겠습니다
              </p>
            </div>
            {/* 오른쪽 차트 - 성장차트 */}
            <Image
              src="/brand_power/성장차트.png"
              alt="성장 차트"
              width={606}
              height={453}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPowerSection;

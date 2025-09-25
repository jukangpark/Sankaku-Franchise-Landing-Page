"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px] lg:min-h-screen"
      style={{
        padding: "0 0 60px",
        backgroundImage: "url(/brand_power/sec3_bg.jpg)",
      }}
    >
      {/* 회전하는 이미지 - 섹션 정중앙 위쪽 */}
      <div
        className="absolute top-1/2 sm:top-[-200px] lg:top-[-250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 z-[10] animate-spin w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[985px] lg:h-[985px]"
        style={{
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
          fill
          className="object-contain"
        />
      </div>

      <motion.div
        className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 h-full"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {/* 좌우 이미지 배치 */}
        <div className="flex flex-col md:flex-row justify-between items-center h-full min-h-[600px] lg:min-h-screen gap-8 md:gap-0">
          {/* 왼쪽 이미지, 텍스트, 차트 */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Image
              src="/brand_power/brand_power.png"
              alt="브랜드 파워"
              width={455}
              height={333}
              className="object-contain mb-4 sm:mb-6 lg:mb-8 mt-20 sm:mt-32 lg:mt-150 w-[150px] h-[110px] sm:w-[218.61px] sm:h-[160px] md:w-[218.61px] md:h-[160px] lg:w-full lg:h-auto"
              style={{
                height: "auto",
                maxWidth: "455px",
                maxHeight: "333px",
              }}
            />
            <div className="text-white text-[16px] sm:text-[20px] lg:text-[25px] leading-[1.54em] font-semibold text-center md:text-left w-full mb-4 sm:mb-6 lg:mb-8">
              <p className="mb-[15px] sm:mb-[40px] font-extrabold">
                소비자가 선택한 1등! 상권을 만들어내는 힘!
                <br />
                좋은 브랜드는 시기와 상권을 탓하지 않습니다
              </p>
              <p className="font-extrabold">
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
              className="object-contain w-full h-auto"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "606px",
                maxHeight: "453px",
              }}
            />
          </motion.div>

          {/* 오른쪽 이미지, 텍스트, 차트 */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Image
              src="/brand_power/꾸준한 성장.png"
              alt="꾸준한 성장"
              width={455}
              height={333}
              className="object-contain mb-4 sm:mb-6 lg:mb-8 mt-80 sm:mt-32 lg:mt-150 w-[150px] h-[110px] sm:w-[218.61px] sm:h-[160px] md:w-[218.61px] md:h-[160px] lg:w-full lg:h-auto"
              style={{
                height: "auto",
                maxWidth: "455px",
                maxHeight: "333px",
              }}
            />
            <div className="text-white text-[16px] sm:text-[20px] lg:text-[25px] leading-[1.54em] font-semibold text-center md:text-right w-full mb-4 sm:mb-6 lg:mb-8">
              <p className="mb-[15px] sm:mb-[40px] font-extrabold">
                점주님들의 만족감과 본사에 대한
                <br />
                신뢰가 동반될 때 가능한 일입니다.
              </p>
              <p className="font-extrabold">
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
              className="object-contain w-full h-auto"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "606px",
                maxHeight: "453px",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandPowerSection;

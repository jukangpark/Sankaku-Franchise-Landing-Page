"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { storeInfoData } from "@/mock/storeInfoData";
import { ownerData } from "@/mock/ownerData";

const StoreInfoSection = () => {
  const [isImage1, setIsImage1] = useState(true);

  // 첫 번째 카드 이미지 자동 교체 (image <-> image2)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsImage1((prev) => !prev);
    }, 2000); // 2초마다 교체

    return () => clearInterval(interval);
  }, []);

  // 애니메이션 variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold text-gray-900 mb-4">
            <span className="text-[#033914]">직원들도 오픈하는</span>
            <span className="text-[#9c5f07]">브랜드</span>
          </motion.h1>
          <motion.p className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-gray-700">
            믿을 수 있는 성공 방법과 깊은 신뢰를 바탕으로 운영하는 산카쿠입니다.
          </motion.p>
        </motion.div>

        {/* Grid 카드 컨테이너 */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 gap-y-16 sm:gap-y-20 lg:gap-y-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {storeInfoData.map((store, index) => (
            <motion.div
              key={store.id}
              className="bg-white border border-gray-200 relative"
              transition={{ delay: index * 0.1 }}
            >
              <Image
                width={453.33}
                height={324}
                src={store.image}
                alt={store.alt}
                className="w-full h-auto"
                style={{ width: "100%", height: "auto" }}
              />
              {/* 매장 이름 - 동그란 원 */}
              <motion.div
                className={`absolute -bottom-10 sm:-bottom-12 md:-bottom-14 lg:-bottom-15 left-4 sm:left-5 md:left-6 lg:left-6 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center shadow-lg ${
                  index % 2 === 0 ? "bg-[#033914]" : "bg-[#9c5f07]"
                }`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-center font-extrabold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[20px] leading-tight">
                  {store.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold text-gray-900 mt-16 sm:mt-20 lg:mt-24">
          <span className="text-[#033914]">증명된 브랜드로 </span>
          <span className="text-[#9c5f07]">다점포 운영</span>
        </h1>
        <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-gray-700 mt-4">
          산카쿠만의 탄탄한 메뉴들로 수익성을 높여갑니다.
        </h2>
      </div>

      {/* 점주님 다점포 운영 섹션 */}
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        {/* 첫 번째 카드 - PC/태블릿에서 1줄에 1개 */}
        <motion.div
          className="w-full mb-8 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ownerData.slice(0, 1).map((owner, index) => (
            <motion.div
              key={owner.id}
              className="bg-[#efe8dc] border border-gray-200 rounded-lg overflow-hidden w-full lg:h-[395px]"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* 이미지 영역 */}
                <div className="relative w-full lg:w-[700px] h-[150px] sm:h-[180px] lg:h-full">
                  <Image
                    width={700}
                    height={395}
                    src={isImage1 ? owner.image : owner.image2}
                    alt={`${owner.mainStore} 이미지`}
                    className="w-full h-full object-cover"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                {/* 텍스트 영역 */}
                <div className="w-full lg:w-[700px] p-4 sm:p-5 lg:p-8 flex flex-col justify-center text-center lg:text-left">
                  {/* 총 매장 운영 점주님 - 특별한 스타일 */}
                  <div className="bg-[#033914] text-white rounded-2xl h-8 flex items-center justify-center mb-4">
                    <span className="text-[16px font-bold">
                      총 {owner.totalStores}개의 매장 운영 점주님
                    </span>
                  </div>

                  <motion.p
                    className="text-[12px] sm:text-[14px] lg:text-base font-semibold text-gray-800 mb-3 sm:mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    style={{ fontSize: "24px", fontWeight: 900 }}
                    dangerouslySetInnerHTML={{ __html: owner.description }}
                  />

                  {/* 매장 목록 - 가로 배치 */}
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {owner.stores.map((store, storeIndex) => {
                      // "점"을 제거
                      return (
                        <div
                          key={storeIndex}
                          className="bg-[#e18c12] text-white rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center text-[10px] sm:text-[10px] lg:text-[14px] font-extrabold"
                        >
                          {store}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 나머지 카드들 - PC/태블릿에서 4개씩, 모바일에서 1개씩 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {ownerData.slice(1).map((owner, index) => (
            <motion.div
              key={owner.id}
              className="bg-[#efe8dc] border border-gray-200 rounded-lg overflow-hidden"
              transition={{ delay: index * 0.1 }}
            >
              {/* 이미지 영역 */}
              <div className="relative">
                <Image
                  width={300}
                  height={200}
                  src={isImage1 ? owner.image : owner.image2}
                  alt={`${owner.mainStore} 이미지`}
                  className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="p-4 sm:p-5 lg:p-6 text-center sm:text-left">
                {/* 총 매장 운영 점주님 - 특별한 스타일 */}
                <div className="bg-[#033914] text-white rounded-2xl h-8 flex items-center justify-center mb-4">
                  <span className="text-[16px] font-bold">
                    총 {owner.totalStores}개의 매장 운영 점주님
                  </span>
                </div>

                <motion.p
                  className="text-[12px] sm:text-[14px] lg:text-base font-semibold text-gray-800 mb-3 sm:mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: 900,
                  }}
                  dangerouslySetInnerHTML={{ __html: owner.description }}
                />

                {/* 매장 목록 - 가로 배치 */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {owner.stores.map((store, storeIndex) => {
                    // "점"을 제거
                    return (
                      <div
                        key={storeIndex}
                        className="bg-[#e18c12] text-white rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] flex items-center justify-center text-[10px] sm:text-[10px] lg:text-[14px] font-extrabold"
                      >
                        {store}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoreInfoSection;

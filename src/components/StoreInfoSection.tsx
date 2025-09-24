"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { storeInfoData } from "@/mock/storeInfoData";
import { ownerData } from "@/mock/ownerData";

const StoreInfoSection = () => {
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
            직원들도 오픈하는 브랜드
          </motion.h1>
          <motion.p className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-gray-700">
            믿을 수 있는 성공 방법과 깊은 신뢰를 바탕으로 운영하는 산카쿠입니다.
          </motion.p>
        </motion.div>

        {/* Grid 카드 컨테이너 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
              {/* 매장 이름 */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black p-3 sm:p-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-center font-extrabold text-[16px] sm:text-[18px] lg:text-xl">
                  {store.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold text-gray-900 mt-8 sm:mt-12 lg:mt-16">
          증명된 브랜드로 다점포 운영
        </h1>
        <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-gray-700 mt-4">
          산카쿠만의 탄탄한 메뉴들로 수익성을 높여갑니다.
        </h2>
      </div>

      {/* 점주님 다점포 운영 섹션 */}
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        {/* Grid 카드 컨테이너 - 4개씩 배치 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ownerData.map((owner, index) => (
            <motion.div
              key={owner.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
              transition={{ delay: index * 0.1 }}
            >
              {/* 이미지 영역 */}
              <div className="relative">
                <Image
                  width={300}
                  height={200}
                  src={owner.image}
                  alt={`${owner.mainStore} 이미지`}
                  className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="p-4 sm:p-5 lg:p-6">
                <motion.h3
                  className="text-[14px] sm:text-[16px] lg:text-lg font-bold text-gray-900 mb-3 sm:mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  총 {owner.totalStores}개의 매장 운영 점주님
                </motion.h3>

                <motion.p
                  className="text-[12px] sm:text-[14px] lg:text-base font-semibold text-gray-800 mb-3 sm:mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: owner.description }}
                />

                {/* 매장 목록 */}
                <motion.ul
                  className="space-y-1 sm:space-y-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {owner.stores.map((store, storeIndex) => (
                    <li
                      key={storeIndex}
                      className="text-[10px] sm:text-[12px] lg:text-sm text-gray-600 flex items-center"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {store}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoreInfoSection;

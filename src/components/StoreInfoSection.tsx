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
    <section className="py-24 bg-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-[64px] font-extrabold text-gray-900 mb-4">
            직원들도 오픈하는 브랜드
          </motion.h1>
          <motion.p className="text-[28px] font-semibold text-gray-700">
            믿을 수 있는 성공 방법과 깊은 신뢰를 바탕으로 운영하는 산카쿠입니다.
          </motion.p>
        </motion.div>

        {/* Grid 카드 컨테이너 */}
        <motion.div
          className="grid grid-cols-3 gap-8"
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
              />
              {/* 매장 이름 */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black p-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-white text-center font-extrabold text-xl">
                  {store.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[64px] font-extrabold text-gray-900 mt-16">
          증명된 브랜드로 다점포 운영
        </h1>
        <h2 className="text-[28px] font-semibold text-gray-700 mt-4">
          산카쿠만의 탄탄한 메뉴들로 수익성을 높여갑니다.
        </h2>
      </div>

      {/* 점주님 다점포 운영 섹션 */}
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Grid 카드 컨테이너 - 4개씩 배치 */}
        <motion.div
          className="grid grid-cols-4 gap-8"
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
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* 텍스트 영역 */}
              <div className="p-6">
                <motion.h3
                  className="text-lg font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  총 {owner.totalStores}개의 매장 운영 점주님
                </motion.h3>

                <motion.p
                  className="text-base font-semibold text-gray-800 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: owner.description }}
                />

                {/* 매장 목록 */}
                <motion.ul
                  className="space-y-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {owner.stores.map((store, storeIndex) => (
                    <li
                      key={storeIndex}
                      className="text-sm text-gray-600 flex items-center"
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

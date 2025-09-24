"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import storeShowCaseData from "@/mock/storeShowCaseData";

const StoreShowCaseSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  // 무한 스크롤을 위해 매장 데이터를 3번 복제
  const infiniteStores = [
    ...storeShowCaseData,
    ...storeShowCaseData,
    ...storeShowCaseData,
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto">
        <div>
          <motion.div
            className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16 max-w-[1400px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-[16px] sm:text-[18px] lg:text-xl text-gray-600 mb-1"
              variants={itemVariants}
            >
              불황 걱정 없는 창업은 산카쿠가 답!
            </motion.p>
            <motion.h1
              className="text-[32px] sm:text-[48px] lg:text-[80px] font-extrabold text-gray-900 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0"
              variants={itemVariants}
            >
              줄서는 맛집 산카쿠
              <div className="flex gap-2 sm:gap-4">
                <Image
                  src="/신기록행진/2.png"
                  alt="산카쿠"
                  width={253}
                  height={73}
                  className="w-[120px] sm:w-[150px] lg:w-[253px] h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/신기록행진/1.png"
                  alt="산카쿠"
                  width={253}
                  height={73}
                  className="w-[120px] sm:w-[150px] lg:w-[253px] h-auto"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </motion.h1>
          </motion.div>
        </div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1008, -2016], // 반응형에 따라 다른 이동 거리
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {infiniteStores.map((store, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[680px] mx-2 sm:mx-3 lg:mx-4"
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden shadow-lg h-[200px] sm:h-[300px] lg:h-[450px]">
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={680}
                    height={362}
                    className="object-cover w-full h-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-2 sm:p-3 lg:p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-[16px] sm:text-[24px] lg:text-[34px] font-bold text-center">
                      {store.name}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreShowCaseSection;

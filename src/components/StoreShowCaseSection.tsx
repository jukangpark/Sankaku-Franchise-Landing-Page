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
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto">
        <div>
          <motion.div
            className="text-left mb-16 max-w-[1400px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-xl text-gray-600 mb-1"
              variants={itemVariants}
            >
              불황 걱정 없는 창업은 산카쿠가 답!
            </motion.p>
            <motion.h1
              className="text-[80px] font-extrabold text-gray-900 flex justify-between items-center"
              variants={itemVariants}
            >
              줄서는 맛집 산카쿠
              <div className="flex gap-4">
                <Image
                  src="/신기록행진/2.png"
                  alt="산카쿠"
                  width={253}
                  height={73}
                  quality={100}
                />
                <Image
                  src="/신기록행진/1.png"
                  alt="산카쿠"
                  width={253}
                  height={73}
                  quality={100}
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
              x: [0, -2016], // 6개 매장 * 336px(w-80 + mx-4) = 2016px
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
                className="flex-shrink-0 w-[680px] mx-4"
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden shadow-lg h-[450px]">
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={680}
                    height={362}
                    className="object-cover w-full h-full"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-[34px] font-bold text-center">
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

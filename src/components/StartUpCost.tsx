"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import costData from "@/mock/costData";
import franchiseSteps from "@/mock/franchiseSteps";

const StartUpCost = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 가맹절차 섹션 */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-24"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="startup-guide"
            className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16"
          >
            가맹절차
          </h1>

          {/* 가맹절차 카드들 - 반응형 배치 */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {franchiseSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* 아이콘 */}
                <div className="mb-4">
                  <img
                    src={`/가맹절차/${index + 1}.png`}
                    alt={`Step ${index + 1} 아이콘`}
                    className="w-[196px] h-[180px] mx-auto object-contain"
                  />
                </div>

                {/* STEP 번호 */}
                <div className="mb-[10px]">
                  <span
                    className="text-[14px] font-bold leading-[1.2em]"
                    style={{ color: step.stepColor }}
                  >
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 제목 */}
                <h3
                  className="text-sm sm:text-base lg:text-[22px] font-extrabold text-[#2c2c2c] mb-[10px] lg:leading-[1.36em]"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />

                {/* 설명 */}
                <p
                  className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 창업비용 섹션 헤더 */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            창업비용
          </h1>
          <p className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-gray-700">
            매출과 수익 그리고 안정성이 보장되는 삼위일체의 아이템
          </p>
        </motion.div>

        {/* 탭 버튼들 */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="bg-gray-100 rounded-lg p-1 sm:p-2 flex flex-row gap-1 sm:gap-2 w-full sm:w-auto">
            {costData.map((data, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 cursor-pointer ${
                  activeTab === index
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {data.size}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 테이블 컨테이너 */}
        <motion.div
          key={activeTab}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    구분
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    세부내역
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    개설비용
                  </th>
                </tr>
              </thead>
              <tbody>
                {costData[activeTab].items.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200"
                  >
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-xs sm:text-base lg:text-lg font-semibold text-gray-900 text-center whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-xs sm:text-sm lg:text-base text-gray-700 text-center">
                      <div
                        className="whitespace-nowrap"
                        dangerouslySetInnerHTML={{
                          __html: item.description.replace(/\*.*/, ""),
                        }}
                      />
                      {item.description.includes("*") && (
                        <div className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                          {item.description.match(/\*.*/)?.[0]}
                        </div>
                      )}
                    </td>
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900 whitespace-nowrap">
                      {item.cost}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 총계 */}
          <div className="bg-gray-900 px-2 sm:px-6 lg:px-8 py-3 sm:py-5 lg:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
              <span className="text-xs sm:text-lg lg:text-2xl font-bold text-white text-center sm:text-left">
                {costData[activeTab].size} 매장 기준 개설비용 총계
              </span>
              <span className="text-sm sm:text-2xl lg:text-3xl font-extrabold text-white">
                {costData[activeTab].total}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 별도사항 안내 */}
        <motion.div
          className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 bg-gray-50 rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm sm:text-base text-gray-600 text-center">
            <span className="font-semibold">* 별도사항:</span> 철거, 덕트,
            냉·난방기, 소방, 전기 증설 등 (별도사항은 매장 현장 상황에 따라 금액
            상이)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StartUpCost;

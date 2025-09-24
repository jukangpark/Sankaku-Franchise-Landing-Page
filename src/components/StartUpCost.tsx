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
          <div className="flex flex-wrap gap-4 sm:gap-3 lg:gap-4 justify-center">
            {franchiseSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full sm:w-[180px] lg:w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg p-3 sm:p-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* 번호 */}
                <div className="text-center mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900">
                    {step.number}
                  </span>
                </div>

                {/* 제목 */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 text-center mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* 설명 */}
                <p className="text-[10px] sm:text-xs text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
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
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-gray-100 rounded-lg p-1 sm:p-2 flex flex-col sm:flex-row gap-1 sm:gap-2 w-full sm:w-auto">
            {costData.map((data, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 cursor-pointer ${
                  activeTab === index
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {data.size}
              </button>
            ))}
          </div>
        </div>

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
                  <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                    구분
                  </th>
                  <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                    세부내역
                  </th>
                  <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center text-sm sm:text-base lg:text-lg font-bold text-gray-900">
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
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-gray-900 text-center">
                      {item.category}
                    </td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-base text-gray-700 text-center">
                      {item.description}
                    </td>
                    <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                      {item.cost}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 총계 */}
          <div className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
              <span className="text-base sm:text-lg lg:text-2xl font-bold text-white text-center sm:text-left">
                {costData[activeTab].size} 매장 기준 개설비용 총계
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
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

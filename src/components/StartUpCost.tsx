"use client";

import { motion } from "framer-motion";
import costData from "@/mock/costData";
import franchiseSteps from "@/mock/franchiseSteps";

const StartUpCost = () => {
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
                    className="w-[102px] h-[102px] sm:w-[196px] sm:h-[180px] mx-auto object-contain"
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

        {/* 테이블 컨테이너 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* 모바일 테이블 레이아웃 (sm 미만) */}
          <div className="block sm:hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-2 text-center text-xs font-bold text-gray-900">
                    구분
                  </th>
                  <th className="px-2 py-2 text-center text-xs font-bold text-gray-900">
                    내용
                  </th>
                  <th className="px-2 py-2 text-center text-xs font-bold text-gray-900">
                    금액
                  </th>
                  <th className="px-2 py-2 text-center text-xs font-bold text-gray-900">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                {costData.items.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200"
                  >
                    <td className="px-2 py-3 text-xs font-semibold text-gray-900 text-center whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-2 py-3 text-xs text-gray-700 text-left min-h-[60px]">
                      <div
                        className="whitespace-pre-wrap leading-tight"
                        dangerouslySetInnerHTML={{
                          __html: item.description.replace(/\*.*/, ""),
                        }}
                      />
                      {item.description.includes("*") && (
                        <div className="text-xs text-gray-500 mt-1">
                          {item.description.match(/\*.*/)?.[0]}
                        </div>
                      )}
                    </td>
                    <td className="px-2 py-3 text-center text-xs font-bold text-gray-900 whitespace-nowrap">
                      {item.discount ? (
                        <div className="flex flex-col items-center">
                          <span className="line-through text-gray-500 text-xs">
                            {item.originalCost}
                          </span>
                          <span className="text-red-600 font-bold">
                            → {item.discountCost}
                          </span>
                        </div>
                      ) : (
                        item.originalCost
                      )}
                    </td>
                    <td className="px-2 py-3 text-center text-xs text-gray-600 whitespace-nowrap break-keep min-w-[60px]">
                      {item.discount}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 데스크톱 테이블 레이아웃 (sm 이상) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    구분
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    내용
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    금액
                  </th>
                  <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                {costData.items.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200"
                  >
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-xs sm:text-base lg:text-lg font-semibold text-gray-900 text-center whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-xs sm:text-sm lg:text-base text-gray-700 text-left">
                      <div
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{
                          __html: item.description.replace(/\*.*/, ""),
                        }}
                      />
                      {item.description.includes("*") && (
                        <div className="text-xs text-gray-500 mt-1">
                          {item.description.match(/\*.*/)?.[0]}
                        </div>
                      )}
                    </td>
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-base lg:text-lg font-bold text-gray-900 whitespace-nowrap">
                      {item.discount ? (
                        <div className="flex flex-col items-center">
                          <span className="line-through text-gray-500 text-xs sm:text-sm lg:text-base">
                            {item.originalCost}
                          </span>
                          <span className="text-red-600 font-bold text-xs sm:text-base lg:text-lg">
                            → {item.discountCost}
                          </span>
                        </div>
                      ) : (
                        item.originalCost
                      )}
                    </td>
                    <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-4 text-center text-xs sm:text-sm lg:text-base text-gray-600 whitespace-nowrap break-keep min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                      {item.discount}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 총계 */}
          <div className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
              <span className="text-sm sm:text-lg lg:text-2xl font-bold text-white text-center sm:text-left">
                {costData.size} 매장 기준
              </span>
              <span className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white">
                총계 : {costData.total}
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

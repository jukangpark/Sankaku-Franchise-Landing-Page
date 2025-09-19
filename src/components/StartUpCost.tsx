"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import costData from "@/mock/costData";

const StartUpCost = () => {
  const [activeTab, setActiveTab] = useState(0);

  const franchiseSteps = [
    {
      number: "01",
      title: "가맹문의",
      description:
        "홈페이지 또는 유선 문의 시 개설 절차 안내와 희망지역, 상권조사 등 창업관련 내용 상담 진행",
    },
    {
      number: "02",
      title: "상권조사",
      description:
        "지역상권을 분석 및 경쟁업체 유동인구 향후 상권변화까지 고려하여 후보지 선정",
    },
    {
      number: "03",
      title: "임대차 계약 및 가맹 계약",
      description: "임대차 계약 및 가맹계약 일정 협의",
    },
    {
      number: "04",
      title: "인테리어 공사",
      description:
        "최적의 매장 운영을 위한 인테리어 도면 및 3D디자인 제작 및 시공",
    },
    {
      number: "05",
      title: "가맹점주님 교육 및 오픈시뮬레이션",
      description: "현 매장에 맞는 교육 및 메뉴, 서비스 교육 실시",
    },
    {
      number: "06",
      title: "GRAND OPEN 및 슈퍼바이저 지원",
      description: "슈퍼바이저를 파견하여 종합적인 지도 및 사후관리",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 가맹절차 섹션 */}
        <motion.div
          className="mb-24"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="startup-guide"
            className="text-[64px] font-extrabold text-gray-900 text-center mb-16"
          >
            가맹절차
          </h1>

          {/* 가맹절차 카드들 - 1줄로 배치 */}
          <div className="flex gap-4 justify-center">
            {franchiseSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg p-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* 번호 */}
                <div className="text-center mb-3">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {step.number}
                  </span>
                </div>

                {/* 제목 */}
                <h3 className="text-base font-bold text-gray-900 text-center mb-3">
                  {step.title}
                </h3>

                {/* 설명 */}
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 창업비용 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[64px] font-extrabold text-gray-900 mb-8">
            창업비용
          </h1>
          <p className="text-[28px] font-semibold text-gray-700">
            매출과 수익 그리고 안정성이 보장되는 삼위일체의 아이템
          </p>
        </motion.div>

        {/* 탭 버튼들 */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-2 flex gap-2">
            {costData.map((data, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer ${
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
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-900">
                    구분
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-900">
                    세부내역
                  </th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-gray-900">
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
                    <td className="px-6 py-4 text-lg font-semibold text-gray-900 text-center">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700 text-center">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 text-center text-lg font-bold text-gray-900">
                      {item.cost}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 총계 */}
          <div className="bg-gray-900 px-8 py-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-white">
                {costData[activeTab].size} 매장 기준 개설비용 총계
              </span>
              <span className="text-3xl font-extrabold text-white">
                {costData[activeTab].total}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 별도사항 안내 */}
        <motion.div
          className="mt-8 p-6 bg-gray-50 rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-base text-gray-600 text-center">
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

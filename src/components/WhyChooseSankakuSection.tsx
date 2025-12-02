"use client";

import { motion } from "framer-motion";

const WhyChooseSankakuSection = () => {
  const reasons = [
    {
      number: "01",
      title: "표준화된 운영 메뉴얼",
      description: "초보자도 손쉬운 매장 관리",
    },
    {
      number: "02",
      title: "전문 인력 파견 시스템",
      description: "점주 부재 시에도 안정 운영",
    },
    {
      number: "03",
      title: "자체 공장 & 직배송 시스템",
      description: "품질 유지, 원가 절감",
    },
    {
      number: "04",
      title: "감각적인 브랜드 아이덴티티",
      description: "SNS/리뷰 중심 확산",
    },
    {
      number: "05",
      title: "합리적 투자비 구조",
      description: "빠른 회수 가능한 창업 모델",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-extrabold text-center mb-4 sm:mb-6 lg:mb-8" style={{ color: "#3f2d21" }}>
            산카쿠를 선택해야 하는 이유
          </h1>
          

          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3" style={{ borderBottom: "2px solid #ab8663" }}>
                  <div className="inline-flex items-center">
                    <h1 className="text-[20px] sm:text-[32px] lg:text-[40px] font-extrabold mr-2 sm:mr-3" style={{ color: "#a7805d" }}>
                      {reason.number}.
                    </h1>
                    <h2 className="text-[14px] sm:text-[22px] lg:text-[28px] font-bold" style={{ color: "#3f2d21" }}>
                      {reason.title}
                    </h2>
                  </div>
                  <h2 className="text-[11px] sm:text-[16px] lg:text-[18px]" style={{ color: "#393938" }}>
                    {reason.description}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSankakuSection;


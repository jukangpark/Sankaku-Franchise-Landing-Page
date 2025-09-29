"use client";

import { motion } from "framer-motion";

const FullAutoSystemSection = () => {
  const sections = [
    {
      id: 1,
      title: "본사 인력 파견근무",
      content: [
        "본사에서 직접 관리자급 인력 파견",
        "인사, 인건비 관리",
        "식자재 관리",
        "점주와의 꾸준한 소통 및 피드백 제공",
      ],
      bgImage: "/full_auto/full_auto_1.jpg",
    },
    {
      id: 2,
      title: "본사 직접 마케팅 관리",
      content: [
        "체험단, 인스타그램, 네이버 등",
        "모든 플랫폼 관리",
        "순위 확인 및 리뷰관리",
        "대리 홍보, 마케팅 진행",
        "분석자료 및 추후 진행방향 제안",
      ],
      bgImage: "/full_auto/full_auto_2.jpg",
    },
    {
      id: 3,
      title: "매장 운영 피드백",
      content: [
        "본사와 관리자의 소통으로",
        "매장 운영 방향성 제시",
        "문제점 파악 및 해결 진행",
        "점주, 관리자, 본사의 끈끈한 상생관계",
      ],
      bgImage: "/full_auto/full_auto_3.jpg",
    },
    {
      id: 4,
      title: "매장 관리자 양성",
      content: [
        "본사 관리자의 교육 진행",
        "해당 매장에서 근무할 관리자급 인재 양성",
        "해당 인원이 주축이 되어,",
        "해당매장을 이끌어 나갈것",
        "안정적인 운영 가능",
      ],
      bgImage: "/full_auto/full_auto_4.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[32px] sm:text-[48px] lg:text-[88px] font-extrabold text-gray-900 mb-4">
            바쁜 점주님을 위한
          </h2>
          <h3 className="text-[18px] sm:text-[28px] lg:text-[64px] font-bold text-red-600 mb-6">
            본사 직접 운영 풀오토 시스템
          </h3>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-2xl mx-auto">
            <p className="text-[16px] sm:text-[20px] lg:text-[32px] font-bold text-gray-700">
              <span className="font-semibold">
                * 안내되는 내용은 모두 '선택사항' 입니다.
              </span>
              <br />
              자세한 내용은 문의 부탁드립니다.
            </p>
          </div>
        </motion.div>

        {/* 4등분 그리드 - 뷰포트 너비의 25%씩 */}
        <div className="flex flex-col md:flex-row w-full">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-1/4 h-[250px] md:h-[1080px]"
            >
              {/* 배경 이미지 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${section.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "100%",
                }}
              ></div>

              {/* 콘텐츠 */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
                {/* 제목 */}
                <div className="mb-6">
                  <h4 className="text-[18px] sm:text-[28px] lg:text-[43px] font-extrabold text-white mb-4 leading-tight">
                    {section.title}
                  </h4>
                </div>

                {/* 내용 */}
                <div className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="text-[12px] sm:text-[16px] lg:text-[26px] font-bold text-gray-200 leading-relaxed"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullAutoSystemSection;

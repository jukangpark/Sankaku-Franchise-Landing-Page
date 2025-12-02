"use client";

import { motion } from "framer-motion";
import fullAutoSystemData from "@/mock/fullAutoSystemData";

const FullAutoSystemSection = () => {
  return (
    <section
      className="w-full bg-white py-16 md:py-24 px-4 md:px-0"
      id="full-auto-system"
    >
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
            FULL-AUTO SYSTEM
          </h2>
          <h2 className="text-[18px] sm:text-[28px] lg:text-[64px] font-bold text-red-600 mb-6">
            &quot;투자는 점주가, 운영은 본사가.&quot;
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 mb-6">
            <div 
              className="p-4 sm:p-6 lg:p-8"
              style={{ border: "3px solid #4f3f34" }}
            >
              <h1 className="text-[14px] sm:text-[18px] lg:text-[24px] text-gray-700">
                산카쿠는 <span className="text-red-600">전문 인력 파견 + 자동 운영 시스템</span>으로 점주의 부담을 최소화 했습니다.
              </h1>
            </div>
            
            <div 
              className="p-4 sm:p-6 lg:p-8"
              style={{ border: "3px solid #4f3f34" }}
            >
              <h1 className="text-[14px] sm:text-[18px] lg:text-[24px] text-gray-700">
                본사 아카데미에서 교육된 <span className="text-red-600">전문 조리 운영 인력</span> 파견 메뉴얼화된 조리 서비스 프로세스로 품질 유지 매출, 재고, 발주까지 관리되는 자동 운영 시스템
              </h1>
            </div>
            
            <div 
              className="p-4 sm:p-6 lg:p-8"
              style={{ border: "3px solid #4f3f34" }}
            >
              <h1 className="text-[14px] sm:text-[18px] lg:text-[24px] text-gray-700">
                이제 점주는 오직 투자와 수익 확대에만 집중하세요.
                <br />
                운영은 저희 산카쿠 본사팀이 대신합니다.
              </h1>
            </div>
          </div>
          
        </motion.div>

        {/* 4등분 그리드 - 뷰포트 너비의 25%씩 */}
        <div className="flex flex-col md:flex-row w-full gap-2 md:gap-0">
          {fullAutoSystemData.map((section, index) => (
            <motion.div
              key={section.id}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-1/4 h-[250px] md:h-[1080px]"
            >
              {/* 배경 이미지 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${section.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "100%",
                }}
              ></div>

              {/* 콘텐츠 */}
              <motion.div
                className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* 제목 */}
                <div className="mb-6">
                  <h4
                    className="text-[35px] sm:text-[28px] lg:text-[43px] text-white leading-tight"
                    style={{
                      fontFamily: "var(--font-cheongdo)",
                      fontWeight: 900,
                    }}
                  >
                    {section.title} <br />
                    <span className="text-yellow-400">{section.highlight}</span>
                  </h4>
                </div>

                <div className="w-[100%] mx-auto mb-4 border-t-[0.25px] border-yellow-400" />

                <div>
                  {section.content.map((item, index) => (
                    <p
                      key={index}
                      className="text-white text-[14px] sm:text-[20px] lg:text-[23px] font-bold leading-tight"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>

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

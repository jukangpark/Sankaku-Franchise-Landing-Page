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
                  <h4 className="text-[26px] sm:text-[28px] lg:text-[43px] font-extrabold text-white leading-tight">
                    {section.title}{" "}
                    <span className="text-yellow-400">{section.highlight}</span>
                  </h4>
                </div>

                <div className="w-9/10 h-0.25 bg-yellow-400 mx-auto mb-4" />

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

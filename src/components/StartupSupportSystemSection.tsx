"use client";

import { motion } from "framer-motion";

const StartupSupportSystemSection = () => {
  return (
    <section
      className="w-full bg-white pt-[60px] sm:pt-[100px] lg:pt-[140px] pb-8 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-0 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url(/startup_support_system/bg.jpg)",
      }}
      id="startup-support-system"
    >
      {/* 닭강정 이미지 - 오른쪽 상단 */}
      <img
        src="/startup_support_system/닭강정.png"
        alt="닭강정"
        className="absolute top-[-40px] sm:top-[-250px] lg:top-[-300px] right-[-10px] sm:right-[-15px] w-[110px] h-[112px] sm:w-[350px] sm:h-[350px] lg:w-[551px] lg:h-[561px] object-contain"
        style={{
          animation: "float 3s ease-in-out infinite",
        }}
      />

      <div className="mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="h-[60px] sm:h-[70px] lg:h-[82px] flex justify-center items-center px-[20px] sm:px-[40px] lg:px-[65px] rounded-[30px] sm:rounded-[35px] lg:rounded-[41px] relative z-[1] text-[18px] sm:text-[28px] lg:text-[42px] font-[800] leading-[1.3] text-gray-900 mb-4 bg-[#fdd000] mx-auto w-[90%] sm:w-[80%] lg:w-[950px]">
            산카쿠는 항상 점주님들 곁에 있겠습니다.
          </h1>
          <p className="text-[24px] sm:text-[40px] lg:text-[64px] text-white mb-4 sm:mb-6 font-extrabold font-cheongdo">
            힘든 시기, 힘을 모으면 이겨낼 수 있습니다.
            <br />
            <span className="text-[#fdd000] text-[32px] sm:text-[50px] lg:text-[90px] font-extrabold">
              창업 비용은 단연코 거절하겠습니다!
            </span>
          </p>
          <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[1400px] mx-auto relative bg-[#fff6cc] py-[40px] sm:py-[60px] lg:py-[88px] px-[20px] sm:px-[50px] lg:px-[100px] box-border">
            {/* 산카쿠 로고 - 노란색 배경 div 왼쪽 하단 */}
            <img
              src="/SANKAKU_LOGO.jpg"
              alt="산카쿠 로고"
              className="absolute bottom-[10px] sm:bottom-[15px] lg:bottom-[20px] left-[20px] sm:left-[35px] lg:left-[50px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] object-contain"
              style={{
                animation: "wiggle 1s ease-in-out infinite",
              }}
            />

            <div className="text-[20px] sm:text-[32px] lg:text-[44px] font-extrabold text-black mb-[30px] sm:mb-[40px] lg:mb-[55px]">
              본사에서 전폭 지원해드리는{" "}
              <span className="text-red-600">남다른 창업 시스템</span>으로{" "}
              <br />
              <div className="relative">
                <p className="text-[32px] sm:text-[50px] lg:text-[90px] font-extrabold">
                  <span className="text-red-600">빠르고 간편하게</span>{" "}
                  시작하세요!
                </p>
                {/* 동그란 원 */}
                <div className="w-[94px] h-[94px] sm:w-[200px] sm:h-[200px] lg:w-[275px] lg:h-[275px] rounded-full bg-red-800 text-center flex justify-center items-center absolute top-[-150px] sm:top-[-120px] lg:top-[-150px] right-[-50px] sm:right-[-100px] lg:right-[-250px] z-[1] animate-[blink_1.5s_ease-in-out_infinite_alternate]">
                  {/* 노란색 테두리 원 (부모의 90% 크기) */}
                  <div className="w-[85px] h-[85px] sm:w-[180px] sm:h-[180px] lg:w-[255px] lg:h-[255px] rounded-full border-2 border-yellow-400 flex justify-center items-center">
                    <div className="text-white font-extrabold leading-tight font-cheongdo">
                      <div className="text-[10px] sm:text-[24px] lg:text-[44px]">
                        창업
                      </div>
                      <div className="text-[12px] sm:text-[28px] lg:text-[52px] text-[#fdd000]">
                        특별지원
                      </div>
                      <div className="text-[12px] sm:text-[28px] lg:text-[52px]">
                        시스템
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 카드 영역 */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* 모바일 & 태블릿 & iPad Pro: 2개씩 배치 */}
              <div className="flex flex-col xl:hidden space-y-6 sm:space-y-8">
                {[
                  [1, 2],
                  [3, 4],
                  [5, 6],
                ].map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex justify-center gap-3 sm:gap-6 lg:gap-8"
                  >
                    {row.map((imageNumber, index) => (
                      <motion.img
                        key={index}
                        src={`/startup_support_system/${imageNumber}.jpg`}
                        alt={`창업지원시스템 ${imageNumber}`}
                        className="w-[48%] sm:w-[45%] lg:w-[42%] aspect-[379/243] object-cover rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: (rowIndex * 2 + index) * 0.2,
                        }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* 대형 데스크톱: 3개씩 배치 */}
              <div className="hidden xl:block space-y-10">
                {[
                  [1, 2, 3],
                  [4, 5, 6],
                ].map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-row justify-center gap-6 xl:gap-8"
                  >
                    {row.map((imageNumber, index) => (
                      <motion.img
                        key={index}
                        src={`/startup_support_system/${imageNumber}.jpg`}
                        alt={`창업지원시스템 ${imageNumber}`}
                        className="w-[350px] xl:w-[379px] h-[225px] xl:h-[243px] object-cover rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: (rowIndex * 3 + index) * 0.2,
                        }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupSupportSystemSection;

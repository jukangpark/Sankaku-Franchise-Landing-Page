"use client";

import { motion } from "framer-motion";
import supervisingCard from "@/mock/supervisingCard";

const DifferentiationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="differentiation"
      className="py-12 sm:py-16 lg:py-24 bg-white bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url(/책임창업bg.jpg)",
      }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 첫 번째 섹션: 책임창업 */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-[48px] sm:text-[80px] lg:text-[130px] font-extrabold text-white">
            책임창업
          </motion.h1>
          <motion.h2 className="text-[20px] sm:text-[32px] lg:text-[48px] font-bold text-white mb-6 sm:mb-8 lg:mb-12">
            시도하지 않으면 아무일도 일어나지 않습니다
          </motion.h2>
          <motion.h3 className="text-[14px] sm:text-[18px] lg:text-[24px] font-medium text-white leading-relaxed">
            산카쿠와 함께 할 수 있는 진짜 점주님을 찾습니다.
            <br />
            저희도 책임지고 도와드리겠습니다.
          </motion.h3>
        </motion.div>

        {/* YouTube 영상 */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16 lg:mb-24"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[1400px] aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/1ky16LQH-zo?autoplay=1&mute=1"
              title="산카쿠 책임창업 영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* 두 번째 섹션: 차별화된 슈퍼바이징 시스템 */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-[32px] sm:text-[48px] lg:text-[88px] font-extrabold text-white mb-4 sm:mb-6 lg:mb-8">
            왜 산카쿠를 선택할까요?
          </motion.h1>
          <motion.h2 className="text-[18px] sm:text-[28px] lg:text-[64px] font-medium text-black mb-4 sm:mb-6 lg:mb-8 rounded-full bg-white p-2 sm:p-3 lg:p-4">
            차별화된 <span className="font-extrabold">슈퍼바이징</span> 시스템
          </motion.h2>
          <motion.p className="text-[16px] sm:text-[20px] lg:text-[32px] font-bold text-white">
            산카쿠만의 철저한 3C 슈퍼바이징 시스템을 소개합니다.
          </motion.p>
        </motion.div>

        {/* 3C 카드들 */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-center justify-center lg:items-start gap-4 sm:gap-6 lg:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {supervisingCard.map((card, index) => (
            <motion.div
              key={index}
              className={`relative text-white shadow-lg w-full lg:min-w-[573.33px] lg:h-[810px] max-h-[174px] lg:max-h-none rounded-[24px] lg:rounded-[48px] p-5 lg:p-[60px_50px] flex flex-col justify-center lg:justify-start text-center items-center ${
                index === 1 ? "lg:z-30 lg:-mt-[50px]" : "lg:z-10"
              } ${
                index === 0
                  ? "lg:ml-[100px] lg:mr-[-100px] lg:items-start lg:text-left"
                  : index === 2
                  ? "lg:ml-[-100px] lg:mr-[100px] lg:items-end lg:text-right"
                  : "lg:ml-0 lg:mr-0 lg:items-center lg:text-center"
              }`}
              style={{
                backgroundImage: `url(/슈퍼바이징/${card.number.toLowerCase()}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                paddingTop: "40px",
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {/* 배경 오버레이 */}
              <div className="absolute inset-0 bg-black/30 rounded-[24px] lg:rounded-[48px]"></div>

              {/* 콘텐츠 */}
              <div className="relative z-10 w-full">
                {/* 번호 */}
                <div className="mb-[15px] lg:mb-20">
                  <span className="text-white text-[32px] lg:text-[72px] leading-[1.2em] opacity-50 font-[700] mb-[15px] lg:mb-20">
                    {card.number}
                  </span>
                </div>

                {/* 제목과 부제목을 모바일에서 flex로 붙여서 배치 */}
                <div className="flex flex-row justify-center items-center lg:block mb-3 lg:mb-25 w-full">
                  <h3
                    className="mb-0 lg:mb-1 font-extrabold text-[18px] lg:text-[43px] leading-[1.3em] text-[#ea8a00]"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                  <h4 className="text-[18px] lg:text-[43px] leading-[1.3em] font-semibold text-white">
                    {card.subtitle}
                  </h4>
                </div>

                {/* 설명 */}
                <p
                  className="text-white text-[12px] lg:text-[26px] leading-[1.54em] font-bold [&_br]:hidden lg:[&_br]:block"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;

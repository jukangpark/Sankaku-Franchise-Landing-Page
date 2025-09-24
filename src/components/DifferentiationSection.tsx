"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import supervisingCard from "@/mock/supervisingCard";

const DifferentiationSection = () => {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 초기 설정
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  console.log("windowWidth", windowWidth);

  return (
    <section
      id="differentiation"
      className="py-12 sm:py-16 lg:py-24 bg-white bg-no-repeat bg-cover bg-center"
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
          <motion.h2 className="text-[18px] sm:text-[28px] lg:text-[48px] font-extrabold text-black mb-4 sm:mb-6 lg:mb-8 rounded-full bg-white p-2 sm:p-3 lg:p-4">
            차별화된 슈퍼바이징 시스템
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
              className={`relative text-white shadow-lg w-full lg:min-w-[573.33px] ${
                index === 1 ? "lg:z-30" : "lg:z-10"
              }`}
              style={{
                backgroundImage: `url(/슈퍼바이징/${card.number.toLowerCase()}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: windowWidth >= 1024 ? "48px" : "24px",
                minHeight: windowWidth >= 1024 ? "810px" : "400px",
                padding: windowWidth >= 1024 ? "60px 50px" : "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems:
                  index === 0
                    ? "flex-start"
                    : index === 2
                    ? "flex-end"
                    : "center",
                paddingTop: windowWidth >= 1024 ? "80px" : "40px",
                textAlign:
                  index === 0 ? "left" : index === 2 ? "right" : "center",
                marginLeft:
                  windowWidth >= 1024
                    ? index === 0
                      ? "100px"
                      : index === 2
                      ? "-100px"
                      : "0px"
                    : "0px",
                marginRight:
                  windowWidth >= 1024
                    ? index === 0
                      ? "-100px"
                      : index === 2
                      ? "100px"
                      : "0px"
                    : "0px",
                marginTop:
                  windowWidth >= 1024 ? (index === 1 ? "-50px" : "0px") : "0px",
              }}
              transition={{ delay: index * 0.1 }}
            >
              {/* 배경 오버레이 */}
              <div
                className={`absolute inset-0 bg-black/30 ${
                  windowWidth >= 1024 ? "rounded-[48px]" : "rounded-[24px]"
                }`}
              ></div>

              {/* 콘텐츠 */}
              <div className="relative z-10 w-full">
                {/* 번호 */}
                <div className={`mb-8 sm:mb-12 lg:mb-20`}>
                  <span
                    className="text-white font-bold"
                    style={{
                      fontSize: windowWidth >= 1024 ? "72px" : "32px",
                      lineHeight: "1.2em",
                      opacity: 0.5,
                      fontWeight: 700,
                      marginBottom: windowWidth >= 1024 ? "80px" : "20px",
                    }}
                  >
                    {card.number}
                  </span>
                </div>

                {/* 제목 */}
                <h3
                  className={`mb-1 font-extrabold`}
                  style={{
                    fontSize: windowWidth >= 1024 ? "43px" : "18px",
                    lineHeight: "1.3em",
                    color: "#ea8a00",
                  }}
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />

                {/* 부제목 */}
                <h4
                  className={`mb-3 sm:mb-4 lg:mb-6`}
                  style={{
                    fontSize: windowWidth >= 1024 ? "43px" : "18px",
                    lineHeight: "1.3em",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {card.subtitle}
                </h4>

                {/* 설명 */}
                <p
                  className={`text-white leading-relaxed`}
                  style={{
                    fontSize: windowWidth >= 1024 ? "26px" : "12px",
                    lineHeight: "1.54em",
                  }}
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

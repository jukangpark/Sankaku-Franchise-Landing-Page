"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ReviewSection = () => {
  const reviewImages = [
    "/phone_slider/전대본점리뷰.jpg",
    "/phone_slider/전대본점리뷰.jpg", // 추가 이미지들
    "/phone_slider/전대본점리뷰.jpg",
    "/phone_slider/전대본점리뷰.jpg",
    "/phone_slider/전대본점리뷰.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviewImages.length]);
  return (
    <section
      className="bg-cover bg-center bg-no-repeat relative py-8 sm:py-12 lg:py-20 overflow-hidden"
      style={{ backgroundImage: "url(/images/고객이인정한백소정bg.jpg)" }}
    >
      {/* 상단 섹션 */}
      <motion.div
        className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="text-center">
          <motion.p
            className="text-[16px] sm:text-[24px] lg:text-[48px] text-white font-bold leading-[1.5em] sm:leading-[1.8em] lg:leading-[2em] px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            오로지 손님이 감탄할 수 있도록 기본에 충실하였습니다
          </motion.p>
          <motion.div
            className="flex justify-center mt-4 sm:mt-6 lg:mt-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Image
              src="/images/고객이인정한백소정.png"
              alt="고객이 인정한 산카쿠"
              width={974}
              height={123}
              className="w-full max-w-[250px] sm:max-w-[400px] lg:max-w-[974px] h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 중앙 휴대폰 섹션 */}
      <motion.div
        className="relative flex justify-center items-center py-8 sm:py-12 lg:py-16 overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="relative w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] lg:w-[342px] lg:h-[700px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* iPhone 화면 안의 컨텐츠 */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* PC에서는 모든 이미지 표시 */}
            <div className="hidden lg:flex items-center justify-center relative z-30">
              {reviewImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`리뷰 ${index + 1}`}
                  width={
                    index === 2 ? 320 : index === 0 || index === 4 ? 260 : 280
                  }
                  height={400}
                  className={`object-cover rounded-[35px] mt-10 ${
                    index === 2 ? "z-40" : "z-30"
                  } ${index === 2 ? "" : "shadow-lg"}`}
                />
              ))}
            </div>

            {/* 모바일/태블릿에서는 가운데 하나만 표시 */}
            <div className="lg:hidden relative z-30">
              <Image
                src={reviewImages[currentIndex]}
                alt={`리뷰 ${currentIndex + 1}`}
                width={140}
                height={280}
                className="object-cover rounded-[8px] sm:rounded-[12px] w-[160px] h-[320px] sm:w-[200px] sm:h-[400px] mt-8"
              />
            </div>
          </div>

          {/* iPhone 프레임 */}
          <Image
            src="/phone_slider/iphone.png"
            alt="iPhone 프레임"
            width={342}
            height={700}
            className="object-contain relative z-10 shadow-2xl rounded-[15px] sm:rounded-[20px] lg:rounded-[35px] w-full h-full"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        {/* 화살표 버튼들 */}
        <motion.button
          className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-40 w-[27px] h-[50px] flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 1.0,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{ opacity: 1 }}
        >
          <Image
            src="/phone_slider/left_button.png"
            alt="이전 버튼"
            width={27}
            height={50}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.button>

        <motion.button
          className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-40 w-[27px] h-[50px] flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 1.0,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{ opacity: 1 }}
        >
          <Image
            src="/phone_slider/right_button.png"
            alt="다음 버튼"
            width={27}
            height={50}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.button>
      </motion.div>

      {/* 하단 섹션 */}
      <motion.div
        className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 pb-12 sm:pb-16 lg:pb-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="text-center">
          <motion.div
            className="flex justify-center mb-4 sm:mb-6 lg:mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 1.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <Image
              src="/images/맛과품질부터다릅니다.png"
              alt="맛과 품질부터 다릅니다"
              width={974}
              height={123}
              className="w-full max-w-[250px] sm:max-w-[400px] lg:max-w-[974px] h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>

          <motion.p
            className="text-[16px] sm:text-[24px] lg:text-[48px] text-white font-bold leading-[1.5em] sm:leading-[1.8em] lg:leading-[2em] px-4 mb-4 sm:mb-6 lg:mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 1.6,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            국가대표 브랜드로 성공하세요!
          </motion.p>

          <motion.div
            className="w-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 1.8,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SA5k2XlEalM?autoplay=1&mute=1"
                title="산카쿠 브랜드 소개 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewSection;

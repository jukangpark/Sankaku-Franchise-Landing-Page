"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ReviewSection = () => {
  const reviewImages = [
    "/phone_slider/전대본점리뷰.jpg",
    "/phone_slider/전대본점리뷰.jpg", // 추가 이미지들
    "/phone_slider/전대본점리뷰.jpg",
    "/phone_slider/전대본점리뷰.jpg",
    "/phone_slider/전대본점리뷰.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);

  // 윈도우 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 초기 설정
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviewImages.length]);
  return (
    <section
      className="bg-cover bg-center bg-no-repeat relative py-8 sm:py-12 lg:py-20"
      style={{ backgroundImage: "url(/images/고객이인정한백소정bg.jpg)" }}
    >
      {/* 상단 섹션 */}
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[16px] sm:text-[24px] lg:text-[48px] text-white font-bold leading-[1.5em] sm:leading-[1.8em] lg:leading-[2em] px-4">
            오로지 손님이 감탄할 수 있도록 기본에 충실하였습니다
          </p>
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
            <Image
              src="/images/고객이인정한백소정.png"
              alt="고객이 인정한 산카쿠"
              width={974}
              height={123}
              className="w-full max-w-[250px] sm:max-w-[400px] lg:max-w-[974px] h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* 중앙 휴대폰 섹션 */}
      <div className="relative flex justify-center items-center py-8 sm:py-12 lg:py-16 overflow-hidden">
        <div className="relative w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] lg:w-[342px] lg:h-[700px]">
          {/* iPhone 화면 안의 컨텐츠 */}
          <div className="absolute inset-0 flex items-center justify-center">
            {windowWidth >= 1024 ? (
              // PC에서는 모든 이미지 표시
              reviewImages.map((image, index) => {
                let width = 280; // 기본 크기
                if (index === 2) {
                  width = 320; // 중앙 이미지는 가장 크게
                } else if (index === 0 || index === 4) {
                  width = 260; // 양 끝 이미지는 더 작게
                }

                return (
                  <Image
                    key={index}
                    src={image}
                    alt={`리뷰 ${index + 1}`}
                    width={width}
                    height={400}
                    className="object-cover rounded-[35px] mt-10"
                    style={{
                      zIndex: index === 2 ? 20 : 10,
                      boxShadow:
                        index === 2 ? "none" : "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                    }}
                  />
                );
              })
            ) : (
              // 모바일에서는 가운데 하나만 표시
              <Image
                src={reviewImages[currentIndex]}
                alt={`리뷰 ${currentIndex + 1}`}
                width={400}
                height={200}
                className="object-cover rounded-[15px] sm:rounded-[20px] mt-2 sm:mt-4"
                style={{
                  zIndex: 20,
                  boxShadow: "none",
                }}
              />
            )}
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
        </div>

        {/* 화살표 버튼들 */}
        <button className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-40 w-[27px] h-[50px] flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer">
          <Image
            src="/phone_slider/left_button.png"
            alt="이전 버튼"
            width={27}
            height={50}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </button>

        <button className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-40 w-[27px] h-[50px] flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-200 cursor-pointer">
          <Image
            src="/phone_slider/right_button.png"
            alt="다음 버튼"
            width={27}
            height={50}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </button>
      </div>

      {/* 하단 섹션 */}
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center">
          <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
            <Image
              src="/images/맛과품질부터다릅니다.png"
              alt="맛과 품질부터 다릅니다"
              width={974}
              height={123}
              className="w-full max-w-[250px] sm:max-w-[400px] lg:max-w-[974px] h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <p className="text-[16px] sm:text-[24px] lg:text-[48px] text-white font-bold leading-[1.5em] sm:leading-[1.8em] lg:leading-[2em] px-4 mb-4 sm:mb-6 lg:mb-8">
            국가대표 브랜드로 성공하세요!
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[1400px] aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/SA5k2XlEalM?autoplay=1&mute=1"
                title="산카쿠 브랜드 소개 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

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
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/images/고객이인정한백소정bg.jpg)" }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen">
        <div className="text-center pt-8 sm:pt-12 lg:pt-20">
          {/* 설명 */}
          <p className="text-[20px] sm:text-[32px] lg:text-[48px] text-white font-bold leading-[1.5em] sm:leading-[1.8em] lg:leading-[2em] px-4">
            오로지 손님이 감탄할 수 있도록 기본에 충실하였습니다
          </p>
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
            <Image
              src="/images/고객이인정한백소정.png"
              alt="고객이 인정한 산카쿠"
              width={974}
              height={123}
              className="w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[974px] h-auto"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* 왼쪽 화살표 버튼 */}
        <button className="absolute left-2 sm:left-4 lg:left-[0] top-2/5 transform -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 오른쪽 화살표 버튼 */}
        <button className="absolute right-2 sm:right-4 lg:right-[0] top-2/5 transform -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* 중앙 휴대폰 이미지 */}
        <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[200px] h-[400px] lg:w-[342px] lg:h-[700px]">
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
                          index === 2
                            ? "none"
                            : "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  );
                })
              ) : (
                // 모바일에서는 가운데 하나만 표시
                <Image
                  src={reviewImages[currentIndex]}
                  alt={`리뷰 ${currentIndex + 1}`}
                  width={140}
                  height={220}
                  className="object-cover rounded-[20px] mt-4"
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
              className="object-contain relative z-10 shadow-2xl rounded-[20px] lg:rounded-[35px] w-full h-full"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div>
        <section>
          <div className="text-center pb-12 sm:pb-16 lg:pb-20 pt-4 sm:pt-6 lg:pt-8 mt-[-400px] sm:mt-[-500px] lg:mt-[-750px]">
            <div className="flex justify-center px-4">
              <Image
                src="/images/맛과품질부터다릅니다.png"
                alt="맛과 품질부터 다릅니다"
                width={974}
                height={123}
                className="w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[974px] h-auto"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <p className="text-[20px] sm:text-[32px] lg:text-[48px] text-white font-bold leading-[1.5em] sm:leading-[1.8em] lg:leading-[2em] px-4 mt-4 sm:mt-6 lg:mt-8">
              국가대표 브랜드로 성공하세요!
            </p>

            <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 px-4">
              <div className="relative w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[1400px] aspect-video">
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
        </section>
      </div>
    </section>
  );
};

export default ReviewSection;

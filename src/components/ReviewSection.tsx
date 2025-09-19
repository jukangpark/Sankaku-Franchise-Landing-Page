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
        <div className="text-center pt-20">
          {/* 설명 */}
          <p className="text-[48px] text-white font-bold leading-[2em]">
            오로지 손님이 감탄할 수 있도록 기본에 충실하였습니다
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/고객이인정한백소정.png"
              alt="고객이 인정한 산카쿠"
              width={974}
              height={123}
            />
          </div>
        </div>

        {/* 왼쪽 화살표 버튼 */}
        <button className="absolute left-[0] top-2/5 transform -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
          <svg
            className="w-6 h-6 text-gray-600"
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
        <button className="absolute right-[0] top-2/5 transform -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
          <svg
            className="w-6 h-6 text-gray-600"
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
          <div className="relative">
            {/* iPhone 화면 안의 컨텐츠 */}
            <div className="absolute inset-0 flex items-center justify-center">
              {reviewImages.map((image, index) => {
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
              })}
            </div>

            {/* iPhone 프레임 */}
            <Image
              src="/phone_slider/iphone.png"
              alt="iPhone 프레임"
              width={342}
              height={700}
              className="object-contain relative z-10 shadow-2xl rounded-[35px]"
            />
          </div>
        </div>
      </div>

      <div>
        <section>
          <div className="text-center pb-20 pt-8 mt-[-750px]">
            <div className="flex justify-center">
              <Image
                src="/images/맛과품질부터다릅니다.png"
                alt="맛과 품질부터 다릅니다"
                width={974}
                height={123}
              />
            </div>

            <p className="text-[48px] text-white font-bold leading-[2em]">
              국가대표 브랜드로 성공하세요!
            </p>

            <div className="flex justify-center mt-8">
              <iframe
                className="w-[1400px] h-[788px]"
                src="https://www.youtube.com/embed/SA5k2XlEalM?autoplay=1&mute=1"
                title="산카쿠 브랜드 소개 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ReviewSection;

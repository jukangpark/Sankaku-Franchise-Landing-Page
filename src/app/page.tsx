"use client";

import Image from "next/image";
import LogoSlider from "@/components/LogoSlider";
import Navigation from "@/components/Navigation";
import YouTubeSection from "@/components/YouTubeSection";
import PerformanceDataSection from "@/components/PerformanceDataSection";
import BrandSuccessSection from "@/components/BrandSuccessSection";
import StoreShowCaseSection from "@/components/StoreShowCaseSection";
import FranchiseContactForm from "@/components/FranchiseContactForm";
import BrandPowerSection from "@/components/BrandPowerSection";
import SalesVerificationSection from "@/components/SalesVerificationSection";
import SalesReceiptSection from "@/components/SalesReceiptSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-[#fef9f2]">
      <Navigation />

      {/* 창업성공사례 Section */}
      <YouTubeSection />

      <LogoSlider />

      <PerformanceDataSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <BrandSuccessSection />

      <BrandPowerSection />

      <StoreShowCaseSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <SalesVerificationSection />

      <SalesReceiptSection />

      <ReviewSection />

      <section>
        <div className="text-center pb-20 bg-white">
          <div className="flex justify-center">
            <Image
              src="/images/맛과품질부터다릅니다.png"
              alt="맛과 품질부터 다릅니다"
              width={974}
              height={123}
            />
          </div>

          <p className="text-[40px] font-bold text-gray-800 leading-[2em]">
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

      {/* 차별화시스템 Section */}
      <section id="differentiation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            차별화시스템
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-gray-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🍜</span>
              </div>
              <h3 className="text-xl font-bold mb-4">정통 일본 레시피</h3>
              <p className="text-gray-600 mb-4">
                일본 현지 셰프의 정통 레시피와 조리법을 그대로 전수받아 차별화된
                맛을 제공합니다.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li>• 30년 경력 일본 셰프 직접 전수</li>
                <li>• 정통 돈코츠 육수 제조법</li>
                <li>• 프리미엄 재료 사용</li>
              </ul>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-gray-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">체계적 교육시스템</h3>
              <p className="text-gray-600 mb-4">
                4주간의 집중 교육과 지속적인 기술 지원으로 성공적인 창업을
                보장합니다.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li>• 이론 + 실습 병행 교육</li>
                <li>• 매장 운영 노하우 전수</li>
                <li>• 지속적인 기술 업데이트</li>
              </ul>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-gray-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏪</span>
              </div>
              <h3 className="text-xl font-bold mb-4">통합 운영관리</h3>
              <p className="text-gray-600 mb-4">
                POS, 재고관리, 마케팅까지 올인원 시스템으로 효율적인 매장 운영을
                지원합니다.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li>• 스마트 POS 시스템</li>
                <li>• 실시간 재고 관리</li>
                <li>• 통합 마케팅 지원</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              산카쿠만의 특별한 장점
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-600">
                  ✅ 검증된 사업 모델
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 3년 연속 매출 증가율 200% 이상</li>
                  <li>• 95% 가맹점 만족도</li>
                  <li>• 평균 2-3년 투자금 회수</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-600">
                  ✅ 지속적인 본부 지원
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24시간 상담 지원</li>
                  <li>• 정기적인 매장 방문 지도</li>
                  <li>• 신메뉴 개발 및 업데이트</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 창업안내 Section */}
      <section id="startup-guide" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            창업안내
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-600">
                💰 투자 비용
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">가맹비</span>
                  <span className="font-bold text-lg">1,000만원</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">인테리어</span>
                  <span className="font-bold text-lg">3,000만원</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">장비 설치</span>
                  <span className="font-bold text-lg">2,000만원</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">기타 비용</span>
                  <span className="font-bold text-lg">500만원</span>
                </div>
                <div className="border-t-2 pt-4">
                  <div className="flex justify-between font-bold text-xl bg-gray-50 p-4 rounded-lg">
                    <span>총 투자비용</span>
                    <span className="text-gray-600">6,500만원</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  💡 분할 납부 가능! 본부와 상담 후 결정
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-600">
                📋 창업 절차
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">상담 및 계약</h4>
                    <p className="text-sm text-gray-600">
                      본부 방문 → 사업 설명 → 계약 체결
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">매장 선정 및 인테리어</h4>
                    <p className="text-sm text-gray-600">
                      입지 분석 → 매장 확정 → 인테리어 진행
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">교육 및 시스템 구축</h4>
                    <p className="text-sm text-gray-600">
                      4주 집중 교육 → POS 설치 → 시스템 구축
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gray-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">오픈 및 운영 지원</h4>
                    <p className="text-sm text-gray-600">
                      그랜드 오픈 → 초기 운영 지원 → 지속 관리
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              지금 상담 신청하시면 특별 혜택!
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">가맹비</div>
                <div className="text-sm">100만원 할인</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">교육비</div>
                <div className="text-sm">무료 지원</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">마케팅</div>
                <div className="text-sm">오픈 이벤트 지원</div>
              </div>
            </div>
            <button className="bg-yellow-400 text-gray-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
              지금 상담 신청하기
            </button>
          </div>
        </div>
      </section>

      {/* 고객의 소리함 Section */}
      <section id="customer-voice" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            고객의 소리함
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "김영호 사장님",
                location: "서울 강남점",
                review:
                  "정말 체계적인 교육과 지원 덕분에 성공적으로 창업할 수 있었습니다. 본부의 지속적인 관리 덕분에 매출도 꾸준히 증가하고 있어요! 일본 현지 맛 그대로라서 고객들 만족도가 정말 높습니다.",
                period: "운영 2년차",
                revenue: "월 매출 3,500만원",
              },
              {
                name: "박미정 사장님",
                location: "부산 해운대점",
                review:
                  "처음엔 걱정이 많았는데, 본부에서 하나하나 친절하게 알려주셔서 무사히 오픈할 수 있었어요. 특히 마케팅 지원이 정말 도움이 됐습니다. 지금은 단골손님들이 많아서 매일 바쁘게 운영하고 있습니다.",
                period: "운영 1년 6개월",
                revenue: "월 매출 2,800만원",
              },
              {
                name: "이준석 사장님",
                location: "대구 중구점",
                review:
                  "다른 프랜차이즈와 비교했을 때 산카쿠가 가장 체계적이고 실질적인 도움을 주더라고요. 정통 일본 맛으로 차별화가 확실해서 경쟁업체 대비 우위를 점하고 있습니다. 투자 결정 잘한 것 같아요!",
                period: "운영 3년차",
                revenue: "월 매출 2,200만원",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold text-lg">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <p className="text-xs text-blue-600">{item.period}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{item.review}"
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-green-600">
                    {item.revenue}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              가맹점주 만족도 조사 결과
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">95%</div>
                <p className="text-gray-600">전체 만족도</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-gray-600">본부 지원 만족도</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  89%
                </div>
                <p className="text-gray-600">재창업 의향</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  96%
                </div>
                <p className="text-gray-600">지인 추천 의향</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FranchiseContactForm
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </div>
  );
}

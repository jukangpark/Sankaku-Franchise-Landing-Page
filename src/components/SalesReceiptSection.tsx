const SalesReceiptSection = () => {
  return (
    <section className="bg-gray-50 flex items-center pb-12 sm:pb-16 lg:pb-24">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 중앙 타이틀 */}
        <h2 className="text-[32px] sm:text-[48px] lg:text-6xl font-bold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 mt-15 sm:mt-20 lg:mt-30">
          산카쿠 매출전표
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          {/* 왼쪽 영역 */}
          <div className="w-full lg:w-[740px] flex flex-col items-center lg:items-start">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg w-full">
              <h3 className="text-[24px] sm:text-[32px] lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                전대본점
              </h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4">
                <span className="text-[16px] sm:text-[20px] lg:text-2xl font-semibold text-gray-700">
                  영업이익 :
                </span>
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="text-[28px] sm:text-[40px] lg:text-5xl font-bold text-[#222222]">
                    25,847,490
                  </span>
                  <span className="text-[16px] sm:text-[20px] lg:text-2xl font-semibold text-gray-700">
                    원
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 영역 - 매출 데이터 */}
          <div className="w-full lg:w-[740px] flex flex-col items-center lg:items-end">
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full">
              <div className="space-y-4">
                {/* 매출 데이터 항목들 */}
                <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-gray-900">
                    매출
                  </span>
                  <div className="text-right">
                    <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                      83,312,800
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-medium text-[#888888]">
                      100%
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-gray-900">
                    재료비
                  </span>
                  <div className="text-right">
                    <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                      28,326,352
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-medium text-[#888888]">
                      34%
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-gray-900">
                    인건비
                  </span>
                  <div className="text-right">
                    <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                      16,365,000
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-medium text-[#888888]">
                      19.6%
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-gray-900">
                    판매관리비
                  </span>
                  <div className="text-right">
                    <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                      9,808,775
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-medium text-[#888888]">
                      11.8%
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-gray-900">
                    로열티
                  </span>
                  <div className="text-right">
                    <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                      2,499,384
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-medium text-[#888888]">
                      3.0%
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-semibold text-gray-900">
                    광고비
                  </span>
                  <div className="text-right">
                    <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                      465,799
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-medium text-[#888888]">
                      0.6%
                    </div>
                  </div>
                </div>

                {/* 영업이익 - 강조 */}
                <div className="flex justify-between items-center py-4 sm:py-6 bg-black bg-opacity-10 rounded-lg px-3 sm:px-4">
                  <span className="text-[14px] sm:text-[18px] lg:text-xl font-bold text-white">
                    영업이익
                  </span>
                  <div className="text-right">
                    <div className="text-[20px] sm:text-[28px] lg:text-3xl font-bold text-white">
                      25,847,490
                    </div>
                    <div className="text-[12px] sm:text-[14px] lg:text-lg font-bold text-white">
                      31.0%
                    </div>
                  </div>
                </div>
              </div>

              {/* 하단 설명 */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-[10px] sm:text-[12px] lg:text-sm text-gray-600 leading-relaxed">
                  산카쿠 전대본점의 실제 매출전표(24년 3월)에 근거한
                  손익자료입니다.
                  <br />
                  타지점인 경우 상권특성, 경기변화, 평수, 점주역량 등에 따라
                  상이할 수 있습니다.
                  <br />
                  <span className="font-semibold">(단위:원, VAT별도)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesReceiptSection;

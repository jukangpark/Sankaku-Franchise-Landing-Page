import Image from "next/image";
import { salesReceiptData } from "@/mock/salesReceiptData";

const SalesReceiptSection = () => {
  return (
    <section className="bg-gray-50 flex items-center pb-12 sm:pb-16 lg:pb-24">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 중앙 타이틀 */}
        <h2 className="text-[32px] sm:text-[48px] lg:text-6xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 mt-15 sm:mt-20 lg:mt-30">
          산카쿠 전대본점 매출전표
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          {/* 왼쪽 영역 */}
          <div className="w-full lg:w-[740px] flex flex-col items-center lg:items-start mr-[110px]">
            <div className="flex justify-center items-center w-full">
              <Image
                src="/매출전표/안양본점.png"
                alt="안양본점 매출전표"
                width={468}
                height={582}
                className="w-[468px] h-[582px] object-contain"
                style={{ width: "468px", height: "582px" }}
              />
            </div>
          </div>

          {/* 오른쪽 영역 - 매출 데이터 */}
          <div className="min-w-[689px]">
            <div className="space-y-4">
              {salesReceiptData.map((item, index) => (
                <div key={index}>
                  {/* 광고비 위에 생략 표시 */}
                  {item.category === "광고비" && (
                    <div className="flex mb-4">
                      <div className="flex-1 h-[45px] flex items-center justify-center">
                        <div className="text-black text-2xl flex flex-col leading-[1] font-extrabold mr-[-120px]">
                          <div>·</div>
                          <div>·</div>
                          <div>·</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex">
                    <div className="w-[103px] mr-[30px] text-center flex items-center text-[clamp(0.9375rem,0.7895rem+0.5921vw,1.5rem)] font-extrabold text-black tracking-[0.02em] leading-[1.2em] whitespace-nowrap">
                      {item.category}
                    </div>
                    <div className="flex flex-1 justify-between bg-[#0c2d00] text-white h-[45px] items-center px-[30px]">
                      <div className="text-[clamp(1.125rem,1.0263rem+0.4115vw,1.625rem)] font-bold text-white">
                        {item.amount}
                      </div>
                      <div className="text-[clamp(0.875rem,0.7763rem+0.3947vw,1.25rem)] opacity-60 w-[50px] text-center">
                        {item.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 하단 설명 텍스트 */}
              <div className="mt-8">
                <p className="text-[#666666] text-[16px] leading-[1.3] text-right">
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

import Image from "next/image";
import { salesReceiptData } from "@/mock/salesReceiptData";

const SalesReceiptSection = () => {
  return (
    <section className=" flex items-center pb-12 sm:pb-16 lg:pb-24">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 중앙 타이틀 */}
        <h2 className="text-[32px] sm:text-[48px] lg:text-6xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12 lg:mb-16 mt-15 sm:mt-20 lg:mt-30">
          산카쿠 전대본점 매출전표
        </h2>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
          {/* 왼쪽 영역 */}
          <div className="flex flex-col items-center lg:w-[40%]">
            <div className="flex justify-center items-center">
              <Image
                src="/매출전표/안양본점.png"
                alt="안양본점 매출전표"
                width={468}
                height={582}
                className="w-[200px] h-[249px] sm:w-[300px] sm:h-[373px] lg:w-[468px] lg:h-[582px] object-contain"
              />
            </div>
          </div>

          {/* 오른쪽 영역 - 매출 데이터 */}
          <div className="w-full lg:w-[60%] lg:flex-1 lg:min-w-0">
            <div className="space-y-4 max-w-[600px] mx-auto lg:mx-0 lg:max-w-none">
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
                    <div className="w-[80px] sm:w-[90px] lg:w-[103px] mr-[20px] sm:mr-[25px] lg:mr-[30px] text-center flex items-center text-[clamp(0.75rem,0.6rem+0.5vw,1.5rem)] font-extrabold text-black tracking-[0.02em] leading-[1.2em] whitespace-nowrap">
                      {item.category}
                    </div>
                    <div className="flex flex-1 justify-between bg-[#0c2d00] text-white h-[40px] sm:h-[42px] lg:h-[45px] items-center px-[20px] sm:px-[25px] lg:px-[30px]">
                      <div className="text-[clamp(0.9rem,0.8rem+0.4vw,1.625rem)] font-bold text-white">
                        {item.amount}
                      </div>
                      <div className="text-[clamp(0.7rem,0.6rem+0.3vw,1.25rem)] opacity-60 w-[40px] sm:w-[45px] lg:w-[50px] text-center">
                        {item.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 하단 설명 텍스트 */}
              <div className="mt-6 sm:mt-8">
                <p className="text-[#666666] text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.3] text-right">
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

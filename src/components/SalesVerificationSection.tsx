import Image from "next/image";
import SalesSlider from "./SalesSlider";

const SalesVerificationSection = () => {
  return (
    <section
      id="revenue-proof"
      className="py-12 sm:py-16 lg:py-24 bg-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/sales_verification_bg.jpg)" }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* 왼쪽 섹션 - 텍스트 */}
          <div className="w-full lg:w-[740px] flex flex-col items-center lg:items-start">
            {/* 메인 타이틀 */}
            <h2 className="text-[32px] sm:text-[48px] lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
              25년 월매출 TOP20
            </h2>

            {/* 서브 타이틀 */}
            <h3 className="text-[20px] sm:text-[28px] lg:text-[38px] font-semibold text-white mb-6 sm:mb-8 text-center lg:text-left">
              <span className="text-[#ea8a00] font-extrabold text-[24px] sm:text-[36px] lg:text-[52px]">
                최고
              </span>
              를 선택하면
              <span className="text-[#ea8a00] font-extrabold text-[24px] sm:text-[36px] lg:text-[52px]">
                매출
              </span>
              은 따라옵니다!
            </h3>

            {/* 부제목 */}
            <p className="text-[16px] sm:text-[20px] lg:text-[26px] font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
              돈까스창업, 소바창업은 절대 유행하는 아이템이 아닙니다.
            </p>

            {/* 설명 텍스트 */}
            <p className="text-[14px] sm:text-[18px] lg:text-[26px] text-white mb-6 sm:mb-8 font-bold text-center lg:text-left">
              신규고객 생성과 더불어 많은 고객님들의
              <br />
              재방문을 통해 꾸준한 매출 성장을 보여주며,
              <br />
              한순간의 거품이 아닌 '진짜' 라는 것을 증명하고 있습니다.
            </p>

            {/* 매출 증명 이미지 */}
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <Image
                src="/sales_verification.png"
                alt="매출 증명"
                width={700}
                height={400}
                className="object-contain w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[700px] h-auto"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* 오른쪽 섹션 - 매출 슬라이더 */}
          <div className="w-full lg:w-[740px] flex flex-col items-center justify-center">
            <SalesSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesVerificationSection;

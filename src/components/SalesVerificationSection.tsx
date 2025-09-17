import Image from "next/image";

const SalesVerificationSection = () => {
  return (
    <section
      id="revenue-proof"
      className="py-24 bg-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/sales_verification_bg.jpg)" }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* 왼쪽 섹션 - 텍스트 */}
          <div className="w-[740px] flex flex-col items-start">
            {/* 메인 타이틀 */}
            <h2 className="text-6xl font-bold text-white mb-6">
              25년 월매출 TOP20
            </h2>

            {/* 서브 타이틀 */}
            <h3 className="text-[38px] font-semibold text-white mb-8">
              <span className="text-[#ea8a00] font-extrabold text-[52px]">
                최고
              </span>
              를 선택하면
              <span className="text-[#ea8a00] font-extrabold text-[52px]">
                매출
              </span>
              은 따라옵니다!
            </h3>

            {/* 부제목 */}
            <p className="text-[26px] font-bold text-white mb-6">
              돈까스창업, 소바창업은 절대 유행하는 아이템이 아닙니다.
            </p>

            {/* 설명 텍스트 */}
            <p className="text-[26px] text-white mb-8 font-bold">
              신규고객 생성과 더불어 많은 고객님들의
              <br />
              재방문을 통해 꾸준한 매출 성장을 보여주며,
              <br />
              한순간의 거품이 아닌 '진짜' 라는 것을 증명하고 있습니다.
            </p>

            {/* 매출 증명 이미지 */}
            <div className="mt-8">
              <Image
                src="/sales_verification.png"
                alt="매출 증명"
                width={700}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* 오른쪽 섹션 - 추후 컨텐츠 배치 */}
          <div className="w-[740px] flex flex-col items-end bg-gray-200">
            {/* 오른쪽 컨텐츠가 들어갈 영역 */}
            <div className="text-center text-white-500 h-[962px]">
              슬라이드 영역
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesVerificationSection;

import Image from "next/image";

const YouTubeSection = () => {
  return (
    <section
      id="success-stories"
      className="text-white min-h-screen w-full flex items-center justify-center pt-20 relative"
      style={{
        background: "url(/images/vis_bg.jpg) no-repeat 50% 50% / contain",
        overflow: "hidden",
      }}
    >
      <div className="w-full max-w-[1460px] mx-auto px-[30px] relative z-10 min-h-[600px] lg:min-h-[800px] pt-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-center">
          <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className="text-[#e18c12] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold tracking-tighter">
              대한민국 라멘 NO.1
            </div>
            <div className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-bold text-gray-900 mb-4 lg:mb-6 leading-none">
              산카쿠
            </div>
            <div className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-bold text-gray-800">
              한치의 의심없는 성공의 혁신, <br />
              모두에게 검증된 브랜드로 성공하세요.
            </div>
          </div>
          <div className="relative w-full lg:w-auto lg:flex-1">
            <div className="relative w-full max-w-[350px] sm:max-w-[600px] lg:max-w-[800px] aspect-video mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Cek_FQ05O64?autoplay=1&mute=1&loop=1&playlist=Cek_FQ05O64&controls=1&showinfo=0&rel=0"
                title="산카쿠 브랜드 소개 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* 오른쪽 상단 이미지 */}
              <div className="absolute top-0 right-[-40px] z-20">
                <Image
                  src="/행복한창업_성공사례.png"
                  alt="행복한 창업 성공사례"
                  width={24}
                  height={234}
                  className="w-[24px] h-[234px] object-contain"
                  style={{ width: "24px", height: "234px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;

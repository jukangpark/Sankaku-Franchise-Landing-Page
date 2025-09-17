const YouTubeSection = () => {
  return (
    <section
      id="success-stories"
      className="text-white min-h-screen w-full flex items-center justify-center pt-45 relative"
      style={{
        background: "url(/images/vis_bg.jpg) no-repeat 50% 50% / contain",
      }}
    >
      <div className="max-w-[1460px] mx-auto px-[30px] relative z-10">
        <div className="flex gap-12">
          <div className="space-y-6">
            <div className="text-gray-500 text-[28px] font-bold">
              대한민국 라멘 & 오니기리 NO.1
            </div>
            <div className="text-[110px] font-bold text-gray-900 mb-6 leading-none">
              산카쿠
            </div>
            <div className="text-[26px] font-bold text-gray-800">
              한치의 의심없는 성공의 혁신, <br />
              모두에게 검증된 브랜드로 성공하세요.
            </div>
          </div>
          <div className="relative">
            <div className="relative w-[800px] h-[501px] overflow-hidden rounded-xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Cek_FQ05O64?autoplay=1&mute=1&loop=1&playlist=Cek_FQ05O64&controls=1&showinfo=0&rel=0"
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

export default YouTubeSection;

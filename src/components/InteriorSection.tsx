import Image from "next/image";

const InteriorSection = () => {
  return (
    <section
      className="h-[978px] bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: "url(/인테리어/인테리어bg.jpg)" }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-12">
        <div>
          <h3 className="text-[24px] font-semibold text-gray-400 mb-8">
            산카쿠만의 트렌디한 인테리어
          </h3>
          <h1 className="text-[64px] leading-[1.25em] mb-[55px] text-white font-extrabold">
            산카쿠의 인테리어는
            <br />
            10년이 지나도 <br />
            편안함을 드립니다.
          </h1>
          <p className="text-[28px] font-bold text-white mb-8">
            언제나 편안한 분위기에서
            <br />
            즐길 수 있도록 고안된 '산카쿠' 인테리어
          </p>
        </div>
        <div className="w-[780px] h-[530px] bg-gray-500">
          <Image
            src="/인테리어/interior_1.jpg"
            alt="인테리어"
            width={780}
            height={530}
          />
        </div>
      </div>
    </section>
  );
};

export default InteriorSection;

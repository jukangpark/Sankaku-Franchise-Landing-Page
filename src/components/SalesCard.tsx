const SalesCard = ({
  card,
  index,
  currentIndex,
}: {
  card: any;
  index: number;
  currentIndex: number;
}) => {
  return (
    <div
      key={`${card.id}-${currentIndex}`}
      className={`w-full min-w-[350px] sm:max-w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] lg:h-[300px] p-4 sm:p-5 lg:p-6 bg-white relative flex flex-col justify-center items-center lg:block ${"bg-white"}`}
    >
      {/* 모바일/태블릿용 중앙 레이아웃 */}
      <div className="flex flex-col justify-center items-center lg:hidden">
        {/* TOP 원 - 중앙 상단 */}
        <div
          className={`w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full flex flex-col text-center items-center justify-center text-white font-bold text-lg bg-[#033914] mb-2 sm:mb-3`}
          style={{ aspectRatio: "1/1" }}
        >
          <div className="text-[10px] sm:text-[14px] leading-none">TOP</div>
          <div className="text-[20px] sm:text-[28px] leading-none">
            {card.rank}
          </div>
        </div>

        {/* 매장 정보 - 중앙 */}
        <div className="flex flex-col justify-center items-center text-center mb-2 sm:mb-3">
          <div className="text-[12px] sm:text-[16px] text-gray-600 mb-1 sm:mb-2">
            {card.size} / {card.date}
          </div>
          <div className="text-[24px] sm:text-[36px] text-black font-extrabold">
            {card.location}
          </div>
        </div>

        {/* 매출액 - 중앙 하단 */}
        <div className="flex flex-row items-center gap-2 text-center">
          <div className="text-[12px] sm:text-[16px] font-extrabold text-[#9c5f07]">
            매출액
          </div>
          <div
            className={`text-[20px] sm:text-[32px] font-extrabold text-black`}
          >
            {card.amount}
          </div>
        </div>
      </div>

      {/* PC용 기존 레이아웃 */}
      <div className="hidden lg:block">
        {/* 왼쪽 영역: TOP 원 + 매장 정보 */}
        <div className="flex items-start gap-4">
          {/* TOP 원 - 왼쪽 상단 */}
          <div
            className={`w-[100px] h-[100px] rounded-full flex flex-col text-center items-center justify-center text-white font-bold text-lg bg-[#033914]`}
          >
            <div className="text-[18px] leading-none">TOP</div>
            <div className="text-[36px] leading-none">{card.rank}</div>
          </div>

          {/* 매장 정보 - 원의 중간 높이 */}
          <div className="flex flex-col justify-center h-[100px] ml-3">
            <div className="text-lg text-gray-600">
              {card.size} / {card.date}
            </div>
            <div className="text-[50px] text-black font-extrabold">
              {card.location}
            </div>
          </div>
        </div>

        {/* 매출액 - 오른쪽 하단 */}
        <div className="absolute bottom-6 right-15 text-left">
          <div className="flex gap-2 items-center">
            <div className="text-xl font-extrabold text-[#9c5f07]">매출액</div>
            <div className={`text-[50px] font-extrabold text-black`}>
              {card.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;

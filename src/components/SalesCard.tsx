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
      className={`w-full min-w-[350px] sm:max-w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] lg:h-[300px] p-4 sm:p-5 lg:p-6 bg-white relative ${"bg-white"}`}
    >
      {/* 왼쪽 영역: TOP 원 + 매장 정보 */}
      <div className="flex items-start gap-4">
        {/* TOP 원 - 왼쪽 상단 */}
        <div
          className={`w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full flex flex-col text-center items-center justify-center text-white font-bold text-lg bg-[#033914]`}
        >
          <div className="text-[10px] sm:text-[14px] lg:text-[18px] leading-none">
            TOP
          </div>
          <div className="text-[20px] sm:text-[28px] lg:text-[36px] leading-none">
            {card.rank}
          </div>
        </div>

        {/* 매장 정보 - 원의 중간 높이 */}
        <div className="flex flex-col justify-center h-[60px] sm:h-[80px] lg:h-[100px] ml-2 sm:ml-3">
          <div className="text-[12px] sm:text-[16px] lg:text-lg text-gray-600">
            {card.size} / {card.date}
          </div>
          <div className="text-[24px] sm:text-[36px] lg:text-[50px] text-black font-extrabold">
            {card.location}
          </div>
        </div>
      </div>

      {/* 매출액 - 오른쪽 하단 */}
      <div className="absolute bottom-4 sm:bottom-5 lg:bottom-6 right-4 sm:right-8 lg:right-15 text-left">
        <div className="flex gap-1 sm:gap-2 items-center">
          <div className="text-[12px] sm:text-[16px] lg:text-xl font-extrabold text-[#9c5f07]">
            매출액
          </div>
          <div
            className={`text-[20px] sm:text-[32px] lg:text-[50px] font-extrabold text-black`}
          >
            {card.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;

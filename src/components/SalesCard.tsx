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
      className={`w-[600px] h-[300px] p-6 bg-white relative ${"bg-white"}`}
    >
      {/* 왼쪽 영역: TOP 원 + 매장 정보 */}
      <div className="flex items-start gap-4">
        {/* TOP 원 - 왼쪽 상단 */}
        <div
          className={`w-[100px] h-[100px] rounded-full flex flex-col text-center items-center justify-center text-white font-bold text-lg ${"bg-black"}`}
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
          <div className="text-xl font-bold text-gray-600">매출액</div>
          <div className={`text-[50px] font-extrabold text-black`}>
            {card.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;

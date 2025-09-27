import { motion } from "framer-motion";
import CountUpAnimation from "./CountUpAnimation";

const PerformanceTable = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-4xl font-bold text-gray-900 mb-6 mt-16">
      <motion.div
        className="w-full lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[553px] text-center flex flex-col justify-center items-center text-white space-y-2 lg:space-y-4"
        style={{
          background:
            "url(/images/수치로말하는산카쿠.jpg) no-repeat 50% 50% / cover",
          display: "flex",
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-center text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px] text-white font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          한치의 의심없는 성공의 혁신
        </motion.h2>
        <motion.h1
          className="text-center text-white font-bold text-[28px] sm:text-[36px] md:text-[44px] lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          수치로 말하는
          <br /> 산/카/쿠
        </motion.h1>
      </motion.div>
      <motion.div
        className="w-full lg:w-auto lg:flex-1 lg:h-[553px]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-2 gap-1 w-full lg:w-full lg:h-full">
          {[
            {
              number: 11,
              unit: "회전",
              label: "테이블 회전율",
              icon: "/icons/테이블_아이콘.png",
            },
            {
              number: 314,
              unit: "만원",
              label: "일 매출",
              icon: "/icons/일매출_아이콘.png",
            },
            {
              number: 30.7,
              unit: "%",
              label: "평균 수익률",
              icon: "/icons/재방문율_아이콘.png",
            },
            {
              number: 240,
              unit: "%",
              label: "타 브랜드 대비 마진율",
              icon: "/icons/평균수익률_아이콘.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-black p-6 bg-white flex flex-col justify-between items-start relative w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-12 h-12 absolute top-15 left-7"
              />
              <div className="mt-10">
                <div className="flex items-baseline justify-start mt-16 mb-2">
                  <span className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-7xl font-bold text-[#033914]">
                    <CountUpAnimation endValue={item.number} duration={2} />
                  </span>
                  <span className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-2xl font-extrabold text-[#033914] ml-1">
                    {item.unit}
                  </span>
                </div>
                <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold text-gray-800">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PerformanceTable;

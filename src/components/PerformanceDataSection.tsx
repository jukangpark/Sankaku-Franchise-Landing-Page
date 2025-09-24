import { motion } from "framer-motion";
import Image from "next/image";
import CountUpAnimation from "./CountUpAnimation";
import PerformanceTable from "./PerformanceTable";

const PerformanceDataSection = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: <CountUpAnimation endValue={205} suffix="개" />,
              subtitle: "전국 매장 수",
              note: "24년 7월 기준",
              icon: "/performance/1.png",
            },
            {
              title: <CountUpAnimation endValue={207} suffix="개" />,
              subtitle: "계약 매장 수",
              note: "24년 4월 기준",
              icon: "/performance/2.png",
            },
            {
              title: <CountUpAnimation endValue={1790541} suffix="인분" />,
              subtitle: "마제소바 총 판매량",
              note: "23년 기준",
              icon: "/performance/3.png",
            },
            {
              title: <CountUpAnimation endValue={939858} suffix="KG" />,
              subtitle: "등심 총 사용량",
              note: "23년 기준",
              icon: "/performance/4.png",
            },
            {
              title: <CountUpAnimation endValue={2276} suffix="건" />,
              subtitle: "매장별 월평균 주문수",
              note: "23년1~11월 (배달제외)",
              icon: "/performance/5.png",
            },
          ].map((data, index) => (
            <motion.div
              key={index}
              className="text-center p-6 sm:p-8"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={data.icon}
                  alt={data.subtitle}
                  width={103}
                  height={103}
                  className="w-[103px] h-[103px] object-contain"
                />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold mb-2 whitespace-nowrap"
                style={{ color: "#9c5f07" }}
              >
                {data.title}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                {data.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{data.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <PerformanceTable
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
    </section>
  );
};

export default PerformanceDataSection;

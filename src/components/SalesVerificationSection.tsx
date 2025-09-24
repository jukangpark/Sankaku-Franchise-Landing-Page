import Image from "next/image";
import { motion } from "framer-motion";
import SalesSlider from "./SalesSlider";

const SalesVerificationSection = () => {
  return (
    <section
      id="revenue-proof"
      className="py-12 sm:py-16 lg:py-24 bg-white bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url(/sales_verification_bg.jpg)" }}
    >
      <motion.div
        className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* 왼쪽 섹션 - 텍스트 */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {/* 메인 타이틀 */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
              25년 월매출 TOP20
            </h2>

            {/* 서브 타이틀 */}
            <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[38px] font-semibold text-white mb-6 sm:mb-8 text-center md:text-left">
              <span className="text-[#ea8a00] font-extrabold text-[18px] sm:text-[24px] md:text-[28px] lg:text-[52px]">
                최고
              </span>
              를 선택하면
              <span className="text-[#ea8a00] font-extrabold text-[18px] sm:text-[24px] md:text-[28px] lg:text-[52px]">
                매출
              </span>
              은 따라옵니다!
            </h3>

            {/* 부제목 */}
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[26px] font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
              돈까스창업, 소바창업은 절대 유행하는 아이템이 아닙니다.
            </p>

            {/* 설명 텍스트 */}
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[26px] text-white mb-6 sm:mb-8 font-bold text-center md:text-left">
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
                className="object-contain w-full min-w-[375px] sm:min-w-[500.98px] lg:min-w-[658px] h-auto"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </motion.div>

          {/* 오른쪽 섹션 - 매출 슬라이더 */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <SalesSlider />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SalesVerificationSection;

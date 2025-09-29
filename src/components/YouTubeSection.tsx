import Image from "next/image";
import { motion } from "framer-motion";

const YouTubeSection = () => {
  return (
    <section
      id="success-stories"
      className="text-white w-full flex items-center justify-center pt-20 relative min-h-[375px] lg:min-h-screen"
      style={{
        background: "url(/images/vis_bg.jpg) no-repeat 50% 50% / contain",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="w-full max-w-[1460px] mx-auto px-[30px] relative z-10 min-h-[600px] lg:min-h-[800px] pt-20 pb-16 md:pb-20 lg:pb-24"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-center">
          <motion.div
            className="space-y-4 lg:space-y-6 text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="text-[#e18c12] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold tracking-tighter">
              대한민국 최초 <br />
              라멘&오니기리 전문점
            </div>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] font-bold text-gray-900 mb-4 lg:mb-6 leading-none">
              산카쿠
            </h1>
            <h2 className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-medium text-gray-800">
              확신으로 완성하는 성장의 공식, <br />
              검증된 브랜드 힘으로 키우세요.
            </h2>
          </motion.div>
          <motion.div
            className="relative w-full lg:w-auto lg:flex-1"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="relative w-full max-w-[527px] sm:max-w-[600px] lg:max-w-[800px] aspect-video mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Cek_FQ05O64?autoplay=1&mute=1&loop=1&playlist=Cek_FQ05O64&controls=1&showinfo=0&rel=0"
                title="산카쿠 브랜드 소개 영상"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {/* 오른쪽 상단 이미지 */}
              <motion.div
                className="absolute top-0 right-[-40px] z-20 hidden lg:block"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Image
                  src="/행복한창업_성공사례.png"
                  alt="행복한 창업 성공사례"
                  width={24}
                  height={234}
                  className="w-[24px] h-[234px] object-contain hidden lg:block"
                  style={{ width: "24px", height: "234px" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default YouTubeSection;

"use client";

import { motion } from "framer-motion";

const DifferentiationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cards = [
    {
      number: "1C",
      title: "월 1회 정기 방문을<br/>통한 점포 운영",
      subtitle: "Coaching",
      description:
        "점포의 QSC 및 전반적인 운영현황<br/>을 파악하고 미흡사항을 개선할 수<br/>있도록 주도적인 교육을 진행하여<br/>각 점포의 경영활동이 <span style='color: #71fc67'>가장 효과적</span><br/>으로 이루어질 수 있도록 합니다.",
    },
    {
      number: "2C",
      title: "점포 상황에 맞는",
      subtitle: "Counseling",
      description:
        "점포의 상황 및 상권에 적합한<br/>해결 방안 제시를 통해 점포에 발생한<br/>현상을 스스로 해결하고,<br/>실력을 향상시킬 수 있도록<br/><span style='color: #71fc67'>든든한 조력자의 역할을 수행</span>합니다.",
    },
    {
      number: "3C",
      title: "점포와의<br/>원활한",
      subtitle: "Communication",
      description:
        "본부와 점포 간 유기적인<br/>정보/의사 전달뿐만 아니라<br/><span style='color: #71fc67'>열린 자세로 긴밀하게 소통</span>해<br/>점포의 다양한 애로사항과 제안을<br/>연결할 수 있도록 일합니다.",
    },
  ];

  return (
    <section
      id="differentiation"
      className="py-24 bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(/책임창업bg.jpg)",
      }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 첫 번째 섹션: 책임창업 */}
        <motion.div
          className="text-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-[130px] font-extrabold text-white">
            책임창업
          </motion.h1>
          <motion.h2 className="text-[48px] font-bold text-white mb-12">
            시도하지 않으면 아무일도 일어나지 않습니다
          </motion.h2>
          <motion.h3 className="text-[24px] font-medium text-white leading-relaxed">
            산카쿠와 함께 할 수 있는 진짜 점주님을 찾습니다.
            <br />
            저희도 책임지고 도와드리겠습니다.
          </motion.h3>
        </motion.div>

        {/* YouTube 영상 */}
        <motion.div
          className="flex justify-center mb-24"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            className="w-[1400px] h-[788px] rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/1ky16LQH-zo?autoplay=1&mute=1"
            title="산카쿠 책임창업 영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>

        {/* 두 번째 섹션: 차별화된 슈퍼바이징 시스템 */}
        <motion.div
          className="text-center mb-30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-[88px] font-extrabold text-white mb-8">
            왜 산카쿠를 선택할까요?
          </motion.h1>
          <motion.h2 className="text-[48px] font-extrabold text-black mb-8 rounded-full bg-white p-4">
            차별화된 슈퍼바이징 시스템
          </motion.h2>
          <motion.p className="text-[32px] font-bold text-white">
            산카쿠만의 철저한 3C 슈퍼바이징 시스템을 소개합니다.
          </motion.p>
        </motion.div>

        {/* 3C 카드들 */}
        <motion.div
          className="grid grid-cols-3 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative text-white shadow-lg ${
                index === 0
                  ? "text-left"
                  : index === 2
                  ? "text-right"
                  : "text-center"
              }`}
              style={{
                backgroundImage: `url(/슈퍼바이징/${card.number.toLowerCase()}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "573.33px",
                marginTop: index === 1 ? "-50px" : "0px",
                zIndex: index === 1 ? 30 : 10,
                borderRadius: "48px",
                minHeight: "810px",
                padding: "60px 50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems:
                  index === 0
                    ? "flex-start"
                    : index === 2
                    ? "flex-end"
                    : "center",
                paddingTop: "80px",
              }}
              transition={{ delay: index * 0.1 }}
            >
              {/* 배경 오버레이 */}
              <div className="absolute inset-0 bg-black/30 rounded-[48px]"></div>

              {/* 콘텐츠 */}
              <div className="relative z-10">
                {/* 번호 */}
                <div
                  className={`mb-20 ${
                    index === 0
                      ? "text-left"
                      : index === 2
                      ? "text-right"
                      : "text-center"
                  }`}
                >
                  <span
                    className="text-white font-bold"
                    style={{
                      fontSize: "72px",
                      lineHeight: "1.2em",
                      opacity: 0.5,
                      fontWeight: 700,
                      marginBottom: "80px",
                    }}
                  >
                    {card.number}
                  </span>
                </div>

                {/* 제목 */}
                <h3
                  className={`mb-1 font-extrabold ${
                    index === 0
                      ? "text-left"
                      : index === 2
                      ? "text-right"
                      : "text-center"
                  }`}
                  style={{
                    fontSize: "43px",
                    lineHeight: "1.3em",
                    color: "#ea8a00",
                  }}
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />

                {/* 부제목 */}
                <h4
                  className={`mb-6 ${
                    index === 0
                      ? "text-left"
                      : index === 2
                      ? "text-right"
                      : "text-center"
                  }`}
                  style={{
                    fontSize: "43px",
                    lineHeight: "1.3em",
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {card.subtitle}
                </h4>

                {/* 설명 */}
                <p
                  className={`text-white leading-relaxed  ${
                    index === 0
                      ? "text-left"
                      : index === 2
                      ? "text-right"
                      : "text-center"
                  }`}
                  style={{
                    fontSize: "26px",
                    lineHeight: "1.54em",
                  }}
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentiationSection;

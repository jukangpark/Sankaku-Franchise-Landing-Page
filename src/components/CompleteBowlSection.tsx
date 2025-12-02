"use client";

import { motion } from "framer-motion";

const CompleteBowlSection = () => {
  const texts = [
    "정성(心) + 재료(食) + 공간(場)",
    "이 세 가지가 만나야 비로소 완전한 한 그릇이 완성됩니다.",
    "산카쿠는 단순하지만 깊은 맛.",
    "정직하지만 세련된 감성으로 고객의 하루를 위로합니다.",
  ];

  return (
    <section 
      className="py-12 sm:py-16 lg:py-24 relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/인테리어/interior_6.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 text-center"
        >
          {texts.map((text, index) => (
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`leading-relaxed text-white ${index === 0 ? "text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold" : "text-[16px] sm:text-[20px] lg:text-[24px]"}`}
              style={{fontFamily: "var(--font-cheongdo)"}}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompleteBowlSection;


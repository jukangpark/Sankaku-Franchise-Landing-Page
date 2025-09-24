import { motion } from "framer-motion";

const FranchiseContactForm = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  return (
    <section
      id="franchise-contact"
      className="py-12 sm:py-16 lg:py-24 bg-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url(/images/contact_form.jpg)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <h2 className="text-[32px] sm:text-[48px] lg:text-[88px] font-extrabold text-white mb-1">
            가맹점 문의
          </h2>
          <p className="text-white text-[16px] sm:text-[20px] lg:text-[26px] font-bold">
            당신의 선택을 꼭! 성공으로 바꾸겠습니다.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 text-center mb-8 sm:mb-10 lg:mb-12"
          variants={itemVariants}
        >
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              (주)해송NS 정지윤
            </h3>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
              010-5841-0150
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              부재 시 문자 남겨주시면 순차적으로 응대해 드리겠습니다.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            (주)해송NS는 (주)해송물산의 그룹사 입니다.
          </p>
        </motion.div>

        {/* 문의 폼 */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8"
          variants={itemVariants}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            창업 문의하기
          </h3>
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                  placeholder="전화번호를 입력하세요"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                placeholder="이메일을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                희망 지역 *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                placeholder="창업을 희망하는 지역을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                창업 예정 시기
              </label>
              <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base">
                <option>시기를 선택하세요</option>
                <option>3개월 이내</option>
                <option>6개월 이내</option>
                <option>1년 이내</option>
                <option>1년 이상</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                창업 자금 규모
              </label>
              <select className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base">
                <option>자금 규모를 선택하세요</option>
                <option>1억원 이하</option>
                <option>1억원 ~ 2억원</option>
                <option>2억원 ~ 3억원</option>
                <option>3억원 이상</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                문의 내용 *
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black resize-none text-sm sm:text-base"
                placeholder="궁금한 점이나 문의사항을 자유롭게 작성해주세요"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base"
              >
                문의하기
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseContactForm;

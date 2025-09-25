"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const FranchiseContactForm = ({
  containerVariants,
  itemVariants,
}: {
  containerVariants: any;
  itemVariants: any;
}) => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
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
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                이름 *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                나이 *
              </label>
              <input
                type="number"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                placeholder="나이를 입력해주세요"
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
                placeholder="연락 가능한 전화번호를 입력해주세요"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                오픈 희망 지역 *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                placeholder="ex) 천호동"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                창업 예산 (부동산 포함) *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
                placeholder="ex) 2억"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                유입경로 *
              </label>
              <select
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-sm sm:text-base"
              >
                <option value="">유입경로를 선택하세요</option>
                <option value="구글">구글</option>
                <option value="SNS">SNS (페이스북, 인스타그램)</option>
                <option value="유튜브">유튜브</option>
                <option value="기사">기사</option>
                <option value="지인소개">지인소개</option>
              </select>
            </div>

            {/* 개인정보처리방침 동의 */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy-agreement"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <div className="flex-1">
                <label
                  htmlFor="privacy-agreement"
                  className="text-xs sm:text-sm text-gray-700"
                >
                  개인정보처리방침을 읽었으며 이에 동의합니다.{" "}
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="text-black underline hover:text-gray-600 cursor-pointer"
                  >
                    전문보기
                  </button>
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!privacyAgreed}
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                문의하기
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* 개인정보처리방침 모달 */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </section>
  );
};

export default FranchiseContactForm;

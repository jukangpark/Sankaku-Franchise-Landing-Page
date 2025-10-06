"use client";

import QuickFranchiseInquiry from "./QuickFranchiseInquiry";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isInquiryVisible, setIsInquiryVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const footerLinks = [
    { name: "창업성공사례", href: "#success-stories" },
    { name: "매출증명", href: "#revenue-proof" },
    { name: "메뉴안내", href: "#menu-guide" },
    { name: "차별화시스템", href: "#differentiation" },
    { name: "풀오토시스템", href: "#full-auto-system" },
    { name: "창업안내", href: "#startup-guide" },
    { name: "가맹점 문의", href: "#franchise-contact" },
  ];

  return (
    <>
      <footer
        className={`bg-black text-white py-16 ${
          isInquiryVisible ? "pb-32 sm:pb-40 lg:pb-48" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 상단 섹션 */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* 로고 및 브랜드 정보 */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/SANKAKU_LOGO.jpg"
                    alt="산카쿠 로고"
                    fill
                    className="object-cover rounded-lg"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">산카쿠</h3>
                  <p className="text-sm text-gray-400">SANKAKU</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                정성 가득한 한 끼. 언제나 정직하게, 따뜻하게, 정성스럽게.
                <br />
                산카쿠와 함께하는 성공적인 창업의 시작.
              </p>
            </div>

            {/* 빠른 링크 */}
            <div className="lg:col-span-1">
              <h4 className="font-bold mb-6 text-lg text-white">빠른 링크</h4>
              <div className="grid grid-cols-2 gap-3">
                {footerLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="lg:col-span-1">
              <h4 className="font-bold mb-6 text-lg text-white">연락처</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>010-5841-0150</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>info@sankaku.kr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>서울특별시 강남구</span>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 구분선 및 저작권 */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 산카쿠. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  개인정보처리방침
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  이용약관
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <QuickFranchiseInquiry
        isVisible={isInquiryVisible}
        onClose={() => setIsInquiryVisible(false)}
      />

      {/* 맨 위로 가기 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12 w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] lg:w-[60px] lg:h-[60px] bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 cursor-pointer border border-gray-200"
        aria-label="맨 위로 가기"
      >
        <Image
          src="/top_button.png"
          alt="맨 위로 가기"
          width={18}
          height={18}
          className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px]"
        />
      </button>
    </>
  );
};

export default Footer;

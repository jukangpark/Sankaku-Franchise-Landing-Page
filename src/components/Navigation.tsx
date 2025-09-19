"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "창업성공사례", href: "#success-stories" },
    { name: "성공브랜드", href: "#success-brand" },
    { name: "매출증명", href: "#revenue-proof" },
    { name: "메뉴안내", href: "#menu-guide" },
    { name: "차별화시스템", href: "#differentiation" },
    { name: "창업안내", href: "#startup-guide" },
    { name: "가맹점 문의", href: "#franchise-contact" },
    { name: "브랜드", href: "https://sankaku-steel.vercel.app/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "https://sankaku-steel.vercel.app/") {
      window.open(href, "_blank");
    }

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/SANKAKU_LOGO.jpg"
                alt="산카쿠 로고"
                fill
                className="object-cover rounded-lg"
                sizes="48px"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">산카쿠</h1>
              <p className="text-xs text-gray-600">SANKAKU</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                }}
                className={`transition-all duration-300 text-gray-600 hover:text-gray-900 cursor-pointer`}
              >
                {item.name}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection(item.href);
                  }}
                  className={`transition-all duration-300 text-gray-600 hover:text-gray-900 cursor-pointer`}
                >
                  {item.name}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;

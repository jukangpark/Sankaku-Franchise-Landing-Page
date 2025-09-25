"use client";

import LogoSlider from "@/components/LogoSlider";
import Navigation from "@/components/Navigation";
import YouTubeSection from "@/components/YouTubeSection";
import PerformanceDataSection from "@/components/PerformanceDataSection";
import BrandSuccessSection from "@/components/BrandSuccessSection";
import StoreShowCaseSection from "@/components/StoreShowCaseSection";
import FranchiseContactForm from "@/components/FranchiseContactForm";
import BrandPowerSection from "@/components/BrandPowerSection";
import SalesVerificationSection from "@/components/SalesVerificationSection";
import SalesReceiptSection from "@/components/SalesReceiptSection";
import ReviewSection from "@/components/ReviewSection";
import MenuSection from "@/components/MenuSection";
import InteriorSection from "@/components/InteriorSection";
import StoreInfoSection from "@/components/StoreInfoSection";
import StartUpCost from "@/components/StartUpCost";
import DifferentiationSection from "@/components/DifferentiationSection";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-[#fef9f2] overflow-x-hidden">
      <Navigation />

      {/* 창업성공사례 Section */}
      <YouTubeSection />

      <LogoSlider />

      <PerformanceDataSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <BrandSuccessSection />

      <BrandPowerSection />

      <StoreShowCaseSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <SalesVerificationSection />

      <SalesReceiptSection />

      <ReviewSection />

      <MenuSection />
      <InteriorSection />
      <StoreInfoSection />

      <DifferentiationSection />

      <StartUpCost />

      <FranchiseContactForm
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </div>
  );
}

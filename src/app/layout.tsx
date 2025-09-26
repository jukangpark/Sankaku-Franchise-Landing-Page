import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 청도읍성체 폰트 설정
const cheongdoFont = localFont({
  src: [
    {
      path: "./fonts/청도읍성체(L).ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/청도읍성체(M).ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-cheongdo",
  display: "swap", // 폰트 로딩 최적화
});

// SeoulAlrim 폰트 설정
const seoulAlrimFont = localFont({
  src: [
    {
      path: "./fonts/SeoulAlrimTTF-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SeoulAlrimTTF-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SeoulAlrimTTF-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SeoulAlrimTTF-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-seoul-alrim",
  display: "swap", // 폰트 로딩 최적화
});

export const metadata: Metadata = {
  title: "산카쿠",
  description: "산카쿠 가맹점 창업 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cheongdoFont.variable} ${seoulAlrimFont.variable} antialiased bg-[#fef9f2]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

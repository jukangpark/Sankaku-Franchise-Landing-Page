# 🍜 산카쿠 가맹점 문의 랜딩 페이지

<img src="/public/SANKAKU_LOGO.jpg" alt="산카쿠 가맹점 문의 랜딩 페이지" />

일본 라멘 & 오니기리 전문점 **산카쿠**의 가맹점 문의를 위한 원페이지 랜딩 페이지입니다.

## 🚀 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: [Yarn](https://yarnpkg.com/)

## 📋 주요 섹션

1. **Hero Section** - 메인 비주얼 및 브랜드 소개
2. **창업성공사례** - 성공 사례 및 수치 데이터
3. **성공브랜드** - 전국 매장 현황 및 성장 차트
4. **매출증명** - 실제 매출 데이터 공개
5. **메뉴안내** - 대표 메뉴 소개
6. **차별화시스템** - 브랜드 파워 및 차별화 요소
7. **창업안내** - 가맹점 개설 절차
8. **고객의 소리함** - 고객 후기 및 문의

## 🛠️ 설치 및 실행

### 의존성 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn dev
```

### 프로덕션 빌드

```bash
yarn build
```

### 프로덕션 서버 실행

```bash
yarn start
```

## 🌐 접속

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📱 반응형 디자인

- **Desktop**: 1460px 최대 너비 컨테이너
- **Tablet**: 반응형 그리드 레이아웃
- **Mobile**: 햄버거 메뉴 및 모바일 최적화

## ✨ 주요 기능

### 🎯 스무스 스크롤 네비게이션

- 헤더 메뉴 클릭 시 해당 섹션으로 부드러운 스크롤
- 모바일에서는 슬라이드 메뉴 제공

### 🎨 인터랙티브 애니메이션

- `framer-motion`을 활용한 스크롤 기반 애니메이션
- 숫자 카운트업 효과
- 호버 및 포커스 상태 애니메이션

### 📊 데이터 시각화

- SVG 차트를 통한 성장 데이터 표시
- 실제 매출 데이터 테이블
- 시각적 성과 지표

### 📋 문의 폼

- 가맹점 문의를 위한 인터랙티브 폼
- 실시간 유효성 검사
- 모바일 친화적 UI/UX

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: `#ea8a00` (산카쿠 브랜드 컬러)
- **Background**: `#fef9f2` (따뜻한 베이지)
- **Text**: `#2c2c2c`, `#6b6b6b` (다크 그레이)
- **Accent**: `#888888` (미드 그레이)

### 타이포그래피

- **제목**: 큰 폰트 사이즈 (94px, 80px, 60px)
- **본문**: 가독성 중심의 크기 (26px, 24px, 18px)
- **강조**: Bold, Extrabold 가중치 활용

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx              # 메인 페이지
│   ├── layout.tsx            # 루트 레이아웃
│   └── globals.css           # 글로벌 스타일
└── components/
    ├── Navigation.tsx        # 헤더 네비게이션
    ├── YouTubeSection.tsx    # 히어로 섹션
    ├── PerformanceTable.tsx  # 성과 데이터 테이블
    ├── BrandSuccessSection.tsx # 브랜드 성공 섹션
    ├── StoreShowCaseSection.tsx # 매장 쇼케이스
    ├── SalesVerificationSection.tsx # 매출 증명
    ├── SalesReceiptSection.tsx # 매출 전표
    ├── BrandPowerSection.tsx # 브랜드 파워
    ├── FranchiseContactForm.tsx # 가맹점 문의 폼
    ├── CountUpAnimation.tsx  # 숫자 애니메이션
    └── Footer.tsx           # 푸터
```

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
yarn global add vercel

# 배포
vercel --prod
```

### 기타 플랫폼

- **VERCEL**: 웹사이트 호스팅

## 📝 라이선스

This project is private and proprietary.

## 🤝 기여하기

이 프로젝트는 산카쿠 브랜드의 공식 랜딩 페이지입니다.
문의사항이나 개선 제안은 프로젝트 관리자에게 연락해 주세요.

---

**산카쿠(SANKAKU)** - 일본 정통 라멘 & 오니기리 전문점 🍜🍙

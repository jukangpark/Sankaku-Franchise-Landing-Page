export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "산카쿠 특제 라멘",
    description: "진한 돈코츠 국물과 쫄깃한 면발의 완벽한 조화",
    price: "8,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "라멘",
  },
  {
    id: 2,
    name: "차슈 라멘",
    description: "부드러운 차슈와 진한 국물의 환상적인 만남",
    price: "9,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "라멘",
  },
  {
    id: 3,
    name: "미소 라멘",
    description: "깊은 맛의 미소와 고명이 어우러진 특별한 맛",
    price: "8,000원",
    image: "/menu_slide/메뉴_1.png",
    category: "라멘",
  },
  {
    id: 4,
    name: "돈코츠 라멘",
    description: "진한 돈코츠 국물의 깊고 진한 맛",
    price: "9,000원",
    image: "/menu_slide/메뉴_1.png",
    category: "라멘",
  },
  {
    id: 5,
    name: "야사이 라멘",
    description: "신선한 야채가 가득한 건강한 라멘",
    price: "8,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "라멘",
  },
  {
    id: 6,
    name: "카라아게",
    description: "바삭하고 부드러운 특제 치킨 카라아게",
    price: "6,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "사이드",
  },
  {
    id: 7,
    name: "교자",
    description: "쫄깃한 피와 진한 육즙의 만두",
    price: "4,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "사이드",
  },
  {
    id: 8,
    name: "에비튀김",
    description: "신선한 새우의 바삭한 튀김",
    price: "5,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "사이드",
  },
  {
    id: 9,
    name: "타코야키",
    description: "부드러운 반죽과 진한 소스의 타코야키",
    price: "4,000원",
    image: "/menu_slide/메뉴_1.png",
    category: "사이드",
  },
  {
    id: 10,
    name: "오니기리",
    description: "다양한 속재료가 들어간 특제 주먹밥",
    price: "3,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "사이드",
  },
  {
    id: 11,
    name: "우동",
    description: "쫄깃한 면발과 진한 국물의 우동",
    price: "7,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "우동",
  },
  {
    id: 12,
    name: "덴푸라 우동",
    description: "바삭한 덴푸라가 올라간 특별한 우동",
    price: "8,500원",
    image: "/menu_slide/메뉴_1.png",
    category: "우동",
  },
];

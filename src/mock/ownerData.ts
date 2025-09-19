export interface OwnerInfo {
  id: number;
  totalStores: number;
  mainStore: string;
  description: string;
  stores: string[];
  image: string;
}

export const ownerData: OwnerInfo[] = [
  {
    id: 1,
    totalStores: 6,
    mainStore: "부천역점",
    description: "부천역점을<br/>시작으로 6개 매장 오픈!",
    stores: [
      "부천역점",
      "구월로데오점",
      "계양구청점",
      "검단사거리점",
      "인하대후문점",
      "주안아인병원점",
    ],
    image: "/store_info/store_info_1.jpg",
  },
  {
    id: 2,
    totalStores: 2,
    mainStore: "전북대점",
    description: "전북대점을<br/>시작으로 매장 추가 오픈!",
    stores: ["전북대점", "객사점"],
    image: "/store_info/store_info_2.jpg",
  },
  {
    id: 3,
    totalStores: 2,
    mainStore: "수원천천점",
    description: "수원천천점을<br/>시작으로 매장 추가 오픈!",
    stores: ["수원천천점", "안산중앙역점"],
    image: "/store_info/store_info_3.jpg",
  },
  {
    id: 4,
    totalStores: 2,
    mainStore: "아산테크노밸리점",
    description: "아산테크노밸리점을<br/>시작으로 매장 추가 오픈!",
    stores: ["아산테크노밸리점", "아산중앙점"],
    image: "/store_info/store_info_4.jpg",
  },
  {
    id: 5,
    totalStores: 2,
    mainStore: "전남대점",
    description: "전남대점을<br/>시작으로 매장 추가 오픈!",
    stores: ["전남대점", "봉선진월점"],
    image: "/store_info/store_info_5.jpg",
  },
  {
    id: 6,
    totalStores: 2,
    mainStore: "세종중앙점",
    description: "세종중앙점을<br/>시작으로 매장 추가 오픈!",
    stores: ["세종중앙점", "세종아름고운점"],
    image: "/store_info/store_info_6.jpg",
  },
  {
    id: 7,
    totalStores: 2,
    mainStore: "수원역점",
    description: "수원역점을<br/>시작으로 매장 추가 오픈!",
    stores: ["수원역점", "산본역점"],
    image: "/store_info/store_info_1.jpg",
  },
  {
    id: 8,
    totalStores: 3,
    mainStore: "서울대입구역점",
    description: "서울대입구역점을<br/>시작으로 매장 추가 오픈!",
    stores: ["서울대입구역점", "인청서창점", "주안역점"],
    image: "/store_info/store_info_2.jpg",
  },
  {
    id: 9,
    totalStores: 3,
    mainStore: "도곡점",
    description: "도곡점을<br/>시작으로 매장 추가 오픈!",
    stores: ["도곡점", "역삼GS점", "옥수점"],
    image: "/store_info/store_info_3.jpg",
  },
];

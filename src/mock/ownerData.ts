export interface OwnerInfo {
  id: number;
  totalStores: number;
  mainStore: string;
  description: string;
  stores: string[];
  image: string;
  image2: string;
}

export const ownerData: OwnerInfo[] = [
  {
    id: 1,
    totalStores: 6,
    mainStore: "전대본점",
    description: "전대본점을 시작으로 6개 매장 오픈!",
    stores: ["전대본점", "구월로데오점"],
    image: "/store_owner_info/owner1_1.jpg",
    image2: "/store_owner_info/owner1_2.jpg",
  },
  {
    id: 2,
    totalStores: 2,
    mainStore: "전북대점",
    description: "전북대점을<br/>시작으로 매장 추가 오픈!",
    stores: ["전북대점", "객사점"],
    image: "/store_owner_info/owner2_2.jpg",
    image2: "/store_owner_info/owner2_1.jpg",
  },
  {
    id: 3,
    totalStores: 2,
    mainStore: "수원천천점",
    description: "수원천천점을<br/>시작으로 매장 추가 오픈!",
    stores: ["수원천천점", "안산중앙역점"],
    image: "/store_owner_info/owner2_1.jpg",
    image2: "/store_owner_info/owner2_2.jpg",
  },
  {
    id: 4,
    totalStores: 2,
    mainStore: "아산테크노밸리점",
    description: "아산테크노밸리점을<br/>시작으로 매장 추가 오픈!",
    stores: ["아산점", "아산중앙점"],
    image: "/store_owner_info/owner4_1.jpg",
    image2: "/store_owner_info/owner4_2.jpg",
  },
  {
    id: 5,
    totalStores: 2,
    mainStore: "전남대점",
    description: "전남대점을<br/>시작으로 매장 추가 오픈!",
    stores: ["전남대점", "봉선진월점"],
    image: "/store_owner_info/owner6_2.jpg",
    image2: "/store_owner_info/owner6_1.jpg",
  },
  {
    id: 6,
    totalStores: 2,
    mainStore: "세종중앙점",
    description: "세종중앙점을<br/>시작으로 매장 추가 오픈!",
    stores: ["세종중앙점"],
    image: "/store_owner_info/owner6_1.jpg",
    image2: "/store_owner_info/owner6_2.jpg",
  },
  {
    id: 7,
    totalStores: 2,
    mainStore: "수원역점",
    description: "수원역점을<br/>시작으로 매장 추가 오픈!",
    stores: ["수원역점", "산본역점"],
    image: "/store_owner_info/owner7_1.jpg",
    image2: "/store_owner_info/owner7_2.jpg",
  },
  {
    id: 8,
    totalStores: 3,
    mainStore: "서울대입구역점",
    description: "서울대입구역점을<br/>시작으로 매장 추가 오픈!",
    stores: ["서울대점", "인청서창점", "주안역점"],
    image: "/store_owner_info/owner8_1.jpg",
    image2: "/store_owner_info/owner8_2.jpg",
  },
  {
    id: 9,
    totalStores: 3,
    mainStore: "도곡점",
    description: "도곡점을<br/>시작으로 매장 추가 오픈!",
    stores: ["도곡점", "역삼GS점", "옥수점"],
    image: "/store_owner_info/owner8_2.jpg",
    image2: "/store_owner_info/owner8_1.jpg",
  },
];

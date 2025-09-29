export interface StoreInfo {
  id: number;
  name: string;
  image: string;
  alt: string;
}

export const storeInfoData: StoreInfo[] = [
  {
    id: 1,
    name: "전대본점",
    image: "/store_info/전대본점 외관.jpg",
    alt: "store-info-1",
  },
  {
    id: 2,
    name: "충대점",
    image: "/store_info/충대점 외관.jpg",
    alt: "store-info-2",
  },
  {
    id: 3,
    name: "인계점",
    image: "/store_info/인계점 외관.jpg",
    alt: "store-info-3",
  },
];

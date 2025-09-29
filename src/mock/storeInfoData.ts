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
    image: "/store_info/store_info_1.jpg",
    alt: "store-info-1",
  },
  {
    id: 2,
    name: "충대점",
    image: "/store_info/store_info_2.jpg",
    alt: "store-info-2",
  },
  {
    id: 3,
    name: "인계점",
    image: "/store_info/store_info_3.jpg",
    alt: "store-info-3",
  },
  {
    id: 4,
    name: "천안점",
    image: "/store_info/store_info_4.jpg",
    alt: "store-info-4",
  },
  {
    id: 5,
    name: "제주점(예정)",
    image: "/store_info/store_info_5.jpg",
    alt: "store-info-5",
  },
  {
    id: 6,
    name: "수완점(에정)",
    image: "/store_info/store_info_6.jpg",
    alt: "store-info-6",
  },
];

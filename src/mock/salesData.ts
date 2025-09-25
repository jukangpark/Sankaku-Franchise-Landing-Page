interface SalesData {
  id: number;
  rank: number;
  size: string;
  date: string;
  location: string;
  amount: string;
}

const salesData: SalesData[] = [
  {
    id: 7,
    rank: 7,
    size: "55평",
    date: "25년 6월",
    location: "L지점",
    amount: "1억 799만원",
  },
  {
    id: 1,
    rank: 1,
    size: "70평",
    date: "25년 6월",
    location: "G지점",
    amount: "1억 299만원",
  },
  {
    id: 2,
    rank: 2,
    size: "65평",
    date: "25년 6월",
    location: "S지점",
    amount: "1억 100만원",
  },
  {
    id: 3,
    rank: 3,
    size: "58평",
    date: "25년 6월",
    location: "B지점",
    amount: "1억 199만원",
  },
  {
    id: 4,
    rank: 4,
    size: "72평",
    date: "25년 5월",
    location: "M지점",
    amount: "1억 700만원",
  },
  {
    id: 5,
    rank: 5,
    size: "63평",
    date: "25년 5월",
    location: "D지점",
    amount: "1억 300만원",
  },
  {
    id: 6,
    rank: 6,
    size: "55평",
    date: "25년 5월",
    location: "K지점",
    amount: "1억 699만원",
  },
];

export default salesData;

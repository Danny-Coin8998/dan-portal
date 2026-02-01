export interface PortalLink {
  title: string;
  url: string;
  folder: string;
  imageCount: number;
  category?: string;
}

export const portalLinks: PortalLink[] = [
  // Civil AI - 1 image
  {
    title: "DAN Civil AI",
    url: "https://dancivilai.com",
    folder: "civilai",
    imageCount: 1,
    category: "AI",
  },
  // Daily - 2 images
  {
    title: "DAN Daily",
    url: "https://dan-daily.com",
    folder: "daily",
    imageCount: 2,
    category: "News",
  },
  // Dannet - 1 image
  {
    title: "DANnet",
    url: "https://dannet.io",
    folder: "dannet",
    imageCount: 1,
    category: "Network",
  },
  // Deadex - 3 images
  {
    title: "DANNY Exchange",
    url: "https://exchange.danny.com",
    folder: "Deadex",
    imageCount: 3,
    category: "Exchange",
  },
  // Lottery - 3 images
  {
    title: "Danny Lotto",
    url: "https://lotto.danny.com",
    folder: "lottery",
    imageCount: 3,
    category: "Lottery",
  },
  // Real Estate - 3 images
  {
    title: "Dan Realestate - Web3 Platform",
    url: "https://realestate.dan.com",
    folder: "realestate",
    imageCount: 3,
    category: "Real Estate",
  },
  // Referral - 1 image
  {
    title: "Dan Referral",
    url: "https://referral.dan.com",
    folder: "referral",
    imageCount: 1,
    category: "Referral",
  },
  // V3 - 1 image
  {
    title: "Dan Binary",
    url: "https://binary.dan.com",
    folder: "V3",
    imageCount: 1,
    category: "Trading",
  },
  // V4 - 1 image
  {
    title: "Dan Staking 69",
    url: "https://staking.dan.com/v4",
    folder: "V4",
    imageCount: 1,
    category: "Staking",
  },
];

export type Category =
  | "Earbuds"
  | "Headphones"
  | "Chargers"
  | "Cables"
  | "Power Banks"
  | "Covers"
  | "Smart Watches"
  | "Screen Protectors";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number; // in KSh
  category: Category;
  image: string;
  description: string;
};

const ksh = (n: number) => n;

export const products: Product[] = [
  {
    id: "p1",
    name: "FreePods 4 Wireless Earbuds",
    brand: "Oraimo",
    price: ksh(3999),
    category: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
    description: "ENC noise reduction, 40h playtime with charging case.",
  },
  {
    id: "p2",
    name: "Tune 510BT Bluetooth Headphones",
    brand: "JBL",
    price: ksh(6500),
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    description: "Pure Bass sound with 40h wireless playtime.",
  },
  {
    id: "p3",
    name: "PowerCube 20W Fast Charger",
    brand: "Anker",
    price: ksh(1500),
    category: "Chargers",
    image:
      "https://images.unsplash.com/photo-1591290619762-aafc276a4473?auto=format&fit=crop&w=800&q=80",
    description: "Type-C PD adapter, charges your phone to 50% in 30 min.",
  },
  {
    id: "p4",
    name: "Mi Braided USB-C Cable 1m",
    brand: "Xiaomi",
    price: ksh(850),
    category: "Cables",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    description: "Durable nylon braided cable with 3A fast charging.",
  },
  {
    id: "p5",
    name: "PowerPro 20,000mAh Power Bank",
    brand: "Oraimo",
    price: ksh(3499),
    category: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
    description: "Dual-output power bank with LED display.",
  },
  {
    id: "p6",
    name: "Watch GT 3 Smartwatch",
    brand: "Huawei",
    price: ksh(12500),
    category: "Smart Watches",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    description: "AMOLED display, SpO2, GPS and 14-day battery.",
  },
  {
    id: "p7",
    name: "Galaxy A54 Silicone Case",
    brand: "Samsung",
    price: ksh(950),
    category: "Covers",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80",
    description: "Soft-touch silicone case with raised camera bezel.",
  },
  {
    id: "p8",
    name: "Hot 40 Tempered Glass Protector",
    brand: "Infinix",
    price: ksh(450),
    category: "Screen Protectors",
    image:
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
    description: "9H hardness HD clear tempered glass with easy install kit.",
  },
  {
    id: "p9",
    name: "Buds 2 Wireless Earbuds",
    brand: "Itel",
    price: ksh(1800),
    category: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    description: "Affordable everyday earbuds with 24h total playback.",
  },
  {
    id: "p10",
    name: "HiPods H77 ANC Headphones",
    brand: "Tecno",
    price: ksh(4200),
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Active noise cancelling over-ear headphones with deep bass.",
  },
  {
    id: "p11",
    name: "Watch 3 Pro Smart Watch",
    brand: "Vision Plus",
    price: ksh(2999),
    category: "Smart Watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Fitness tracking, heart-rate, notifications and call alerts.",
  },
  {
    id: "p12",
    name: "PowerCore 10,000mAh Slim",
    brand: "Anker",
    price: ksh(2750),
    category: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=800&q=80",
    description: "Compact slim power bank with PowerIQ fast charge.",
  },
];

export const categories = [
  "All",
  "Earbuds",
  "Headphones",
  "Chargers",
  "Cables",
  "Power Banks",
  "Covers",
  "Smart Watches",
  "Screen Protectors",
] as const;

export const formatKsh = (n: number) =>
  `KSh ${n.toLocaleString("en-KE")}`;
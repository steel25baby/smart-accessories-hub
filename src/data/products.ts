export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Earphones" | "Chargers" | "Covers" | "Smartwatches";
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Pulse Pro Wireless Earbuds",
    price: 59.99,
    category: "Earphones",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
    description: "Active noise-cancelling earbuds with 30h battery life.",
  },
  {
    id: "p2",
    name: "BoltCharge 65W GaN",
    price: 39.99,
    category: "Chargers",
    image:
      "https://images.unsplash.com/photo-1591290619762-aafc276a4473?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-fast 65W GaN charger with USB-C PD.",
  },
  {
    id: "p3",
    name: "ArmorFlex Phone Case",
    price: 19.99,
    category: "Covers",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80",
    description: "Shockproof slim cover with raised camera bezel.",
  },
  {
    id: "p4",
    name: "Smart On Watch X2",
    price: 129.99,
    category: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    description: "AMOLED smartwatch with health & fitness tracking.",
  },
  {
    id: "p5",
    name: "AirSync Lite Earphones",
    price: 29.99,
    category: "Earphones",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    description: "Comfort-fit wireless earphones with deep bass.",
  },
  {
    id: "p6",
    name: "PowerCore 20K Power Bank",
    price: 49.99,
    category: "Chargers",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
    description: "20,000mAh fast-charging power bank for all devices.",
  },
  {
    id: "p7",
    name: "ClearShield Glass Cover",
    price: 14.99,
    category: "Covers",
    image:
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80",
    description: "Crystal clear case with anti-yellow coating.",
  },
  {
    id: "p8",
    name: "FitPulse Smart Band",
    price: 49.99,
    category: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight fitness band with SpO2 & sleep tracking.",
  },
];

export const categories = ["All", "Earphones", "Chargers", "Covers", "Smartwatches"] as const;
export type CateringPackage = {
  id: string;
  nameBM: string;
  nameEN: string;
  pricePerPax: number;
  minPax: number;
  taglineBM: string;
  taglineEN: string;
  includesBM: string[];
  includesEN: string[];
  popular?: boolean;
};

export const CATERING: CateringPackage[] = [
  {
    id: "famili",
    nameBM: "Pakej Famili",
    nameEN: "Family Package",
    pricePerPax: 28,
    minPax: 20,
    taglineBM: "Sesuai untuk majlis keluarga & kenduri kecil.",
    taglineEN: "Perfect for family gatherings & small kenduri.",
    includesBM: [
      "10 cucuk sate (ayam + daging) per orang",
      "Nasi himpit & kuah kacang tanpa had",
      "Salad timun & bawang",
      "Air bandung atau teh tarik",
    ],
    includesEN: [
      "10 satay sticks (chicken + beef) per pax",
      "Unlimited nasi himpit & peanut sauce",
      "Cucumber & onion salad",
      "Air bandung or teh tarik",
    ],
  },
  {
    id: "korporat",
    nameBM: "Pakej Korporat",
    nameEN: "Corporate Package",
    pricePerPax: 45,
    minPax: 50,
    popular: true,
    taglineBM: "Pelancaran produk, mesyuarat tahunan, raya korporat.",
    taglineEN: "Product launches, AGMs, corporate raya events.",
    includesBM: [
      "15 cucuk sate (ayam, daging, kambing) per orang",
      "Nasi himpit & kuah kacang tanpa had",
      "2 lauk sampingan & dessert",
      "Tukang bakar di tapak (live grilling)",
      "Setup, layan & kemas",
    ],
    includesEN: [
      "15 satay sticks (chicken, beef, mutton) per pax",
      "Unlimited nasi himpit & peanut sauce",
      "2 sides & dessert",
      "On-site live grilling station",
      "Setup, service & cleanup",
    ],
  },
  {
    id: "premium",
    nameBM: "Pakej Premium",
    nameEN: "Premium Package",
    pricePerPax: 68,
    minPax: 100,
    taglineBM: "Untuk majlis perkahwinan & acara VIP.",
    taglineEN: "For weddings & VIP events.",
    includesBM: [
      "20 cucuk sate premium (termasuk kambing)",
      "Buffet penuh dengan 4 lauk sampingan",
      "2 stesen tukang bakar di tapak",
      "Dessert bar (cendol, pulut mangga, kuih)",
      "Pelayan berseragam & coordinator acara",
    ],
    includesEN: [
      "20 premium satay sticks (mutton included)",
      "Full buffet with 4 sides",
      "2 on-site live grilling stations",
      "Dessert bar (cendol, mango sticky rice, kuih)",
      "Uniformed servers & event coordinator",
    ],
  },
];

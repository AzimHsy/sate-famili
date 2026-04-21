export type MenuCategory = "satay" | "sides" | "rice" | "drinks" | "dessert";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  nameBM: string;
  nameEN: string;
  descBM: string;
  descEN: string;
  // price in RM
  price: number;
  // unit shown next to price, used in cart
  unit: "stick" | "portion";
  popular?: boolean;
};

export const MENU: MenuItem[] = [
  // Satay
  {
    id: "sate-ayam",
    category: "satay",
    nameBM: "Sate Ayam",
    nameEN: "Chicken Satay",
    descBM: "Ayam diperam rempah istimewa, dibakar di atas bara arang.",
    descEN: "Chicken marinated in our spice blend, charcoal-grilled.",
    price: 1.2,
    unit: "stick",
    popular: true,
  },
  {
    id: "sate-daging",
    category: "satay",
    nameBM: "Sate Daging",
    nameEN: "Beef Satay",
    descBM: "Daging lembut, manis berempah, lemak menitis.",
    descEN: "Tender beef, sweet & spiced, with juicy fat caramelisation.",
    price: 1.4,
    unit: "stick",
    popular: true,
  },
  {
    id: "sate-kambing",
    category: "satay",
    nameBM: "Sate Kambing",
    nameEN: "Mutton Satay",
    descBM: "Kambing pilihan tanpa hanyir, sangat lembut.",
    descEN: "Premium mutton, never gamey, melt-in-your-mouth tender.",
    price: 1.8,
    unit: "stick",
  },
  {
    id: "sate-perut",
    category: "satay",
    nameBM: "Sate Perut",
    nameEN: "Tripe Satay",
    descBM: "Untuk peminat tegar — kenyal dan rangup.",
    descEN: "For the purists — chewy with crisp edges.",
    price: 1.3,
    unit: "stick",
  },

  // Rice & accompaniments
  {
    id: "nasi-himpit",
    category: "rice",
    nameBM: "Nasi Himpit",
    nameEN: "Nasi Himpit (Rice Cakes)",
    descBM: "Nasi mampat tradisional, sepasangan sate yang sempurna.",
    descEN: "Traditional pressed rice cakes, the perfect satay partner.",
    price: 2,
    unit: "portion",
    popular: true,
  },
  {
    id: "kuah-kacang",
    category: "rice",
    nameBM: "Kuah Kacang Tambahan",
    nameEN: "Extra Peanut Sauce",
    descBM: "Sebekas kuah kacang famili kami, dimasak 6 jam.",
    descEN: "A bowl of our family peanut sauce, simmered 6 hours.",
    price: 4,
    unit: "portion",
  },
  {
    id: "ketupat",
    category: "rice",
    nameBM: "Ketupat Daun",
    nameEN: "Ketupat (Palm Leaf)",
    descBM: "Ketupat dianyam tangan, dibungkus daun palas.",
    descEN: "Hand-woven ketupat in palm leaves.",
    price: 2.5,
    unit: "portion",
  },

  // Sides
  {
    id: "salad-timun",
    category: "sides",
    nameBM: "Salad Timun & Bawang",
    nameEN: "Cucumber & Onion Salad",
    descBM: "Penyegar mulut antara cucuk.",
    descEN: "A fresh palate cleanser between skewers.",
    price: 3,
    unit: "portion",
  },
  {
    id: "sambal-belacan",
    category: "sides",
    nameBM: "Sambal Belacan",
    nameEN: "Sambal Belacan",
    descBM: "Pedas berapi untuk yang berani.",
    descEN: "Fiery and pungent — for the brave.",
    price: 3,
    unit: "portion",
  },

  // Drinks
  {
    id: "teh-tarik",
    category: "drinks",
    nameBM: "Teh Tarik",
    nameEN: "Teh Tarik",
    descBM: "Teh susu ditarik tinggi, berbuih lemak.",
    descEN: "Pulled milk tea, foamy and rich.",
    price: 4,
    unit: "portion",
    popular: true,
  },
  {
    id: "air-bandung",
    category: "drinks",
    nameBM: "Air Bandung",
    nameEN: "Air Bandung (Rose Milk)",
    descBM: "Sirap mawar dengan susu, manis berseri.",
    descEN: "Rose syrup with milk — sweet and floral.",
    price: 4,
    unit: "portion",
  },
  {
    id: "air-kelapa",
    category: "drinks",
    nameBM: "Air Kelapa Muda",
    nameEN: "Young Coconut Water",
    descBM: "Disajikan segar dalam kelapa.",
    descEN: "Served fresh in the husk.",
    price: 7,
    unit: "portion",
  },
  {
    id: "air-suam",
    category: "drinks",
    nameBM: "Air Suam",
    nameEN: "Warm Water",
    descBM: "Percuma, sebab kami sayang anda.",
    descEN: "Free, because we love you.",
    price: 0,
    unit: "portion",
  },

  // Desserts
  {
    id: "cendol",
    category: "dessert",
    nameBM: "Cendol Gula Melaka",
    nameEN: "Cendol with Palm Sugar",
    descBM: "Sejuk, manis, santan pekat.",
    descEN: "Iced, sweet, with rich coconut cream.",
    price: 6,
    unit: "portion",
  },
  {
    id: "pulut-mangga",
    category: "dessert",
    nameBM: "Pulut Mangga",
    nameEN: "Mango Sticky Rice",
    descBM: "Pulut santan dengan mangga harum manis.",
    descEN: "Coconut sticky rice with fragrant mango.",
    price: 9,
    unit: "portion",
  },
];

export const CATEGORY_ORDER: MenuCategory[] = ["satay", "rice", "sides", "drinks", "dessert"];

import { createContext, useContext } from "react";

export type Lang = "bm" | "en";

export const translations = {
  nav: {
    home: { bm: "Utama", en: "Home" },
    menu: { bm: "Menu", en: "Menu" },
    reservation: { bm: "Tempahan", en: "Reservation" },
    catering: { bm: "Katering", en: "Catering" },
    gallery: { bm: "Galeri", en: "Gallery" },
    about: { bm: "Tentang Kami", en: "About" },
    contact: { bm: "Hubungi", en: "Contact" },
    orderNow: { bm: "Order Sekarang", en: "Order Now" },
  },
  common: {
    languageLabel: { bm: "Bahasa", en: "Language" },
    bmShort: { bm: "BM", en: "BM" },
    enShort: { bm: "EN", en: "EN" },
    whatsapp: { bm: "WhatsApp", en: "WhatsApp" },
    callUs: { bm: "Telefon Kami", en: "Call Us" },
    viewMenu: { bm: "Lihat Menu", en: "View Menu" },
    learnMore: { bm: "Ketahui Lagi", en: "Learn More" },
  },
  home: {
    eyebrow: { bm: "Sate Bakar Tradisional", en: "Authentic Charcoal-Grilled Satay" },
    title: {
      bm: "Sate Famili. Rasa yang menyatukan.",
      en: "Family satay. Flavours that bring everyone together.",
    },
    subtitle: {
      bm: "Resipi turun-temurun, dibakar di atas bara arang, disajikan dengan kuah kacang istimewa keluarga kami sejak 1985.",
      en: "Heritage recipes, charcoal-grilled to perfection and served with our family's signature peanut sauce since 1985.",
    },
    ctaOrder: { bm: "Order via WhatsApp", en: "Order via WhatsApp" },
    ctaReserve: { bm: "Tempah Meja", en: "Reserve a Table" },
    statsYears: { bm: "Tahun Pengalaman", en: "Years of Heritage" },
    statsSticks: { bm: "Cucuk Setiap Malam", en: "Skewers Each Night" },
    statsHappy: { bm: "Pelanggan Setia", en: "Happy Regulars" },
    sectionWhyTitle: { bm: "Kenapa Pilih Kami", en: "Why Choose Us" },
    sectionWhySub: {
      bm: "Tiga perkara yang kami janji setiap hidangan.",
      en: "Three things we promise in every plate.",
    },
    why1Title: { bm: "Bara Arang Sebenar", en: "Real Charcoal Grill" },
    why1Body: {
      bm: "Tiada gas, tiada elektrik. Hanya bara arang kelapa untuk aroma asli.",
      en: "No gas, no electric. Only coconut charcoal for that authentic aroma.",
    },
    why2Title: { bm: "Kuah Famili Rahsia", en: "Secret Family Sauce" },
    why2Body: {
      bm: "Kuah kacang dimasak 6 jam mengikut resipi nenek kami.",
      en: "Peanut sauce simmered for 6 hours from our grandmother's recipe.",
    },
    why3Title: { bm: "Bahan Segar Harian", en: "Fresh Daily Ingredients" },
    why3Body: {
      bm: "Daging diperam dengan rempah segar dan dipotong setiap pagi.",
      en: "Meats marinated with fresh spices and cut every morning.",
    },
    teaserMenuTitle: { bm: "Hidangan Pilihan", en: "Signature Dishes" },
    teaserMenuSub: {
      bm: "Sebahagian kecil daripada menu lengkap kami.",
      en: "A small taste of our full menu.",
    },
    seeFullMenu: { bm: "Lihat Menu Penuh", en: "See Full Menu" },
    finalCtaTitle: {
      bm: "Lapar? Jom order sekarang.",
      en: "Hungry? Let's get you fed.",
    },
    finalCtaSub: {
      bm: "Hantar pesanan melalui WhatsApp atau tempah meja malam ini.",
      en: "Send your order via WhatsApp or book a table for tonight.",
    },
    branchesTitle: { bm: "Cawangan Kami", en: "Our Locations" },
    branchesSub: {
      bm: "Kunjungi kami di mana-mana cawangan.",
      en: "Visit us at any of our branches.",
    },
  },
  menu: {
    title: { bm: "Menu Kami", en: "Our Menu" },
    subtitle: {
      bm: "Semua harga dalam Ringgit Malaysia. Minimum 10 cucuk untuk pesanan sate.",
      en: "All prices in Malaysian Ringgit. Minimum 10 sticks per satay order.",
    },
    addToOrder: { bm: "Tambah", en: "Add" },
    sticks: { bm: "cucuk", en: "stick" },
    perPortion: { bm: "sebiji", en: "each" },
    yourOrder: { bm: "Pesanan Anda", en: "Your Order" },
    empty: {
      bm: "Belum ada item. Tekan ‘Tambah’ untuk mula.",
      en: "Nothing yet. Tap ‘Add’ to start.",
    },
    total: { bm: "Jumlah", en: "Total" },
    sendOrder: { bm: "Hantar Pesanan via WhatsApp", en: "Send Order via WhatsApp" },
    clear: { bm: "Kosongkan", en: "Clear" },
    yourName: { bm: "Nama anda", en: "Your name" },
    yourPhone: { bm: "No. telefon", en: "Phone number" },
    namePlaceholder: { bm: "Cth: Aisha", en: "e.g. Aisha" },
    phonePlaceholder: { bm: "Cth: 0123456789", en: "e.g. 0123456789" },
  },
  categories: {
    satay: { bm: "Sate", en: "Satay" },
    sides: { bm: "Lauk Sampingan", en: "Sides" },
    rice: { bm: "Nasi & Pelengkap", en: "Rice & Accompaniments" },
    drinks: { bm: "Minuman", en: "Beverages" },
    dessert: { bm: "Pencuci Mulut", en: "Desserts" },
  },
  reservation: {
    title: { bm: "Tempah Meja Anda", en: "Reserve Your Table" },
    subtitle: {
      bm: "Isi borang ini, tempahan akan dihantar ke WhatsApp kami untuk pengesahan.",
      en: "Fill in the form and we'll receive it on WhatsApp to confirm with you.",
    },
    name: { bm: "Nama Penuh", en: "Full Name" },
    phone: { bm: "No. Telefon", en: "Phone Number" },
    date: { bm: "Tarikh", en: "Date" },
    time: { bm: "Masa", en: "Time" },
    pax: { bm: "Bilangan Orang", en: "Number of Guests" },
    note: { bm: "Permintaan Khas (pilihan)", en: "Special Request (optional)" },
    notePlaceholder: {
      bm: "Cth: meja tepi tingkap, hari jadi…",
      en: "e.g. window seat, birthday celebration…",
    },
    submit: { bm: "Hantar Tempahan via WhatsApp", en: "Send Reservation via WhatsApp" },
    pax1: { bm: "1 orang", en: "1 guest" },
    paxN: { bm: "{n} orang", en: "{n} guests" },
  },
  catering: {
    title: { bm: "Katering & Korporat", en: "Catering & Corporate" },
    subtitle: {
      bm: "Dari majlis kecil keluarga hinggalah ke acara korporat 500 orang.",
      en: "From small family gatherings to corporate events of 500+.",
    },
    inquire: { bm: "Tanya via WhatsApp", en: "Inquire via WhatsApp" },
    includes: { bm: "Termasuk", en: "Includes" },
    minOrder: { bm: "Minimum pesanan", en: "Minimum order" },
    pricePerPax: { bm: "RM /orang", en: "RM /pax" },
    customQuoteTitle: {
      bm: "Mahu pakej tersuai?",
      en: "Need a custom package?",
    },
    customQuoteSub: {
      bm: "Beritahu kami bilangan tetamu, lokasi dan tarikh acara.",
      en: "Tell us your guest count, location and event date.",
    },
  },
  gallery: {
    title: { bm: "Galeri", en: "Gallery" },
    subtitle: {
      bm: "Sedikit cebisan rasa & suasana di Restoran Sate Famili.",
      en: "Little glimpses of the flavour and atmosphere at Restoran Sate Famili.",
    },
  },
  about: {
    title: { bm: "Cerita Kami", en: "Our Story" },
    p1: {
      bm: "Restoran Sate Famili bermula sebagai gerai kecil di tepi jalan di Kajang pada tahun 1985, dimulakan oleh Pak Long Razak dengan satu impian mudah: membakar sate yang membuatkan orang asing rasa seperti keluarga.",
      en: "Restoran Sate Famili began as a roadside stall in Kajang in 1985, started by Pak Long Razak with one simple dream: to grill satay that makes strangers feel like family.",
    },
    p2: {
      bm: "Empat dekad kemudian, kami masih menggunakan bara arang kelapa, kuah kacang dimasak perlahan, dan resipi perapan yang tidak pernah berubah. Yang berubah hanyalah saiz keluarga kami — sekarang termasuk anda.",
      en: "Four decades on, we still use coconut charcoal, slow-simmered peanut sauce, and a marinade recipe that has never changed. The only thing that has grown is our family — which now includes you.",
    },
    valuesTitle: { bm: "Nilai Kami", en: "Our Values" },
    v1Title: { bm: "Tradisi", en: "Tradition" },
    v1Body: {
      bm: "Setiap cucuk dibakar dengan cara yang sama sejak 1985.",
      en: "Every skewer grilled the same way since 1985.",
    },
    v2Title: { bm: "Keluarga", en: "Family" },
    v2Body: {
      bm: "Tiga generasi memasak bersama di dapur yang sama.",
      en: "Three generations cooking side by side in the same kitchen.",
    },
    v3Title: { bm: "Kualiti", en: "Quality" },
    v3Body: {
      bm: "Bahan segar, halal, dan tiada jalan pintas.",
      en: "Fresh, halal ingredients and never any shortcuts.",
    },
  },
  contact: {
    title: { bm: "Hubungi Kami", en: "Get in Touch" },
    subtitle: {
      bm: "Kami sentiasa sedia melayan pertanyaan anda.",
      en: "We're always happy to hear from you.",
    },
    address: { bm: "Alamat", en: "Address" },
    phone: { bm: "Telefon", en: "Phone" },
    hours: { bm: "Waktu Operasi", en: "Operating Hours" },
    email: { bm: "E-mel", en: "Email" },
    chatNow: { bm: "Chat dengan kami", en: "Chat with us" },
  },
  footer: {
    tagline: {
      bm: "Sate bakar tradisional sejak 1985.",
      en: "Traditional charcoal-grilled satay since 1985.",
    },
    explore: { bm: "Layari", en: "Explore" },
    visit: { bm: "Lawati Kami", en: "Visit Us" },
    branches: { bm: "Cawangan", en: "Branches" },
    follow: { bm: "Ikuti Kami", en: "Follow" },
    rights: { bm: "Hak cipta terpelihara.", en: "All rights reserved." },
  },
  branch: {
    selectBranch: { bm: "Pilih Cawangan", en: "Select Branch" },
    hq: { bm: "Cawangan Utama", en: "Main Branch" },
    ourBranches: { bm: "Cawangan Kami", en: "Our Branches" },
    closed: { bm: "Tutup", en: "Closed" },
    chatBranch: { bm: "Chat cawangan ini", en: "Chat this branch" },
    operatingHours: { bm: "Waktu Operasi", en: "Operating Hours" },
    viewOnMap: { bm: "Lihat di Peta", en: "View on Map" },
    selectFirst: {
      bm: "Sila pilih cawangan terlebih dahulu",
      en: "Please select a branch first",
    },
    branchLabel: { bm: "Cawangan", en: "Branch" },
  },
} as const;

type TranslationLeaf = { bm: string; en: string };
// Helper type-safe lookup. We don't strictly type the path because translations is deeply nested;
// callers use `t(lang, "section.key")`.
function get(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function t(lang: Lang, path: string, vars?: Record<string, string | number>): string {
  const node = get(translations as unknown as Record<string, unknown>, path) as
    | TranslationLeaf
    | undefined;
  let value = node?.[lang] ?? node?.bm ?? path;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replace(`{${k}}`, String(v));
    }
  }
  return value;
}

export const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({
  lang: "bm",
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

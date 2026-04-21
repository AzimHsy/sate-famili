export interface BranchHours {
  dayBM: string;
  dayEN: string;
  time: string;
}

export interface Branch {
  id: number;
  name: string;
  shortName: string;
  shortNameEN: string;
  isHQ: boolean;
  address: string;
  whatsappNumber: string; // digits only, with country code
  whatsappDisplay: string;
  phoneTel: string;
  hours: BranchHours[];
  googleRating: number | null;
  mapsEmbedSrc: string;
  mapsLink: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 1,
    name: "Sate Famili - Meru Klang (Cawangan Utama)",
    shortName: "Meru Klang",
    shortNameEN: "Meru Klang (HQ)",
    isHQ: true,
    address:
      "Jalan Meranti Putih 1/KU10, 41050 Klang, Selangor, Malaysia",
    whatsappNumber: "601140009966",
    whatsappDisplay: "+60 11-4000 9966",
    phoneTel: "+601140009966",
    hours: [
      { dayBM: "Isnin – Khamis", dayEN: "Mon – Thu", time: "10:00 AM – 10:00 PM" },
      {
        dayBM: "Jumaat",
        dayEN: "Friday",
        time: "10:00 AM – 12:30 PM, 2:30 PM – 10:00 PM",
      },
      { dayBM: "Sabtu", dayEN: "Saturday", time: "10:00 AM – 10:00 PM" },
      { dayBM: "Ahad", dayEN: "Sunday", time: "Tutup / Closed" },
    ],
    googleRating: 4.3,
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Jalan+Meranti+Putih+1/KU10,+41050+Klang,+Selangor&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Jalan+Meranti+Putih+1/KU10,+41050+Klang,+Selangor",
  },
  {
    id: 2,
    name: "Sate Famili - Pekan Meru",
    shortName: "Pekan Meru",
    shortNameEN: "Pekan Meru",
    isHQ: false,
    address:
      "Jalan Meru, Pekan Meru, 41050 Klang, Selangor, Malaysia",
    whatsappNumber: "60196644699",
    whatsappDisplay: "+60 19-664 4699",
    phoneTel: "+60196644699",
    hours: [
      {
        dayBM: "Isnin – Ahad",
        dayEN: "Mon – Sun",
        time: "1:00 PM – 10:00 PM",
      },
    ],
    googleRating: null,
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Jalan+Meru,+Pekan+Meru,+41050+Klang,+Selangor&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Jalan+Meru,+Pekan+Meru,+41050+Klang,+Selangor",
  },
  {
    id: 3,
    name: "Sate Famili - Mutiara Damansara",
    shortName: "Mutiara Damansara",
    shortNameEN: "Mutiara Damansara",
    isHQ: false,
    address:
      "26, Jalan PJU 7/16B, Mutiara Damansara, 47800 Petaling Jaya, Selangor, Malaysia",
    whatsappNumber: "601111159955",
    whatsappDisplay: "+60 11-1115 9955",
    phoneTel: "+601111159955",
    hours: [
      { dayBM: "Isnin – Khamis", dayEN: "Mon – Thu", time: "10:00 AM – 10:00 PM" },
      {
        dayBM: "Jumaat",
        dayEN: "Friday",
        time: "10:00 AM – 12:30 PM, 2:30 PM – 10:00 PM",
      },
      { dayBM: "Sabtu", dayEN: "Saturday", time: "10:00 AM – 10:00 PM" },
      { dayBM: "Ahad", dayEN: "Sunday", time: "Tutup / Closed" },
    ],
    googleRating: 4.2,
    mapsEmbedSrc:
      "https://www.google.com/maps?q=26,+Jalan+PJU+7/16B,+Mutiara+Damansara,+47800+Petaling+Jaya,+Selangor&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=26,+Jalan+PJU+7/16B,+Mutiara+Damansara,+47800+Petaling+Jaya,+Selangor",
  },
];

export function getBranch(id: number): Branch | undefined {
  return BRANCHES.find((b) => b.id === id);
}

export function waLinkForBranch(branchId: number, message: string): string {
  const branch = getBranch(branchId);
  if (!branch) return "#";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${branch.whatsappNumber}?text=${encoded}`;
}

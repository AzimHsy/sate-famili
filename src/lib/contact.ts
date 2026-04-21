// Replace these with the real values when available.
export const CONTACT = {
  name: "Restoran Sate Famili",
  // wa.me requires digits only with country code, no '+' or spaces.
  whatsappNumber: "60123456789",
  whatsappDisplay: "+60 12-345 6789",
  phoneTel: "+60123456789",
  email: "hello@satefamili.my",
  address: "Lot 12, Jalan Sate, 43000 Kajang, Selangor, Malaysia",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Kajang%20Satay%2C%20Selangor%2C%20Malaysia&output=embed",
  hours: [
    { dayBM: "Isnin – Khamis", dayEN: "Mon – Thu", time: "5:00 PM – 11:00 PM" },
    { dayBM: "Jumaat – Ahad", dayEN: "Fri – Sun", time: "5:00 PM – 1:00 AM" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

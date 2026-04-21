import { createFileRoute } from "@tanstack/react-router";
import { useLang, t } from "@/lib/i18n";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/sate-1.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import hero from "@/assets/hero-satay.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Galeri foto sate, kuah kacang, suasana restoran dan acara katering Restoran Sate Famili.",
      },
      { property: "og:title", content: "Gallery — Restoran Sate Famili" },
      {
        property: "og:description",
        content: "Photos of our satay, peanut sauce, dining room and catering events.",
      },
      { property: "og:image", content: g1 },
      { property: "twitter:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

const PHOTOS = [
  {
    src: g1,
    altBM: "Sate ayam dengan kuah kacang",
    altEN: "Chicken satay glazed in peanut sauce",
    span: "row-span-2",
  },
  {
    src: hero,
    altBM: "Sate dibakar di atas bara arang",
    altEN: "Satay grilling over charcoal embers",
  },
  { src: g3, altBM: "Ketupat daun palas tradisional", altEN: "Traditional palm-leaf ketupat" },
  {
    src: g7,
    altBM: "Hidangan sate untuk katering",
    altEN: "Satay for catering",
  },
  {
    src: interior,
    altBM: "Suasana ruang makan restoran",
    altEN: "Restaurant dining room atmosphere",
    span: "col-span-2",
  },
  { src: g2, altBM: "Kuah kacang famili", altEN: "Family peanut sauce" },
  { src: g5, altBM: "Tukang bakar di pasar malam", altEN: "Satay master at the night grill" },
  { src: g4, altBM: "Air bandung dan teh tarik", altEN: "Air bandung and teh tarik" },
  {
    src: g6,
    altBM: "Pinggan besar sate untuk katering",
    altEN: "Large satay platter for catering",
    span: "col-span-2",
  },
];

function GalleryPage() {
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Gallery
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
          {t(lang, "gallery.title")}
        </h1>
        <p className="mt-3 text-muted-foreground">{t(lang, "gallery.subtitle")}</p>
      </header>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
        {PHOTOS.map((p, i) => (
          <figure
            key={i}
            className={`group relative overflow-hidden rounded-2xl bg-muted shadow-card ${p.span ?? ""}`}
          >
            <img
              src={p.src}
              alt={lang === "bm" ? p.altBM : p.altEN}
              loading={i < 2 ? "eager" : "lazy"}
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-4 text-xs font-medium text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {lang === "bm" ? p.altBM : p.altEN}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

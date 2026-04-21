import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, Award } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import interior from "@/assets/restaurant-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Cerita Restoran Sate Famili — empat dekad sate bakar tradisional, dimulakan di Kajang pada 1985 oleh Pak Long Razak.",
      },
      { property: "og:title", content: "Our Story — Restoran Sate Famili" },
      {
        property: "og:description",
        content:
          "Four decades of charcoal-grilled satay, started in Kajang in 1985 by Pak Long Razak.",
      },
      { property: "og:image", content: interior },
      { property: "twitter:image", content: interior },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();
  return (
    <div>
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Est. 1985
            </span>
            <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
              {t(lang, "about.title")}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              {t(lang, "about.p1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {t(lang, "about.p2")}
            </p>
          </div>
          <div className="relative">
            <img
              src={interior}
              alt="Suasana hangat di Restoran Sate Famili"
              width={1600}
              height={1024}
              loading="lazy"
              className="h-full w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-gold p-5 shadow-gold sm:block">
              <p className="font-display text-3xl font-bold text-primary">40+</p>
              <p className="text-xs uppercase tracking-wider text-primary/80">
                {lang === "bm" ? "Tahun" : "Years"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {t(lang, "about.valuesTitle")}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {lang === "bm" ? "Apa yang kami pegang." : "What we hold close."}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Award, t: "about.v1Title", b: "about.v1Body" },
            { icon: Users, t: "about.v2Title", b: "about.v2Body" },
            { icon: Heart, t: "about.v3Title", b: "about.v3Body" },
          ].map(({ icon: Icon, t: tk, b: bk }) => (
            <article
              key={tk}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {t(lang, tk)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(lang, bk)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

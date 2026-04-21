import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Flame, HeartHandshake, Leaf, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-satay.jpg";
import { useLang, t } from "@/lib/i18n";
import { CONTACT, waLink } from "@/lib/contact";
import { MENU } from "@/lib/menuData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restoran Sate Famili — Sate Bakar Tradisional sejak 1985" },
      {
        name: "description",
        content:
          "Sate ayam, daging dan kambing dibakar di atas bara arang. Kuah kacang famili rahsia. Order via WhatsApp atau tempah meja di Kajang.",
      },
      { property: "og:title", content: "Restoran Sate Famili — Authentic Charcoal Satay" },
      {
        property: "og:description",
        content:
          "Heritage charcoal-grilled satay since 1985. Order via WhatsApp or reserve a table.",
      },
      { property: "og:image", content: heroImage },
      { property: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { lang } = useLang();

  const orderHref = waLink(
    lang === "bm"
      ? `Salam! Saya nak order dari ${CONTACT.name}.`
      : `Hi! I'd like to place an order from ${CONTACT.name}.`,
  );

  const featured = MENU.filter((m) => m.popular).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full isolate overflow-hidden md:mt-[-10vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Sate ayam dan daging dibakar di atas bara arang dengan kuah kacang dan ketupat"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8 lg:pb-44 lg:pt-36">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur"
          >
            <Flame className="h-3.5 w-3.5" /> {t(lang, "home.eyebrow")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-3xl font-display text-5xl font-bold text-balance text-primary-foreground sm:text-6xl lg:text-7xl"
          >
            {t(lang, "home.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
          >
            {t(lang, "home.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={orderHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              {t(lang, "home.ctaOrder")}
            </a>
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              {t(lang, "home.ctaReserve")} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-primary-foreground/15 bg-primary/30 p-5 backdrop-blur"
          >
            {[
              { v: "40+", l: t(lang, "home.statsYears") },
              { v: "2,000", l: t(lang, "home.statsSticks") },
              { v: "50k+", l: t(lang, "home.statsHappy") },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <dt className="font-display text-3xl font-bold text-secondary sm:text-4xl">
                  {s.v}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-primary-foreground/75 sm:text-xs">
                  {s.l}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-warm py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              {t(lang, "home.sectionWhyTitle")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t(lang, "home.sectionWhySub")}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Flame, t: "home.why1Title", b: "home.why1Body" },
              { icon: HeartHandshake, t: "home.why2Title", b: "home.why2Body" },
              { icon: Leaf, t: "home.why3Title", b: "home.why3Body" },
            ].map(({ icon: Icon, t: tk, b: bk }, i) => (
              <motion.article
                key={tk}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary shadow-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {t(lang, tk)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(lang, bk)}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {t(lang, "home.teaserMenuTitle")}
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
                {t(lang, "home.teaserMenuSub")}
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-secondary"
            >
              {t(lang, "home.seeFullMenu")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-secondary">
                    {t(lang, `categories.${item.category}`)}
                  </span>
                  <span className="font-display text-lg font-bold text-foreground">
                    RM{item.price.toFixed(2)}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {lang === "bm" ? item.nameBM : item.nameEN}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {lang === "bm" ? item.descBM : item.descEN}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-elegant sm:p-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                {t(lang, "home.finalCtaTitle")}
              </h2>
              <p className="mt-3 text-primary-foreground/80">{t(lang, "home.finalCtaSub")}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                {t(lang, "home.ctaOrder")}
              </a>
              <Link
                to="/reservation"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {t(lang, "home.ctaReserve")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

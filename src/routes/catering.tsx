import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { CATERING } from "@/lib/cateringData";
import { CONTACT, waLinkForBranch } from "@/lib/contact";
import { BranchSelector } from "@/components/BranchSelector";
import cateringHero from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Katering & Korporat — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Pakej katering sate untuk majlis keluarga, korporat dan perkahwinan. Tukang bakar di tapak. Hubungi kami via WhatsApp.",
      },
      { property: "og:title", content: "Catering & Corporate — Restoran Sate Famili" },
      {
        property: "og:description",
        content:
          "Family, corporate and premium satay catering with on-site live grilling. Inquire via WhatsApp.",
      },
      { property: "og:image", content: cateringHero },
      { property: "twitter:image", content: cateringHero },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  const { lang } = useLang();
  const [branchId, setBranchId] = useState<number | null>(null);

  const inquireHref = (pkg: string) => {
    if (!branchId) return "#";
    return waLinkForBranch(
      branchId,
      lang === "bm"
        ? `Salam! Saya berminat dengan pakej katering "${pkg}" dari ${CONTACT.name}.`
        : `Hi! I'm interested in the "${pkg}" catering package from ${CONTACT.name}.`,
    );
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img
            src={cateringHero}
            alt="Pinggan besar sate dengan kuah kacang untuk acara katering"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Catering · Korporat · Wedding
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            {t(lang, "catering.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            {t(lang, "catering.subtitle")}
          </p>
        </div>
      </section>

      {/* Branch selector */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-card">
            <BranchSelector
              value={branchId}
              onChange={setBranchId}
              label={t(lang, "branch.selectBranch")}
            />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {CATERING.map((pkg) => {
            const name = lang === "bm" ? pkg.nameBM : pkg.nameEN;
            const includes = lang === "bm" ? pkg.includesBM : pkg.includesEN;
            const tagline = lang === "bm" ? pkg.taglineBM : pkg.taglineEN;
            return (
              <article
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl border p-7 shadow-card transition-transform hover:-translate-y-1 ${
                  pkg.popular
                    ? "border-secondary bg-card ring-2 ring-secondary/40"
                    : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-gold">
                    {lang === "bm" ? "Paling Popular" : "Most Popular"}
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold text-foreground">{name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold text-foreground">
                    RM{pkg.pricePerPax}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{lang === "bm" ? "orang" : "pax"}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {t(lang, "catering.minOrder")}: {pkg.minPax} {lang === "bm" ? "orang" : "pax"}
                </p>

                <div className="my-6 h-px w-full bg-border" />

                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {t(lang, "catering.includes")}
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span className="text-foreground/85">{inc}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={inquireHref(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!branchId}
                  onClick={(e) => !branchId && e.preventDefault()}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    !branchId
                      ? "cursor-not-allowed bg-muted text-muted-foreground"
                      : pkg.popular
                        ? "bg-gradient-gold text-primary shadow-gold"
                        : "bg-primary text-primary-foreground"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  {!branchId
                    ? t(lang, "branch.selectFirst")
                    : t(lang, "catering.inquire")}
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Custom quote */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-gradient-warm p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {t(lang, "catering.customQuoteTitle")}
            </h2>
            <p className="mt-2 text-muted-foreground">{t(lang, "catering.customQuoteSub")}</p>
          </div>
          <a
            href={
              branchId
                ? waLinkForBranch(
                    branchId,
                    lang === "bm"
                      ? `Salam! Saya nak quote katering tersuai dari ${CONTACT.name}.`
                      : `Hi! I'd like a custom catering quote from ${CONTACT.name}.`,
                  )
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!branchId}
            onClick={(e) => !branchId && e.preventDefault()}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
              !branchId
                ? "cursor-not-allowed bg-muted text-muted-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            {!branchId
              ? t(lang, "branch.selectFirst")
              : t(lang, "catering.inquire")}
          </a>
        </div>
      </section>
    </div>
  );
}

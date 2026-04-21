import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, MessageCircle, ExternalLink, Star } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { CONTACT, BRANCHES, type Branch } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Hubungi Kami — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Lokasi, telefon, WhatsApp dan waktu operasi Restoran Sate Famili di Klang dan Petaling Jaya.",
      },
      { property: "og:title", content: "Contact — Restoran Sate Famili" },
      {
        property: "og:description",
        content:
          "Find us at Meru Klang, Pekan Meru, or Mutiara Damansara. Chat on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Contact
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
          {t(lang, "contact.title")}
        </h1>
        <p className="mt-3 text-muted-foreground">{t(lang, "contact.subtitle")}</p>
      </header>

      {/* Shared contact */}
      <div className="mt-8 flex flex-wrap gap-4">
        <InfoPill
          icon={Mail}
          label={t(lang, "contact.email")}
          value={CONTACT.email}
          href={`mailto:${CONTACT.email}`}
        />
      </div>

      {/* Branch cards */}
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {BRANCHES.map((branch) => (
          <BranchCard key={branch.id} branch={branch} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function BranchCard({ branch, lang }: { branch: Branch; lang: "bm" | "en" }) {
  const chatMsg =
    lang === "bm"
      ? `Salam! Saya ada pertanyaan tentang ${CONTACT.name} (${branch.shortName}).`
      : `Hi! I have a question about ${CONTACT.name} (${branch.shortNameEN}).`;
  const chatHref = `https://wa.me/${branch.whatsappNumber}?text=${encodeURIComponent(chatMsg)}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      {/* Map */}
      <div className="h-48 w-full">
        <iframe
          title={`Google map for ${branch.shortName}`}
          src={branch.mapsEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-display text-xl font-bold text-foreground">
            {lang === "bm" ? branch.shortName : branch.shortNameEN}
          </h2>
          <div className="flex shrink-0 items-center gap-1">
            {branch.isHQ && (
              <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-secondary">
                HQ
              </span>
            )}
            {branch.googleRating && (
              <span className="flex items-center gap-0.5 rounded-full bg-secondary/15 px-2 py-0.5 text-xs font-semibold text-secondary">
                <Star className="h-3 w-3 fill-secondary" />
                {branch.googleRating}
              </span>
            )}
          </div>
        </div>

        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="text-foreground/85">{branch.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Phone className="h-4 w-4" />
            </span>
            <a href={`tel:${branch.phoneTel}`} className="text-foreground/85 hover:text-secondary">
              {branch.whatsappDisplay}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Clock className="h-4 w-4" />
            </span>
            <div className="space-y-0.5">
              {branch.hours.map((h) => (
                <div key={h.dayBM + h.time}>
                  <span className="font-medium text-foreground">
                    {lang === "bm" ? h.dayBM : h.dayEN}:
                  </span>{" "}
                  <span className="text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
          </li>
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <a
            href={chatHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            {t(lang, "branch.chatBranch")}
          </a>
          <a
            href={branch.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t(lang, "branch.viewOnMap")}
          </a>
        </div>
      </div>
    </article>
  );
}

function InfoPill({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-card transition-colors hover:border-secondary/40"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-gold text-primary shadow-gold">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </span>
    </a>
  );
}

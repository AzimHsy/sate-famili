import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { CONTACT, waLink } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Hubungi Kami — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Lokasi, telefon, WhatsApp dan waktu operasi Restoran Sate Famili di Kajang, Selangor.",
      },
      { property: "og:title", content: "Contact — Restoran Sate Famili" },
      {
        property: "og:description",
        content: "Find us, call us, or chat with us on WhatsApp. Located in Kajang, Selangor.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLang();
  const chatHref = waLink(
    lang === "bm"
      ? `Salam! Saya ada pertanyaan tentang ${CONTACT.name}.`
      : `Hi! I have a question about ${CONTACT.name}.`,
  );

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

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-4">
          <InfoCard
            icon={MapPin}
            label={t(lang, "contact.address")}
            value={CONTACT.address}
          />
          <InfoCard
            icon={Phone}
            label={t(lang, "contact.phone")}
            value={CONTACT.whatsappDisplay}
            href={`tel:${CONTACT.phoneTel}`}
          />
          <InfoCard
            icon={Mail}
            label={t(lang, "contact.email")}
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-primary shadow-gold">
                <Clock className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t(lang, "contact.hours")}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-foreground">
                  {CONTACT.hours.map((h) => (
                    <li key={h.time} className="flex justify-between gap-4">
                      <span className="font-medium">
                        {lang === "bm" ? h.dayBM : h.dayEN}
                      </span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <a
            href={chatHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            {t(lang, "contact.chatNow")}
          </a>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <iframe
            title="Google map showing Restoran Sate Famili location"
            src={CONTACT.mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[420px] w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-secondary/40">
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

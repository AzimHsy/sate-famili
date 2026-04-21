import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary font-display text-xl font-bold">
              S
            </span>
            <span className="font-display text-2xl font-bold">{CONTACT.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {t(lang, "footer.tagline")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={CONTACT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-secondary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-secondary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
            {t(lang, "footer.explore")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/menu", k: "nav.menu" },
              { to: "/reservation", k: "nav.reservation" },
              { to: "/catering", k: "nav.catering" },
              { to: "/gallery", k: "nav.gallery" },
              { to: "/about", k: "nav.about" },
              { to: "/contact", k: "nav.contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/75 transition-colors hover:text-secondary"
                >
                  {t(lang, l.k)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
            {t(lang, "footer.visit")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-secondary">
                {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <div className="space-y-0.5">
                {CONTACT.hours.map((h) => (
                  <div key={h.time}>
                    <span className="font-medium text-primary-foreground">
                      {lang === "bm" ? h.dayBM : h.dayEN}:
                    </span>{" "}
                    {h.time}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {CONTACT.name}. {t(lang, "footer.rights")}
          </p>
          <p>Made with love in Malaysia 🇲🇾</p>
        </div>
      </div>
    </footer>
  );
}

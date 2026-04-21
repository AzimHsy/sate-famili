import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { CONTACT, BRANCHES } from "@/lib/contact";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
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

        {/* Explore */}
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

        {/* Branches */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-secondary">
            {t(lang, "footer.branches")}
          </h3>
          <ul className="mt-4 space-y-5">
            {BRANCHES.map((branch) => (
              <li key={branch.id}>
                <p className="text-sm font-semibold text-primary-foreground">
                  {lang === "bm" ? branch.shortName : branch.shortNameEN}
                  {branch.isHQ && (
                    <span className="ml-1 text-[9px] font-bold uppercase text-secondary">
                      HQ
                    </span>
                  )}
                </p>
                <div className="mt-1 flex items-start gap-1.5 text-xs text-primary-foreground/70">
                  <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-secondary" />
                  <span>{branch.address}</span>
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-primary-foreground/70">
                  <Phone className="h-3 w-3 shrink-0 text-secondary" />
                  <a
                    href={`tel:${branch.phoneTel}`}
                    className="hover:text-secondary"
                  >
                    {branch.whatsappDisplay}
                  </a>
                </div>
              </li>
            ))}
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

import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang, t } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { CONTACT, waLink } from "@/lib/contact";

const NAV_LINKS = [
  { to: "/", key: "home" as const },
  { to: "/menu", key: "menu" as const },
  { to: "/reservation", key: "reservation" as const },
  { to: "/catering", key: "catering" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/about", key: "about" as const },
  { to: "/contact", key: "contact" as const },
];

export function Navbar() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const orderHref = waLink(
    lang === "bm"
      ? `Salam! Saya nak order dari ${CONTACT.name}.`
      : `Hi! I'd like to place an order from ${CONTACT.name}.`,
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-bold">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-foreground">
              Sate Famili
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Since 1985
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active =
              l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t(lang, `nav.${l.key}`)}
                {active && (
                  <span className="mx-auto mt-1 block h-0.5 w-4 rounded-full bg-secondary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            {t(lang, "nav.orderNow")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((l) => {
              const active =
                l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                    active
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {t(lang, `nav.${l.key}`)}
                </Link>
              );
            })}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
              <LanguageToggle />
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary shadow-gold"
              >
                <MessageCircle className="h-4 w-4" />
                {t(lang, "nav.orderNow")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

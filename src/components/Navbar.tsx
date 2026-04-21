import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang, t } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { CONTACT, BRANCHES } from "@/lib/contact";

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

  // Branch picker popover for desktop
  const [popOpen, setPopOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  // Branch picker for mobile
  const [mobilePopOpen, setMobilePopOpen] = useState(false);

  useEffect(() => {
    if (!popOpen) return;
    function handleClick(e: MouseEvent) {
      if (popRef.current && !popRef.current.contains(e.target as Node)) {
        setPopOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPopOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [popOpen]);

  const buildHref = (branch: (typeof BRANCHES)[number]) => {
    const msg =
      lang === "bm"
        ? `Salam! Saya nak order dari ${CONTACT.name} (${branch.shortName}).`
        : `Hi! I'd like to place an order from ${CONTACT.name} (${branch.shortNameEN}).`;
    return `https://wa.me/${branch.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

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
          <ThemeToggle />
          <LanguageToggle />
          {/* Desktop order button with branch popover */}
          <div ref={popRef} className="relative">
            <button
              onClick={() => setPopOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              {t(lang, "nav.orderNow")}
            </button>
            {popOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-64 animate-in fade-in slide-in-from-top-2 rounded-2xl border border-border bg-card p-3 shadow-elegant">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                  {t(lang, "branch.selectBranch")}
                </p>
                <ul className="space-y-1">
                  {BRANCHES.map((branch) => (
                    <li key={branch.id}>
                      <a
                        href={buildHref(branch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setPopOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary/10"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[oklch(0.7_0.17_145)] text-white">
                          <MessageCircle className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-foreground">
                            {lang === "bm" ? branch.shortName : branch.shortNameEN}
                            {branch.isHQ && (
                              <span className="ml-1 text-[9px] font-bold uppercase text-secondary">
                                HQ
                              </span>
                            )}
                          </span>
                          <span className="block text-[11px] text-muted-foreground">
                            {branch.whatsappDisplay}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
            <div className="mt-3 space-y-4 border-t border-border/60 pt-4">
              <div className="flex items-center justify-between gap-4">
                <ThemeToggle className="flex-1" />
                <LanguageToggle className="flex-1" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setMobilePopOpen((v) => !v)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary shadow-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t(lang, "nav.orderNow")}
                </button>
              </div>
              {/* Mobile branch list */}
              {mobilePopOpen && (
                <ul className="mt-3 space-y-1.5">
                  {BRANCHES.map((branch) => (
                    <li key={branch.id}>
                      <a
                        href={buildHref(branch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setMobilePopOpen(false);
                          setOpen(false);
                        }}
                        className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-secondary/40"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[oklch(0.7_0.17_145)] text-white">
                          <MessageCircle className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-foreground">
                            {lang === "bm" ? branch.shortName : branch.shortNameEN}
                            {branch.isHQ && (
                              <span className="ml-1 text-[9px] font-bold uppercase text-secondary">
                                HQ
                              </span>
                            )}
                          </span>
                          <span className="block text-[11px] text-muted-foreground">
                            {branch.whatsappDisplay}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

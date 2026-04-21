import { useState, useRef, useEffect } from "react";
import { useLang, t } from "@/lib/i18n";
import { BRANCHES } from "@/lib/branchData";
import { CONTACT } from "@/lib/contact";

// Inline brand-correct WhatsApp glyph (no emoji shadows, scales crisply on mobile).
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.84 9.84 0 0 0-2.91-7.02ZM12.05 20.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.06s.88 2.39 1 2.55c.12.16 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      {/* Popover */}
      {open && (
        <div className="absolute bottom-full right-0 mb-3 w-64 animate-in fade-in slide-in-from-bottom-2 rounded-2xl border border-border bg-card p-3 shadow-elegant">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
            {t(lang, "branch.selectBranch")}
          </p>
          <ul className="space-y-1.5">
            {BRANCHES.map((branch) => {
              const msg =
                lang === "bm"
                  ? `Salam! Saya ada pertanyaan tentang ${CONTACT.name} (${branch.shortName}).`
                  : `Hi! I have a question about ${CONTACT.name} (${branch.shortNameEN}).`;
              const href = `https://wa.me/${branch.whatsappNumber}?text=${encodeURIComponent(msg)}`;
              return (
                <li key={branch.id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary/10"
                    onClick={() => setOpen(false)}
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[oklch(0.7_0.17_145)] text-white">
                      <WhatsAppIcon className="h-4 w-4" />
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
              );
            })}
          </ul>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={lang === "bm" ? "Chat di WhatsApp" : "Chat on WhatsApp"}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.7_0.17_145)] text-white shadow-elegant transition-transform hover:scale-110 sm:h-16 sm:w-16"
      >
        {!open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.17_145)] opacity-30" />
        )}
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </button>
    </div>
  );
}

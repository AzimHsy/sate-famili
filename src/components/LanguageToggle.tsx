import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card p-1 text-xs font-semibold",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLang("bm")}
        aria-pressed={lang === "bm"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "bm" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        BM
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
    </div>
  );
}

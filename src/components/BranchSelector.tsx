import { BRANCHES, type Branch } from "@/lib/branchData";
import { useLang, t } from "@/lib/i18n";
import { MapPin } from "lucide-react";

interface BranchSelectorProps {
  value: number | null;
  onChange: (branchId: number) => void;
  label?: string;
  /** Compact mode renders smaller pills instead of full cards */
  compact?: boolean;
}

export function BranchSelector({
  value,
  onChange,
  label,
  compact = false,
}: BranchSelectorProps) {
  const { lang } = useLang();

  return (
    <div className="w-full">
      {label !== undefined ? (
        <p className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-secondary" />
          {label}
          <span className="text-destructive">*</span>
        </p>
      ) : (
        <p className="mb-2.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-secondary" />
          {t(lang, "branch.selectBranch")}
          <span className="text-destructive">*</span>
        </p>
      )}
      <div
        className={`grid gap-2 ${compact ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-3"}`}
      >
        {BRANCHES.map((branch) => (
          <BranchOption
            key={branch.id}
            branch={branch}
            selected={value === branch.id}
            onSelect={() => onChange(branch.id)}
            compact={compact}
            lang={lang}
          />
        ))}
      </div>
      {value === null && (
        <p className="mt-1.5 text-xs text-muted-foreground/70">
          {t(lang, "branch.selectFirst")}
        </p>
      )}
    </div>
  );
}

function BranchOption({
  branch,
  selected,
  onSelect,
  compact,
  lang,
}: {
  branch: Branch;
  selected: boolean;
  onSelect: () => void;
  compact: boolean;
  lang: "bm" | "en";
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex w-full items-start gap-3 rounded-xl border px-4 text-left transition-all ${
        compact ? "py-2.5" : "py-3.5"
      } ${
        selected
          ? "border-secondary bg-secondary/10 shadow-[0_0_16px_-4px] shadow-secondary/25"
          : "border-border bg-card hover:border-secondary/40"
      }`}
    >
      {/* Radio dot */}
      <span
        className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 transition-colors ${
          selected ? "border-secondary" : "border-muted-foreground/40"
        }`}
      >
        {selected && (
          <span className="h-2 w-2 rounded-full bg-secondary" />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">
          {lang === "bm" ? branch.shortName : branch.shortNameEN}
          {branch.isHQ && (
            <span className="ml-1.5 inline-block rounded-full bg-secondary/20 px-1.5 py-0.5 align-middle text-[9px] font-bold uppercase tracking-wider text-secondary">
              HQ
            </span>
          )}
        </span>
        {!compact && (
          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground line-clamp-2">
            {branch.address}
          </span>
        )}
      </div>

      {branch.googleRating && !compact && (
        <span className="shrink-0 text-xs font-medium text-secondary">
          ★ {branch.googleRating}
        </span>
      )}
    </button>
  );
}

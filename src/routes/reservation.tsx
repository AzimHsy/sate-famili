import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, CalendarDays, Clock, Users, User, Phone } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { CONTACT, waLinkForBranch, getBranch } from "@/lib/contact";
import { BranchSelector } from "@/components/BranchSelector";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Tempah Meja — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Tempah meja anda di Restoran Sate Famili Klang atau Petaling Jaya. Tempahan dihantar terus ke WhatsApp untuk pengesahan pantas.",
      },
      { property: "og:title", content: "Reserve a Table — Restoran Sate Famili" },
      {
        property: "og:description",
        content: "Book your table — request goes straight to WhatsApp for fast confirmation.",
      },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  const { lang } = useLang();
  const today = new Date().toISOString().split("T")[0];

  const [branchId, setBranchId] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: today,
    time: "19:00",
    pax: 2,
    note: "",
  });

  const buildMessage = () => {
    const branch = branchId ? getBranch(branchId) : null;
    const branchName = branch
      ? lang === "bm"
        ? branch.shortName
        : branch.shortNameEN
      : "";
    const greeting =
      lang === "bm" ? "Salam! Saya nak buat tempahan:" : "Hi! I'd like to make a reservation:";
    const lines = [
      `${lang === "bm" ? "Cawangan" : "Branch"}: ${branchName}`,
      `${lang === "bm" ? "Nama" : "Name"}: ${form.name}`,
      `${lang === "bm" ? "Tarikh" : "Date"}: ${form.date}`,
      `${lang === "bm" ? "Masa" : "Time"}: ${form.time}`,
      `${lang === "bm" ? "Bil. Orang" : "Guests"}: ${form.pax}`,
      `${lang === "bm" ? "No. Tel" : "Phone"}: ${form.phone}`,
    ];
    if (form.note.trim()) {
      lines.push(`${lang === "bm" ? "Nota" : "Note"}: ${form.note.trim()}`);
    }
    return `${greeting}\n${lines.join("\n")}`;
  };

  const valid = form.name.trim() && form.phone.trim() && form.date && form.time && branchId;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || !branchId) return;
    window.open(waLinkForBranch(branchId, buildMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          {CONTACT.name}
        </span>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
          {t(lang, "reservation.title")}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {t(lang, "reservation.subtitle")}
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-12 grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10"
      >
        {/* Branch selector — first field */}
        <BranchSelector
          value={branchId}
          onChange={setBranchId}
          label={t(lang, "branch.selectBranch")}
        />

        <Field
          icon={User}
          label={t(lang, "reservation.name")}
          required
        >
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
          />
        </Field>

        <Field icon={Phone} label={t(lang, "reservation.phone")} required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="0123456789"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-3">
          <Field icon={CalendarDays} label={t(lang, "reservation.date")} required>
            <input
              type="date"
              required
              min={today}
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
            />
          </Field>
          <Field icon={Clock} label={t(lang, "reservation.time")} required>
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
            />
          </Field>
          <Field icon={Users} label={t(lang, "reservation.pax")} required>
            <select
              value={form.pax}
              onChange={(e) => setForm({ ...form, pax: Number(e.target.value) })}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n === 1
                    ? t(lang, "reservation.pax1")
                    : t(lang, "reservation.paxN", { n })}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label={t(lang, "reservation.note")}>
          <textarea
            rows={3}
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            placeholder={t(lang, "reservation.notePlaceholder")}
            className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
          />
        </Field>

        <button
          type="submit"
          disabled={!valid}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary shadow-gold transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <MessageCircle className="h-4 w-4" />
          {t(lang, "reservation.submit")}
        </button>
      </form>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  required,
  children,
}: {
  icon?: React.ElementType;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {Icon && <Icon className="h-3.5 w-3.5 text-secondary" />}
        {label}
        {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}

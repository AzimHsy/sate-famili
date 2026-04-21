import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import { MENU, CATEGORY_ORDER, type MenuItem } from "@/lib/menuData";
import { CONTACT, waLinkForBranch, getBranch } from "@/lib/contact";
import { BranchSelector } from "@/components/BranchSelector";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Restoran Sate Famili" },
      {
        name: "description",
        content:
          "Sate ayam, daging, kambing, nasi himpit, kuah kacang, teh tarik, air bandung. Bina pesanan anda dan hantar terus ke WhatsApp kami.",
      },
      { property: "og:title", content: "Menu — Restoran Sate Famili" },
      {
        property: "og:description",
        content:
          "Build your order from our full satay menu and send it to us on WhatsApp in one tap.",
      },
    ],
  }),
  component: MenuPage,
});

type CartLine = { item: MenuItem; qty: number };

function MenuPage() {
  const { lang } = useLang();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branchId, setBranchId] = useState<number | null>(null);

  const grouped = useMemo(() => {
    return CATEGORY_ORDER.map((cat) => ({
      cat,
      items: MENU.filter((m) => m.category === cat),
    }));
  }, []);

  const lines: CartLine[] = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const item = MENU.find((m) => m.id === id);
        return item && qty > 0 ? { item, qty } : null;
      })
      .filter((x): x is CartLine => x !== null);
  }, [cart]);

  const total = lines.reduce((sum, l) => sum + l.item.price * l.qty, 0);

  const add = (id: string) =>
    setCart((c) => ({
      ...c,
      [id]: (c[id] ?? 0) + (MENU.find((m) => m.id === id)?.unit === "stick" ? 5 : 1),
    }));
  const inc = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const dec = (id: string) =>
    setCart((c) => {
      const next = Math.max(0, (c[id] ?? 0) - 1);
      const copy = { ...c };
      if (next === 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  const clear = () => setCart({});

  const buildMessage = () => {
    const branch = branchId ? getBranch(branchId) : null;
    const branchName = branch
      ? lang === "bm"
        ? branch.shortName
        : branch.shortNameEN
      : "";
    const greeting =
      lang === "bm" ? "Salam! Saya nak order:" : "Hi! I'd like to order:";
    const branchLine = branchName
      ? `${lang === "bm" ? "Cawangan" : "Branch"}: ${branchName}\n`
      : "";
    const itemList = lines
      .map((l) => {
        const name = lang === "bm" ? l.item.nameBM : l.item.nameEN;
        const unit =
          l.item.unit === "stick"
            ? lang === "bm"
              ? "cucuk"
              : "sticks"
            : "x";
        return `• ${name} — ${l.qty} ${unit} (RM${(l.item.price * l.qty).toFixed(2)})`;
      })
      .join("\n");
    const totalLine = `\n${lang === "bm" ? "Jumlah" : "Total"}: RM${total.toFixed(2)}`;
    const nameLine = name ? `\n${lang === "bm" ? "Nama" : "Name"}: ${name}` : "";
    const phoneLine = phone ? `\n${lang === "bm" ? "No. Tel" : "Phone"}: ${phone}` : "";
    return `${greeting}\n${branchLine}${itemList}${totalLine}${nameLine}${phoneLine}`;
  };

  const sendDisabled = lines.length === 0 || !branchId;

  return (
    <div className="bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {CONTACT.name}
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
            {t(lang, "menu.title")}
          </h1>
          <p className="mt-3 text-muted-foreground">{t(lang, "menu.subtitle")}</p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Menu */}
          <div className="space-y-14">
            {grouped.map(({ cat, items }) => (
              <section key={cat}>
                <div className="flex items-end justify-between border-b border-border pb-3">
                  <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {t(lang, `categories.${cat}`)}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {items.length} {lang === "bm" ? "item" : "items"}
                  </span>
                </div>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {items.map((item) => {
                    const qty = cart[item.id] ?? 0;
                    return (
                      <li
                        key={item.id}
                        className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {lang === "bm" ? item.nameBM : item.nameEN}
                              {item.popular && (
                                <span className="ml-2 align-middle rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary">
                                  ★
                                </span>
                              )}
                            </h3>
                            <p className="mt-1 text-sm leading-snug text-muted-foreground">
                              {lang === "bm" ? item.descBM : item.descEN}
                            </p>
                          </div>
                          <div className="shrink-0 text-right">
                            <div className="font-display text-lg font-bold text-foreground">
                              RM{item.price.toFixed(2)}
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                              /
                              {item.unit === "stick"
                                ? t(lang, "menu.sticks")
                                : t(lang, "menu.perPortion")}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          {qty > 0 ? (
                            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background p-1">
                              <button
                                onClick={() => dec(item.id)}
                                aria-label="Decrease"
                                className="grid h-7 w-7 place-items-center rounded-full hover:bg-muted"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-8 text-center text-sm font-semibold">
                                {qty}
                              </span>
                              <button
                                onClick={() => inc(item.id)}
                                aria-label="Increase"
                                className="grid h-7 w-7 place-items-center rounded-full hover:bg-muted"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              {item.unit === "stick"
                                ? lang === "bm"
                                  ? "+5 cucuk"
                                  : "+5 sticks"
                                : ""}
                            </span>
                          )}
                          <button
                            onClick={() => add(item.id)}
                            className="inline-flex items-center gap-1 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            {t(lang, "menu.addToOrder")}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          {/* Cart */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {t(lang, "menu.yourOrder")}
                </h2>
                {lines.length > 0 && (
                  <button
                    onClick={clear}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> {t(lang, "menu.clear")}
                  </button>
                )}
              </div>

              {/* Branch selector in cart */}
              <div className="mt-4">
                <BranchSelector
                  value={branchId}
                  onChange={setBranchId}
                  compact
                />
              </div>

              {lines.length === 0 ? (
                <p className="mt-4 rounded-xl bg-muted px-4 py-6 text-center text-sm text-muted-foreground">
                  {t(lang, "menu.empty")}
                </p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {lines.map((l) => (
                    <li key={l.item.id} className="flex items-start justify-between gap-3 text-sm">
                      <div>
                        <div className="font-medium text-foreground">
                          {lang === "bm" ? l.item.nameBM : l.item.nameEN}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {l.qty}{" "}
                          {l.item.unit === "stick"
                            ? t(lang, "menu.sticks")
                            : "x"}{" "}
                          × RM{l.item.price.toFixed(2)}
                        </div>
                      </div>
                      <span className="font-display font-semibold text-foreground">
                        RM{(l.item.price * l.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t(lang, "menu.total")}
                </span>
                <span className="font-display text-2xl font-bold text-foreground">
                  RM{total.toFixed(2)}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t(lang, "menu.namePlaceholder")}
                  aria-label={t(lang, "menu.yourName")}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t(lang, "menu.phonePlaceholder")}
                  aria-label={t(lang, "menu.yourPhone")}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                />
              </div>

              <a
                href={sendDisabled || !branchId ? undefined : waLinkForBranch(branchId, buildMessage())}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={sendDisabled}
                onClick={(e) => sendDisabled && e.preventDefault()}
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-transform ${
                  sendDisabled
                    ? "cursor-not-allowed bg-muted text-muted-foreground"
                    : "bg-gradient-gold text-primary shadow-gold hover:scale-[1.02]"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {t(lang, "menu.sendOrder")}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, type ReactNode } from "react";
import { LangContext, type Lang } from "@/lib/i18n";

const STORAGE_KEY = "satefamili.lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bm");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "bm" || stored === "en") {
        setLangState(stored);
        document.documentElement.lang = stored === "bm" ? "ms" : "en";
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l === "bm" ? "ms" : "en";
    } catch {
      // ignore
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

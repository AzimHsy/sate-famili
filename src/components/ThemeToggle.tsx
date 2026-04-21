import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme switcher"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card p-1 text-xs font-semibold shadow-sm",
        className,
      )}
    >
      <AnimatePresence mode="popLayout">
        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-pressed={theme === "light"}
          title="Light Mode"
          className={cn(
            "relative grid h-8 w-8 place-items-center rounded-full transition-colors",
            theme === "light"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {theme === "light" && (
            <motion.div
              layoutId="theme-active"
              className="absolute inset-0 z-0 rounded-full bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Sun className="relative z-10 h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-pressed={theme === "dark"}
          title="Dark Mode"
          className={cn(
            "relative grid h-8 w-8 place-items-center rounded-full transition-colors",
            theme === "dark"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {theme === "dark" && (
            <motion.div
              layoutId="theme-active"
              className="absolute inset-0 z-0 rounded-full bg-primary"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Moon className="relative z-10 h-4 w-4" />
        </button>
      </AnimatePresence>
    </div>
  );
}

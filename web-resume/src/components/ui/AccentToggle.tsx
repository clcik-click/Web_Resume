import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

const ACCENT_KEY = "accent_color";
const ACCENT_EVENT = "accent-color-change";

const accents = ["pink", "blue", "emerald", "violet", "orange", "teal", "rose", "amber", "cyan", "lime"] as const;
type Accent = (typeof accents)[number];

const labels: Record<Accent, string> = {
  pink: "Pink",
  blue: "Blue",
  emerald: "Emerald",
  violet: "Violet",
  orange: "Orange",
  teal: "Teal",
  rose: "Rose",
  amber: "Amber",
  cyan: "Cyan",
  lime: "Lime",
};

const isAccent = (value: string | null): value is Accent =>
  value === "pink" ||
  value === "blue" ||
  value === "emerald" ||
  value === "violet" ||
  value === "orange" ||
  value === "teal" ||
  value === "rose" ||
  value === "amber" ||
  value === "cyan" ||
  value === "lime";

const readAccent = (): Accent => {
  if (typeof window === "undefined") return "pink";
  const value = window.localStorage.getItem(ACCENT_KEY);
  return isAccent(value) ? value : "pink";
};

const applyAccent = (accent: Accent) => {
  document.documentElement.setAttribute("data-accent", accent);
};

export default function AccentToggle() {
  const [accent, setAccent] = useState<Accent>(readAccent);

  useEffect(() => {
    applyAccent(accent);
    window.localStorage.setItem(ACCENT_KEY, accent);
  }, [accent]);

  useEffect(() => {
    const onAccentChange = (event: Event) => {
      const next = (event as CustomEvent<Accent>).detail;
      if (next) setAccent(next);
    };

    window.addEventListener(ACCENT_EVENT, onAccentChange);
    return () => window.removeEventListener(ACCENT_EVENT, onAccentChange);
  }, []);

  const cycleAccent = () => {
    const next = accents[(accents.indexOf(accent) + 1) % accents.length];
    window.dispatchEvent(new CustomEvent(ACCENT_EVENT, { detail: next }));
    setAccent(next);
  };

  return (
    <button
      type="button"
      onClick={cycleAccent}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
      aria-label={`Accent color: ${labels[accent]}. Click to switch`}
      title={`Accent: ${labels[accent]}`}
    >
      <Palette size={17} />
    </button>
  );
}

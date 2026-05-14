import { Wind } from "lucide-react";
import { useEffect, useState } from "react";

const BACKGROUND_STYLE_KEY = "background_style";
const BACKGROUND_STYLE_EVENT = "background-style-change";

const modes = ["nebula", "ocean"] as const;

type BackgroundMode = (typeof modes)[number];

const labels: Record<BackgroundMode, string> = {
  nebula: "Nebula",
  ocean: "Ocean",
};

const readMode = (): BackgroundMode => {
  if (typeof window === "undefined") return "nebula";
  const value = window.localStorage.getItem(BACKGROUND_STYLE_KEY);
  return value === "ocean" || value === "nebula" ? value : "nebula";
};

export default function BackgroundToggle() {
  const [mode, setMode] = useState<BackgroundMode>(readMode);

  useEffect(() => {
    const onModeChange = (event: Event) => {
      const nextMode = (event as CustomEvent<BackgroundMode>).detail;
      if (nextMode) setMode(nextMode);
    };

    window.addEventListener(BACKGROUND_STYLE_EVENT, onModeChange);
    return () => window.removeEventListener(BACKGROUND_STYLE_EVENT, onModeChange);
  }, []);

  const cycleBackground = () => {
    const currentIndex = modes.indexOf(mode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    window.localStorage.setItem(BACKGROUND_STYLE_KEY, nextMode);
    window.dispatchEvent(new CustomEvent(BACKGROUND_STYLE_EVENT, { detail: nextMode }));
    setMode(nextMode);
  };

  return (
    <button
      type="button"
      onClick={cycleBackground}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-white"
      aria-label={`Background mode: ${labels[mode]}. Click to switch`}
      title={`Background: ${labels[mode]}`}
    >
      <Wind size={17} />
    </button>
  );
}

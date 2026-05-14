import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const storyBeats = [
  {
    title: "The Challenge",
    text: "The hare laughed at the tortoise for moving slowly. The tortoise answered with a calm challenge: race me to the old hill.",
  },
  {
    title: "The Sprint",
    text: "The hare shot down the road in a blur, certain the race was already won. Dust rose behind him.",
  },
  {
    title: "The Nap",
    text: "Seeing how far ahead he was, the hare rested beneath a tree. Confidence quietly became sleep.",
  },
  {
    title: "The Steady Pace",
    text: "The tortoise never hurried and never stopped. Step by step, he passed the sleeping hare.",
  },
  {
    title: "The Finish",
    text: "The hare woke too late. The tortoise crossed the finish line first, proving that steady effort wins the race.",
  },
];

/* ── Tortoise SVG ─────────────────────────────────────────────────────── */
function TortoiseSprite() {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Shell */}
      <ellipse cx="58" cy="42" rx="36" ry="24" fill="#3d7a4f" />
      <ellipse cx="58" cy="40" rx="30" ry="19" fill="#4e9e64" />
      {/* Shell pattern */}
      <ellipse cx="58" cy="39" rx="14" ry="10" fill="#3d7a4f" opacity="0.5" />
      <ellipse cx="44" cy="43" rx="8" ry="6" fill="#3d7a4f" opacity="0.4" />
      <ellipse cx="72" cy="43" rx="8" ry="6" fill="#3d7a4f" opacity="0.4" />
      <ellipse cx="58" cy="52" rx="8" ry="5" fill="#3d7a4f" opacity="0.3" />
      {/* Head */}
      <ellipse cx="90" cy="40" rx="13" ry="11" fill="#5ab874" />
      <circle cx="95" cy="36" r="3.5" fill="white" />
      <circle cx="96" cy="36" r="1.8" fill="#1a1a1a" />
      <circle cx="96.8" cy="35.2" r="0.7" fill="white" />
      {/* Smile */}
      <path d="M88 44 Q92 48 96 44" stroke="#2d5e3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Front legs */}
      <rect data-leg-fl x="68" y="60" width="10" height="14" rx="5" fill="#5ab874" />
      <rect data-leg-fr x="80" y="60" width="10" height="14" rx="5" fill="#5ab874" />
      {/* Back legs */}
      <rect data-leg-bl x="30" y="60" width="10" height="14" rx="5" fill="#5ab874" />
      <rect data-leg-br x="42" y="60" width="10" height="14" rx="5" fill="#5ab874" />
      {/* Tail */}
      <ellipse cx="23" cy="50" rx="6" ry="4" fill="#4e9e64" />
    </svg>
  );
}

/* ── Hare SVG ─────────────────────────────────────────────────────────── */
function HareSprite() {
  return (
    <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Ears */}
      <rect data-ear-l x="28" y="2" width="10" height="38" rx="5" fill="#e8e0d8" />
      <rect x="30" y="4" width="6" height="32" rx="3" fill="#f4b8c0" />
      <rect data-ear-r x="44" y="2" width="10" height="38" rx="5" fill="#e8e0d8" />
      <rect x="46" y="4" width="6" height="32" rx="3" fill="#f4b8c0" />
      {/* Body */}
      <ellipse cx="50" cy="72" rx="26" ry="22" fill="#e8e0d8" />
      {/* Head */}
      <ellipse cx="52" cy="44" rx="20" ry="18" fill="#f0e8e0" />
      {/* Eyes */}
      <circle cx="46" cy="39" r="4.5" fill="white" />
      <circle cx="46" cy="39" r="2.5" fill="#c0392b" />
      <circle cx="46.8" cy="38.2" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="55" cy="47" rx="3" ry="2" fill="#f4b8c0" />
      {/* Whiskers */}
      <line x1="58" y1="46" x2="74" y2="43" stroke="#aaa" strokeWidth="1" />
      <line x1="58" y1="48" x2="74" y2="48" stroke="#aaa" strokeWidth="1" />
      <line x1="58" y1="50" x2="74" y2="53" stroke="#aaa" strokeWidth="1" />
      {/* Mouth */}
      <path d="M52 51 Q55 55 58 51" stroke="#c0392b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Front legs */}
      <rect data-leg-fl x="58" y="88" width="11" height="16" rx="5.5" fill="#e8e0d8" />
      <rect data-leg-fr x="72" y="88" width="11" height="16" rx="5.5" fill="#e8e0d8" />
      {/* Back legs (larger) */}
      <rect data-leg-bl x="26" y="88" width="13" height="18" rx="6" fill="#ddd8d0" />
      <rect data-leg-br x="42" y="88" width="13" height="18" rx="6" fill="#ddd8d0" />
      {/* Fluffy tail */}
      <circle cx="26" cy="72" r="8" fill="white" />
      <circle cx="22" cy="68" r="5" fill="white" />
    </svg>
  );
}

/* ── Confetti burst ───────────────────────────────────────────────────── */
function ConfettiBurst() {
  const pieces = Array.from({ length: 18 }, (_, i) => ({
    color: ["#f59e0b", "#ec4899", "#3b82f6", "#10b981", "#f97316"][i % 5],
    x: 50 + Math.cos((i / 18) * Math.PI * 2) * 40,
    y: 50 + Math.sin((i / 18) * Math.PI * 2) * 40,
    r: 4 + (i % 3) * 2,
  }));
  return (
    <svg data-confetti viewBox="0 0 100 100" className="absolute -top-16 right-0 h-28 w-28 opacity-0" xmlns="http://www.w3.org/2000/svg">
      {pieces.map((p, i) => (
        <rect key={i} x={p.x - p.r / 2} y={p.y - p.r / 2} width={p.r} height={p.r * 1.6}
          fill={p.color} rx="1" transform={`rotate(${i * 20} ${p.x} ${p.y})`} opacity="0.9" />
      ))}
    </svg>
  );
}

/* ── Birds ────────────────────────────────────────────────────────────── */
function Birds() {
  return (
    <svg data-birds viewBox="0 0 120 40" className="absolute right-[25%] top-[8%] h-10 w-24 opacity-70"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20 Q15 14 20 20" stroke="#64748b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 15 Q37 8 44 15" stroke="#64748b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M58 22 Q63 16 68 22" stroke="#64748b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function HareTortoiseStory2D() {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = storyRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      /* ── element refs ── */
      const hare       = root.querySelector("[data-hare]") as HTMLElement;
      const tortoise   = root.querySelector("[data-tortoise]") as HTMLElement;
      const sun        = root.querySelector("[data-sun]") as HTMLElement;
      const sunRays    = root.querySelector("[data-sun-rays]") as HTMLElement;
      const clouds     = root.querySelectorAll<HTMLElement>("[data-cloud]");
      const dust       = root.querySelector("[data-dust]") as HTMLElement;
      const sleepZzz   = root.querySelectorAll<HTMLElement>("[data-zzz]");
      const ribbon     = root.querySelector("[data-ribbon]") as HTMLElement;
      const confetti   = root.querySelector("[data-confetti]") as HTMLElement;
      const birds      = root.querySelector("[data-birds]") as HTMLElement;
      const bgGradient = root.querySelector("[data-bg]") as HTMLElement;
      const panels     = gsap.utils.toArray<HTMLElement>("[data-story-panel]", root);
      const hill1      = root.querySelector("[data-hill-1]") as HTMLElement;
      const hill2      = root.querySelector("[data-hill-2]") as HTMLElement;

      /* ── tortoise legs for walk cycle ── */
      const tFL = tortoise.querySelector("[data-leg-fl]") as SVGElement;
      const tBR = tortoise.querySelector("[data-leg-br]") as SVGElement;
      const tFR = tortoise.querySelector("[data-leg-fr]") as SVGElement;
      const tBL = tortoise.querySelector("[data-leg-bl]") as SVGElement;

      /* ── hare legs for run cycle ── */
      const hFL = hare.querySelector("[data-leg-fl]") as SVGElement;
      const hBR = hare.querySelector("[data-leg-br]") as SVGElement;
      const hFR = hare.querySelector("[data-leg-fr]") as SVGElement;
      const hBL = hare.querySelector("[data-leg-bl]") as SVGElement;

      /* ── hare ears ── */
      const hEarL = hare.querySelector("[data-ear-l]") as SVGElement;
      const hEarR = hare.querySelector("[data-ear-r]") as SVGElement;

      /* ── initial states ── */
      gsap.set(panels, { autoAlpha: 0, y: 24, filter: "blur(4px)" });
      gsap.set(panels[0], { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(hare, { left: "2%", y: 0, rotate: 0, scaleX: 1 });
      gsap.set(tortoise, { left: "2%", y: 0 });
      gsap.set(dust, { autoAlpha: 0, scaleX: 0.1, transformOrigin: "left center" });
      gsap.set(sleepZzz, { autoAlpha: 0, y: 0 });
      gsap.set(ribbon, { autoAlpha: 0, scale: 0.6, rotate: -6 });
      gsap.set(confetti, { autoAlpha: 0, scale: 0.5 });
      gsap.set(birds, { x: 0 });

      /* ── ambient cloud drift ── */
      clouds.forEach((cloud, i) => {
        gsap.to(cloud, {
          x: i % 2 === 0 ? 40 : -30,
          duration: 7 + i * 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* ── ambient bird drift ── */
      gsap.to(birds, {
        x: -60,
        duration: 18,
        repeat: -1,
        ease: "none",
        modifiers: { x: gsap.utils.unitize((v) => parseFloat(v) % 200 - 60) },
      });

      /* ── tortoise walking loop ── */
      const tortoiseWalk = gsap.timeline({ repeat: -1, paused: true });
      tortoiseWalk
        .to([tFL, tBR], { rotation: 22, transformOrigin: "50% 0%", duration: 0.28, ease: "sine.inOut" }, 0)
        .to([tFR, tBL], { rotation: -22, transformOrigin: "50% 0%", duration: 0.28, ease: "sine.inOut" }, 0)
        .to([tFL, tBR], { rotation: -22, transformOrigin: "50% 0%", duration: 0.28, ease: "sine.inOut" }, 0.28)
        .to([tFR, tBL], { rotation: 22, transformOrigin: "50% 0%", duration: 0.28, ease: "sine.inOut" }, 0.28);

      /* ── hare running loop (big bounding legs + ear flap) ── */
      const hareRun = gsap.timeline({ repeat: -1, paused: true });
      hareRun
        .to([hFL, hBR], { rotation: 38, transformOrigin: "50% 0%", duration: 0.15, ease: "power2.inOut" }, 0)
        .to([hFR, hBL], { rotation: -38, transformOrigin: "50% 0%", duration: 0.15, ease: "power2.inOut" }, 0)
        .to([hEarL, hEarR], { rotation: -8, transformOrigin: "50% 100%", duration: 0.15 }, 0)
        .to([hFL, hBR], { rotation: -38, transformOrigin: "50% 0%", duration: 0.15, ease: "power2.inOut" }, 0.15)
        .to([hFR, hBL], { rotation: 38, transformOrigin: "50% 0%", duration: 0.15, ease: "power2.inOut" }, 0.15)
        .to([hEarL, hEarR], { rotation: 8, transformOrigin: "50% 100%", duration: 0.15 }, 0.15);

      /* ── floating Zzz loop ── */
      const zzzLoop = gsap.timeline({ repeat: -1, paused: true });
      sleepZzz.forEach((z, i) => {
        zzzLoop.fromTo(z,
          { autoAlpha: 0, y: 0, scale: 0.6 + i * 0.2 },
          { autoAlpha: 1, y: -28 - i * 14, scale: 1 + i * 0.15, duration: 1.4 + i * 0.4, ease: "power1.inOut", repeat: -1, yoyo: true, delay: i * 0.6 },
          i * 0.3,
        );
      });

      /* ── panel transition helper ── */
      const showPanel = (index: number) => {
        panels.forEach((panel, i) => {
          gsap.to(panel, {
            autoAlpha: i === index ? 1 : 0,
            y: i === index ? 0 : 24,
            filter: i === index ? "blur(0px)" : "blur(4px)",
            duration: 0.35,
            overwrite: true,
          });
        });
      };

      /* ── main scroll timeline ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* ─── Beat 0 – Challenge ──────────────────────────── t=0 */
      tl.call(() => showPanel(0), [], 0)
        /* Hare bounces in place (impatient) */
        .to(hare, { y: -12, duration: 0.18, ease: "power2.out", yoyo: true, repeat: 3 }, 0.05)
        /* Tortoise shuffles forward slightly */
        .to(tortoise, { left: "6%", duration: 0.5, ease: "none",
          onStart: () => tortoiseWalk.play(),
          onComplete: () => tortoiseWalk.pause() }, 0.1)

        /* ─── Beat 1 – Sprint ─────────────────────────── t≈0.9 */
        .call(() => { showPanel(1); hareRun.play(); }, [], 0.9)
        /* Hare shoots across with body squash-stretch */
        .to(hare, { scaleX: 1.25, scaleY: 0.8, duration: 0.05 }, 0.92)
        .to(hare, { left: "62%", y: -10, scaleX: 1, scaleY: 1, duration: 0.75, ease: "power4.out" }, 0.97)
        /* Dust cloud */
        .to(dust, { autoAlpha: 1, scaleX: 1.6, duration: 0.35, ease: "power2.out" }, 0.93)
        .to(dust, { x: 60, autoAlpha: 0, duration: 0.5, ease: "power1.in" }, 1.28)
        /* Tortoise plods */
        .to(tortoise, { left: "16%", duration: 1.4, ease: "none",
          onStart: () => tortoiseWalk.play(),
          onComplete: () => tortoiseWalk.pause() }, 0.95)
        /* Parallax hills */
        .to(hill1, { x: -28, duration: 1.8, ease: "none" }, 0.9)
        .to(hill2, { x: -14, duration: 1.8, ease: "none" }, 0.9)

        /* ─── Beat 2 – Nap ────────────────────────────── t≈2.0 */
        .call(() => { showPanel(2); hareRun.pause(); zzzLoop.play(); }, [], 2.0)
        /* Hare tilts and settles */
        .to(hare, { rotate: -15, y: 20, scaleX: 1, duration: 0.45, ease: "elastic.out(0.8,0.4)" }, 1.85)
        /* Sun moves (time passing) and dims/warms */
        .to(sun, { x: 120, y: 35, scale: 0.85, duration: 2.2, ease: "sine.inOut" }, 1.6)
        .to(sunRays, { rotate: 180, opacity: 0.35, duration: 2.2, ease: "none" }, 1.6)
        .to(bgGradient, { opacity: 0.6, duration: 2, ease: "none" }, 1.6)

        /* ─── Beat 3 – Steady Pace ────────────────────── t≈3.0 */
        .call(() => { showPanel(3); zzzLoop.pause(); gsap.set(sleepZzz, { autoAlpha: 0 }); }, [], 3.0)
        /* Tortoise marches past the sleeping hare */
        .to(tortoise, { left: "66%", duration: 1.9, ease: "none",
          onStart: () => tortoiseWalk.play() }, 3.0)
        .to(tortoise, { y: -4, duration: 0.22, yoyo: true, repeat: 7, ease: "sine.inOut" }, 3.0)

        /* ─── Beat 4 – Finish ─────────────────────────── t≈4.35 */
        .call(() => { showPanel(4); tortoiseWalk.pause(); }, [], 4.35)
        /* Tortoise crosses with a little hop */
        .to(tortoise, { left: "80%", y: -10, duration: 0.5, ease: "power2.out" }, 4.3)
        .to(tortoise, { y: 0, duration: 0.3, ease: "bounce.out" }, 4.8)
        /* Ribbon + confetti */
        .to(ribbon, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2)" }, 4.5)
        .to(confetti, { autoAlpha: 1, scale: 1.4, duration: 0.25, ease: "power3.out" }, 4.55)
        .to(confetti, { rotate: 30, duration: 0.6, ease: "none" }, 4.55)
        .to(confetti, { autoAlpha: 0, y: -30, duration: 0.5, ease: "power2.in" }, 5.0)
        /* Hare jolts awake – scrambles too late */
        .to(hare, { rotate: 0, y: 0, duration: 0.3, ease: "back.out(3)" }, 4.5)
        .to(hare, { left: "72%", y: -8, duration: 0.55, ease: "power3.in",
          onStart: () => hareRun.play() }, 4.6);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={storyRef}
      className="relative min-h-screen overflow-hidden rounded-xl border border-slate-200 shadow-lg dark:border-slate-800"
    >
      {/* ── Background gradient that warms during nap ── */}
      <div
        data-bg
        className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950"
      />
      {/* Warm dusk overlay (fades in during nap) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/0 via-orange-100/30 to-amber-100/0 opacity-0 dark:from-amber-900/0 dark:via-orange-900/20 dark:to-amber-900/0" />

      {/* ── Scene ── */}
      <div className="absolute inset-0">
        {/* Sun with rays */}
        <div data-sun className="absolute right-[10%] top-[10%]">
          <div className="h-16 w-16 rounded-full bg-amber-300 shadow-[0_0_80px_20px_rgba(251,191,36,0.45)] dark:bg-amber-200" />
          <svg
            data-sun-rays
            viewBox="0 0 80 80"
            className="absolute -inset-4 h-24 w-24 opacity-60"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="40" y1="6" x2="40" y2="0"
                stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
                transform={`rotate(${i * 45} 40 40)`}
              />
            ))}
          </svg>
        </div>

        {/* Clouds */}
        <div data-cloud className="absolute left-[12%] top-[14%] h-10 w-32 rounded-full bg-white/90 shadow-sm dark:bg-white/15" />
        <div data-cloud className="absolute right-[22%] top-[20%] h-7 w-24 rounded-full bg-white/75 shadow-sm dark:bg-white/10" />
        <div data-cloud className="absolute left-[40%] top-[9%] h-6 w-20 rounded-full bg-white/60 dark:bg-white/8" />

        {/* Birds */}
        <Birds />

        {/* Distant hill parallax */}
        <div data-hill-1 className="absolute bottom-[22%] left-[-6%] h-28 w-[55%] rounded-[50%] bg-emerald-100/80 dark:bg-emerald-900/40" />
        <div data-hill-2 className="absolute bottom-[22%] right-[-4%] h-24 w-[45%] rounded-[50%] bg-emerald-100/60 dark:bg-emerald-900/30" />

        {/* Ground */}
        <div className="absolute bottom-[18%] left-[-8%] h-36 w-[116%] rounded-[50%] bg-emerald-200/80 dark:bg-emerald-900/60" />
        {/* Road / track */}
        <div className="absolute bottom-[15%] left-[6%] h-3.5 w-[88%] rounded-full bg-amber-200/90 dark:bg-amber-900/80" />
        {/* Road dashes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-[16.5%] h-1 w-6 rounded-full bg-amber-100 dark:bg-amber-800"
            style={{ left: `${10 + i * 10}%` }}
          />
        ))}
        {/* Finish post */}
        <div className="absolute bottom-[15%] left-[76%] h-48 w-2.5 bg-slate-800 dark:bg-slate-200" />
        <div className="absolute bottom-[47%] left-[76%] h-10 w-20 rounded-r-full bg-pink-500 dark:bg-pink-400 shadow-md" />
        {/* Tree trunk + canopy */}
        <div className="absolute bottom-[23%] left-[52%] h-28 w-5 rounded-t-full bg-amber-800 dark:bg-amber-900" />
        <div className="absolute bottom-[34%] left-[48%] h-28 w-32 rounded-[50%] bg-emerald-400 dark:bg-emerald-700" />
        <div className="absolute bottom-[38%] left-[50%] h-20 w-24 rounded-[50%] bg-emerald-300/70 dark:bg-emerald-600/60" />
        {/* Small bushes */}
        <div className="absolute bottom-[19%] left-[30%] h-8 w-14 rounded-[50%] bg-emerald-300 dark:bg-emerald-700" />
        <div className="absolute bottom-[19%] right-[18%] h-6 w-10 rounded-[50%] bg-emerald-300 dark:bg-emerald-700" />
      </div>

      {/* ── Characters ── */}
      <div className="absolute bottom-[24%] left-[7%] right-[10%] h-32">
        {/* Dust */}
        <div
          data-dust
          className="absolute bottom-3 left-[20%] h-6 w-32 origin-left rounded-full bg-amber-200/80 blur-md dark:bg-amber-500/30"
        />

        {/* Tortoise */}
        <div data-tortoise className="absolute bottom-0 left-[2%] h-24 w-32">
          <TortoiseSprite />
        </div>

        {/* Hare */}
        <div data-hare className="absolute bottom-0 left-[2%] h-28 w-20">
          {/* Floating Zzz */}
          <span data-zzz className="absolute -right-4 -top-4 select-none text-lg font-black text-slate-400 dark:text-slate-400">z</span>
          <span data-zzz className="absolute -right-7 -top-8 select-none text-xl font-black text-slate-400 dark:text-slate-400">z</span>
          <span data-zzz className="absolute -right-10 -top-14 select-none text-2xl font-black text-slate-500 dark:text-slate-300">Z</span>
          <HareSprite />
        </div>
      </div>

      {/* ── Finish ribbon & confetti ── */}
      <div className="absolute bottom-[42%] left-[76%]">
        <ConfettiBurst />
        <div
          data-ribbon
          className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-extrabold tracking-wide text-white shadow-xl dark:bg-pink-400 dark:text-slate-950"
        >
          🐢 Slow &amp; steady wins.
        </div>
      </div>

      {/* ── Story panels ── */}
      <div className="absolute left-4 right-4 top-6 z-10 lg:left-8 lg:right-auto lg:w-[26rem]">
        {storyBeats.map((beat, index) => (
          <article
            key={beat.title}
            data-story-panel
            className="absolute inset-x-0 rounded-xl border border-slate-200/80 bg-white/92 p-5 shadow-2xl backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/92"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400">
              Chapter {index + 1} of {storyBeats.length}
            </p>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {beat.title}
            </h2>
            <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">{beat.text}</p>
            {/* Progress dots */}
            <div className="mt-4 flex gap-1.5">
              {storyBeats.map((_, di) => (
                <div
                  key={di}
                  className={`h-1.5 rounded-full transition-all ${di === index ? "w-6 bg-pink-500" : "w-1.5 bg-slate-200 dark:bg-slate-700"}`}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

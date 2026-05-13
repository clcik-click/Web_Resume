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

export default function HareTortoiseStory2D() {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = storyRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const hare = root.querySelector("[data-hare]");
      const tortoise = root.querySelector("[data-tortoise]");
      const sun = root.querySelector("[data-sun]");
      const clouds = root.querySelectorAll("[data-cloud]");
      const dust = root.querySelector("[data-dust]");
      const sleep = root.querySelector("[data-sleep]");
      const ribbon = root.querySelector("[data-ribbon]");
      const panels = gsap.utils.toArray<HTMLElement>("[data-story-panel]", root);

      gsap.set(panels, { autoAlpha: 0, y: 20 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      gsap.set(hare, { left: "2%", xPercent: 0, y: 0, rotate: 0 });
      gsap.set(tortoise, { left: "2%", xPercent: 0, y: 0 });
      gsap.set(dust, { autoAlpha: 0, scaleX: 0.2 });
      gsap.set(sleep, { autoAlpha: 0, y: 8 });
      gsap.set(ribbon, { autoAlpha: 0, scale: 0.8 });

      clouds.forEach((cloud, index) => {
        gsap.to(cloud, {
          x: index % 2 === 0 ? 34 : -26,
          duration: 6 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const showPanel = (index: number) => {
        panels.forEach((panel, panelIndex) => {
          gsap.to(panel, {
            autoAlpha: panelIndex === index ? 1 : 0,
            y: panelIndex === index ? 0 : 20,
            duration: 0.25,
            overwrite: true,
          });
        });
      };

      gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=3600",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      })
        .call(() => showPanel(0), [], 0)
        .to(hare, { left: "36%", y: -18, duration: 0.8, ease: "power3.out" }, 0.15)
        .to(dust, { autoAlpha: 1, scaleX: 1, duration: 0.45, ease: "power2.out" }, 0.2)
        .to(dust, { autoAlpha: 0, duration: 0.25 }, 0.65)
        .call(() => showPanel(1), [], 0.8)
        .to(tortoise, { left: "18%", duration: 1.2, ease: "none" }, 0.85)
        .to(hare, { left: "58%", y: 0, duration: 0.65, ease: "power2.out" }, 1.05)
        .call(() => showPanel(2), [], 1.85)
        .to(hare, { rotate: -8, y: 28, duration: 0.3, ease: "power2.inOut" }, 1.55)
        .to(sleep, { autoAlpha: 1, y: -18, duration: 0.4, ease: "power2.out" }, 1.75)
        .to(sun, { x: 170, y: 22, duration: 1.7, ease: "none" }, 1.4)
        .call(() => showPanel(3), [], 2.65)
        .to(tortoise, { left: "62%", duration: 1.6, ease: "none" }, 2.1)
        .to(sleep, { autoAlpha: 0, duration: 0.2 }, 2.65)
        .call(() => showPanel(4), [], 3.55)
        .to(tortoise, { left: "82%", duration: 0.75, ease: "none" }, 3.25)
        .to(ribbon, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "back.out(1.8)" }, 3.6)
        .to(hare, { left: "67%", y: -10, rotate: 0, duration: 0.42, ease: "power3.in" }, 3.7);
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={storyRef}
      className="relative min-h-screen overflow-hidden rounded-lg border border-slate-200 bg-gradient-to-b from-sky-50 via-white to-emerald-50 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950"
    >
      <div className="absolute inset-0">
        <div data-sun className="absolute right-[12%] top-[12%] h-20 w-20 rounded-full bg-amber-300 shadow-[0_0_70px_rgba(251,191,36,0.55)] dark:bg-amber-200" />
        <div data-cloud className="absolute left-[14%] top-[16%] h-10 w-28 rounded-full bg-white/85 shadow-sm dark:bg-white/15" />
        <div data-cloud className="absolute right-[20%] top-[23%] h-8 w-24 rounded-full bg-white/70 shadow-sm dark:bg-white/10" />
        <div className="absolute bottom-[18%] left-[-8%] h-36 w-[116%] rounded-[50%] bg-emerald-200/70 dark:bg-emerald-900/60" />
        <div className="absolute bottom-[15%] left-[6%] h-3 w-[88%] rounded-full bg-amber-200 dark:bg-amber-900" />
        <div className="absolute bottom-[15%] left-[76%] h-44 w-2 bg-slate-950 dark:bg-white" />
        <div className="absolute bottom-[42%] left-[76%] h-10 w-16 rounded-r-full bg-pink-500 dark:bg-pink-400" />
        <div className="absolute bottom-[25%] left-[55%] h-24 w-5 rounded-t-full bg-amber-800 dark:bg-amber-900" />
        <div className="absolute bottom-[36%] left-[52%] h-24 w-28 rounded-[50%] bg-emerald-400 dark:bg-emerald-700" />
      </div>

      <div className="absolute bottom-[24%] left-[7%] right-[10%] h-28">
        <div data-dust className="absolute bottom-4 left-[18%] h-5 w-28 origin-left rounded-full bg-amber-200/70 blur-sm dark:bg-amber-500/20" />

        <div data-tortoise className="absolute bottom-0 left-[2%] h-24 w-32">
          <div className="absolute bottom-4 left-5 h-12 w-20 rounded-[50%] bg-emerald-700 shadow-lg dark:bg-emerald-500" />
          <div className="absolute bottom-10 left-[4.5rem] h-7 w-8 rounded-full bg-emerald-300 dark:bg-emerald-200" />
          <div className="absolute bottom-3 left-4 h-4 w-5 rounded-full bg-emerald-300 dark:bg-emerald-200" />
          <div className="absolute bottom-3 left-[4.5rem] h-4 w-5 rounded-full bg-emerald-300 dark:bg-emerald-200" />
          <div className="absolute bottom-8 left-8 h-1.5 w-8 rounded-full bg-emerald-900/45 dark:bg-emerald-950/45" />
        </div>

        <div data-hare className="absolute bottom-0 left-[2%] h-28 w-32">
          <div data-sleep className="absolute -right-8 -top-8 text-2xl font-bold text-slate-500 dark:text-slate-300">Zzz</div>
          <div className="absolute bottom-5 left-7 h-12 w-20 rounded-[50%] bg-slate-200 shadow-lg dark:bg-slate-100" />
          <div className="absolute bottom-12 left-20 h-9 w-9 rounded-full bg-white dark:bg-slate-50" />
          <div className="absolute bottom-[4.75rem] left-[5.5rem] h-12 w-3 -rotate-12 rounded-full bg-white dark:bg-slate-50" />
          <div className="absolute bottom-[4.75rem] left-[6.75rem] h-12 w-3 rotate-12 rounded-full bg-white dark:bg-slate-50" />
          <div className="absolute bottom-4 left-8 h-3 w-12 rounded-full bg-slate-300 dark:bg-slate-200" />
        </div>
      </div>

      <div data-ribbon className="absolute bottom-[45%] right-[12%] rounded-full bg-pink-600 px-4 py-2 text-sm font-bold text-white shadow-lg dark:bg-pink-400 dark:text-slate-950">
        Slow and steady wins.
      </div>

      <div className="absolute left-4 right-4 top-8 z-10 lg:left-8 lg:right-auto lg:w-[28rem]">
        {storyBeats.map((beat, index) => (
          <article
            key={beat.title}
            data-story-panel
            className="absolute inset-x-0 rounded-lg border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400">
              Chapter {index + 1}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{beat.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">{beat.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

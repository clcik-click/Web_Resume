import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import HareTortoiseStory2D from "../components/story/HareTortoiseStory2D";

export default function Story() {
  return (
    <PageLayout className="max-w-5xl">
      <section className="mb-10 pb-2">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400"
        >
          Storytelling
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
        >
          The Hare and the Tortoise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          A small animated fable built with GSAP scroll animation.
        </motion.p>
      </section>

      <HareTortoiseStory2D />

      <section className="mt-14 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">A song for the finish line</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          A little closing soundtrack after the race.
        </p>
        <div className="mt-5 aspect-video overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/4iqZwrAyIYU?list=RD4iqZwrAyIYU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </PageLayout>
  );
}

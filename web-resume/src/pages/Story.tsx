import PageHeader from "../components/layout/PageHeader";
import PageLayout from "../components/layout/PageLayout";
import HareTortoiseStory2D from "../components/story/HareTortoiseStory2D";

export default function Story() {
  return (
    <PageLayout className="max-w-5xl">
      <PageHeader
        eyebrow="Storytelling"
        title="The Hare and the Tortoise"
        description="A small animated fable built with GSAP scroll animation."
      />

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

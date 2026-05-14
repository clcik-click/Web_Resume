import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import ButtonLink from '../components/ui/ButtonLink';
import HoverVideo from '../components/media/HoverVideo';
import ImageCarousel from '../components/media/ImageCarousel';
import { homeCarouselImages } from '../data/home';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      gsap.set('[data-hero-item]', { autoAlpha: 0, y: 18 });
      gsap.to('[data-hero-item]', {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });

      const sections = gsap.utils.toArray<HTMLElement>('[data-reveal-section]', root);
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      const mediaBlocks = gsap.utils.toArray<HTMLElement>('[data-media-reveal]', root);
      mediaBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { autoAlpha: 0, scale: 0.97, y: 14 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
            },
          }
        );
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <PageLayout className="max-w-3xl">
      <div ref={pageRef}>
      <section className="mb-12 border-b border-slate-200 pb-10 dark:border-slate-800">
        <p data-hero-item className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400">
          Software Developer · Controls Engineer
        </p>
        <h1 data-hero-item className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Hoan Lam
        </h1>
        <p data-hero-item className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          I build practical software with an engineering mindset, shaped by industrial automation work and graduate study in applied computer science.
        </p>
        <div data-hero-item className="mt-7 flex flex-wrap gap-3">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <ButtonLink href="/resume">View Resume</ButtonLink>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <ButtonLink href="/projects" variant="secondary">View Projects</ButtonLink>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <ButtonLink href="https://www.linkedin.com/in/hoan-lam-3b72a5179/" target="_blank" rel="noopener noreferrer" variant="secondary">
              Contact
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      <div className="space-y-10 pb-14">
        <motion.section whileHover={{ y: -4 }} transition={{ duration: 0.25 }} data-reveal-section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">A Short Introduction</h2>
          <div className="mt-4 space-y-3 text-lg text-slate-800 dark:text-slate-200">
            <p>Hi,</p>
            <p>To whom it may concern,</p>
            <p>My name is Hoan, pronounced just like Juan. You can think of me as the Asian John or the Asian Juan, if that helps leave an impression.</p>
            <p>
              I've been wanting to make a personal website for a long time.
              A place where I can try out new features and components I think are cool, and then make them work together.
              It’s kind of like collecting Pokémon if you're a gamer, tools if you're an engineer, ingredients and recipes if you're a chef, plants if you're a gardener, or sceneries if you're a photographer.
              Songs, if you play an instrument... you know what I mean.
              We all see things we like and want to make them our own, and that is part of what gets us out of bed in the morning.
              This website does that, but at a much lower cost. Its goal is to become a collection of interesting, useful, and personal experiments.
            </p>
            <p>
              Furthermore, this post is part introduction and part portfolio.
              Whether you're a computer science recruiter, an engineering recruiter, or just someone curious about who I am, I hope you enjoy getting to know me.
            </p>
          </div>
        </motion.section>

        <motion.section whileHover={{ y: -4 }} transition={{ duration: 0.25 }} id="cs" data-reveal-section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Computer Science</h2>
          <div className="mt-4 space-y-3 text-lg text-slate-800 dark:text-slate-200">
            <p>
              I’m a master’s student studying Applied Computer Science at Grand Valley State University.
              I’m working on my badges in Data Analytics, Database Management, Software Design and Development, and Web and Mobile.
              The naming might sound a bit distracting, but if I were to narrow down what I actually do, it would be software and database management and development,
              which is just something every computer science student does anyway.
            </p>
            <p>
              During my first year as a graduate student, I had the chance to work on several meaningful projects. For example, a project focused on databases:{' '}
              <motion.a whileHover={{ x: 2 }} href="https://github.com/clcik-click/CIS660_Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">CIS660 Project</motion.a>,{' '}
              a project involving an AI agent:{' '}
              <motion.a whileHover={{ x: 2 }} href="https://github.com/imtiendat0311/AI-Agent" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">AI Agent Project</motion.a>, and{' '}
              a project using visual detection:{' '}
              <motion.a whileHover={{ x: 2 }} href="https://github.com/clcik-click/CIS671_Projec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">CIS671 Project</motion.a>.
              There were many smaller projects too, but those are a few highlights of the things I took the time to document.
            </p>
            <p>
              On top of that, I’m currently working as an intern at Blue Nucleus, where we provide custom software development services to real-world industry clients.
              It’s been a great learning experience so far.
            </p>
            <p>
              I’m always eager to learn and I really enjoy challenging myself.
            </p>
          </div>
        </motion.section>

        <motion.section whileHover={{ y: -4 }} transition={{ duration: 0.25 }} id="eng" data-reveal-section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Engineering</h2>
          <div className="mt-4 space-y-5 text-lg text-slate-800 dark:text-slate-200">
            <p>
              I hold an Electrical Engineering degree from GVSU. My senior capstone is documented here:{' '}
              <motion.a
                whileHover={{ x: 2 }}
                href="https://www.gvsu.edu/engineering/2021-engineering-design-conference-gvsu-department-of-chemistry-243.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                2021 GVSU Engineering Design Conference
              </motion.a>
              .
            </p>

            <div data-media-reveal className="flex justify-center">
              <img src="HOME/Engineer_School.JPEG" alt="Engineering project preview" className="h-[200px] rounded-lg object-cover shadow" />
            </div>

            <p>
              During engineering school, I started working at viastore (now a TOYOTA Automated Logistics Company) as an intern and eventually got hired full-time as a Controls Engineer.
              I spent close to five years there, and I enjoyed every bit of it.
            </p>

            <div data-media-reveal className="flex justify-center">
              <div className="overflow-hidden rounded-lg bg-black shadow">
                <HoverVideo src="videos/Engineer.mp4" />
              </div>
            </div>

            <p>
              At viastore, I specialized in commissioning, testing, and designing Human-Machine Interfaces (HMIs).
              I’ve worked on various projects for customers like General Motors, Dollar General, Gordon Food Service, and Tyson Foods, just to name a few.
            </p>

            <div data-media-reveal className="flex justify-center">
              <video src="videos/Engineer_Pallet.MP4" muted controls className="h-[250px] w-[320px] rounded-lg bg-black object-contain shadow">
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </motion.section>

        <motion.section whileHover={{ y: -4 }} transition={{ duration: 0.25 }} id="aboutme" data-reveal-section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Beyond Work</h2>
          <div className="mt-4 space-y-4 text-lg text-slate-800 dark:text-slate-200">
            <p>
              I’m someone who likes to try new ideas. I often find myself asking, “Why not?”, and that curiosity has led me to do a lot of unexpected things.
            </p>
            <p>
              I’m glad I started playing soccer again with friends. I was horrible at it in school, but now it’s just fun.
              I tried pottery too, and now I know I’m not very good at it, but I enjoyed the process anyway.
              Same thing with rock climbing, turns out I need to train more, but I’m learning.
              I also started going to live performances. My first Broadway show was in New York City, and since then, I’ve been to many more.
              That extended into a love for symphonies and all kinds of performances.
            </p>
            <p>
              Eventually, I got curious about nutrition because I wanted to feel better and perform better in my day-to-day life.
              That led me to become a nutrition coach. So far, I only have two clients, but I enjoy working with them and getting to know them deeply.
              One thing led to another, and that interest in nutrition turned into me working on my own little plot of garden.
              Something I didn’t think I’d do until I owned a house, but I’m doing it now.
            </p>

            <div data-media-reveal className="flex justify-center">
              <ImageCarousel images={homeCarouselImages} />
            </div>

            <p>
              But the thing I’m most proud of trying, the thing I used to dream about doing when I was in college the first time, is learning to play the piano.
              I started taking lessons, and I’m still learning, but now I can play my{' '}
              <motion.a whileHover={{ x: 2 }} href="https://www.youtube.com/watch?v=PTIMTGjWDbg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                favorite song
              </motion.a>
              , and that makes me really happy.
            </p>
          </div>
        </motion.section>

        <motion.section whileHover={{ y: -4 }} transition={{ duration: 0.25 }} data-reveal-section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">In Closing</h2>
          <div className="mt-4 space-y-3 text-lg text-slate-800 dark:text-slate-200">
            <p>
              Whether you’re here for my technical background or just curious about the person behind the scenes, thank you for taking the time.
            </p>
            <p>
              I’m curious, a student, and someone who enjoys doing different things. You could say I specialize in living life, engineering, and software development.
              Every experience shapes how I think and solve problems.
            </p>
            <p>
              If any of this resonates with you, whether you have an opportunity in mind or just want to connect, I’d love to hear from you.
            </p>
            <p>
              Thanks again for stopping by.
            </p>
          </div>
        </motion.section>
      </div>
      </div>
    </PageLayout>
  );
}

export default Home;

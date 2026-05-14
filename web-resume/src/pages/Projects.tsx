import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageLayout from "../components/layout/PageLayout";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";
import { projectCards, projectData, type ProjectKey } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]", root);

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 28, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
            delay: Math.min(index * 0.05, 0.25),
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, root);

    return () => context.revert();
  }, []);

  const openModal = (key: ProjectKey) => {
    setActiveProject(key);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  return (
    <PageLayout>
      <div ref={pageRef}>
      <section className="mb-10 pb-2">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg"
        >
          Selected software, engineering, and personal experiments, presented as practical work rather than a pile of placeholders.
        </motion.p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <motion.div
          data-project-card
          className="md:col-span-2"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.995 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ProjectCard
            project={projectData.queenBee}
            kind="software"
            featured
            onClick={() => openModal("queenBee")}
          />
        </motion.div>

        <motion.div
          data-project-card
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.995 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ProjectCard
            project={projectData.webResume}
            kind="software"
            featured
            onClick={() => openModal("webResume")}
          />
        </motion.div>

        <motion.div
          data-project-card
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.995 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ProjectCard
            project={projectData.marJac}
            kind="engineering"
            featured
            onClick={() => openModal("marJac")}
          />
        </motion.div>

        {projectCards.map((project) => {
          const projectKey = project.key;
          const projectDetails = projectKey ? projectData[projectKey] : project;

          return (
            <motion.div
              key={project.title}
              data-project-card
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <ProjectCard
                project={projectDetails}
                kind={project.kind}
                onClick={projectKey ? () => openModal(projectKey) : undefined}
              />
            </motion.div>
          );
        })}
      </div>

      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        project={activeProject ? projectData[activeProject] : null}
      />
      </div>
    </PageLayout>
  );
}

export default Projects;

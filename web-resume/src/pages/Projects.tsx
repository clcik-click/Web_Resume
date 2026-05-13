import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import PageLayout from "../components/layout/PageLayout";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";
import { projectCards, projectData, type ProjectKey } from "../data/projects";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);

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
      <PageHeader
        title="Projects"
        description="Selected software, engineering, and personal experiments, presented as practical work rather than a pile of placeholders."
        eyebrow="Portfolio"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <ProjectCard
            project={projectData.webResume}
            kind="software"
            featured
            onClick={() => openModal("webResume")}
          />
        </div>

        <ProjectCard
          project={projectData.marJac}
          kind="engineering"
          featured
          onClick={() => openModal("marJac")}
        />

        <ProjectCard
          project={projectData.garden}
          kind="personal"
          featured
          onClick={() => openModal("garden")}
        />

        {projectCards.map((project) => {
          const projectKey = project.key;
          const projectDetails = projectKey ? projectData[projectKey] : project;

          return (
            <ProjectCard
              key={project.title}
              project={projectDetails}
              kind={project.kind}
              onClick={projectKey ? () => openModal(projectKey) : undefined}
            />
          );
        })}
      </div>

      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        project={activeProject ? projectData[activeProject] : null}
      />
    </PageLayout>
  );
}

export default Projects;

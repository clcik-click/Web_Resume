import React from "react";

interface Project {
  title: string;
  date: string;
  category?: string;
  description?: string;
  techStack?: string[];
  screenshots?: string[];
  demoLink?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="text-sm text-pink-500 dark:text-pink-400 mb-1">
          {project.category} — {project.date}
        </div>
        <h2 className="text-xl font-bold text-pink-600 dark:text-pink-300 mb-2">
          {project.title}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">{project.description}</p>

        {Array.isArray(project.techStack) && project.techStack.length > 0 && (
          <div className="mb-4">
            <h4 className="text-pink-500 font-semibold mb-1">Tech Stack</h4>
            <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`screenshot-${i}`}
                className="rounded-lg border"
              />
            ))}
          </div>
        )}

        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-pink-500 hover:underline"
          >
            Link →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;

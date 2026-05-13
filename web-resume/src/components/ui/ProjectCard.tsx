import { ExternalLink } from "lucide-react";
import type { Project, ProjectKind } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  kind: ProjectKind;
  onClick?: () => void;
  featured?: boolean;
}

const accentStyles: Record<ProjectKind, string> = {
  software: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/60 dark:text-blue-300",
  engineering: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/70 dark:bg-amber-950/50 dark:text-amber-300",
  personal: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/50 dark:text-emerald-300",
};

const labels: Record<ProjectKind, string> = {
  software: "Software",
  engineering: "Engineering",
  personal: "Personal",
};

export default function ProjectCard({ project, kind, onClick, featured = false }: ProjectCardProps) {
  const isInteractive = Boolean(onClick);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isInteractive}
      className={`group flex h-full w-full flex-col rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-slate-700 ${
        featured ? "min-h-64" : "min-h-52"
      } ${isInteractive ? "cursor-pointer" : "cursor-default hover:translate-y-0 hover:shadow-sm"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${accentStyles[kind]}`}>
          {labels[kind]}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{project.date}</span>
      </div>

      <div className="mt-5 flex-1">
        <h2 className={`${featured ? "text-2xl" : "text-lg"} font-bold text-slate-950 dark:text-white`}>
          {project.title}
        </h2>
        {project.summary && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {project.summary}
          </p>
        )}
      </div>

      {project.techStack && project.techStack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, featured ? 5 : 3).map((tech) => (
            <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      )}

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-pink-600 group-hover:text-pink-700 dark:text-pink-400 dark:group-hover:text-pink-300">
        {isInteractive ? "View details" : "In progress"} {isInteractive && <ExternalLink size={14} />}
      </span>
    </button>
  );
}

import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
}

export default function PageHeader({ title, description, eyebrow, actions }: PageHeaderProps) {
  return (
    <header className="mb-10 border-b border-slate-200 pb-8 dark:border-slate-800">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
      </div>
    </header>
  );
}

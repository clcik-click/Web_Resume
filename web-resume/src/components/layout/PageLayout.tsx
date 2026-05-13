import { lazy, Suspense, type ReactNode } from "react";

const ThreeBackground = lazy(() => import("../background/ThreeBackground"));

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "max-w-4xl" }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-900 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 lg:ml-112 lg:border-t-0 xl:ml-120">
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <div className={`relative z-10 mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12 ${className}`}>
        {children}
      </div>
    </main>
  );
}

import { motion } from "framer-motion";
import { BookOpenText, BriefcaseBusiness, ExternalLink, FlaskConical, FolderKanban, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import MusicBar from "../media/MusicBar";
import ThemeToggle from "../ui/ThemeToggle";
import { credits, socialLinks, stats } from "../../data/profile";

const navItems: Array<{ to: string; label: string; Icon: LucideIcon }> = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/resume", label: "Resume", Icon: BriefcaseBusiness },
  { to: "/projects", label: "Projects", Icon: FolderKanban },
  { to: "/puzzle", label: "Experiments", Icon: FlaskConical },
  { to: "/story", label: "Story", Icon: BookOpenText },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `group relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 ${
    isActive
      ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
      : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
  }`;

export default function Sidebar() {
  const focusStats = stats.filter((stat) =>
    ["Curiosity Level", "Team Player Energy", "Debugging Mojo","Piano Progression"].includes(stat.name)
  );

  return (
    <motion.header
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto scrollbar-custom xl:w-120"
    >
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-20 lg:flex-none lg:flex-col lg:items-center lg:py-6 lg:px-2 bg-white border-r border-slate-200 h-screen dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
          HL
        </div>
        <div className="mb-6 flex flex-col gap-3">
          <ThemeToggle />
          <MusicBar />
        </div>

        <nav className="flex flex-col gap-4 text-sm font-medium mt-2">
          {navItems.map(({ Icon, ...item }) => (
            <motion.div key={item.to} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <NavLink
                to={item.to}
                className={navLinkClass}
                title={item.label}
              >
                <Icon size={19} strokeWidth={2.2} />
                <span className="pointer-events-none absolute left-12 z-20 rounded-md bg-slate-950 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-sm transition group-hover:opacity-100 dark:bg-white dark:text-slate-950">
                  {item.label}
                </span>
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </div>

      <div className="relative z-10 mx-auto px-4 pt-8 pb-6 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-r lg:border-slate-200 lg:px-8 lg:py-10 dark:lg:border-slate-800 xl:px-10">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="space-y-4">
            <div className="px-1">
              <h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">Hoan Lam</h1>
            </div>
            <img
              src="/TAB/Avatar.jpeg"
              alt="Hoan Lam"
              className="h-full w-full rounded-lg object-cover object-top"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4 }}
          className="mt-8 hidden lg:block"
        >
          <div className="mb-4 flex items-end justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-100">Focus</h2>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Current mode</span>
          </div>

          <div className="space-y-3">
            {focusStats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08, duration: 0.35 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{stat.name}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{stat.value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ delay: 0.35 + index * 0.08, duration: 0.65, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.4 }}
          className="mt-8"
        >
          <h2 className="mb-4 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-900 dark:border-slate-800 dark:text-slate-100">
            Connect
          </h2>
          <ul role="list" className="space-y-2 text-sm font-medium">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between rounded-lg px-2 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={14} />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-100">Credits</h2>
          </div>
          <motion.ul
            layout
            role="list"
            className="mt-3 space-y-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300"
          >
            {credits.map((credit) => (
              <motion.li
                key={credit}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                title={credit}
              >
                {credit}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </div>
    </motion.header>
  );
}

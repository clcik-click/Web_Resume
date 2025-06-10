import { useState } from "react";
import ProjectModal from "./Components/ProjectModel";

const projects = [
  { key: "featured", title: "Coral Detection Tool", date: "May 2025" },
  { key: "pianoTool", title: "Piano Visualizer", date: "Mar 2025" },
  { key: "mlDebugger", title: "ML Model Debugger", date: "Nov 2024" },
  // others can stay without a key if you don't want a popup for them
  { title: "Nutrition Planner App", date: "Apr 2025" },
  { title: "Realtime Scoreboard", date: "Feb 2025" },
  { title: "Image Carousel Viewer", date: "Jan 2025" },
  { title: "SocketIO Timer", date: "Dec 2024" },
  { title: "Game Rhythm Engine", date: "Oct 2024" },
];


const projectData = {
  featured: {
    title: "Interactive Coral Segmentation Tool",
    date: "May 2025",
    category: "⭐ Featured Project",
    description:
      "A web tool that compares AI (SAM, Mask R-CNN) vs human-drawn coral outlines with IoU and visual overlays.",
    techStack: ["React", "Tailwind CSS", "Flask", "SAM", "Mask R-CNN"],
    screenshots: ["/coral-1.png", "/coral-2.png"],
    demoLink: "https://coral-demo.app",
  },
  mlDebugger: {
    title: "Visual Debugger for ML Models",
    date: "Apr 2025",
    category: "🧪 Machine Learning",
    description:
      "An interactive visual debugger to inspect and trace neural network activations layer by layer.",
    techStack: ["Python", "PyTorch", "Streamlit"],
    screenshots: [],
  },
  pianoTool: {
    title: "Piano Practice Visualizer",
    date: "Mar 2025",
    category: "🎵 Creative Tool",
    description:
      "A visual metronome and finger placement visualizer that syncs with your MIDI piano in real-time.",
    techStack: ["WebMIDI API", "Canvas", "Tone.js"],
    screenshots: [],
  },
};

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<keyof typeof projectData | null>(null);

  const openModal = (key: keyof typeof projectData) => {
    setActiveProject(key);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120"> 
        <div className="h-full overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-lg space-y-6">
          <h1 className="text-2xl font-bold mb-4 text-center">📒 Projects</h1>
        </div>

      <div className="max-w-4xl mx-auto px-4 py-12 grid gap-6 grid-cols-12">
        {/* Top Feature Box */}
        <div className="col-span-12" onClick={() => openModal("featured")}>
          <div className="h-96 rounded-3xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 shadow-md flex flex-col justify-between p-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="text-lg font-medium text-pink-600 dark:text-pink-400">⭐ Featured Project</div>
            <div className="flex-grow flex items-center justify-center text-3xl font-bold tracking-wide text-center px-4">
              Interactive Coral Segmentation Tool
            </div>
            <div className="text-sm text-right text-pink-500 dark:text-pink-300">May 2025</div>
          </div>
        </div>

        {/* Two Medium Boxes */}
        <div className="col-span-6" onClick={() => openModal("mlDebugger")}>
          <div className="h-64 rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 shadow-md flex flex-col justify-between p-5 hover:bg-pink-200 dark:hover:bg-pink-800 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-base font-medium text-pink-600 dark:text-pink-400">🧪 Machine Learning</div>
            <div className="flex-grow flex items-center justify-center text-xl font-semibold text-center px-2">
              Visual Debugger for ML Models
            </div>
            <div className="text-sm text-right text-pink-500 dark:text-pink-300">Apr 2025</div>
          </div>
        </div>

        <div className="col-span-6" onClick={() => openModal("pianoTool")}>
          <div className="h-64 rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 shadow-md flex flex-col justify-between p-5 hover:bg-pink-200 dark:hover:bg-pink-800 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-base font-medium text-pink-600 dark:text-pink-400">🎵 Creative Tool</div>
            <div className="flex-grow flex items-center justify-center text-xl font-semibold text-center px-2">
              Piano Practice Visualizer
            </div>
            <div className="text-sm text-right text-pink-500 dark:text-pink-300">Mar 2025</div>
          </div>
        </div>

        {/* Project Grid */}
        {projects.map((project, i) => (
          <div key={i} className="col-span-3">
            <div
              className={`h-32 p-3 rounded-xl bg-pink-50 text-pink-700 dark:bg-pink-900 dark:text-pink-200 shadow-sm flex flex-col justify-between transition-all duration-300 ${
                project.key ? "cursor-pointer hover:bg-pink-100 dark:hover:bg-pink-800 hover:scale-105" : ""
              }`}
              title={project.title}
              onClick={() => {
                if (project.key) {
                  openModal(project.key as keyof typeof projectData);
                }
              }}
            >
              <div className="text-sm font-semibold truncate">{project.title}</div>
              <div className="text-xs text-pink-600 dark:text-pink-300">{project.date}</div>
            </div>
          </div>
        ))}

      </div>

      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        project={activeProject ? projectData[activeProject] : null}
      />

      </main>
    </>
  );
}

export default Projects;
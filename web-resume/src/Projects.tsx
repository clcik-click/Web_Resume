import { useState } from "react";
import ProjectModal from "./Components/ProjectModel";

const projects = [
  { key: "imageSeg", title: "💻 Image Segmenation", date: "Jan 2025" },
  { key: "workFlow", title: "💻 ETL Workflow", date: "Jan 2025" },
  { key: "aiAgent", title: "💻 Recipe Agent", date: "Sept 2024" },
  { key: "rhythmGame", title: "💻 A simple rhythm game", date: "Sept 2024"},
  { key: "tyson", title: "🛠️ Tyson Foods", date: "Apr 2023" },
  { key: "unique", title: "🛠️ Unique Industries", date: "Apr 2022" },

  { title: "🌱 Nutrition Coaching", date: "Apr 2023" },
  { title: "💻 Sport Scoreboard", date: "May 2025" },
  { title: "🌱 Bèo dạt mây trôi", date: "May 2025" },
];


const projectData = {
  webResume: {
    title: "Web-resume",
    date: "May 2025",
    category: "⭐ Featured Project 💻",
    description:
      `A personal web development playground for experimenting with new ideas and introducing myself. 
      There are still several features I’d like to try out, so this site will continue to grow over time. 
      It’s an ongoing project.`,
    techStack: ["React", "Tailwind CSS", "Vite", "Vercel", "React Router"],
    screenshots: [],
  },

  imageSeg: {
    title: "Image Segmenation tool",
    date: "Jan 2025",
    category: "💻 Computer Science",
    description:
      `This project detects corals in underwater images using SAM and Mask R-CNN. 
      It helps marine researchers automate coral annotation and improve conservation workflows.`,
    techStack: ["React", "Tailwind CSS", "Flask"],
    screenshots: [],
    demoLink: "https://github.com/clcik-click/CIS671_Project",
  },

  workFlow: {
    title: "ETL Workflow",
    date: "Jan 2025",
    category: "💻 Computer Science",
    description:
      `This project analyzes e-commerce consumer behavior to generate insights for online business owners. 
      I’ll build an ETL pipeline using Kestra to process data and load it into PostgreSQL, 
      with both services running in Docker. The cleaned data will then be analyzed in a local Python notebook, 
      and key findings visualized in Google Looker Studio for a user-friendly presentation.`,
    techStack: ["Python", "PostgreSOL", "Docker", "Google Looker Studio"],
    screenshots: [],
    demoLink: "https://github.com/clcik-click/CIS660_Project",
  },

  aiAgent: {
    title: "Recipe Recommendation Agent",
    date: "Sept 2024",
    category: "💻 Computer Science",
    description:
      `This project is a conversational AI agent that recommends recipes based on user preferences and ingredients detected in images. 
      The agent leverages Google Generative AI (Gemini) for dialogue and reasoning tasks and Spoonacular API for recipe data.`,
    techStack: ["Python", "Spoonacular", "Gemini"],
    screenshots: [],
    demoLink: "https://github.com/imtiendat0311/AI-Agent",
  },

  rhythmGame: {
    title: "A simple rhythm game",
    date: "Sept 2024",
    category: "💻 Computer Science",
    description:
      `It is a video game in which players press the keys (for this project, the keys are D, F, J, and K) to interact with music.
      Players try to match the keys' tapping with the song's beat to score points. Points are calculated based on how well players
      hit the notes coming to them.`,
    techStack: ["PyGame"],
    screenshots: [],
    demoLink: "https://github.com/clcik-click/Half_Semester_Project",
  },

  marJac: {
    title: "Mar-Jac Poultry",
    date: "Apr 2024",
    category: "⭐ Featured Project 🛠️",
    description:  
    `Boxes of various sizes travel down a conveyor to a large freezer, where they are stored in batches. 
    After freezing, the boxes continue along a lane where they are sorted by size. 
    Two robots pick and stack the boxes onto pallets, with a pallet dispenser supplying empty pallets as needed. 
    Once a pallet is full, it moves down the line to be scanned, updating the warehouse management system. 
    The pallet is then wrapped, labeled, and scanned again before being sent to a second freezer. 
    There, automated cranes handle the storage and retrieval of pallets as needed.`,

    techStack: ["Ignition", "Studio 5000", "Easyroll", "Electrical CAD", "Scanner and Camera softwares"],
    screenshots: [],
  },

  tyson: {
    title: "Tyson Foods",
    date: "Apr 2023",
    category: "🛠️ Engineering",
    description:  
    `Wrapped pallets from upstream are transferred into the system, which transfer them into the freezer for storage by automated cranes. 
    The system also handles pallet dispensing to the robot stacking systems, which were managed by a separate team. 
    Pallets are retrieved from storage as needed.`,

    techStack: ["Ignition", "Studio 5000", "Easyroll", "Electrical CAD", "Scanner and Camera softwares"],
    screenshots: [],
  },

  unique: {
    title: "Unique Industries",
    date: "Apr 2022",
    category: "🛠️ Engineering",
    description:  
    `The system handled storage and retrieval of containers with various products. 
    It retrieved containers, routed them to the correct lane for workers to pick from at the picking stations, 
    and returned the boxes to storage once released. 
    Empty boxes were automatically sent to a designated lane to be refilled with new products.`,

    techStack: ["Ignition", "Studio 5000", "Easyroll", "Electrical CAD", "Scanner and Camera softwares"],
    screenshots: [],
  },

  garden: {
    title: "Free Food",
    date: "May 2025",
    category: "⭐ Featured Project 🌱",
    description:  
    `The system uses soil, water, and sunlight to grow throughout the summer, ideally producing fresh food by the end of the season. 
    The garden also serves as a testing ground for different plants and herbs, helping to develop a deeper understanding of where food comes from and the effort required to maintain it. 
    No chemicals are used, so alternative methods of pest prevention are necessary. 
    The variety of plants and herbs are chosen to complement each other, creating a natural environment where each plant supports the health and growth of the others.`,

    techStack: ["Tomatoes", "Peppers", "Melons", "Goldmary", "Basil", "Thyme", "Squash"],
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
        <div className="col-span-12" onClick={() => openModal("webResume")}>
          <div className="h-96 rounded-3xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 shadow-md flex flex-col justify-between p-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="text-lg font-medium text-pink-600 dark:text-pink-400">⭐ Featured Project 💻</div>
            <div className="flex-grow flex items-center justify-center text-3xl font-bold tracking-wide text-center px-4">
              Web-resume
            </div>
            <div className="text-sm text-right text-pink-500 dark:text-pink-300">May 2025</div>
          </div>
        </div>

        {/* Two Medium Boxes */}
        <div className="col-span-6" onClick={() => openModal("marJac")}>
          <div className="h-64 rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 shadow-md flex flex-col justify-between p-5 hover:bg-pink-200 dark:hover:bg-pink-800 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-base font-medium text-pink-600 dark:text-pink-400">⭐ Featured Project 🛠️</div>
            <div className="flex-grow flex items-center justify-center text-xl font-semibold text-center px-2">
              Mar-Jac Poultry
            </div>
            <div className="text-sm text-right text-pink-500 dark:text-pink-300">Apr 2024</div>
          </div>
        </div>

        <div className="col-span-6" onClick={() => openModal("garden")}>
          <div className="h-64 rounded-2xl bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 shadow-md flex flex-col justify-between p-5 hover:bg-pink-200 dark:hover:bg-pink-800 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-base font-medium text-pink-600 dark:text-pink-400">⭐ Featured Project 🌱</div>
            <div className="flex-grow flex items-center justify-center text-xl font-semibold text-center px-2">
              Free Food
            </div>
            <div className="text-sm text-right text-pink-500 dark:text-pink-300">May 2025</div>
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
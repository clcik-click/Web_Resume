export interface Project {
  title: string;
  date: string;
  summary?: string;
  category?: string;
  description?: string;
  techStack?: string[];
  screenshots?: string[];
  demoLink?: string;
}

export type ProjectKey = keyof typeof projectData;
export type ProjectKind = "software" | "engineering" | "personal";

export const projectCards: Array<{
  key?: ProjectKey;
  title: string;
  date: string;
  kind: ProjectKind;
}> = [
  { key: "imageSeg", title: "Image Segmentation", date: "Jan 2025", kind: "software" },
  { key: "workFlow", title: "ETL Workflow", date: "Jan 2025", kind: "software" },
  { key: "aiAgent", title: "Recipe Agent", date: "Sep 2024", kind: "software" },
  { key: "rhythmGame", title: "Rhythm Game", date: "Sep 2024", kind: "software" },
  { key: "tyson", title: "Tyson Foods", date: "Apr 2023", kind: "engineering" },
  { key: "unique", title: "Unique Industries", date: "Apr 2022", kind: "engineering" },
  { title: "Nutrition Coaching", date: "Apr 2023", kind: "personal" },
  { title: "Sport Scoreboard", date: "May 2025", kind: "software" },
  { title: "Bèo dạt mây trôi", date: "May 2025", kind: "personal" },
];

export const projectData = {
  webResume: {
    title: "Web Resume",
    date: "May 2025",
    summary: "A personal portfolio and web development playground built with React, Vite, and Tailwind CSS.",
    category: "Featured Software Project",
    description: `A personal web development playground for experimenting with new ideas and introducing myself.
There are still several features I’d like to try out, so this site will continue to grow over time.
It’s an ongoing project.`,
    techStack: ["React", "Tailwind CSS", "Vite", "Vercel", "React Router"],
    screenshots: [],
  },

  imageSeg: {
    title: "Image Segmentation Tool",
    date: "Jan 2025",
    summary: "A coral detection workflow for underwater imagery using segmentation and detection models.",
    category: "Computer Science",
    description: `This project detects corals in underwater images using SAM and Mask R-CNN.
It helps marine researchers automate coral annotation and improve conservation workflows.`,
    techStack: ["React", "Tailwind CSS", "Flask"],
    screenshots: [],
    demoLink: "https://github.com/clcik-click/CIS671_Project",
  },

  workFlow: {
    title: "ETL Workflow",
    date: "Jan 2025",
    summary: "A Docker-based data pipeline that loads, cleans, analyzes, and visualizes e-commerce behavior data.",
    category: "Computer Science",
    description: `This project analyzes e-commerce consumer behavior to generate insights for online business owners.
I’ll build an ETL pipeline using Kestra to process data and load it into PostgreSQL,
with both services running in Docker. The cleaned data will then be analyzed in a local Python notebook,
and key findings visualized in Google Looker Studio for a user-friendly presentation.`,
    techStack: ["Python", "PostgreSQL", "Docker", "Google Looker Studio"],
    screenshots: [],
    demoLink: "https://github.com/clcik-click/CIS660_Project",
  },

  aiAgent: {
    title: "Recipe Recommendation Agent",
    date: "Sep 2024",
    summary: "A conversational recipe assistant that combines image input, user preferences, Gemini, and recipe data.",
    category: "Computer Science",
    description: `This project is a conversational AI agent that recommends recipes based on user preferences and ingredients detected in images.
The agent leverages Google Generative AI (Gemini) for dialogue and reasoning tasks and Spoonacular API for recipe data.`,
    techStack: ["Python", "Spoonacular", "Gemini"],
    screenshots: [],
    demoLink: "https://github.com/imtiendat0311/AI-Agent",
  },

  rhythmGame: {
    title: "Rhythm Game",
    date: "Sep 2024",
    summary: "A keyboard rhythm game built in PyGame with timing-based scoring.",
    category: "Computer Science",
    description: `It is a video game in which players press the keys (for this project, the keys are D, F, J, and K) to interact with music.
Players try to match the keys' tapping with the song's beat to score points. Points are calculated based on how well players
hit the notes coming to them.`,
    techStack: ["PyGame"],
    screenshots: [],
    demoLink: "https://github.com/clcik-click/Half_Semester_Project",
  },

  marJac: {
    title: "Mar-Jac Poultry",
    date: "Apr 2024",
    summary: "An automated freezer, palletizing, scanning, wrapping, and warehouse movement system.",
    category: "Featured Engineering Project",
    description: `Boxes of various sizes travel down a conveyor to a large freezer, where they are stored in batches.
After freezing, the boxes continue along a lane where they are sorted by size.
Two robots pick and stack the boxes onto pallets, with a pallet dispenser supplying empty pallets as needed.
Once a pallet is full, it moves down the line to be scanned, updating the warehouse management system.
The pallet is then wrapped, labeled, and scanned again before being sent to a second freezer.
There, automated cranes handle the storage and retrieval of pallets as needed.`,
    techStack: ["Ignition", "Studio 5000", "Easyroll", "Electrical CAD", "Scanner and camera software"],
    screenshots: [],
  },

  tyson: {
    title: "Tyson Foods",
    date: "Apr 2023",
    summary: "An automated freezer storage and retrieval system connected to upstream pallet flow.",
    category: "Engineering",
    description: `Wrapped pallets from upstream are transferred into the system, which transfer them into the freezer for storage by automated cranes.
The system also handles pallet dispensing to the robot stacking systems, which were managed by a separate team.
Pallets are retrieved from storage as needed.`,
    techStack: ["Ignition", "Studio 5000", "Easyroll", "Electrical CAD", "Scanner and camera software"],
    screenshots: [],
  },

  unique: {
    title: "Unique Industries",
    date: "Apr 2022",
    summary: "A storage and retrieval system for routed container picking and replenishment workflows.",
    category: "Engineering",
    description: `The system handled storage and retrieval of containers with various products.
It retrieved containers, routed them to the correct lane for workers to pick from at the picking stations,
and returned the boxes to storage once released.
Empty boxes were automatically sent to a designated lane to be refilled with new products.`,
    techStack: ["Ignition", "Studio 5000", "Easyroll", "Electrical CAD", "Scanner and camera software"],
    screenshots: [],
  },

  garden: {
    title: "Free Food",
    date: "May 2025",
    summary: "A small garden experiment in food, plant pairing, and practical nutrition curiosity.",
    category: "Featured Personal Project",
    description: `The system uses soil, water, and sunlight to grow throughout the summer, ideally producing fresh food by the end of the season.
The garden also serves as a testing ground for different plants and herbs, helping to develop a deeper understanding of where food comes from and the effort required to maintain it.
No chemicals are used, so alternative methods of pest prevention are necessary.
The variety of plants and herbs are chosen to complement each other, creating a natural environment where each plant supports the health and growth of the others.`,
    techStack: ["Tomatoes", "Peppers", "Melons", "Rosemary", "Basil", "Thyme", "Squash"],
    screenshots: [],
  },
} satisfies Record<string, Project>;

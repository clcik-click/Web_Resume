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
  { key: "valentCalculator", title: "Valent Calculator", date: "2025", kind: "software" },
  { key: "learningCompanion", title: "Learning Companion Web App", date: "2025", kind: "software" },
  { key: "lacrosseDashboard", title: "Lacrosse Dashboard", date: "2025", kind: "software" },
  { key: "fileManagement3d", title: "3D File Management System", date: "2025", kind: "personal" },
  { key: "imageSeg", title: "Image Segmentation", date: "Jan 2025", kind: "software" },
  { key: "workFlow", title: "ETL Workflow", date: "Jan 2025", kind: "software" },
  { key: "aiAgent", title: "Recipe Agent", date: "Sep 2024", kind: "software" },
  { key: "rhythmGame", title: "Rhythm Game", date: "Sep 2024", kind: "software" },
  { key: "tyson", title: "Tyson Foods", date: "Apr 2023", kind: "engineering" },
  { key: "unique", title: "Unique Industries", date: "Apr 2022", kind: "engineering" },
  { title: "Nutrition Coaching", date: "Apr 2023", kind: "personal" },
  { key: "beoDatMayTroi", title: "Bèo dạt mây trôi", date: "May 2025", kind: "personal" },
  { key: "riverFlowsInYou", title: "River Flows in You", date: "May 2025", kind: "personal" },
];

export const projectData = {
  queenBee: {
    title: "Find Queen Bee (Capstone)",
    date: "2025",
    summary: "A real-time queen bee detection system using YOLO, delivered through a Flutter mobile app.",
    category: "Featured Software Project",
    description: `Built a real-time queen bee detection system using YOLO.
Developed the training data pipeline, including image labeling and preprocessing.
Improved model performance through dataset refinement and model tuning, then deployed the model into a Flutter mobile app for iOS and Android.`,
    techStack: ["YOLO", "Python", "OpenCV", "Flutter", "iOS", "Android"],
    screenshots: [],
  },

  valentCalculator: {
    title: "Valent Calculator (Chemical Application Tool)",
    date: "2025",
    summary: "A cross-platform mobile app for agricultural chemical conversions and dosing calculations.",
    category: "Work",
    description: `Developed a cross-platform mobile application for agricultural chemical conversions and dosing calculations.
Built the app using React Native, Expo, and Zustand, with conversion logic for volume, weight, and concentration.
Integrated Firebase for product data management and set up CI/CD pipelines using EAS.`,
    techStack: ["React Native", "Expo", "Zustand", "Firebase", "EAS"],
    screenshots: [],
  },

  learningCompanion: {
    title: "Learning Companion Web App",
    date: "2025",
    summary: "A teacher-student platform with AI-enabled workflows and learning pattern analysis.",
    category: "GVSU Research",
    description: `Designed and developed a web platform for teachers and students with integrated AI features.
Built the application using Next.js, Zustand, ShadCN UI, and Supabase.
Developed features to collect and analyze student interaction data to identify unusual learning patterns in K-12 settings.`,
    techStack: ["Next.js", "Zustand", "ShadCN UI", "Supabase"],
    screenshots: [],
  },

  lacrosseDashboard: {
    title: "Lacrosse Dashboard (Digital Sign System)",
    date: "2025",
    summary: "A real-time game dashboard, packaged as a desktop app with serial communication support.",
    category: "Work",
    description: `Built a real-time dashboard using React to display live game statistics and scores.
Converted the web application into a desktop app using PyWebView based on customer requirements.
Implemented serial communication between the dashboard and microcontroller to enable real-time data updates.`,
    techStack: ["React", "PyWebView", "Serial Communication", "Microcontroller Integration"],
    screenshots: [],
  },

  fileManagement3d: {
    title: "3D File Management System (Engineering Lab Tool)",
    date: "2025",
    summary: "A desktop workflow manager for 3D printing queues, job states, and metadata tracking.",
    category: "Personal",
    description: `Developed a desktop application using Electron with a React-based UI to manage 3D printing workflows across queue, in-progress, and completed stages.
Implemented drag-and-drop file handling and metadata tracking using SQLite for efficient data management.
Designed the system to support lab operations and inventory tracking through structured file organization.`,
    techStack: ["Electron", "React", "SQLite", "Drag-and-Drop UI"],
    screenshots: [],
  },

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
    demoLink:"https://github.com/clcik-click/Web_Resume",
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

  beoDatMayTroi: {
    title: "Bèo dạt mây trôi",
    date: "May 2025",
    summary: "A piano performance recording.",
    category: "Personal",
    description: "A personal piano performance project.",
    techStack: ["Piano"],
    screenshots: [],
    demoLink: "https://www.youtube.com/watch?v=fUE4OO4I0iI",
  },

  riverFlowsInYou: {
    title: "River Flows in You",
    date: "May 2025",
    summary: "A piano performance recording.",
    category: "Personal",
    description: "A personal piano performance project.",
    techStack: ["Piano"],
    screenshots: [],
    demoLink: "https://www.youtube.com/watch?v=HpNSg68Kybo",
  },
} satisfies Record<string, Project>;

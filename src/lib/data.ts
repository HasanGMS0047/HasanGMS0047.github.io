// Everything here is real and verified. Never invent
// projects, figures, quotes or roles: ask instead.

export const site = {
  name: "Mohammad Mahadi Hasan",
  short: "Mahadi",
  brand: "Forest47",
  url: "https://hasangms0047.github.io",
  email: "m.mahadi.hasan0047@gmail.com",
  resume: "/Mohammad_Mahadi_Hasan_Resume.pdf",
  github: "https://github.com/HasanGMS0047",
  linkedin: "https://www.linkedin.com/in/mahadi-hasan-2aa0b5335",
  title: "Mohammad Mahadi Hasan: CSE student at UIU, Dhaka",
  description:
    "CSE student at United International University in Dhaka. A learner, a writer and a gamer: five projects built while learning, four of them live.",
};

export type Project = {
  id: string;
  title: string;
  line: string; // card title: a verb and an object
  body: string; // one or two sentences, with real details only
  image?: string; // live-site screenshot, without size suffix
  alt?: string;
  github: string;
  demo?: string;
  stack: string[];
  kind: string; // class, hackathon or personal
  reward?: string; // only where something real was won
  note?: string; // his own words on what he learned; left empty until he writes it
};

// Order is fixed: Wastopia, Life Dashboard, AlgoCanvas, Nestly, ClearPath.
export const projects: Project[] = [
  {
    id: "wastopia",
    kind: "Hackathon project, with Team Se7en",
    reward: "Best Emerging Team, Blockchain category",
    stack: ["Next.js","Hyperledger Fabric","Besu","Smart contracts","IoT"],
    title: "Wastopia",
    line: "Hackathon project: tracking waste on a blockchain",
    body: "Built with Team Se7en at UIU CSE FEST 2025. Smart bins log waste on Hyperledger Fabric and Besu, and a token rewards people for disposing of it properly.",
    image: "/images/work/wastopia",
    alt: "The Wastopia project page: an overview of the blockchain waste platform on a dark green ground",
    github: "https://github.com/HasanGMS0047/Project-Wastopia",
    demo: "https://project-wastopia-five.vercel.app",
  },
  {
    id: "life-dashboard",
    kind: "Personal project",
    stack: ["Next.js","TypeScript","Prisma","PostgreSQL","NextAuth"],
    title: "Life Dashboard",
    line: "Personal project: journal, moods, habits and goals",
    body: "A personal app for journaling, tracking mood and habits, setting goals and saving memories, made with Next.js, Prisma and PostgreSQL.",
    image: "/images/work/life-dashboard",
    alt: "The Life Dashboard start screen: a serif headline over an illustrated window with books and a lamp",
    github: "https://github.com/HasanGMS0047/life-dashboard",
    demo: "https://life-dashboard-eosin-one.vercel.app",
  },
  {
    id: "algocanvas",
    kind: "Personal project",
    stack: ["React","TypeScript","Vite","Canvas API","Vitest"],
    title: "AlgoCanvas",
    line: "Learning project: 27 algorithms, step by step",
    body: "Made to understand algorithms better. Each step comes with a plain-English explanation, and a guess-the-next-step mode tests what you picked up.",
    image: "/images/work/algocanvas",
    alt: "AlgoCanvas running bubble sort: ten blue bars on a dark canvas with step controls below",
    github: "https://github.com/HasanGMS0047/algocanvas",
    demo: "https://algocanvas-eight.vercel.app",
  },
  {
    id: "nestly",
    kind: "Group project",
    stack: ["Next.js","Supabase","JavaScript"],
    title: "Nestly",
    line: "Group project: student housing in Dhaka",
    body: "Verified shared housing near private university campuses, with the full cost shown, flatmate matching and a place to buy and sell second-hand household items.",
    image: "/images/work/nestly",
    alt: "The Nestly home page: a search for flats in Dhaka by zone, room type and budget",
    github: "https://github.com/HasanGMS0047/nestly-core",
    demo: "https://nestly-core.vercel.app",
  },
  {
    id: "clearpath",
    kind: "University project",
    stack: ["PHP","MySQL","JavaScript"],
    title: "ClearPath",
    line: "University project: clearance, online",
    body: "A university project that moves student clearance online, from request to approval to certificate, in PHP and MySQL.",
    github: "https://github.com/HasanGMS0047/ClearPath",
  },
];

export type Tool = { name: string; use: string; icon: string; w: number; h: number; shape?: string };

// the skills mosaic: four languages, then the tools by job (all real, all used in the projects above).
// Twelve cells: a 3 x 4 mosaic beside the AlgoCanvas test run.
export const tools: Tool[] = [
  { name: "JavaScript", use: "Language", icon: "javascript.svg", w: 40, h: 40 },
  { name: "TypeScript", use: "Language", icon: "typescript.svg", w: 40, h: 40 },
  { name: "Python", use: "Language", icon: "python.svg", w: 40, h: 40 },
  { name: "Java", use: "Language", icon: "java.svg", w: 30, h: 40, shape: "ic-tall" },
  { name: "Next.js", use: "Life Dashboard", icon: "nextjs.svg", w: 40, h: 40 },
  { name: "React", use: "AlgoCanvas, Nestly", icon: "react.svg", w: 40, h: 36 },
  { name: "Node.js", use: "REST APIs", icon: "nodejs.svg", w: 35, h: 40 },
  { name: "PHP", use: "ClearPath", icon: "php.svg", w: 40, h: 21, shape: "ic-wide" },
  { name: "Prisma", use: "Life Dashboard", icon: "prisma.svg", w: 33, h: 40, shape: "ic-ink" },
  { name: "MySQL", use: "ClearPath", icon: "mysql.svg", w: 40, h: 39 },
  { name: "PostgreSQL", use: "Life Dashboard", icon: "postgres.svg", w: 39, h: 40 },
  { name: "Supabase", use: "Nestly", icon: "supabase.svg", w: 39, h: 40 },
];

export const uiu = {
  lead: "I'm in the 3rd year (8th trimester) of a BSc in Computer Science and Engineering at United International University, where I'm also an undergraduate assistant for the Introduction to Computer Science course. Since September 2026 I've been a logistics executive at Eventors BD, handling logistics and stage coordination for live events. Right now I'm learning the basics of machine learning and getting more comfortable with programming by building small projects.",
  rows: [
    { name: "BSc in Computer Science and Engineering, UIU", value: "2024 to 2028" },
    { name: "Undergraduate Assistant, Introduction to Computer Science, UIU", value: "Fall 2026 to present" },
    { name: "Logistics Executive, Eventors BD", value: "Sep 2026 to present" },
    { name: "Best Emerging Team, UIU CSE FEST (with Team Se7en)", value: "Jan 2025" },
    { name: "HSC (Science), Sena Public School and College", value: "2023" },
  ],
};


// What he has used so far, from MY_PROFILE.md. None of it is mastered.
export const learning = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "HTML and CSS"] },
  { group: "Frameworks and tools", items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Git"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "Supabase"] },
  { group: "Also touched", items: ["Hyperledger Fabric and Besu (through Wastopia)", "Vitest", "Prisma"] },
];

// The three sides of the site. The level is real: the 8th trimester of the BSc.
export const sides = [
  { href: "/learner", numeral: "I", name: "Learner", line: "CSE student at UIU, eighth trimester. Five projects built while learning." },
  { href: "/writer", numeral: "II", name: "Writer", line: "A hobby. One fantasy story on the way." },
  { href: "/gamer", numeral: "III", name: "Gamer", line: "RPGs, chess and a folder of D&D characters." },
];

// Games are taken from what is installed on his PC, to be trimmed by him. Genres only.
export const games = [
  { name: "The Elder Scrolls V: Skyrim", genre: "Open-world RPG" },
  { name: "The Witcher 3: Wild Hunt", genre: "Open-world RPG" },
  { name: "Cyberpunk 2077", genre: "Open-world RPG" },
  { name: "Disco Elysium", genre: "Dialogue-driven RPG" },
  { name: "Kingdom Come: Deliverance", genre: "Historical RPG" },
  { name: "Stardew Valley", genre: "Farming sim" },
  { name: "Project Zomboid", genre: "Survival sandbox" },
  { name: "Risk of Rain 2", genre: "Co-op roguelike" },
];

// About page, laid out like a D&D stat block. Every line is a real fact.
export const statBlock = {
  top: [
    { k: "Studies", v: "BSc in Computer Science and Engineering, United International University, 2024 to 2028 (expected)" },
    { k: "Level", v: "8, as in eighth trimester (third year)" },
    { k: "Current posts", v: "Undergraduate assistant for Introduction to Computer Science at UIU; logistics executive at Eventors BD, since September 2026" },
  ],
  mid: [
    { k: "Languages", v: "English; German and Japanese at an elementary level; French, learning" },
    { k: "Tools used so far", v: "JavaScript, TypeScript, Python, Java, PHP, React, Next.js, MySQL, PostgreSQL" },
    { k: "Currently training", v: "Machine learning fundamentals" },
  ],
  feats: [
    { k: "Finalist", v: "Blockchain Olympiad Bangladesh 2025, with Team Se7en." },
    { k: "Third place", v: "Decentralized Edge Blockchain Competition, UIU Computer Club, January 2025, with Team Se7en." },
    { k: "Best Emerging Team", v: "Blockchain category, UIU CSE FEST 2025, won with Team Se7en for Wastopia." },
    { k: "Second speaker", v: "On the debate team at Sena Public School and College." },
    { k: "Chess", v: "Plays competitively." },
  ],
};

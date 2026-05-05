/**
 * Central content model — personalize all sections here.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** Lucide icon name key */
  icon: "github" | "mail";
};

export type Skill = {
  name: string;
  category: "frontend" | "backend" | "devops" | "other";
  /** 1–100 — adjust to match how you pitch in interviews */
  proficiency: number;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  /** Optional spotlight copy */
  highlight?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  /** e.g. 2024 — Present */
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  /** e.g. 2019 — 2023 */
  period: string;
  detail?: string;
};

/** ~13 years of delivery — tighten dates, employers, and locations when you revise your résumé */
export const siteConfig = {
  name: "Firdaus Zulkifli",
  title: "Engineer · Web · Mobile · AI",
  tagline:
    "Thirteen years shipping web apps on Vercel and beyond, React Native / Flutter and native Android & iOS (Java · Kotlin · Swift), plus Python & Django backends and AI-assisted features—whatever the roadmap demands.",
  email: "firdausjulkifli0729@gmail.com",
  locale: "en_US",
  url: import.meta.env.VITE_SITE_URL ?? "https://your-domain.vercel.app",
  twitterHandle: "@firdaus0729",
};

/** Direct messages — Discord has no stable public “DM URL” for usernames; we open the web app + copy the handle. */
export const messagingContacts = {
  discordUsername: "magic060729_73855",
  discordWebUrl: "https://discord.com/app",
  telegramUsername: "BFF_dev",
  telegramUrl: "https://t.me/BFF_dev",
} as const;

const gh = "https://github.com/firdaus0729";

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: gh, icon: "github" },
];

export const about = {
  paragraphs: [
    "I build and ship across the web, on mobile, and around AI workflows: product front ends, native and cross-platform apps, and Python / Django services when the product needs them.",
    "Recent work below is live on Vercel with source on GitHub—click through to demos and repositories you can inspect directly.",
    "Adjust the experience timeline and education block when you want the narrative to mirror your CV line-for-line.",
  ],
  highlights: [
    "Web · React / Next.js · Vercel deployments",
    "React Native · Flutter · Android & iOS · Java · Kotlin · Swift",
    "Python · Django · APIs · pragmatic AI where it fits",
  ],
};

/**
 * Tune percentages to match how you present in interviews.
 */
export const skills: Skill[] = [
  { name: "Web · React / Next.js · TypeScript", category: "frontend", proficiency: 100 },
  { name: "Web · UI systems · performance & responsive delivery", category: "frontend", proficiency: 95 },
  { name: "React Native · cross-platform apps", category: "frontend", proficiency: 100 },
  { name: "Flutter · Dart · material / adaptive layouts", category: "frontend", proficiency: 90 },
  { name: "Android · Java · Kotlin (native & tooling)", category: "frontend", proficiency: 90 },
  { name: "iOS · Swift · mobile platform conventions", category: "frontend", proficiency: 85 },
  { name: "Python · Django · REST services & integrations", category: "backend", proficiency: 94 },
  { name: "AI / automation · pragmatic ML & orchestration alongside products", category: "backend", proficiency: 88 },
  { name: "Datastores · typical SQL/NoSQL & caching patterns", category: "backend", proficiency: 100 },
  { name: "DevOps · CI/CD · hosting (e.g. Vercel pipelines)", category: "devops", proficiency: 100 },
];

/** Slug substring on GitHub repo path — drives project filters on the homepage */
export const projectPortfolioGroup = {
  product: ["salespal-frontend", "constructions", "nurse"] as const,
  interactive: ["webgl", "knowledge-run"] as const,
} as const;

export const projects: Project[] = [
  {
    title: "WebGL",
    description:
      "Browser-first graphics playground—mods, shaders, and modules tightened for smoother WebGL workloads (latest deploy fixes module wiring).",
    image: "/webgl.png",
    imageAlt: "Screenshot of the WebGL project UI",
    tags: ["WebGL", "Three.js", "Graphics", "Vercel"],
    liveUrl: "https://webgl-five-steel.vercel.app",
    githubUrl: `${gh}/webgl`,
    highlight: "Interactive · visual stack",
  },
  {
    title: "SalesPal",
    description:
      "Sales-facing frontend for calling and-assisted flows—bots, dialogs, and operator views iterated from production feedback.",
    image: "/salespal.png",
    imageAlt: "Screenshot of the SalesPal product interface",
    tags: ["React", "Sales tooling", "Vercel", "Voice UX"],
    liveUrl: "https://salespal-frontend.vercel.app",
    githubUrl: `${gh}/salespal-frontend`,
    highlight: "Customer & ops",
  },
  {
    title: "Constructions",
    description:
      "Operations web app for construction workflows—releases focused on dependable field updates and data corrections.",
    image: "/construction.png",
    imageAlt: "Screenshot of the Constructions operations dashboard",
    tags: ["React", "Operations", "Vercel", "Dashboard"],
    liveUrl: "https://constructions-gamma.vercel.app",
    githubUrl: `${gh}/constructions`,
    highlight: "Product & business",
  },
  {
    title: "Nurse",
    description:
      "Healthcare-oriented web portal—recent work hardened database integrations for reliable clinician and admin journeys.",
    image: "/benurse.png",
    imageAlt: "Screenshot of the nurse healthcare portal",
    tags: ["React", "Healthcare", "Vercel", "Postgres-ready"],
    liveUrl: "https://nurse-one.vercel.app",
    githubUrl: `${gh}/nurse`,
    highlight: "Care workflows",
  },
  {
    title: "Knowledge Run",
    description:
      "Gamified knowledge experience in the browser—quick iteration loops on UI and pacing for engaged sessions.",
    image: "/knowledge-run.png",
    imageAlt: "Screenshot of the Knowledge Run experience",
    tags: ["React", "Next.js-capable stack", "Vercel", "UX"],
    liveUrl: "https://knowledge-run.vercel.app",
    githubUrl: `${gh}/knowledge-run`,
    highlight: "Learning · engagement",
  },
];

/**
 * High-level eras — substitute real employers, titles, and dates when you revise your résumé.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Lead / Senior Engineer — Web · Mobile · AI-heavy products",
    company: "(Add employer or “Independent · clients”)",
    period: "2022 — Present",
    location: "Remote / hybrid · update",
    summary:
      "Driving feature delivery across web properties, companion mobile surfaces, and AI-supported flows—balancing velocity, regressions risk, and long-term ownership.",
    bullets: [
      "Replace with launches you owned, stacks you operated, and measurable outcomes.",
      "Add bullets for mobile milestones and any AI-assisted features shipped under your stewardship.",
    ],
  },
  {
    role: "Software Engineer · product teams",
    company: "(Earlier employer — revise)",
    period: "2016 — 2021",
    location: "",
    summary:
      "Deepening full-stack competence while expanding into mobile workloads and pragmatic automation where it helped stakeholders win time back.",
    bullets: [
      "Swap for concrete deliveries: platforms, integrations, migrations, mentoring, etc.",
    ],
  },
  {
    role: "Software developer — foundations",
    company: "(First roles / apprenticeship — revise)",
    period: "2013 — 2016",
    location: "",
    summary:
      "Formative years aligning delivery habits: shipping iteratively across web backends and early mobile exposure when projects demanded it.",
    bullets: [
      "Reflect your real trajectory here—courses, internships, breakthrough projects.",
    ],
  },
];

/** Update with institution, degree, graduation window, optionally certifications */
export const education: EducationItem[] = [
  {
    school: "Your institution (update)",
    degree: "Computer Science / Engineering / equivalent",
    period: "(Graduation window)",
    detail: "Add honours, coursework, certifications, bootcamps, or MOOC milestones you rely on professionally.",
  },
];

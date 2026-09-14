export type Tone = "ink" | "mute";

export type HeadlineSegment = {
  text: string;
  tone: Tone;
  /** Attach to the previous word with no space (used for the final period). */
  glue?: boolean;
};

export type Service = {
  number: string;
  icon: "target" | "cube" | "bricks" | "check";
  title: string;
  tagline: string;
  description: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  kind: string;
  href: string;
  /** Landscape screenshot in /public. Omit for a typographic cover. */
  image?: string;
  /** 3:4 screenshot used by the home-page cards. Falls back to `image`. */
  portrait?: string;
  /** CSS object-position for the screenshot crop. Defaults to "top". */
  objectPosition?: string;
  description: string;
  stack: string[];
};

export type Role = {
  title: string;
  period: string;
  /** e.g. "Full-time · Kathmandu · On-site" */
  meta?: string;
  summary?: string[];
  skills?: string[];
};

export type Experience = {
  company: string;
  url?: string;
  /** Square logo in /public/logos. Falls back to a monogram tile. */
  logo?: string;
  note?: string;
  roles: Role[];
};

export type Education = {
  school: string;
  degree: string;
  period?: string;
  note?: string;
};

export const site = {
  name: "Biplov Gautam",
  short: "Bip.",
  brand: "Built by Bip.",
  role: "Systems Design & AI Engineer",
  url: "https://biplovgautam.com.np",
  description:
    "Portfolio of Biplov Gautam, a systems design and AI engineer — Tech Lead at Gilver.ai and CTO of Laxmi Honey Industry — building retrieval-first, human-centered AI systems from architecture to production.",
  location: { city: "Kathmandu", country: "NP", timeZone: "Asia/Kathmandu" },

  headline: [
    { text: "Engineer", tone: "ink" },
    { text: "crafting intelligent products from", tone: "mute" },
    { text: "architecture to AI systems", tone: "ink" },
    { text: ".", tone: "mute", glue: true },
  ] satisfies HeadlineSegment[],

  intro:
    "Tech Lead and AI engineer at Gilver.ai, designing AI systems end-to-end — from architecture and data pipelines to the copilots and products people actually use.",

  infoShort:
    "I'm Biplov Gautam, a systems design and AI engineer based in Kathmandu, Nepal — Tech Lead at Gilver.ai and CTO & COO of Laxmi Honey Industry, building AI systems that feel like collaborators, not tools.",

  about: [
    "I'm Biplov Gautam, a systems design and AI engineer based in Kathmandu, Nepal. I build AI systems end-to-end — from architecture and data pipelines to the copilots, retrieval layers and products people use every day.",
    "Today I'm Tech Lead and AI Engineer at Gilver.ai, a market-visualisation and intelligence platform, where I started as DevOps engineer and now lead the systems and AI layer behind the terminal. I'm also CTO & COO of Laxmi Honey Industry, the honey brand whose AI-powered e-commerce store I've built and run since 2022.",
    "Before that I interned as an AI engineer at Amoeba Labs, led AI and then served as President of the IT Club of Softwarica, and worked part-time as an AI engineer for Recruitable ATS.",
    "I'm studying BSc (Hons) Computer Science with Artificial Intelligence at Coventry University. My focus is retrieval-first, context-aware AI: copilots that understand your workflow, evaluate their own outputs and improve through feedback — built to be affordable and reliable, not just impressive in a demo.",
    "Along the way I've shipped open projects like BiLearnHub, an open learning platform with a GenAI study space, and JawafAI, a context-aware Android messaging companion, and I write about applied AI and ML on Medium.",
    "I'm driven by curiosity and a belief that intelligent systems should feel like collaborators, not tools. If you're working on AI, automation or products that need to scale, let's talk.",
  ],

  emails: [
    { label: "Personal", address: "contact@biplovgautam.com.np" },
    { label: "Gilver.ai", address: "biplov@gilver.ai" },
    { label: "Laxmi Honey Industry", address: "cto@laxmibeekeeping.com.np" },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/biplovgautam/" },
    { label: "GitHub", href: "https://github.com/biplovgautam" },
    { label: "Medium", href: "https://madhavbiplov.medium.com/" },
  ],

  services: [
    {
      number: "001",
      icon: "target",
      title: "AI Systems",
      tagline: "Context is everything.",
      description:
        "LLM copilots, RAG pipelines and agents that understand your workflow and improve with feedback.",
    },
    {
      number: "002",
      icon: "cube",
      title: "System Design",
      tagline: "Architecture that scales.",
      description:
        "Backends, data pipelines and infrastructure designed to stay reliable and affordable as usage grows.",
    },
    {
      number: "003",
      icon: "bricks",
      title: "Full-stack Products",
      tagline: "From prototype to production.",
      description:
        "Next.js, FastAPI and vector databases shipped as real products people use every day, not just demos.",
    },
    {
      number: "004",
      icon: "check",
      title: "ML Research",
      tagline: "Measure before shipping.",
      description:
        "Evaluation, fine-tuning and experiments across NLP and computer vision to validate ideas with data.",
    },
  ] satisfies Service[],

  work: [
    {
      slug: "gilver",
      title: "Gilver.ai",
      kind: "AI · Market intelligence",
      href: "https://app.gilver.ai",
      image: "/work/gilver-app.webp",
      portrait: "/work/gilver-app-portrait.webp",
      objectPosition: "center",
      description:
        "A market-visualisation and intelligence platform that renders gold, bitcoin and the largest companies as living 3D monuments instead of charts. I lead the engineering and AI layer — architecture, data pipelines, deployment and the intelligence that turns raw market feeds into motion.",
      stack: ["Systems design", "AI", "Data pipelines", "DevOps", "TypeScript", "Python"],
    },
    {
      slug: "laxmi-honey",
      title: "Laxmi Honey Industry",
      kind: "E-commerce · AI support",
      href: "https://laxmibeekeeping.com.np",
      image: "/work/laxmi-home.webp",
      portrait: "/work/laxmi-portrait.webp",
      description:
        "An AI-powered e-commerce store for a Nepali honey brand — catalogue, ordering and AI customer support that handles interactions automatically. Built as a full-stack system since 2022 and run today as CTO & COO.",
      stack: ["Full-stack", "AI customer support", "E-commerce", "Deployment"],
    },
    {
      slug: "bilearnhub",
      title: "BiLearnHub",
      kind: "Open learning · GenAI",
      href: "https://bilearnhub.biplovgautam.com.np",
      image: "/work/bilearnhub.webp",
      portrait: "/work/bilearnhub-portrait.webp",
      description:
        "An open learning platform where anyone can learn or teach, with a GenAI study space that pulls session-aware context from a Pinecone vector database for precise answers.",
      stack: ["Next.js", "LangChain", "Pinecone", "FastAPI"],
    },
    {
      slug: "jawafai",
      title: "JawafAI",
      kind: "Android · LLM",
      href: "https://github.com/biplovgautam",
      description:
        "A unified, context-aware Android messaging companion that drafts replies with the conversation in mind. Built with Kotlin, Firebase and the Groq LLM API.",
      stack: ["Kotlin", "Firebase", "Groq"],
    },
  ] as WorkItem[],

  experience: [
    {
      company: "Gilver.ai",
      url: "https://www.gilver.ai/",
      logo: "/logos/gilver.svg",
      note: "Full-time · Kathmandu",
      roles: [
        {
          title: "Tech Lead, AI Engineer",
          period: "Mar 2026 — Present",
          summary: [
            "Leading the engineering and AI direction of Gilver.ai, a market-visualisation and intelligence platform that renders gold, bitcoin and stocks as living objects instead of charts — from the systems architecture and data pipelines behind the terminal to the intelligence layer that turns raw market feeds into analysis.",
          ],
        },
        {
          title: "DevOps Engineer",
          period: "Dec 2025 — Apr 2026",
          meta: "On-site",
          summary: [
            "Led end-to-end deployment of the full-stack system Modaash, migrating from Vercel and Render to a cost-efficient VPS on Hostinger using Coolify — reducing costs while improving performance.",
          ],
          skills: ["CI/CD", "DevOps tools"],
        },
      ],
    },
    {
      company: "Laxmi Honey Industry",
      url: "https://www.laxmibeekeeping.com.np/",
      logo: "/logos/laxmi.webp",
      note: "Self-employed · Kapilvastu, Lumbini",
      roles: [
        {
          title: "CTO & COO",
          period: "Nov 2025 — Present",
          summary: [
            "Running technology and operations for the honey brand — product, ordering and the AI-powered store. For business inquiries or collaboration: cto@laxmibeekeeping.com.np",
          ],
          skills: ["Project management", "Product design"],
        },
        {
          title: "Senior Software Engineer",
          period: "Jan 2022 — Nov 2025",
          meta: "Hybrid",
          summary: [
            "Developed the full-stack system with integrated AI-powered customer support, enabling automated interactions, improved user experience and scalable online operations.",
          ],
          skills: ["Software deployment", "Artificial intelligence"],
        },
      ],
    },
    {
      company: "Recruitable ATS",
      url: "https://www.recruitablehr.com/",
      logo: "/logos/recruitable.webp",
      note: "Part-time · Remote",
      roles: [{ title: "AI Engineer", period: "Apr 2026 — May 2026" }],
    },
    {
      company: "IT Club of Softwarica",
      url: "https://softwarica.edu.np/student-center/clubs/694bcb7388ab2322298fe529",
      logo: "/logos/softwarica-club.webp",
      note: "On-site · Kathmandu",
      roles: [
        {
          title: "President",
          period: "Nov 2025 — Apr 2026",
          summary: ["Led the club through two back-to-back flagship events, DFIR and TriKode."],
          skills: ["Leadership", "Team management"],
        },
        {
          title: "AI Lead",
          period: "Feb 2025 — Nov 2025",
          skills: ["Teamwork", "Event management"],
        },
      ],
    },
    {
      company: "Amoeba Labs",
      url: "https://www.amoebalabs.co/",
      logo: "/logos/amoeba.webp",
      note: "Internship · Kathmandu · Hybrid",
      roles: [
        {
          title: "AI Engineer Intern",
          period: "Feb 2025 — Nov 2025",
          skills: ["Artificial intelligence", "Python"],
        },
      ],
    },
  ] as Experience[],

  education: [
    {
      school: "Coventry University",
      degree: "BSc (Hons) Computer Science with Artificial Intelligence",
      period: "Apr 2024 — Apr 2027",
      note: "Activities and societies: IT Club of Softwarica — President.",
    },
    {
      school: "Liverpool Secondary School",
      degree: "Secondary education",
      period: "2021 — 2023",
    },
  ] as Education[],

  stack: [
    "Python",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "PyTorch",
    "scikit-learn",
    "LangChain",
    "Pinecone",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Coolify",
    "Azure",
    "Cloudflare",
    "n8n",
    "Linux",
  ],
};

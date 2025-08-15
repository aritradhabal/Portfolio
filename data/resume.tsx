import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aritra Dhabal",
  initials: "AD",
  url: "https://linkedin.com/aritra-dhabal",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/jalpaiguri",
  description:
    "AI & Software Engineer passionate about turning ideas into impactful products.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "Currently pursuing an internship at ISI Kolkata in Machine Learning, Algorithms, AI, and LLMs. Completed Summer School at IIIT Allahabad in Artificial Intelligence & Robotics. Winner of Smart India Hackathon 2024 for developing TrailMine (blockchain analytics). Worked with Scale AI subsidiaries as a contractor for Fortune 500 companies in RLHF and model training.",
  avatarUrl: "/me_small.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Data Visualization",
    "Data Science",
    "SQL",
    "Drizzle",
    "Linux",
    "WebSocket",
    "OpenAPI",
    "Git",
    "Docker",
    "Kubernetes",
    "C++",
    "Python",
    "Streamlit",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/aritra-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/aritra-dhabal",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dhabal-aritra",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/aritra-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    //Study and Experience
    {
      company: "ISI Kolkata",
      href: "",
      badges: ["Hybrid"],
      location: "Hybrid",
      title: "AI/ML & LLM Intern",
      logoUrl: "/isi.png",
      start: "Aug. 2025",
      end: "Present",
      description: "",
    },
    {
      company: "IIIT Allahabad",
      href: "",
      badges: ["Onsite"],
      location: "Offline",
      title: "Summer Trainee - ML, NLP & Robotics",
      logoUrl: "/IIIT.png",
      start: "June 2025",
      end: "July 2025",
      description: "",
    },
    {
      company: "Scale Ai",
      href: "",
      badges: ["Remote"],
      location: "Remote",
      title: "Contractual - Math & Coding Expert",
      logoUrl: "/Scale.png",
      start: "Nov 2024",
      end: "April 2025",
      description: "",
    },
    {
      company: "Jalpaiguri Govt. Engineering College",
      href: "",
      badges: ["Fulltime"],
      location: "Fulltime",
      title: "Bachelor of Technology",
      logoUrl: "/jgec.png",
      start: "Aug. 2023",
      end: "May 2027",
      description: "",
    },
  ],
  education: [],
  projects: [
    {
      title: "PrepPal",
      href: "#projects",
      dates: "Aug. 2025 - Present",
      active: true,
      description:
        "PrepPal turns syllabus PDFs or custom topics into personalized learning modules. Users can upload their syllabus or enter a topic, and PrepPal intelligently creates structured, tailored modules to suit their learning style.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Stripe",
        "Shadcn",
        "better-auth",
        "Google Cloud",
      ],
      links: [
        {
          type: "Website",
          href: "https://preppal-git.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradhabal/PrepPal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-74c3ed08843449e6ae368362f8db21ad.r2.dev/PrepPal.webm",
    },
    {
      title: "QuizFlow",
      href: "#projects",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "QuizFlow is an Ai-powered platform that transcribes YouTube videos, utilizes YouTube Data API and auto-generates quizzes, featuring secure authentication, cloud deployment, and real-time quiz sharing.",
      technologies: [
        "Python",
        "Gen Ai",
        "Supabase",
        "PostgreSQL",
        "Google Cloud",
        "OAuth2.0",
        "Streamlit",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://quizflow.me",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradhabal/QuizFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-74c3ed08843449e6ae368362f8db21ad.r2.dev/quizflow.webm",
    },
    {
      title: "TrailMine",
      href: "#projects",
      dates: "Nov. 2024 - Dec. 2024",
      active: true,
      description:
        "TrailMine is a real-time blockchain analytics tool built with Streamlit to uncover hidden transaction patterns across multiple blockchains. It features visualizations, deep transaction tracing, and interactive dashboards to help make sense of complex blockchain data.",
      technologies: [
        "Python",
        "Neo4j",
        "Firebase",
        "Google Cloud",
        "Streamlit",
        "Docker",
        "Moralis",
        "Pandas",
        "Numpy",
      ],
      links: [
        {
          type: "Website",
          href: "https://trailmine-d059837d2f27.herokuapp.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aritradhabal/TrailMine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-74c3ed08843449e6ae368362f8db21ad.r2.dev/trailmine.webm",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "Sept. 2024 - Dec. 2024",
      location: "IIT Bhubaneswar",
      description:
        "Winner of Smart India Hackathon 2024 for developing a blockchain analysis platform, TrailMine for the Narcotics Control Bureau, enabling deep transaction tracing and real-time investigative dashboards.",
      image: "sih.png",
      win: true,
      mlh: "",
      links: [
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aritradhabal/TrailMine",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sih.gov.in/sih2024/sih2024-grand-finale-result#:~:text=Tamil%20Nadu-,Indian%20Institute%20of%20Technology%2C%20Bhubaneshwar,Jalpaiguri%20Govt.%20Engineering%20College%20101,-Jalpaiguri",
        },
        {
          title: "Live Stream",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/live/Y-ZQZgt4nFc?si=B0rdaAr5SqCuWMXG&t=1047",
        },
      ],
    },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
  ],
} as const;

export const siteConfig = {
  name: "Muhammad Faizan",
  title: "Muhammad Faizan | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Building scalable SaaS products and high-performance web applications.",
  url: "https://muhammadfaizan.dev",
  email: "faizanmustafa884@gmail.com",
  phone: "+92 300 8842674",
  whatsapp: "923008842674",
  whatsappUrl:
    "https://wa.me/923008842674?text=Hello%20Muhammad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
  location: "Lahore, Pakistan",
  github: "https://github.com/faizanmustafa1",
  linkedin: "https://linkedin.com/in/muhammad-faizan-dev",
  resumeUrl: "/assets/Resume_(Muhammad Faizan).pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Firebase", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "SEO",
    skills: [
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Google Search Console",
      "Google Analytics",
      "Core Web Vitals",
    ],
  },
] as const;

export const projects = [
  {
    id: "sportsbook",
    title: "SportsBook",
    featured: true,
    description:
      "A modern SaaS platform for booking indoor sports facilities with separate dashboards for players and owners, secure authentication, real-time booking, AI-powered recommendations, online payments, and booking management.",
    image: "/assets/sportbook.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Role-based dashboards for players, owners & admins",
      "SSR for improved SEO and faster page loads",
      "Stripe payment integration",
      "Automated email notifications",
      "REST API backend with MongoDB",
    ],
    liveUrl: "https://sports-book-psi.vercel.app/",
    githubUrl: null,
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone",
    featured: false,
    description:
      "A fully responsive streaming homepage with dynamic hero banner and fluid, horizontally scrolling media rows optimized for high-performance scrolling.",
    image: "/assets/netflix-clone.png",
    technologies: ["Next.js", "Tailwind CSS", "REST APIs"],
    features: [
      "Dynamic hero banner with media rows",
      "Third-party REST API integration",
      "Optimized component lifecycles",
      "Minimal layout shifts across devices",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/faizanmustafa1/Netflix-Clone",
  },
  {
    id: "steakaway",
    title: "SteakAway Clone",
    featured: false,
    description:
      "A mobile food delivery application featuring real-time order tracking, secure authentication, and seamless database synchronization.",
    image: "/assets/steakaway.jpeg",
    technologies: ["React Native", "Supabase"],
    features: [
      "Real-time order tracking",
      "Secure user authentication",
      "Persistent storage for user accounts",
      "Optimized state management",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/faizanmustafa1/Steakaway-Clone",
  },
  {
    id: "car-dealership",
    title: "Car Dealership Management System",
    featured: false,
    description:
      "A comprehensive management system for car dealerships with inventory tracking, customer management, and sales workflow automation.",
    image: "/assets/car-dealership.svg",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Inventory management dashboard",
      "Customer relationship tracking",
      "Sales workflow automation",
      "Admin panel with analytics",
    ],
    liveUrl: null,
    githubUrl: null,
  },
] as const;

export const education = [
  {
    id: "comsats",
    institution: "COMSATS University Islamabad",
    location: "Lahore, Pakistan",
    degree: "BS in Computer Science",
    period: "Sep 2022 – July 2026",
    description:
      "Computer Science graduate with relevant coursework in Data Structures, OOP, Database Systems, Mobile App Development, Parallel & Distributed Computing, and Machine Learning.",
    coursework: [
      "Data Structures (Java)",
      "Object-Oriented Programming",
      "Database Systems",
      "Mobile App Development",
      "Parallel and Distributed Computing",
      "Computer Vision & Machine Learning",
    ],
  },
  {
    id: "pgc",
    institution: "Punjab Group of Colleges",
    location: "Okara, Pakistan",
    degree: "FSc Pre-Engineering",
    period: "Aug 2020 – Aug 2022",
    description: "Completed intermediate studies in Pre-Engineering.",
    coursework: [],
  },
] as const;

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "email" },
] as const;

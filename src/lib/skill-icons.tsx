import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPagespeedinsights,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export interface SkillIconConfig {
  icon: IconType;
  color: string;
}

const skillIconMap: Record<string, SkillIconConfig> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "VS Code": { icon: TbBrandVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "Technical SEO": { icon: SiPagespeedinsights, color: "#3B82F6" },
  "On-page SEO": { icon: SiGooglesearchconsole, color: "#60A5FA" },
  "Off-page SEO": { icon: SiGoogleanalytics, color: "#4285F4" },
  "Google Search Console": { icon: SiGooglesearchconsole, color: "#458CF5" },
  "Google Analytics": { icon: SiGoogleanalytics, color: "#E37400" },
  "Core Web Vitals": { icon: SiPagespeedinsights, color: "#34D399" },
};

const fallback: SkillIconConfig = {
  icon: SiReact,
  color: "#3B82F6",
};

export function getSkillIcon(skillName: string): SkillIconConfig {
  return skillIconMap[skillName] ?? fallback;
}

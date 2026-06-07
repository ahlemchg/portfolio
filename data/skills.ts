// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "Cloud/DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
  ],
  "Frameworks/Libraries": [
    { name: "React.js", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Node.js", category: "Frameworks/Libraries", logoKey: "nodejs" },
    { name: "React Native", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Express.js", category: "Frameworks/Libraries", logoKey: "express" },
    { name: "Tailwind CSS", category: "Frameworks/Libraries", logoKey: "tailwindcss" },
  ],
  "Cloud/DevOps": [
    { name: "MongoDB", category: "Cloud/DevOps", logoKey: "mongodb" },
    { name: "PostgreSQL", category: "Cloud/DevOps", logoKey: "postgresql" },
  ],
  Concepts: [
    { name: "Git", category: "Concepts", logoKey: "git" },
    { name: "GitHub", category: "Concepts", logoKey: "github" },
    { name: "Teamwork", category: "Concepts", logoKey: "none" },
    { name: "Autonomy", category: "Concepts", logoKey: "none" },
    { name: "Project Management", category: "Concepts", logoKey: "none" },
    { name: "Tech Watch", category: "Concepts", logoKey: "none" },
  ],
};

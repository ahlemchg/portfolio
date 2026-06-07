export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "licence-ing-si",
    title: "🎓 Licence en Ingénierie des Systèmes d'Information — Mention Bien, Université d'Alger 1",
    icon: "book-open",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "cert-fullstack-js",
    title: "💻 Certification Full Stack JavaScript — Code213, Alger (2026)",
    icon: "code",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
];

export const achievementTags = ["Education", "Certification"];

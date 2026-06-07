export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "alger1",
    degree: "Licence en Ingénierie des Systèmes d'Information — Mention Bien",
    institution: "Université d'Alger 1",
    location: "Algiers, Algeria",
    startDate: "",
    endDate: "",
  },
  {
    id: "lycee",
    degree: "Baccalauréat Scientifique — Mention Bien",
    institution: "Lycée Abdelmoumen",
    location: "",
    startDate: "",
    endDate: "",
  },
];

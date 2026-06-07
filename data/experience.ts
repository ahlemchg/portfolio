// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  {
    id: "naftal-fullstack-intern",
    title: "Full Stack Developer — Intern",
    company: "NAFTAL — Centre Médico-Social",
    location: "Algiers, Algeria",
    startDate: "February 2026",
    endDate: "May 2026",
    description:
      "Led the end-to-end design and development of a complete medical management web application for NAFTAL's Social Medical Center, covering the full software lifecycle from requirements analysis to production deployment.",
    achievements: [
      "Designed and built the full application using React.js (front-end), Node.js/Express.js (back-end), and PostgreSQL with Prisma ORM (database)",
      "Produced complete UML documentation (use case, sequence, and class diagrams) via StarUML",
      "Digitalized all manual patient flow processes: appointments, consultations, medical records, and prescriptions",
      "Developed an automated PDF generation module for prescriptions, reports, and medical summaries",
      "Integrated an automated email notification system (Nodemailer) for patient appointments and results",
      "Implemented JWT authentication with role-based access control (doctor, nurse, administrator)",
    ],
    type: "work",
  },
];

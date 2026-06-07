export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  images: string[];
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "nafhealth",
    title: "NafHealth Platform",
    description:
      "A centralized medical-social center management platform replacing paper-based workflows with a role-based digital system.",
    longDescription:
      "Built for Naftal's Dream AI Hackathon 2025, NafHealth is a full-stack desktop PWA combining role-based dashboards for reception, doctors, and the laboratory on a shared PostgreSQL database over LAN. The platform eliminates paper registers, automates document generation, and enables real-time coordination between all center staff — from patient admission to validated lab results.",
    technologies: [
      "React 19",
      "Vite 7.2",
      "Electron 40",
      "Tailwind CSS 4",
      "React Router 6",
      "Recharts 3.8",
      "Node.js",
      "Express 5.2",
      "PostgreSQL",
      "Prisma ORM 7.6",
      "@react-pdf/renderer 4.5",
      "JWT",
      "Bcrypt",
    ],
    achievements: [
      "Built a production-ready desktop PWA with 4 role-based workspaces (Admin, Receptionist, Doctor, Lab) and 14 API endpoints on a LAN client-server architecture",
      "Automated PDF generation for prescriptions, lab results, referral letters, and blood group cards with @react-pdf/renderer",
      "Implemented real-time waiting room calling system with ticket management and live patient queue display across multiple screens",
      "Integrated automated email delivery of validated lab results and reagent stock tracking with activity dashboards powered by Recharts",
    ],
    images: [
      "/images/nafhealth1.png",
      "/images/nafhealth2.png",
      "/images/nafhealth3.png",
      "/images/nafhealth11.png",
      "/images/nafhealth5.png",
      "/images/nafhealth6.png",
      "/images/nafhealth.jpg",
    ],
    liveUrl: undefined,
    featured: true,
  },
  {
    id: "hubmarket",
    title: "HubMarket",
    description:
      "A full-featured electronics e-commerce platform with product listings, flash deals with countdown timer, shopping cart, and multi-step checkout flow.",
    longDescription:
      "HubMarket is a responsive electronics store built with modern web technologies, featuring an intuitive shopping experience from product discovery to order confirmation.",
    technologies: [
      "React 19",
      "Vite 7.2",
      "Tailwind CSS 4",
      "React Router 6",
      "Node.js",
      "Express 5.2",
      "PostgreSQL",
      "Prisma ORM 7.6",
      "JWT",
      "Bcrypt",
    ],
    achievements: [
      "Built a responsive electronics store with category navigation, wishlist, search, and real-time cart updates",
      'Implemented a "Today\'s Hot Deals" section with live countdown timer and sale badges',
      "Designed a 3-step checkout flow: Shopping Cart → Payment & Delivery → Order Received, with coupon code support",
      "Integrated hero banner carousel with featured product promotions (MacBook, AirPods Pro 3, PS5 VR)",
    ],
    images: ["/images/hub.png", "/images/hub1.png", "/images/hub2.png", "/images/hub4.png"],
    liveUrl: undefined,
    featured: true,
  },
];

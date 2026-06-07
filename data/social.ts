export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/ahlemchg",
    icon: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahlem-chegroune-1923bb3b0",
    icon: "linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:chegrouneahlem@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+213780209309",
    icon: "phone",
  },
];

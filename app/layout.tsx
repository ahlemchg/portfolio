import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chegroune Ahlem | Full Stack Developer",
  description:
    "Full Stack Developer building complete web applications — from intuitive front-end interfaces to robust back-end architectures. Certified Full Stack JavaScript.",
  metadataBase: new URL("https://example.com"),

  // Basic metadata
  applicationName: "Chegroune Ahlem Portfolio",
  authors: [{ name: "Chegroune Ahlem" }],
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
  ],

  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Chegroune Ahlem | Full Stack Developer",
    description:
      "Full Stack Developer building complete web applications — from intuitive front-end interfaces to robust back-end architectures.",
    siteName: "Chegroune Ahlem",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chegroune Ahlem - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}

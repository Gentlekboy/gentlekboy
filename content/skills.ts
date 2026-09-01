import { Layers, Database, Rocket, type LucideIcon } from "lucide-react";

export interface SkillGroup {
  area: string;
  icon: LucideIcon;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    area: "Frontend",
    icon: Layers,
    items: ["React Native", "Expo", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    area: "Backend & Data",
    icon: Database,
    items: ["Firebase", "Supabase", "PostgreSQL", "Node.js"],
  },
  {
    area: "Shipping & Tools",
    icon: Rocket,
    items: [
      "EAS Build",
      "App Store release",
      "Play Store release",
      "Electron",
      "Google Maps SDK",
    ],
  },
];

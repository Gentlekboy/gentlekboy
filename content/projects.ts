export type ProjectStatus = "shipped" | "ongoing";

export interface Project {
  slug: string;
  title: string;
  role: string;
  status: ProjectStatus;
  stage?: string;
  blurb: string;
  tags: string[];
  links?: { live?: string; repo?: string };
}

// MOCK DATA — replace with real projects
export const projects: Project[] = [
  {
    slug: "ledgerline",
    title: "Ledgerline",
    role: "Built solo",
    status: "shipped",
    blurb:
      "A personal-finance tracker that turns messy bank exports into clear monthly insights. 4k+ downloads.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    links: { live: "#", repo: "#" },
  },
  {
    slug: "relay-health",
    title: "Relay Health",
    role: "Core contributor",
    status: "shipped",
    blurb:
      "Appointment and records platform for small clinics; cut patient check-in time by 60%.",
    tags: ["React", "Node.js", "Supabase"],
    links: { live: "#" },
  },
  {
    slug: "forge-ci",
    title: "Forge CI",
    role: "Maintainer",
    status: "shipped",
    blurb: "Open-source CI pipeline templates adopted by 30+ repos.",
    tags: ["GitHub Actions", "Docker", "Bash"],
    links: { repo: "#" },
  },
  {
    slug: "wavelength",
    title: "Wavelength",
    role: "Built solo",
    status: "ongoing",
    stage: "Private beta",
    blurb: "A calmer way for remote teams to share status without meetings.",
    tags: ["Next.js", "Realtime"],
  },
  {
    slug: "atlas-notes",
    title: "Atlas Notes",
    role: "Built solo",
    status: "ongoing",
    stage: "Design phase",
    blurb: "Local-first notes with a map-based canvas. More soon.",
    tags: ["Local-first", "CRDTs"],
  },
];

export const shippedProjects = projects.filter((p) => p.status === "shipped");
export const ongoingProjects = projects.filter((p) => p.status === "ongoing");

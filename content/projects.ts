export type ProjectStatus = "shipped" | "ongoing";

export interface Project {
  slug: string;
  title: string;
  role: string;
  status: ProjectStatus;
  stage?: string;
  blurb: string;
  tags: string[];
  links?: {
    website?: string;
    appStore?: string;
    playStore?: string;
    admin?: string;
    merchantPortal?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "etnowe",
    title: "Etnowe",
    role: "Contributor",
    status: "shipped",
    blurb:
      "An African & Caribbean grocery and restaurant delivery platform: customer and merchant apps, a merchant support portal, and an admin dashboard. I worked across the whole stack fixing bugs and building order placement and refund features.",
    tags: ["Next.js", "React Native"],
    links: {
      website: "https://etnowe.com/",
      appStore: "https://apps.apple.com/us/app/etnowe-grocery-delivery/id1531814543",
      playStore:
        "https://play.google.com/store/apps/details?id=com.teyematics.etnowe",
      admin: "https://admin.etnowe.com/",
      merchantPortal: "https://www.support.etnowe.com/",
    },
  },
  {
    slug: "social-contract",
    title: "Social Contract",
    role: "Frontend (solo)",
    status: "shipped",
    blurb:
      "A relationship app built on explicit standards and commitments instead of swipe mechanics. Design and backend by a small team. Live on iOS and Android.",
    tags: ["React Native", "Expo", "Firebase"],
    links: {
      website: "https://socialcontractapp.com/",
      appStore: "https://apps.apple.com/ng/app/social-contract/id6759468493",
      playStore:
        "https://play.google.com/store/apps/details?id=com.socialcontract&pcampaignid=web_share",
    },
  },
  {
    slug: "coc-odogunyan",
    title: "COC Odogunyan",
    role: "Full-stack (solo)",
    status: "ongoing",
    stage: "Active development",
    blurb:
      "A full platform for a church community: public website, a secretariat admin portal for membership and duty rosters, and an offline Bible quiz app.",
    tags: ["Next.js", "React", "Supabase", "Electron"],
  },
  {
    slug: "fikowo",
    title: "Fikowo",
    role: "Full-stack (solo)",
    status: "ongoing",
    stage: "Early development",
    blurb:
      "A kakeibo-inspired budgeting app for young Nigerian professionals, built around salary cycles instead of calendar months.",
    tags: ["Expo", "Next.js", "Supabase"],
  },
  {
    slug: "buxe",
    title: "Buxe",
    role: "Full-stack (solo)",
    status: "ongoing",
    stage: "Active development",
    blurb:
      "A ride-hailing app with rider and driver apps, live trip tracking, in-app payments, and a trusted-contacts safety feature.",
    tags: ["Expo", "Firebase", "Google Maps"],
  },
  {
    slug: "saroni",
    title: "Saroni",
    role: "Frontend (solo)",
    status: "ongoing",
    stage: "Pre-launch",
    blurb:
      "A symptom tracker for lupus and chronic illness: daily logging, flare tracking, and an at-a-glance health dashboard. Design and backend by a small team.",
    tags: ["React Native"],
  },
];

export const shippedProjects = projects.filter((p) => p.status === "shipped");
export const ongoingProjects = projects.filter((p) => p.status === "ongoing");

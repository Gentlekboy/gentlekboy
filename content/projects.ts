export type ProjectStatus = "shipped" | "ongoing";
export type ProjectBadge = "development" | "testing" | "deployment" | "live";
export type Platform = "web" | "mobile" | "desktop";

export interface Project {
  slug: string;
  title: string;
  role: string;
  status: ProjectStatus;
  badge: ProjectBadge;
  featured?: boolean;
  platforms: Platform[];
  stage?: string;
  blurb: string;
  tags: string[];
  image?: string;
  links?: {
    website?: string;
    appStore?: string;
    playStore?: string;
    admin?: string;
    merchantPortal?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "social-contract",
    title: "Social Contract",
    role: "Frontend (solo)",
    status: "shipped",
    badge: "live",
    featured: true,
    platforms: ["mobile"],
    blurb:
      "A relationship app built on explicit standards and commitments instead of swipe mechanics. Design and backend by a small team. Live on iOS and Android.",
    tags: ["React Native", "Expo", "Firebase"],
    image: "/projects/social-contract.jpg",
    links: {
      website: "https://socialcontractapp.com/",
      appStore: "https://apps.apple.com/ng/app/social-contract/id6759468493",
      playStore:
        "https://play.google.com/store/apps/details?id=com.socialcontract&pcampaignid=web_share",
    },
  },
  {
    slug: "etnowe",
    title: "Etnowe",
    role: "Contributor",
    status: "shipped",
    badge: "live",
    featured: true,
    platforms: ["mobile"],
    blurb:
      "An African & Caribbean grocery and restaurant delivery platform: customer and merchant mobile apps for browsing, ordering, and fulfilling orders on the go. I fixed bugs and built order placement and refund features across the stack.",
    tags: ["React Native"],
    image: "/projects/etnowe.jpg",
    links: {
      appStore: "https://apps.apple.com/us/app/etnowe-grocery-delivery/id1531814543",
      playStore:
        "https://play.google.com/store/apps/details?id=com.teyematics.etnowe",
    },
  },
  {
    slug: "etnowe-website",
    title: "Etnowe Website",
    role: "Contributor",
    status: "shipped",
    badge: "live",
    platforms: ["web"],
    blurb:
      "The public marketing site for Etnowe: the storefront for the brand, app downloads, and merchant sign-up.",
    tags: ["Next.js"],
    image: "/projects/etnowe-website.jpg",
    links: {
      website: "https://etnowe.com/",
    },
  },
  {
    slug: "etnowe-support",
    title: "Etnowe Support",
    role: "Contributor",
    status: "shipped",
    badge: "live",
    platforms: ["web"],
    blurb:
      "The merchant support portal for Etnowe: where store owners sign in to get help running their storefront.",
    tags: ["Next.js"],
    image: "/projects/etnowe-support.jpg",
    links: {
      merchantPortal: "https://www.support.etnowe.com/",
    },
  },
  {
    slug: "etnowe-admin",
    title: "Etnowe Admin",
    role: "Contributor",
    status: "shipped",
    badge: "live",
    platforms: ["web"],
    blurb:
      "The internal admin dashboard for Etnowe: managing stores, orders, and refunds across the platform.",
    tags: ["Next.js"],
    image: "/projects/etnowe-admin.jpg",
    links: {
      admin: "https://admin.etnowe.com/",
    },
  },
  {
    slug: "buxe",
    title: "Buxe",
    role: "Full-stack (solo)",
    status: "shipped",
    badge: "live",
    platforms: ["mobile"],
    blurb:
      "A ride-hailing app for riders: book trips, track drivers live, pay in-app, and share trip status with trusted contacts. Live on the App Store.",
    tags: ["Expo", "Firebase", "Google Maps"],
    image: "/projects/buxe.jpg",
    links: {
      appStore: "https://apps.apple.com/ng/app/buxe/id6749169171",
    },
  },
  {
    slug: "buxe-driver",
    title: "Buxe Driver",
    role: "Full-stack (solo)",
    status: "shipped",
    badge: "live",
    platforms: ["mobile"],
    blurb:
      "The driver-side app for Buxe: accepting trips, live navigation, and earnings tracking. Live on the App Store.",
    tags: ["Expo", "Firebase", "Google Maps"],
    image: "/projects/buxe-driver.jpg",
    links: {
      appStore: "https://apps.apple.com/ng/app/buxe-driver/id6753883343",
    },
  },
  {
    slug: "sedl",
    title: "Sedl",
    role: "Frontend (solo)",
    status: "shipped",
    badge: "live",
    platforms: ["mobile"],
    blurb:
      "A blockchain-based money transfer app: converts currency to USDC for near-instant, low-fee wallet-to-wallet transfers, with facial recognition and two-factor security. Live on iOS and Android.",
    tags: ["React Native", "Expo", "Firebase"],
    image: "/projects/sedl.jpg",
    links: {
      website: "https://sedlapp.com/",
      appStore: "https://apps.apple.com/ng/app/sedl-app/id6744427872",
      playStore: "https://play.google.com/store/apps/details?id=com.sedlapp.sedlapp",
    },
  },
  {
    slug: "coc-odogunyan",
    title: "COC Odogunyan",
    role: "Full-stack (solo)",
    status: "ongoing",
    badge: "development",
    stage: "Active development",
    platforms: ["web", "desktop"],
    blurb:
      "A full platform for a church community: public website, a secretariat admin portal for membership and duty rosters, and an offline Bible quiz app.",
    tags: ["Next.js", "React", "Supabase", "Electron"],
  },
  {
    slug: "fikowo",
    title: "Fikowo",
    role: "Full-stack (solo)",
    status: "ongoing",
    badge: "development",
    stage: "Early development",
    platforms: ["mobile", "web"],
    blurb:
      "A kakeibo-inspired budgeting app for young Nigerian professionals, built around salary cycles instead of calendar months.",
    tags: ["Expo", "Next.js", "Supabase"],
  },
  {
    slug: "saroni",
    title: "Saroni",
    role: "Frontend (solo)",
    status: "ongoing",
    badge: "testing",
    stage: "Pre-launch",
    platforms: ["mobile"],
    blurb:
      "A symptom tracker for lupus and chronic illness: daily logging, flare tracking, and an at-a-glance health dashboard. Design and backend by a small team.",
    tags: ["React Native"],
  },
];

export const shippedProjects = projects.filter((p) => p.status === "shipped");
export const ongoingProjects = projects.filter((p) => p.status === "ongoing");
export const featuredProjects = projects.filter((p) => p.featured);

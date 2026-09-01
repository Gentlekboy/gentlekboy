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
    slug: "vaf-eligibility-calculator",
    title: "VAF Eligibility Calculator",
    role: "Frontend Engineer",
    status: "shipped",
    badge: "live",
    platforms: ["web"],
    blurb:
      "A multi-step eligibility calculator for Stanbic IBTC's Vehicle Asset Finance (car loan) product: walks customers through personal, employment, vehicle, and financial details, then returns an instant eligibility decision. Built as an Angular SPA embedded in the bank's website.",
    tags: ["Angular", "TypeScript", "RxJS"],
    links: {
      website: "https://mynetworth.stanbicibtcbank.com/vafEligibilityCalculator",
    },
  },
  {
    slug: "networth-tracker",
    title: "Net Worth Tracker",
    role: "Frontend Engineer",
    status: "shipped",
    badge: "live",
    platforms: ["web"],
    blurb:
      "A personal finance dashboard for Stanbic IBTC customers: log assets and liabilities and track net worth over time, with downloadable and emailed reports. Built as an Angular SPA and the host site for the VAF Eligibility Calculator.",
    tags: ["Angular", "TypeScript", "RxJS"],
    image: "/projects/networth-tracker.jpg",
    links: {
      website: "https://mynetworth.stanbicibtcbank.com",
    },
  },
  {
    slug: "branch-locator",
    title: "Branch Locator",
    role: "Frontend Engineer",
    status: "shipped",
    badge: "live",
    platforms: ["mobile"],
    blurb:
      "A branch, ATM, agent, and affluent lounge locator for the Stanbic IBTC mobile app: real-time distance and availability status, with quick actions like scheduling a visit or getting directions.",
    tags: ["React Native", "Google Maps SDK"],
    image: "/projects/branch-locator.jpg",
    links: {
      appStore: "https://apps.apple.com/ng/app/stanbic-ibtc-mobile-3-0/id6477922208",
      playStore: "https://play.google.com/store/apps/details?id=com.StanbicMobile",
    },
  },
  {
    slug: "spend-and-save",
    title: "Spend & Save",
    role: "Frontend Engineer",
    status: "shipped",
    badge: "live",
    platforms: ["mobile"],
    blurb:
      "An automated micro-savings feature for the Stanbic IBTC mobile app: sets aside a percentage of every transaction into a savings balance, with an adjustable rate and full transaction history.",
    tags: ["React Native"],
    image: "/projects/spend-and-save.jpg",
    links: {
      appStore: "https://apps.apple.com/ng/app/stanbic-ibtc-mobile-3-0/id6477922208",
      playStore: "https://play.google.com/store/apps/details?id=com.StanbicMobile",
    },
  },
  {
    slug: "n1-savings-challenge",
    title: "N1 Savings Challenge",
    role: "Frontend Engineer",
    status: "shipped",
    badge: "live",
    platforms: ["web"],
    blurb:
      "A gamified micro-savings web experience for Stanbic IBTC: starts users at ₦1 a day and scales up, with a plan builder, projected returns, and a dashboard tracking progress toward a savings goal.",
    tags: ["Angular"],
    links: {
      website: "https://mysavingschallenge.stanbicibtcbank.com",
    },
    image: "/projects/n1-savings-challenge.jpg",
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

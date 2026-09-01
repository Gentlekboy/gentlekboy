"use client";

import type { Project, ProjectBadge } from "@/content/projects";

const badgeColorVar: Record<ProjectBadge, string> = {
  development: "var(--status-development)",
  testing: "var(--status-testing)",
  deployment: "var(--status-deployment)",
  live: "var(--status-live)",
};

// Solid, warm, low-alpha tints — same treatment as the site's existing
// accent-subtle pills, just spread across a warm palette so each chip
// reads as a distinct color without leaving the theme.
const warmTints = [
  "rgba(232,161,68,0.16)", // amber (accent)
  "rgba(230,126,34,0.16)", // orange
  "rgba(212,175,55,0.16)", // gold
  "rgba(196,93,58,0.16)", // rust
  "rgba(217,83,79,0.16)", // warm red
  "rgba(160,82,45,0.16)", // sienna
  "rgba(204,153,51,0.16)", // ochre
  "rgba(184,115,51,0.16)", // copper
  "rgba(139,94,60,0.16)", // warm brown
  "rgba(237,158,115,0.16)", // peach
  "rgba(210,105,90,0.16)", // dusty rose
  "rgba(199,161,41,0.16)", // mustard
  "rgba(178,58,46,0.16)", // brick
  "rgba(224,168,72,0.16)", // honey
];

export default function ProjectChip({
  project,
  index,
  selected,
  onClick,
}: {
  project: Project;
  index: number;
  selected: boolean;
  onClick: () => void;
}) {
  const dotColor = badgeColorVar[project.badge];
  const tint = warmTints[index % warmTints.length];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{ backgroundColor: tint }}
      className={`inline-flex items-center gap-2 rounded-[var(--radius-md)] border px-4 py-2.5 text-sm font-medium transition-all duration-[var(--duration-fast)] ${
        selected
          ? "border-accent-border text-accent shadow-[var(--glow-accent)]"
          : "border-border text-text-primary hover:-translate-y-0.5 hover:[border-color:var(--accent-border)]"
      }`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      {project.title}
    </button>
  );
}

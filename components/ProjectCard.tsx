import { Globe, Smartphone, LayoutDashboard, Store, GitFork, FolderGit2 } from "lucide-react";
import type { Project, ProjectBadge } from "@/content/projects";
import ProjectImage from "./ProjectImage";

const badgeCopy: Record<ProjectBadge, string> = {
  development: "In development",
  testing: "In testing",
  deployment: "Deploying",
  live: "Live",
};

const badgeColorVar: Record<ProjectBadge, string> = {
  development: "var(--status-development)",
  testing: "var(--status-testing)",
  deployment: "var(--status-deployment)",
  live: "var(--status-live)",
};

export default function ProjectCard({ project }: { project: Project }) {
  const badgeColor = badgeColorVar[project.badge];

  return (
    <div className="group h-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-bg-elevated shadow-[var(--shadow-card)] transition-all duration-[var(--duration-base)] hover:-translate-y-1 hover:[border-color:var(--accent-border)] hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-video w-full overflow-hidden bg-bg-subtle">
        {project.image || (project.images && project.images.length > 0) ? (
          <ProjectImage
            image={project.image}
            images={project.images}
            alt={project.title}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FolderGit2
              size={36}
              strokeWidth={1.25}
              className="text-text-muted"
            />
          </div>
        )}

        <span
          className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] bg-bg-elevated/90 px-2.5 py-1 font-mono text-xs uppercase tracking-wider backdrop-blur-sm"
          style={{ color: badgeColor }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: badgeColor }}
          />
          {badgeCopy[project.badge]}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-[var(--card-pad)]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-h3 font-display font-medium">{project.title}</h3>
          <span className="shrink-0 rounded-[var(--radius-sm)] bg-accent-subtle px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent">
            {project.role}
          </span>
        </div>

        <p className="text-sm text-text-secondary">{project.blurb}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[var(--radius-sm)] bg-bg-subtle px-2.5 py-1 font-mono text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links && (
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {project.links.website && (
              <a
                href={project.links.website}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <Globe size={16} strokeWidth={1.75} /> Website
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <Smartphone size={16} strokeWidth={1.75} /> App Store
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <Smartphone size={16} strokeWidth={1.75} /> Google Play
              </a>
            )}
            {project.links.admin && (
              <a
                href={project.links.admin}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <LayoutDashboard size={16} strokeWidth={1.75} /> Admin
              </a>
            )}
            {project.links.merchantPortal && (
              <a
                href={project.links.merchantPortal}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <Store size={16} strokeWidth={1.75} /> Merchant Portal
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <GitFork size={16} strokeWidth={1.75} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

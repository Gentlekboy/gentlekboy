import { Globe, Smartphone, LayoutDashboard, Store } from "lucide-react";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-[var(--card-pad)] shadow-[var(--shadow-card)] transition-all duration-[var(--duration-base)] hover:-translate-y-1 hover:[border-color:var(--accent-border)] hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-h3 font-display font-medium">{project.title}</h3>
          <span className="shrink-0 rounded-[var(--radius-sm)] bg-accent-subtle px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent">
            {project.role}
          </span>
        </div>

        <p className="text-sm text-text-secondary flex-1">{project.blurb}</p>

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
          </div>
        )}
      </div>
    </div>
  );
}

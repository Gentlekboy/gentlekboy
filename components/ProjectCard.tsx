import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { GithubIcon } from "./icons";

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
          <div className="flex items-center gap-4 pt-1">
            {project.links.live && (
              <a
                href={project.links.live}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                Live <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" /> Repo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

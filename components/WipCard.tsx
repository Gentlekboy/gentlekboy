import type { Project } from "@/content/projects";

export default function WipCard({ project }: { project: Project }) {
  return (
    <div className="relative h-full rounded-[var(--radius-lg)] border border-dashed [border-color:var(--accent-border)] bg-bg-elevated/70 p-[var(--card-pad)] shadow-[0_0_12px_rgba(232,161,68,0.09)]">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-h3 font-display font-medium">{project.title}</h3>
          <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-status-wip animate-wip-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status-wip" />
            </span>
            {project.stage}
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
      </div>
    </div>
  );
}

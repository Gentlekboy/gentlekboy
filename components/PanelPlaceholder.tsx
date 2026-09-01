import { MousePointerClick } from "lucide-react";

export default function PanelPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-border bg-bg-elevated/40 p-10 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-subtle text-text-muted">
        <MousePointerClick size={20} strokeWidth={1.5} />
      </span>
      <p className="text-sm font-medium text-text-secondary">
        Select a project
      </p>
      <p className="max-w-[26ch] text-sm text-text-muted">{label}</p>
    </div>
  );
}

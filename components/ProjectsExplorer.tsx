"use client";

import { useState } from "react";
import type { Platform, Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import WipCard from "./WipCard";
import Reveal from "./Reveal";

type Tab = "all" | Platform;

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
];

export default function ProjectsExplorer({
  shippedProjects,
  ongoingProjects,
}: {
  shippedProjects: Project[];
  ongoingProjects: Project[];
}) {
  const [tab, setTab] = useState<Tab>("all");

  const matches = (p: Project) => tab === "all" || p.platforms.includes(tab);
  const shipped = shippedProjects.filter(matches);
  const ongoing = ongoingProjects.filter(matches);

  return (
    <>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-[var(--radius-md)] border px-4 py-2 text-sm transition-colors duration-[var(--duration-fast)] ${
                tab === t.id
                  ? "border-accent-border bg-accent-subtle text-accent"
                  : "border-border text-text-secondary hover:text-text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>

      {shipped.length > 0 && (
        <>
          <Reveal>
            <div className="flex flex-col gap-3">
              <span className="eyebrow">Shipped</span>
              <h2 className="text-h2 font-medium">Things I&rsquo;ve shipped</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)]">
            {shipped.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </>
      )}

      {ongoing.length > 0 && (
        <>
          <Reveal>
            <div className="flex flex-col gap-3">
              <span className="eyebrow">In progress</span>
              <h2 className="text-h2 font-medium">
                What I&rsquo;m building now
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)]">
            {ongoing.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <WipCard project={project} />
              </Reveal>
            ))}
          </div>
        </>
      )}

      {shipped.length === 0 && ongoing.length === 0 && (
        <Reveal>
          <p className="text-text-secondary">Nothing in this category yet.</p>
        </Reveal>
      )}
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/content/projects";
import PlatformTabs, { type PlatformTab } from "./PlatformTabs";
import ProjectChip from "./ProjectChip";
import DetailPanel from "./DetailPanel";
import PanelPlaceholder from "./PanelPlaceholder";
import WipCard from "./WipCard";
import Reveal from "./Reveal";

export default function BuildingExplorer({
  projects,
}: {
  projects: Project[];
}) {
  const [tab, setTab] = useState<PlatformTab>("all");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const filtered = projects.filter(
    (p) => tab === "all" || p.platforms.includes(tab)
  );
  const selected = filtered.find((p) => p.slug === selectedSlug) ?? null;

  useEffect(() => {
    setSelectedSlug((cur) =>
      cur && filtered.some((p) => p.slug === cur) ? cur : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <>
      <Reveal>
        <PlatformTabs active={tab} onChange={setTab} />
      </Reveal>

      {filtered.length > 0 ? (
        <Reveal delay={0.05}>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-1 min-w-0 flex-wrap gap-2.5">
              {filtered.map((project, i) => (
                <ProjectChip
                  key={project.slug}
                  project={project}
                  index={i}
                  selected={project.slug === selectedSlug}
                  onClick={() =>
                    setSelectedSlug((cur) =>
                      cur === project.slug ? null : project.slug
                    )
                  }
                />
              ))}
            </div>

            <DetailPanel
              selectedKey={selected?.slug ?? null}
              onClose={() => setSelectedSlug(null)}
              placeholder={
                <PanelPlaceholder label="Click any project on the left to see what's in progress." />
              }
            >
              {selected && <WipCard project={selected} />}
            </DetailPanel>
          </div>
        </Reveal>
      ) : (
        <p className="text-text-secondary">Nothing in this category yet.</p>
      )}
    </>
  );
}

"use client";

import { motion } from "motion/react";
import type { Platform } from "@/content/projects";

export type PlatformTab = "all" | Platform;

export const platformTabs: { id: PlatformTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
];

export default function PlatformTabs({
  active,
  onChange,
}: {
  active: PlatformTab;
  onChange: (tab: PlatformTab) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {platformTabs.map((t) => (
        <motion.button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          whileTap={{ scale: 0.96 }}
          className={`relative rounded-[var(--radius-md)] border px-4 py-2 text-sm transition-colors duration-[var(--duration-fast)] ${
            active === t.id
              ? "border-accent-border text-accent"
              : "border-border text-text-secondary hover:text-text-primary"
          }`}
        >
          {active === t.id && (
            <motion.span
              layoutId="platform-tab-highlight"
              className="absolute inset-0 rounded-[var(--radius-md)] bg-accent-subtle"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative">{t.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

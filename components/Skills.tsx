import { Layers, Database, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const skills = [
  {
    area: "Frontend",
    icon: Layers,
    items: ["React Native", "Expo", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    area: "Backend & Data",
    icon: Database,
    items: ["Firebase", "Supabase", "PostgreSQL", "Node.js"],
  },
  {
    area: "Shipping & Tools",
    icon: Rocket,
    items: [
      "EAS Build",
      "App Store release",
      "Play Store release",
      "Electron",
      "Google Maps SDK",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">04 / Skills</span>
            <h2 className="text-h2 font-medium">What I reach for</h2>
            <p className="prose-copy text-lead text-text-secondary">
              The tools that actually make it into shipped products, not
              just the résumé.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          {skills.map(({ area, icon: Icon, items }, i) => (
            <Reveal key={area} delay={i * 0.08}>
              <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-border bg-bg-elevated p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent-subtle text-accent">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-sm font-medium text-text-primary">
                    {area}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[var(--radius-sm)] bg-bg-subtle px-2.5 py-1 text-sm text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

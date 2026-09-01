import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skills } from "@/content/skills";
import Reveal from "./Reveal";

const allTools = skills.flatMap((group) => group.items);

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

        <Reveal delay={0.06}>
          <div className="flex flex-wrap gap-2">
            {allTools.map((item) => (
              <span
                key={item}
                className="rounded-[var(--radius-sm)] bg-bg-subtle px-2.5 py-1 text-sm text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 self-start text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
          >
            View more of the tools I use
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

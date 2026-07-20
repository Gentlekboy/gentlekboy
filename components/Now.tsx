import { ongoingProjects } from "@/content/projects";
import WipCard from "./WipCard";
import Reveal from "./Reveal";

export default function Now() {
  return (
    <section id="now" className="section-gap">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">02 / Now</span>
            <h2 className="text-h2 font-medium">What I&rsquo;m building</h2>
            <p className="prose-copy text-lead text-text-secondary">
              A sneak peek into ongoing work: early, unpolished, and
              genuinely in progress.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)]">
          {ongoingProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <WipCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

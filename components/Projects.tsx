import { shippedProjects } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-gap">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">01 — Projects</span>
            <h2 className="text-h2 font-medium">Things I&rsquo;ve shipped</h2>
            <p className="prose-copy text-lead text-text-secondary">
              A selection of past work — solo builds and team contributions
              that made it to real users.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)]">
          {shippedProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

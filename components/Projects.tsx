import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-gap">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="eyebrow">01 / Projects</span>
            <h2 className="text-h2 font-medium">Things I&rsquo;ve shipped</h2>
            <p className="prose-copy text-lead text-text-secondary">
              A selection of past work: solo builds and team contributions
              that made it to real users.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--card-gap)]">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 self-start text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
          >
            View all projects
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

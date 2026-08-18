import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { shippedProjects, ongoingProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects, Kufre Udoh",
  description:
    "Everything I've shipped and everything I'm currently building.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="section-gap">
          <div className="container-page flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-3">
                <span className="eyebrow">Projects</span>
                <h1 className="text-h2 font-medium">Everything I&rsquo;ve built</h1>
                <p className="prose-copy text-lead text-text-secondary">
                  Shipped work and projects still in progress, mobile and
                  web, solo builds and team contributions.
                </p>
              </div>
            </Reveal>

            <ProjectsExplorer
              shippedProjects={shippedProjects}
              ongoingProjects={ongoingProjects}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BuildingExplorer from "@/components/BuildingExplorer";
import { ongoingProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Now, Kufre Udoh",
  description: "Everything I'm currently building.",
};

export default function NowPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="section-gap">
          <div className="container-page flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-3">
                <span className="eyebrow">Now</span>
                <h1 className="text-h2 font-medium">What I&rsquo;m building</h1>
                <p className="prose-copy text-lead text-text-secondary">
                  A sneak peek into ongoing work: early, unpolished, and
                  genuinely in progress.
                </p>
              </div>
            </Reveal>

            <BuildingExplorer projects={ongoingProjects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

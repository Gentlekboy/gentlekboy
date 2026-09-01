import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-gap">
      <div className="container-page flex flex-col gap-6">
        <Reveal>
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="eyebrow">03 / About</span>
            <h2 className="text-h2 font-medium">
              I build apps that people trust with big things: who they date,
              where their money goes, and who drives them home.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 self-start text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent"
          >
            View more about me
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

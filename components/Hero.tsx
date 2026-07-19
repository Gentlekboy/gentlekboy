import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-start justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 animate-hero-drift"
        style={{
          background:
            "radial-gradient(600px circle at 30% 30%, rgba(232,161,68,0.15), transparent 60%)",
        }}
      />

      <div className="container-page flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-hero font-display font-medium">Kufre Udoh</h1>
          <p className="prose-copy text-lead text-text-secondary">
            Software engineer crafting calm, dependable products — from
            resilient backends to interfaces that feel effortless.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:gentlekboy@gmail.com"
            aria-label="Email Kufre"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border text-text-secondary transition-all duration-[var(--duration-fast)] hover:text-accent hover:[border-color:var(--accent-border)] hover:shadow-[var(--glow-accent)]"
          >
            <Mail size={20} strokeWidth={1.75} />
          </a>
          <a
            href="#"
            aria-label="Kufre's GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border text-text-secondary transition-all duration-[var(--duration-fast)] hover:text-accent hover:[border-color:var(--accent-border)] hover:shadow-[var(--glow-accent)]"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#"
            aria-label="Kufre's LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border text-text-secondary transition-all duration-[var(--duration-fast)] hover:text-accent hover:[border-color:var(--accent-border)] hover:shadow-[var(--glow-accent)]"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted transition-colors duration-[var(--duration-fast)] hover:text-accent animate-scroll-hint"
      >
        <ArrowDown size={20} strokeWidth={1.75} />
      </a>
    </section>
  );
}

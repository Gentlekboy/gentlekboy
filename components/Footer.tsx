import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="section-gap pb-16">
      <div className="container-page">
        <div className="rounded-[var(--radius-lg)] border border-border bg-bg-elevated p-8 md:p-12 flex flex-col items-start gap-6">
          <span className="eyebrow">04 / Contact</span>
          <h2 className="text-h2 font-medium">Let&rsquo;s build something calm together.</h2>
          <p className="prose-copy text-text-secondary">
            Open to interesting problems, thoughtful teams, and the
            occasional side project. Reach out, I read every message.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:gentlekboy@gmail.com"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent-subtle px-4 py-2.5 text-sm text-accent transition-all duration-[var(--duration-fast)] hover:shadow-[var(--glow-accent)] hover:[border-color:var(--accent-border)] border border-transparent"
            >
              <Mail size={18} strokeWidth={1.75} />
              gentlekboy@gmail.com
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border px-4 py-2.5 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent hover:[border-color:var(--accent-border)]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border px-4 py-2.5 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent hover:[border-color:var(--accent-border)]"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border px-4 py-2.5 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-accent hover:[border-color:var(--accent-border)]"
            >
              Résumé
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted font-mono">
          <span>© {year} Kufre Udoh</span>
          <span>Built with Next.js &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

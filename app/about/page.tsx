import type { Metadata } from "next";
import {
  Rocket,
  HeartPulse,
  Car,
  PiggyBank,
  Church,
  Ghost,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About, Kufre Udoh",
  description: "A little about me, and what I've actually built.",
};

const funFacts = [
  {
    icon: Rocket,
    label: "Built a dating app that bans swiping",
  },
  {
    icon: Car,
    label: "Taught two apps to find each other a ride",
  },
  {
    icon: HeartPulse,
    label: "Made a health tracker gentle enough for a bad day",
  },
  {
    icon: PiggyBank,
    label: "Rebuilt budgeting around payday, not the calendar",
  },
  {
    icon: Church,
    label: "Gave a church community a whole tech stack",
  },
  {
    icon: Ghost,
    label: "Shipped an offline Bible quiz nobody asked for",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="section-gap">
          <div className="container-page flex flex-col gap-10">
            <Reveal>
              <span className="eyebrow">About</span>
            </Reveal>

            <Reveal delay={0.04}>
              <div className="flex flex-col gap-5 max-w-3xl">
                <h1 className="text-h2 font-medium">
                  I build things, then obsess over the details.
                </h1>
                <div className="prose-copy flex flex-col gap-4 text-base text-text-secondary">
                  <p>
                    I build apps that people trust with big things: who they
                    date, where their money goes, and who drives them home.
                    No pressure.
                  </p>
                  <p>
                    Sometimes I build with a designer and a backend
                    engineer. Most times it&rsquo;s just me, doing every job
                    myself. Either way, I like finishing more than starting.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {funFacts.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-3 rounded-[var(--radius-md)] border border-border bg-bg-elevated px-4 py-3.5 transition-all duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:[border-color:var(--accent-border)] hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-accent-subtle text-accent transition-transform duration-[var(--duration-fast)] group-hover:scale-110">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm text-text-secondary">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

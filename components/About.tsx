import Reveal from "./Reveal";

const skills = [
  { area: "Backend", items: ["Node.js", "PostgreSQL", "Go", "REST/GraphQL"] },
  { area: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { area: "Infra & Tools", items: ["Docker", "GitHub Actions", "AWS", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="section-gap">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <span className="eyebrow">03 — About</span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <Reveal className="md:col-span-3">
            <div className="flex flex-col gap-5">
              <h2 className="text-h2 font-medium">A little about me</h2>
              <div className="prose-copy flex flex-col gap-4 text-base text-text-secondary">
                <p>
                  I&rsquo;m Kufre — a software engineer who likes building
                  things that quietly work well. I care as much about how a
                  product feels to use as how it&rsquo;s built underneath.
                </p>
                <p>
                  Most of my work sits at the intersection of solid backend
                  systems and interfaces people actually enjoy using. I&rsquo;m
                  drawn to small, focused teams and problems where craft
                  matters.
                </p>
                <p>
                  Right now I&rsquo;m interested in local-first tools,
                  developer experience, and calmer ways for teams to
                  collaborate.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-2">
            <div className="flex flex-col gap-6">
              {skills.map((group) => (
                <div key={group.area} className="flex flex-col gap-2.5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    {group.area}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-[var(--radius-sm)] bg-bg-subtle px-2.5 py-1 text-sm text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

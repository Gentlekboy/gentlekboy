import Reveal from "./Reveal";

const skills = [
  {
    area: "Frontend",
    items: ["React Native", "Expo", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    area: "Backend & Data",
    items: ["Firebase", "Supabase", "PostgreSQL", "Node.js"],
  },
  {
    area: "Shipping & Tools",
    items: ["EAS Build", "App Store & Play Store release", "Electron", "Google Maps SDK"],
  },
];

export default function About() {
  return (
    <section id="about" className="section-gap">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <span className="eyebrow">03 / About</span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <Reveal className="md:col-span-3">
            <div className="flex flex-col gap-5">
              <h2 className="text-h2 font-medium">A little about me</h2>
              <div className="prose-copy flex flex-col gap-4 text-base text-text-secondary">
                <p>
                  I&rsquo;m Kufre, a software engineer who builds mobile and
                  web products end to end. I&rsquo;ve shipped a relationship
                  app built on explicit commitments instead of swipe
                  mechanics, a symptom tracker for people living with lupus, a
                  ride-hailing platform with rider and driver apps, a
                  kakeibo-inspired budgeting app, and a full platform for a
                  church community covering its website, staff tooling, and
                  an offline quiz app.
                </p>
                <p>
                  Some of that is frontend work alongside a designer and a
                  backend engineer. Some of it is full-stack, solo, using
                  Firebase or Supabase to move fast without a dedicated
                  backend team.
                </p>
                <p>
                  Right now I&rsquo;m most interested in products that ask
                  people to be more intentional, whether that&rsquo;s how
                  they date, budget, or track their health, and in the
                  unglamorous work of actually getting an app through App
                  Store review and into people&rsquo;s hands.
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

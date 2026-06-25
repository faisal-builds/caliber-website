// components/Pricing.jsx
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { tiers } from "../lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          center
          eyebrow="The engagement"
          title="Considered pricing for serious agencies."
          sub="Begin with a low-risk pilot, or commission a full build. Every engagement is scoped and priced before a dollar is committed."
        />

        <div className="mt-16 grid items-stretch gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`glass edge-top flex h-full flex-col rounded-2xl p-8 ${
                  t.featured
                    ? "border-iris/40 shadow-[0_0_60px_-20px_rgba(139,140,240,0.45)]"
                    : ""
                }`}
              >
                {t.featured && (
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-iris">
                    Most commissioned
                  </div>
                )}
                <div className="text-xl font-semibold tracking-tight">{t.name}</div>
                <div className="mt-4 text-5xl font-semibold tracking-tightest">{t.price}</div>
                <p className="mt-4 min-h-[48px] text-sm font-light leading-relaxed text-muted">
                  {t.desc}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light text-ink/90">
                      <span className="mt-0.5 text-iris">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={t.featured ? "primary" : "ghost"}
                    className="w-full"
                  >
                    {t.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 text-center text-sm font-light text-muted">
            Every build can be kept in perfect condition with ongoing care —{" "}
            <span className="font-medium text-ink">managed service from $4,000 / month.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

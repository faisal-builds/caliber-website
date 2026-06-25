// components/Problem.jsx
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { stats } from "../lib/content";

export default function Problem() {
  return (
    <section id="problem" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="The quiet cost"
          title="Your most expensive employee is data entry."
          sub="Every certificate keyed by hand, every dec page re-typed — skilled people doing work a machine should never have left to them."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.1}>
              <div className="glass edge-top h-full rounded-2xl p-8">
                <div className="text-5xl font-semibold tracking-tightest text-iris">{s.value}</div>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

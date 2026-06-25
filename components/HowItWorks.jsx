// components/HowItWorks.jsx
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { steps } from "../lib/content";

export default function HowItWorks() {
  return (
    <section id="method" className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="The method"
          title="A finished system. Delivered, not rented."
          sub="You are not handed software to learn. You are handed an outcome — built around one workflow and installed into your agency."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.idx} delay={i * 0.1}>
              <div className="glass edge-top group h-full rounded-2xl p-8 transition-colors duration-500 hover:bg-white/[0.04]">
                <div className="font-mono text-sm text-iris">{s.idx}</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

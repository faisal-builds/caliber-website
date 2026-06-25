// components/Security.jsx
import Container from "./Container";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { security } from "../lib/content";

function ShieldIcon() {
  return (
    <svg width="120" height="138" viewBox="0 0 150 170" fill="none">
      <path
        d="M75 8l60 24v44c0 40-26 70-60 86-34-16-60-46-60-86V32z"
        stroke="#8b8cf0"
        strokeWidth="1.5"
        fill="rgba(139,140,240,0.05)"
      />
      <path
        d="M52 84l16 16 32-34"
        stroke="#a5a6ff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Security() {
  return (
    <section id="security" className="py-28 sm:py-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass edge-top relative grid place-items-center rounded-3xl p-16">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,140,240,0.2),transparent_60%)]" />
              <ShieldIcon />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Discretion &amp; security</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightest text-gradient sm:text-5xl">
                Built for those who <span className="text-iris">cannot afford a leak.</span>
              </h2>
            </Reveal>

            <div className="mt-9 flex flex-col gap-4">
              {security.map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.08}>
                  <div className="glass rounded-xl p-6">
                    <h4 className="text-lg font-semibold tracking-tight">{item.title}</h4>
                    <p className="mt-2 text-[14.5px] font-light leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

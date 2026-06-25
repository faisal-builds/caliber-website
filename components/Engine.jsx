// components/Engine.jsx
import Container from "./Container";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

export default function Engine() {
  return (
    <section id="engine" className="py-28 sm:py-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>The engine</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightest text-gradient sm:text-5xl">
                Watch a document become <span className="text-iris">clean data.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-muted">
                Drop in any insurance document and the engine reads it the way your best CSR
                would — only in seconds, without a single keystroke. This is the same technology
                we install inside your agency.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9">
                <Button href="#contact" variant="iris">Request a live demonstration</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass edge-top rounded-2xl p-6">
              <div className="flex flex-col gap-3">
                {[
                  ["Client Name", "Castellan Manufacturing LLC"],
                  ["Policy Number", "CGL-RI-7741920-24"],
                  ["Carrier", "Travelers Property Casualty"],
                  ["Coverage Type", "Commercial General Liability"],
                  ["Effective Date", "03/01/2025"],
                  ["Expiration Date", "03/01/2026"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted">{k}</span>
                    <span className="font-mono text-[13px] text-ink">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-lg border border-iris/15 bg-iris/[0.06] px-4 py-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-iris">
                  High confidence
                </span>
                <span className="text-xs text-muted">Exported to CSV</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

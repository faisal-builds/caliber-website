// components/CTA.jsx
import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import { site } from "../lib/content";

export default function CTA() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <Container>
        <Reveal>
          <div className="glass edge-top relative overflow-hidden rounded-3xl px-8 py-20 text-center sm:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_-20%,rgba(139,140,240,0.22),transparent_65%)]" />
            <h2 className="relative mx-auto max-w-2xl text-balance text-4xl font-semibold leading-[1.06] tracking-tightest text-gradient sm:text-6xl">
              See it run on <span className="text-iris">your own documents.</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-lg text-lg font-light text-muted">
              A private, twenty-minute consultation. We examine one workflow, demonstrate what
              becomes possible, and provide a fixed quote. No pressure, no obligation.
            </p>
            <div className="relative mt-10 flex justify-center">
              <Button
                href={`mailto:${site.email}?subject=Private%20Consultation`}
                variant="primary"
              >
                Book a private consultation
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

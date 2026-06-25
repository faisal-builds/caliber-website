// components/Hero.jsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const ease = [0.21, 0.6, 0.35, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} transition={{ duration: 0.7, ease }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-iris" />
              Private AI automation studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            transition={{ duration: 0.8, ease }}
            className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-tightest text-gradient sm:text-7xl"
          >
            The end of manual paperwork
            <br className="hidden sm:block" /> for <span className="text-iris">modern insurance agencies.</span>
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.8, ease }}
            className="mx-auto mt-7 max-w-xl text-balance text-lg font-light leading-relaxed text-muted"
          >
            We build bespoke AI systems that read your ACORD forms, dec pages, and
            certificates — and place the data exactly where it belongs. Quietly. Flawlessly.
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.8, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#contact" variant="primary">Book a private consultation</Button>
            <Button href="#engine" variant="ghost">See the engine →</Button>
          </motion.div>
        </motion.div>

        {/* Floating product preview */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="relative mx-auto mt-20 max-w-3xl"
        >
          <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-[radial-gradient(600px_220px_at_50%_0%,rgba(139,140,240,0.22),transparent_70%)]" />
          <div className="glass edge-top rounded-2xl p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]">
            <div className="rounded-xl border border-white/[0.06] bg-bg/60 p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-faint">document-intake.aureon</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.015] p-4 font-mono text-[11px] leading-7 text-faint">
                  ACORD 25 — CERTIFICATE<br />
                  Insured: <span className="rounded bg-white/[0.06] text-transparent">Castellan Mfg</span><br />
                  Carrier: <span className="rounded bg-white/[0.06] text-transparent">Travelers</span><br />
                  Policy: <span className="rounded bg-white/[0.06] text-transparent">CGL-RI-774</span>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  {[
                    ["Client", "Castellan Mfg LLC"],
                    ["Carrier", "Travelers P&C"],
                    ["Policy #", "CGL-RI-7741920"],
                    ["Expires", "03/01/2026"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between rounded-md border border-iris/15 bg-iris/[0.06] px-3 py-2 text-[12px]"
                    >
                      <span className="text-muted">{k}</span>
                      <span className="font-medium text-ink">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-iris">
                Extracted in 5 seconds · high confidence
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

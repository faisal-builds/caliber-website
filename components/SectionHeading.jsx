// components/SectionHeading.jsx
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({ eyebrow, title, sub, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-gradient sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.14}>
          <p className="mt-5 text-lg font-light leading-relaxed text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

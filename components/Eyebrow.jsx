// components/Eyebrow.jsx
export default function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-iris ${className}`}
    >
      <span className="h-px w-6 bg-gradient-to-r from-transparent to-iris" />
      {children}
    </span>
  );
}

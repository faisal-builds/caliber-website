// components/Button.jsx
export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 px-6 py-3";

  const variants = {
    primary:
      "bg-ink text-bg hover:bg-white hover:shadow-[0_12px_40px_-12px_rgba(255,255,255,0.45)] hover:-translate-y-0.5",
    ghost:
      "glass text-ink hover:border-white/20 hover:bg-white/[0.06]",
    iris:
      "text-bg bg-gradient-to-r from-[#a5a6ff] to-[#8b8cf0] hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-12px_rgba(139,140,240,0.6)]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

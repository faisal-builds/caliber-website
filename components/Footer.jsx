// components/Footer.jsx
import Container from "./Container";
import { site } from "../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-12">
      <Container className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-5 w-5 rounded-md bg-gradient-to-br from-[#a5a6ff] to-[#6d6ee0]" />
          <span className="text-sm font-semibold tracking-tight">{site.brand}</span>
        </a>
        <p className="text-center text-xs text-faint">
          © 2026 {site.brand} · A service of {site.legal} · Enterprise AI automation for insurance agencies
        </p>
      </Container>
    </footer>
  );
}

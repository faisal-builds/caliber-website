// components/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { site, nav } from "../lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/[0.07] bg-bg/70 backdrop-blur-xl py-3" : "py-5"
      }`}
    >
      <Container className="flex items-center gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-6 w-6 rounded-md bg-gradient-to-br from-[#a5a6ff] to-[#6d6ee0] shadow-[0_0_20px_rgba(139,140,240,0.5)]" />
          <span className="text-[15px] font-semibold tracking-tight">{site.brand}</span>
        </a>

        <nav className="ml-auto hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:ml-0">
          <Button href="#contact" variant="ghost" className="px-5 py-2 text-[13px]">
            Book a call
          </Button>
        </div>
      </Container>
    </motion.header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={[
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/8 bg-[#050510]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">

          {/* ── Logo ── */}
          <a href="#top" className="flex items-center gap-2.5 group">
            {/* Circular avatar with neon ring */}
            <div className="relative">
              <div
                className="absolute -inset-[2px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                }}
              />
              <div className="relative h-8 w-8 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Yogesh Ahuja"
                  fill
                  className="object-cover object-top"
                  sizes="32px"
                />
              </div>
            </div>

            {/* Name text */}
            <span className="font-semibold text-sm tracking-tight text-slate-200 group-hover:gradient-text transition-all duration-300">
              Yogesh Ahuja
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-violet-300"
              >
                {l.label}
                <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_0_16px_rgba(124,58,237,0.4)] hover:shadow-[0_0_28px_rgba(124,58,237,0.7)] transition-all duration-300"
            >
              Let&apos;s talk
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded bg-slate-300 origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 rounded bg-slate-300"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 rounded bg-slate-300 origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050510]/96 backdrop-blur-xl sm:hidden"
          >
            {/* Avatar in mobile menu */}
            <div className="mb-8 relative">
              <div className="absolute -inset-[2px] rounded-full" style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }} />
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-white/10">
                <Image src="/profile.jpg" alt="Yogesh Ahuja" fill className="object-cover object-top" sizes="80px" />
              </div>
            </div>
            <p className="mb-8 font-mono text-xs uppercase tracking-widest text-violet-400">Yogesh Ahuja</p>

            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="py-4 text-3xl font-bold gradient-text"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

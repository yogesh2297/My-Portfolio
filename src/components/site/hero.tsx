"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const HeroAccent = dynamic(() => import("./hero-accent").then((m) => m.HeroAccent), { ssr: false });

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Next.js Engineer",
  "UI/UX Craftsman",
  "Web3 Builder",
];

function useTypewriter(words: string[], speed = 75, pause = 2200) {
  const [displayed, setDisplayed] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => { setCharIdx((c) => c + 1); setDisplayed(current.slice(0, charIdx + 1)); }, speed);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => { setCharIdx((c) => c - 1); setDisplayed(current.slice(0, charIdx - 1)); }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const stats = [
  { label: "Experience", value: "4+ Years", sub: "Production-grade apps" },
  { label: "Performance", value: "+30%", sub: "App speed improved" },
  { label: "Location", value: "Indore, MP", sub: "Open to remote roles" },
];

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <header id="top" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg" />
      {/* Radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(124,58,237,0.28),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_85%,rgba(6,182,212,0.13),transparent)]" />
      {/* Three.js particles */}
      <HeroAccent />

      <Container className="relative z-10 py-28 sm:py-36">
        {/* Two-column layout */}
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:gap-16">

          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-950/40 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="font-mono text-xs tracking-widest uppercase text-violet-300">
                Available for frontend roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl gradient-text leading-tight"
            >
              {resume.name}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-4 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="font-mono text-xl font-semibold text-cyan-400 sm:text-2xl">
                {role}
                <span className="blink text-violet-400">_</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 mx-auto lg:mx-0"
            >
              {resume.headline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row justify-center lg:justify-start"
            >
              <Button href="#projects" variant="primary">
                View Projects →
              </Button>
              <Button href={`mailto:${resume.contact.email}`} variant="secondary">
                Email Me
              </Button>
              <Button href={resume.contact.linkedin} variant="secondary" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-12 grid grid-cols-3 gap-3"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 backdrop-blur-xl hover:border-violet-500/35 hover:shadow-[0_0_24px_rgba(124,58,237,0.12)] transition-all duration-300 text-center lg:text-left"
                >
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400/70">
                    {s.label}
                  </div>
                  <div className="mt-1.5 text-xl font-bold gradient-text">{s.value}</div>
                  <div className="mt-0.5 text-[11px] text-slate-500 leading-4">{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="shrink-0 flex items-center justify-center"
          >
            {/* Outer decorative glow ring */}
            <div className="relative">
              {/* Neon gradient border ring */}
              <div
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4, #a78bfa, #7c3aed)",
                  backgroundSize: "300% 300%",
                  animation: "gradient-border 5s ease infinite",
                }}
              />
              {/* Glow behind circle */}
              <div className="absolute -inset-6 rounded-full bg-violet-600/20 blur-2xl" />
              <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Photo circle */}
              <div className="relative h-72 w-72 rounded-full overflow-hidden border-2 border-white/10 sm:h-80 sm:w-80 xl:h-96 xl:w-96">
                <Image
                  src="/profile.jpg"
                  alt="Yogesh Ahuja — Frontend Developer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1280px) 320px, 384px"
                />
                {/* Subtle inner gradient overlay for blending */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(5,5,16,0.35),transparent_60%)]" />
              </div>

              {/* Floating tech badge — top right */}
              <div className="absolute -right-4 top-8 rounded-full border border-violet-500/30 bg-violet-950/80 px-3 py-1.5 backdrop-blur-sm shadow-[0_0_16px_rgba(124,58,237,0.4)]">
                <span className="font-mono text-xs font-semibold text-violet-300">React.js</span>
              </div>

              {/* Floating tech badge — bottom left */}
              <div className="absolute -left-4 bottom-12 rounded-full border border-cyan-500/30 bg-cyan-950/80 px-3 py-1.5 backdrop-blur-sm shadow-[0_0_16px_rgba(6,182,212,0.4)]">
                <span className="font-mono text-xs font-semibold text-cyan-300">Next.js</span>
              </div>

              {/* Floating years badge — bottom right */}
              <div className="absolute -bottom-3 right-8 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-xs font-semibold text-white">4+ yrs</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Gradient border keyframe in style tag */}
      <style>{`
        @keyframes gradient-border {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
}

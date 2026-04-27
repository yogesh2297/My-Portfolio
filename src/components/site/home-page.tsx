"use client";

import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Skills } from "@/components/site/skills";
import { Projects } from "@/components/site/projects";
import { Experience } from "@/components/site/experience";
import { Contact } from "@/components/site/contact";
import { CustomCursor } from "@/components/site/cursor";

export function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "#050510" }}>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
          {/* Subtle section divider glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}

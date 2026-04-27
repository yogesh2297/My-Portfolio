"use client";

import { useEffect, useRef } from "react";
import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useScrollReveal } from "@/components/site/scroll-reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillBarProps {
  name: string;
  pct: number;
  color: string;
}

const skillLevels: Record<string, number> = {
  JavaScript: 95, TypeScript: 90, "HTML5": 98, "CSS3": 95, SCSS: 88,
  "React.js": 95, "Next.js": 90, "Redux Toolkit": 82, "React Router": 85, "Tailwind CSS": 92,
  Git: 88, "VS Code": 95, NPM: 85, Vite: 82, "REST APIs": 90, Axios: 85,
  "Responsive Design": 95, "Performance Optimization": 88, Web3: 75,
  "Blockchain Integration": 72, "Cross-browser Compatibility": 90,
  "Cursor AI": 88, ChatGPT: 92, "GitHub Copilot": 85,
  "Agile/Scrum": 85, "Code Reviews": 80,
};

function SkillBar({ name, pct, color }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: `${pct}%`,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [pct]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/6">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            width: 0,
            background: color,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

const groups = [
  {
    title: "Languages",
    icon: "⌨️",
    color: "linear-gradient(90deg,#7c3aed,#a78bfa)",
    glow: "#7c3aed",
    items: resume.skills.languages,
  },
  {
    title: "Frameworks",
    icon: "⚛️",
    color: "linear-gradient(90deg,#06b6d4,#22d3ee)",
    glow: "#06b6d4",
    items: resume.skills.frameworks,
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "linear-gradient(90deg,#8b5cf6,#c4b5fd)",
    glow: "#8b5cf6",
    items: resume.skills.tools,
  },
  {
    title: "Web",
    icon: "🌐",
    color: "linear-gradient(90deg,#0ea5e9,#38bdf8)",
    glow: "#0ea5e9",
    items: resume.skills.web,
  },
  {
    title: "AI Tools",
    icon: "🤖",
    color: "linear-gradient(90deg,#f472b6,#e879f9)",
    glow: "#f472b6",
    items: resume.skills.ai,
  },
  {
    title: "Methodologies",
    icon: "📋",
    color: "linear-gradient(90deg,#34d399,#6ee7b7)",
    glow: "#34d399",
    items: resume.skills.methodologies,
  },
];

export function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Container>
      <div ref={ref}>
        <Section id="skills" eyebrow="Skills" title="Tools I use to ship fast, clean UI">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)]"
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-lg">{g.icon}</span>
                  <span className="text-sm font-semibold text-slate-200">{g.title}</span>
                </div>
                {/* Skill bars */}
                <div className="space-y-4">
                  {g.items.map((s) => (
                    <SkillBar
                      key={s}
                      name={s}
                      pct={skillLevels[s] ?? 80}
                      color={g.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Container>
  );
}

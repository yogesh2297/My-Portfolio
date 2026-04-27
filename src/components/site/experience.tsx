"use client";

import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useScrollReveal } from "@/components/site/scroll-reveal";

export function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Container>
      <div ref={ref}>
        <Section id="experience" eyebrow="Experience" title="Where I've made impact">
          <div className="relative space-y-6">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/30 to-transparent sm:block" />

            {resume.experience.map((e) => (
              <div key={`${e.company}-${e.title}`} className="relative sm:pl-16">
                {/* Glowing timeline dot */}
                <div className="absolute left-[18px] top-7 hidden h-4 w-4 rounded-full border-2 border-violet-500 bg-[#050510] shadow-[0_0_12px_rgba(124,58,237,0.8)] sm:block" />

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-xl hover:border-violet-500/35 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300 overflow-hidden relative">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-500/60 via-cyan-500/40 to-transparent" />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight gradient-text">{e.title}</h3>
                      <p className="mt-1 text-sm font-medium text-slate-400">{e.company}</p>
                    </div>
                    <div className="shrink-0 rounded-full border border-violet-500/25 bg-violet-950/40 px-3 py-1 font-mono text-xs text-violet-300 whitespace-nowrap">
                      {e.start} — {e.end}
                    </div>
                  </div>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-6 text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education */}
            {resume.education.map((ed) => (
              <div key={ed.school} className="relative sm:pl-16">
                <div className="absolute left-[18px] top-7 hidden h-4 w-4 rounded-full border-2 border-cyan-500 bg-[#050510] shadow-[0_0_12px_rgba(6,182,212,0.7)] sm:block" />
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/50 via-violet-500/30 to-transparent" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400/70 mb-1">Education</p>
                      <h3 className="text-base font-bold text-slate-200">{ed.degree}</h3>
                      <p className="mt-1 text-sm text-slate-400">{ed.school} · {ed.location}</p>
                    </div>
                    <div className="shrink-0 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3 py-1 font-mono text-xs text-cyan-300 whitespace-nowrap">
                      {ed.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Container>
  );
}

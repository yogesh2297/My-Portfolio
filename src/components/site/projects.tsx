"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/components/site/scroll-reveal";

const projectColors = [
  { from: "#7c3aed", to: "#06b6d4", accent: "violet" as const },
  { from: "#06b6d4", to: "#34d399", accent: "cyan" as const },
  { from: "#d946ef", to: "#8b5cf6", accent: "fuchsia" as const },
];

export function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Container>
      <div ref={ref}>
        <Section id="projects" eyebrow="Projects" title="Selected work">
          <div className="grid gap-6 lg:grid-cols-3">
            {resume.projects.map((p, idx) => {
              const col = projectColors[idx % projectColors.length];
              return (
                <motion.div
                  key={p.name}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)]"
                >
                  {/* Gradient top bar */}
                  <div
                    className="h-0.5 w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, ${col.from}, ${col.to})`, boxShadow: `0 0 12px ${col.from}80` }}
                  />

                  {/* Inner radial glow on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(124,58,237,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col flex-1 p-7">
                    {/* Title + timeframe */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight gradient-text">{p.name}</h3>
                        <p className="mt-1 font-mono text-xs text-slate-500">{p.timeframe}</p>
                      </div>
                      <span
                        className="shrink-0 rounded-full border border-white/10 bg-white/5 p-2.5 shadow-xl backdrop-blur-md transition-colors duration-300"
                        style={{ color: col.from }}
                      >
                        {idx === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                        ) : idx === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                        )}
                      </span>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tech.map((t) => (
                        <Badge key={t} variant={col.accent}>
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 flex-1">
                      {p.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm leading-6 text-slate-400">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: `linear-gradient(135deg, ${col.from}, ${col.to})` }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-white/6 flex items-center justify-between">
                      <span className="inline-block w-full text-center font-mono text-xs text-slate-600">case_study</span>
                      <span
                        className="font-mono text-xs font-medium transition-colors duration-200 group-hover:text-violet-400"
                        style={{ color: col.from }}
                      >
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>
      </div>
    </Container>
  );
}

"use client";

import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useScrollReveal } from "@/components/site/scroll-reveal";

const codeLines = [
  { token: "const", rest: " developer = {" },
  { token: "  name:", rest: ' "Yogesh Ahuja",' },
  { token: "  stack:", rest: ' ["React", "Next.js", "TS"],' },
  { token: "  experience:", rest: ' "4+ years",' },
  { token: "  focus:", rest: ' "UI Engineering",' },
  { token: "  loves:", rest: ' ["Clean code", "Performance"],' },
  { token: "  open:", rest: " true," },
  { token: "}", rest: "" },
];

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Container>
      <div ref={ref}>
        <Section id="about" eyebrow="About" title="A frontend developer who sweats the details">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Summary */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-xl hover:border-violet-500/30 transition-all duration-300">
              <p className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                {resume.summary}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { k: "Location", v: resume.location },
                  { k: "Experience", v: resume.years },
                  { k: "Focus", v: "UI Engineering" },
                  { k: "Status", v: "Open to work" },
                ].map((item) => (
                  <div key={item.k} className="rounded-xl border border-white/6 bg-white/[0.02] p-3">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-violet-400/70">
                      {item.k}
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-200">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative code block */}
            <div className="rounded-2xl border border-white/8 bg-[#0d0d20] p-6 font-mono text-sm backdrop-blur-xl overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
              {/* Window dots */}
              <div className="flex items-center gap-2 mb-5">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500">profile.ts</span>
              </div>
              {codeLines.map((line, i) => (
                <div key={i} className="flex leading-7">
                  <span className="mr-4 w-5 shrink-0 text-right text-slate-600 select-none text-xs">
                    {i + 1}
                  </span>
                  <span className="text-cyan-400">{line.token}</span>
                  <span className="text-slate-300">{line.rest}</span>
                </div>
              ))}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0d0d20] to-transparent" />
            </div>
          </div>
        </Section>
      </div>
    </Container>
  );
}

"use client";

import { resume } from "@/lib/resume";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useScrollReveal } from "@/components/site/scroll-reveal";

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const subject = encodeURIComponent(`Portfolio inquiry — ${resume.name}`);
  const body = encodeURIComponent(
    `Hi ${resume.name},\n\nI'd like to connect about a frontend role.\n\n—`
  );

  return (
    <Container>
      <div ref={ref}>
        <Section id="contact" eyebrow="Contact" title="Let's build something great">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-12 backdrop-blur-xl overflow-hidden relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(124,58,237,0.18),transparent)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

            <div className="relative grid gap-10 lg:grid-cols-5">
              {/* Main CTA */}
              <div className="lg:col-span-3">
                <p className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                  The fastest way to reach me is email. I'm happy to share details,
                  metrics, and walkthroughs of recent projects.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={`mailto:${resume.contact.email}?subject=${subject}&body=${body}`}
                    variant="primary"
                    className="h-12 px-4 sm:px-7 text-sm sm:text-base font-semibold whitespace-nowrap"
                  >
                    ✉️ <span className="overflow-hidden text-ellipsis">{resume.contact.email}</span>
                  </Button>
                  <Button
                    href={resume.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="h-12 px-7 text-sm sm:text-base font-semibold"
                  >
                    LinkedIn ↗
                  </Button>
                </div>
              </div>

              {/* Contact details card */}
              <div className="lg:col-span-2 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-5">
                  &gt; contact_info
                </p>
                {[
                  { label: "Phone", value: resume.contact.phone },
                  { label: "Email", value: resume.contact.email },
                  { label: "Location", value: resume.location },
                ].map((item) => (
                  <div key={item.label} className="mb-4 last:mb-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{item.label}</div>
                    <div className="mt-1 text-sm font-medium text-slate-300">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-center text-xs text-slate-600 font-mono">
              © {new Date().getFullYear()} {resume.name} · Built with Next.js, Tailwind, Framer Motion & Three.js
            </p>
          </div>
        </Section>
      </div>
    </Container>
  );
}

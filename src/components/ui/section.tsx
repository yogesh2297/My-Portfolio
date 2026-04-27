import type { PropsWithChildren } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: PropsWithChildren<{ id: string; eyebrow: string; title: string }>) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mb-12 sm:mb-16">
        {/* Terminal-style eyebrow */}
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 flex items-center gap-2">
          <span className="text-violet-500/50">&gt;</span>
          {eyebrow.toLowerCase()}_
          <span className="inline-block h-3.5 w-[1.5px] bg-violet-400 blink ml-0.5" />
        </p>
        {/* Gradient heading */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
          {title}
        </h2>
        {/* Neon underline accent */}
        <div className="mt-5 h-px w-28 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
      </div>
      {children}
    </section>
  );
}

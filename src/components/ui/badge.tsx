import type { PropsWithChildren } from "react";

type BadgeVariant = "default" | "violet" | "cyan" | "ghost" | "amber" | "fuchsia";

export function Badge({
  children,
  className = "",
  variant = "default",
}: PropsWithChildren<{ className?: string; variant?: BadgeVariant }>) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium font-mono tracking-wide transition-all duration-200 hover:scale-105";

  const variants: Record<BadgeVariant, string> = {
    default:
      "bg-violet-950/40 border-violet-500/25 text-violet-300 shadow-[0_0_10px_rgba(124,58,237,0.15)]",
    violet:
      "bg-violet-600/20 border-violet-400/40 text-violet-200 shadow-[0_0_14px_rgba(124,58,237,0.25)]",
    cyan: "bg-cyan-900/30 border-cyan-500/30 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
    ghost: "bg-white/5 border-white/10 text-slate-300",
    amber: "bg-amber-900/30 border-amber-500/30 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]",
    fuchsia: "bg-fuchsia-900/30 border-fuchsia-500/30 text-fuchsia-300 shadow-[0_0_10px_rgba(217,70,239,0.2)]",
  };

  return (
    <span className={[base, variants[variant], className].join(" ")}>
      {children}
    </span>
  );
}

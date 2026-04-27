import Link from "next/link";
import type { PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

function classesFor(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return [
        "relative overflow-hidden text-white",
        "bg-gradient-to-r from-violet-600 to-cyan-500",
        "shadow-[0_0_18px_rgba(124,58,237,0.5)] hover:shadow-[0_0_32px_rgba(124,58,237,0.75)]",
        "border border-violet-400/30 hover:border-violet-400/60",
        "transition-all duration-300",
      ].join(" ");
    case "secondary":
      return [
        "bg-white/5 text-white border border-white/15 backdrop-blur-sm",
        "hover:bg-white/10 hover:border-violet-500/50",
        "hover:shadow-[0_0_18px_rgba(124,58,237,0.2)]",
        "transition-all duration-300",
      ].join(" ");
    case "ghost":
      return [
        "bg-transparent text-slate-300",
        "hover:text-violet-300 hover:bg-white/5",
        "transition-all duration-300",
      ].join(" ");
  }
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
}: PropsWithChildren<{
  href: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
}>) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={[
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-tight",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50",
        classesFor(variant),
        className,
      ].join(" ")}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

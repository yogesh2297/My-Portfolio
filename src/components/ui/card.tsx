import type { PropsWithChildren } from "react";

export function Card({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={[
        "group relative rounded-2xl overflow-hidden",
        "border border-white/8 bg-white/[0.03] backdrop-blur-xl",
        "shadow-[0_4px_32px_rgba(0,0,0,0.5)]",
        "transition-all duration-300",
        "hover:border-violet-500/35 hover:shadow-[0_4px_32px_rgba(0,0,0,0.5),0_0_40px_rgba(124,58,237,0.12)]",
        className,
      ].join(" ")}
    >
      {/* top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
}

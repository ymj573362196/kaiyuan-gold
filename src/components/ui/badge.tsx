import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        {
          default: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
          gold: "bg-amber-500 text-black font-semibold",
          outline: "border border-white/20 text-gray-300",
        }[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

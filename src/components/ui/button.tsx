import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "gold";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
          {
            "default":
              "bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/20",
            outline:
              "border border-amber-500/30 bg-transparent text-amber-400 hover:bg-amber-500/10 hover:border-amber-400",
            ghost:
              "text-gray-400 hover:text-white hover:bg-white/5",
            link: "text-amber-400 underline-offset-4 hover:underline",
            gold: "bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold hover:from-amber-400 hover:to-yellow-300 shadow-lg shadow-amber-500/25",
          }[variant],
          {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3 text-xs",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10",
          }[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

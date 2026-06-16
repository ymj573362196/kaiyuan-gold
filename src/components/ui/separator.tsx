import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Separator = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("border-t border-white/10", className)}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };

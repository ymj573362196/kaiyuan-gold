import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={cn(
          "mt-4 h-px w-20 bg-gradient-to-r from-amber-500 to-transparent",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}

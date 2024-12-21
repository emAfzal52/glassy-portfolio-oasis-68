import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-glass/30 border border-white/20 rounded-xl p-6 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
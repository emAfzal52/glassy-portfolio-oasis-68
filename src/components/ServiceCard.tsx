import { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <GlassCard className="group hover:bg-accent/5 transition-colors">
      <Icon className="w-8 h-8 mb-4 text-accent" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </GlassCard>
  );
};
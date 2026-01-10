import { Link } from "react-router-dom";
import type { Studio } from "@/data/studios";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface StudioCardProps {
  studio: Studio;
  index: number;
  className?: string;
}

const StudioCard = ({ studio, index, className }: StudioCardProps) => {
  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/studio/${studio.id}`} className={cn("group block", className)}>
        <article className="space-y-4">
          {/* Image with museum frame */}
          <div className="relative aspect-[3/4] overflow-hidden border border-border">
            <img
              src={studio.heroImage}
              alt={studio.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            
            {/* Logo overlay - bottom right corner */}
            {studio.logo && (
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 rounded-sm flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={studio.logo}
                  alt={`${studio.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
          
          {/* Museum placard */}
          <div className="space-y-1.5">
            <h3 className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors">
              {studio.name}
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {studio.location}, {studio.country}
            </p>
          </div>
        </article>
      </Link>
    </AnimatedSection>
  );
};

export default StudioCard;
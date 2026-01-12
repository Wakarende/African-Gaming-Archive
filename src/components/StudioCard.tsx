import { Link } from "react-router-dom";
// import type { Studio } from "@/data/studios";
import type { Studio } from "@/types/sanity";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface StudioCardProps {
  studio: Studio;
  index: number;
  className?: string;
  aspectRatio?: string;
  variant?: "featured" | "standard" | "wide";
}

const StudioCard = ({ 
  studio, 
  index, 
  className,
  aspectRatio = "aspect-[3/4]",
  variant = "standard"
}: StudioCardProps) => {
  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <Link to={`/studio/${studio.slug.current}`} className={cn("group block h-full", className)}>
        <article className="space-y-4 h-full">
          {/* Image with museum frame */}
          <div className={cn(
            "relative overflow-hidden border border-border",
            aspectRatio
          )}>
            <img
              src={studio.heroImage ? urlFor(studio.heroImage) : '/placeholder.jpg'}

              alt={studio.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            {/* Logo overlay - bottom right corner */}
            {/* {studio.logo && (
              <div className={cn(
                "absolute bottom-4 right-4 bg-background/90 rounded-sm flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                variant === "featured" ? "w-12 h-12" : "w-10 h-10"
              )}>
                <img
                  src={studio.logo}
                  alt={`${studio.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )} */}
            {studio.logo && (
              <div className={cn(
                "absolute bottom-4 right-4 bg-background/90 rounded-sm flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                variant === "featured" ? "w-12 h-12" : "w-10 h-10"
              )}>
                <img
                  src={urlFor(studio.logo)}
                  alt={`${studio.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
          
          {/* Museum placard */}
          <div className="space-y-1.5">
            <h3 className={cn(
              "font-serif group-hover:text-accent transition-colors",
              variant === "featured" ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            )}>
              {studio.name}
            </h3>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {studio.location.city}, {studio.location.country}
            </p>
          </div>
        </article>
      </Link>
    </AnimatedSection>
  );
};

export default StudioCard;
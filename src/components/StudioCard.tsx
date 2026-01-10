import { Link } from "react-router-dom";
import type { Studio } from "@/data/studios";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface StudioCardProps {
  studio: Studio;
  index: number;
  variant?: "large" | "medium" | "featured";
}

const StudioCard = ({ studio, index, variant = "medium" }: StudioCardProps) => {
  const isEven = index % 2 === 0;

  if (variant === "featured") {
    return (
      <AnimatedSection animation="fade-up" delay={index * 100}>
        <Link to={`/studio/${studio.id}`} className="group block">
          <article className="relative">
            {/* Full-width image */}
            <div className="aspect-[21/9] overflow-hidden bg-muted relative">
              <img
                src={studio.heroImage}
                alt={studio.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/80 mb-3">
                {studio.location}, {studio.country}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background mb-4 leading-none">
                {studio.name}
              </h3>
              <p className="font-sans text-background/80 max-w-xl text-lg hidden md:block">
                {studio.tagline}
              </p>
            </div>
          </article>
        </Link>
      </AnimatedSection>
    );
  }

  if (variant === "large") {
    return (
      <AnimatedSection
        animation={isEven ? "slide-left" : "slide-right"}
        delay={index * 100}
      >
        <Link to={`/studio/${studio.id}`} className="group block">
          <article
            className={cn(
              "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
              !isEven && "md:[direction:rtl]"
            )}
          >
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden bg-muted relative md:[direction:ltr]">
              <img
                src={studio.heroImage}
                alt={studio.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-500 group-hover:opacity-0" />
            </div>

            {/* Content */}
            <div className="space-y-6 md:[direction:ltr]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {studio.founded} — {studio.location}, {studio.country}
              </p>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-none group-hover:text-accent transition-colors duration-300">
                {studio.name}
              </h3>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-md">
                {studio.tagline}
              </p>
              <div className="flex items-center gap-2 text-foreground group-hover:text-accent transition-colors">
                <span className="font-mono text-xs uppercase tracking-[0.15em]">
                  View Studio
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </article>
        </Link>
      </AnimatedSection>
    );
  }

  // Default medium variant
  return (
    <AnimatedSection animation="fade-up" delay={index * 150}>
      <Link to={`/studio/${studio.id}`} className="group block">
        <article className="space-y-6">
          <div className="aspect-[3/4] overflow-hidden bg-muted relative">
            <img
              src={studio.heroImage}
              alt={studio.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {studio.location}, {studio.country}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors duration-300">
              {studio.name}
            </h3>
          </div>
        </article>
      </Link>
    </AnimatedSection>
  );
};

export default StudioCard;

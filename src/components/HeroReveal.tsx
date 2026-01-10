import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-image.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";

const HeroReveal = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Trigger reveal animation after a short delay
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-foreground">
      {/* Background image grid - asymmetric gallery style */}
      <div className="absolute inset-0">
        {/* Main large image */}
        <div
          className={cn(
            "absolute top-0 right-0 w-full md:w-[70%] h-[60%] md:h-full transition-all duration-[1.5s] ease-out",
            isRevealed ? "opacity-40 translate-x-0" : "opacity-0 translate-x-20"
          )}
        >
          <img
            src={heroImage}
            alt=""
            onLoad={() => setIsLoaded(true)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Secondary images - staggered */}
        <div
          className={cn(
            "absolute bottom-[10%] left-[5%] w-[35%] md:w-[20%] aspect-[4/5] border border-background/20 transition-all duration-[1.5s] delay-300 ease-out hidden md:block",
            isRevealed ? "opacity-60 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <img
            src={studio1}
            alt=""
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div
          className={cn(
            "absolute top-[15%] left-[15%] w-[25%] md:w-[15%] aspect-square border border-background/20 transition-all duration-[1.5s] delay-500 ease-out hidden lg:block",
            isRevealed ? "opacity-50 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <img
            src={studio2}
            alt=""
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/50" />
      </div>

      {/* Giant typography */}
      <div className="relative z-10 flex-1 flex flex-col justify-center editorial-container pt-32">
        <div className="overflow-hidden">
          <h1
            className={cn(
              "font-serif font-normal text-background leading-[0.8] tracking-[-0.04em] transition-all duration-[1.2s] ease-out",
              "text-[20vw] md:text-[18vw] lg:text-[16vw]",
              isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            )}
          >
            AGA
          </h1>
        </div>

        <div className="overflow-hidden mt-4 md:mt-6">
          <p
            className={cn(
              "font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-background/60 transition-all duration-[1s] delay-500 ease-out",
              isRevealed ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            )}
          >
            African Gaming Archive
          </p>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 editorial-container pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Tagline */}
          <div
            className={cn(
              "max-w-md transition-all duration-[1s] delay-700 ease-out",
              isRevealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-background/90 leading-tight">
              Documenting the studios building Africa's interactive future
            </p>
          </div>

          {/* Enter CTA */}
          <Link
            to="/studios"
            className={cn(
              "group inline-flex items-center gap-4 transition-all duration-[1s] delay-900 ease-out",
              isRevealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-background/70 group-hover:text-background transition-colors">
              Enter Archive
            </span>
            <span className="w-12 h-px bg-background/40 group-hover:w-20 group-hover:bg-background transition-all duration-300" />
            <span className="text-background/70 group-hover:text-background group-hover:translate-x-2 transition-all duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-[1s] delay-1000 ease-out",
            isRevealed ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-px h-8 bg-background/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroReveal;

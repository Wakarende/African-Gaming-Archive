import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const HeroReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-foreground">
      {/* Subtle abstract geometric pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="geometric-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Triangular grid pattern */}
              <path
                d="M0 50 L50 0 L100 50 L50 100 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-background"
              />
              <circle
                cx="50"
                cy="50"
                r="2"
                fill="currentColor"
                className="text-background"
              />
              <circle
                cx="0"
                cy="0"
                r="1.5"
                fill="currentColor"
                className="text-background"
              />
              <circle
                cx="100"
                cy="0"
                r="1.5"
                fill="currentColor"
                className="text-background"
              />
              <circle
                cx="0"
                cy="100"
                r="1.5"
                fill="currentColor"
                className="text-background"
              />
              <circle
                cx="100"
                cy="100"
                r="1.5"
                fill="currentColor"
                className="text-background"
              />
              {/* Additional geometric lines */}
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-background"
              />
              <line
                x1="100"
                y1="0"
                x2="0"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-background"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
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

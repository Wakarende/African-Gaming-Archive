import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";
import { studios } from "@/data/studios";

const GalleryPreview = () => {
  // Take first 4 studios for the preview
  const featuredStudios = studios.slice(0, 4);

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="editorial-container">
        {/* Section header */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                The Collection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] tracking-[-0.02em]">
                Featured Studios
              </h2>
            </div>
            <Link
              to="/studios"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>View All</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </AnimatedSection>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large featured item - spans 7 columns */}
          <AnimatedSection
            animation="fade-up"
            delay={100}
            className="col-span-12 md:col-span-7"
          >
            <Link
              to={`/studio/${featuredStudios[0]?.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={featuredStudios[0]?.heroImage}
                  alt={featuredStudios[0]?.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              {/* Logo overlay */}
              {featuredStudios[0]?.logo && (
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 rounded-sm flex items-center justify-center p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={featuredStudios[0]?.logo}
                    alt={`${featuredStudios[0]?.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {/* Museum placard */}
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-serif text-xl md:text-2xl group-hover:text-accent transition-colors">
                  {featuredStudios[0]?.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {featuredStudios[0]?.location}, {featuredStudios[0]?.country}
                </span>
              </div>
            </Link>
          </AnimatedSection>

          {/* Stacked items on right - spans 5 columns */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
            {/* Portrait item */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Link
                to={`/studio/${featuredStudios[1]?.id}`}
                className="group block"
              >
                <div className="relative aspect-[5/4] overflow-hidden border border-border">
                  <img
                    src={featuredStudios[1]?.heroImage}
                    alt={featuredStudios[1]?.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>
                <div className="mt-3 md:mt-4">
                  <h3 className="font-serif text-lg md:text-xl group-hover:text-accent transition-colors">
                    {featuredStudios[1]?.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {featuredStudios[1]?.location}, {featuredStudios[1]?.country}
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* Two small items side by side */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <AnimatedSection animation="fade-up" delay={300}>
                <Link
                  to={`/studio/${featuredStudios[2]?.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden border border-border">
                    <img
                      src={featuredStudios[2]?.heroImage}
                      alt={featuredStudios[2]?.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-sm md:text-base group-hover:text-accent transition-colors truncate">
                      {featuredStudios[2]?.name}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      {featuredStudios[2]?.country}
                    </span>
                  </div>
                </Link>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Link
                  to={`/studio/${featuredStudios[3]?.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden border border-border">
                    <img
                      src={featuredStudios[3]?.heroImage}
                      alt={featuredStudios[3]?.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-sm md:text-base group-hover:text-accent transition-colors truncate">
                      {featuredStudios[3]?.name}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                      {featuredStudios[3]?.country}
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

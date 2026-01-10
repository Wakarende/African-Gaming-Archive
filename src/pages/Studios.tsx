import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import AnimatedSection from "@/components/AnimatedSection";
import CountryFilter from "@/components/CountryFilter";
import { studios } from "@/data/studios";

// Get layout configuration for each studio based on position and total count
const getStudioLayout = (index: number, total: number): { 
  colSpan: string; 
  aspectRatio: string; 
  variant: "featured" | "standard" | "wide";
} => {
  // 1 studio: centered, portrait
  if (total === 1) {
    return { colSpan: "col-span-12 md:col-span-6 md:col-start-4", aspectRatio: "aspect-[3/4]", variant: "featured" };
  }

  // 2 studios: asymmetric split
  if (total === 2) {
    if (index === 0) return { colSpan: "col-span-12 md:col-span-7", aspectRatio: "aspect-[4/5]", variant: "featured" };
    return { colSpan: "col-span-12 md:col-span-5", aspectRatio: "aspect-[4/5]", variant: "standard" };
  }

  // 3 studios: large left, two stacked right
  if (total === 3) {
    if (index === 0) return { colSpan: "col-span-12 md:col-span-7 md:row-span-2", aspectRatio: "aspect-[4/5]", variant: "featured" };
    return { colSpan: "col-span-12 md:col-span-5", aspectRatio: "aspect-[4/5]", variant: "standard" };
  }

  // 4 studios: hero section + one wide bottom
  if (total === 4) {
    if (index === 0) return { colSpan: "col-span-12 md:col-span-7 md:row-span-2", aspectRatio: "aspect-[4/5]", variant: "featured" };
    if (index === 1 || index === 2) return { colSpan: "col-span-12 md:col-span-5", aspectRatio: "aspect-[4/5]", variant: "standard" };
    return { colSpan: "col-span-12", aspectRatio: "aspect-[21/9]", variant: "wide" };
  }

  // 5+ studios: repeating gallery pattern
  const position = index % 7;
  
  // First item is always featured
  if (index === 0) {
    return { colSpan: "col-span-12 md:col-span-7 md:row-span-2", aspectRatio: "aspect-[4/5]", variant: "featured" };
  }
  
  // Second and third stack on the right of featured
  if (index === 1 || index === 2) {
    return { colSpan: "col-span-12 md:col-span-5", aspectRatio: "aspect-[4/5]", variant: "standard" };
  }

  // Remaining items in varied patterns
  switch (position) {
    case 3:
      return { colSpan: "col-span-12 md:col-span-4", aspectRatio: "aspect-[3/4]", variant: "standard" };
    case 4:
      return { colSpan: "col-span-12 md:col-span-4", aspectRatio: "aspect-[3/4]", variant: "standard" };
    case 5:
      return { colSpan: "col-span-12 md:col-span-4", aspectRatio: "aspect-[3/4]", variant: "standard" };
    case 6:
      return { colSpan: "col-span-12 md:col-span-5", aspectRatio: "aspect-[4/5]", variant: "standard" };
    case 0:
      return { colSpan: "col-span-12 md:col-span-7", aspectRatio: "aspect-[4/5]", variant: "featured" };
    default:
      return { colSpan: "col-span-12 md:col-span-4", aspectRatio: "aspect-[3/4]", variant: "standard" };
  }
};

const Studios = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  // Extract unique countries from studios data, sorted alphabetically
  const countries = useMemo(
    () => [...new Set(studios.map((s) => s.country))].sort(),
    []
  );

  // Filter studios based on selection
  const filteredStudios = useMemo(
    () =>
      selectedCountry === "all"
        ? studios
        : studios.filter((s) => s.country === selectedCountry),
    [selectedCountry]
  );

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              The Archive
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[0.9] tracking-[-0.02em] mb-8">
              Studios
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
              A curated collection of game development studios across the African continent. 
              Each entry documents their journey, games, and impact on gaming culture.
            </p>
          </AnimatedSection>

          {/* Country Filter */}
          <AnimatedSection animation="fade-up" delay={100}>
            <CountryFilter
              countries={countries}
              selectedCountry={selectedCountry}
              onCountryChange={setSelectedCountry}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Asymmetric Gallery Grid */}
      {filteredStudios.length > 0 && (
        <section className="pb-24 md:pb-32">
          <div className="editorial-container">
            <div className="grid grid-cols-12 gap-6 md:gap-8">
              {filteredStudios.map((studio, index) => {
                const layout = getStudioLayout(index, filteredStudios.length);
                return (
                  <div key={studio.id} className={layout.colSpan}>
                    <StudioCard
                      studio={studio}
                      index={index}
                      aspectRatio={layout.aspectRatio}
                      variant={layout.variant}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {filteredStudios.length === 0 && (
        <section className="py-24">
          <div className="editorial-container text-center">
            <p className="editorial-body text-muted-foreground">
              No studios found in {selectedCountry}. More studios coming soon.
            </p>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 md:py-32 border-t border-border mt-24">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Know a studio we should document?
              </h2>
              <p className="font-sans text-muted-foreground mb-8">
                We're always looking to expand the archive with new studios from across Africa.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.15em] group"
              >
                <span className="relative">
                  Get in touch
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Studios;
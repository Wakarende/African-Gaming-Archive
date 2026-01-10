import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import AnimatedSection from "@/components/AnimatedSection";
import CountryFilter from "@/components/CountryFilter";
import { studios } from "@/data/studios";

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

  // Get featured studio (first from filtered list)
  const featuredStudio = filteredStudios[0];
  const otherStudios = filteredStudios.slice(1);

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
              Each entry documents their journey, games, and impact on the industry.
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

      {/* Featured Studio */}
      {featuredStudio && (
        <section className="pb-24 md:pb-32">
          <StudioCard studio={featuredStudio} index={0} variant="featured" />
        </section>
      )}

      {/* Studio Grid */}
      {otherStudios.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="editorial-container space-y-32 md:space-y-48">
            {otherStudios.map((studio, index) => (
              <StudioCard
                key={studio.id}
                studio={studio}
                index={index + 1}
                variant="large"
              />
            ))}
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
              <a
                href="/about"
                className="inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.15em] group"
              >
                <span className="relative">
                  Get in touch
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Studios;

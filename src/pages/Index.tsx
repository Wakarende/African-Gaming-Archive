import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import AnimatedSection from "@/components/AnimatedSection";
import CountryFilter from "@/components/CountryFilter";
import { studios } from "@/data/studios";
import heroImage from "@/assets/hero-image.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";

const Index = () => {
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
      {/* Hero Section - Full viewport, immersive */}
      <section className="relative min-h-screen flex flex-col justify-end bg-foreground overflow-hidden">
        {/* Background image mosaic */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-60">
          <div className="relative overflow-hidden">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="relative overflow-hidden hidden md:block">
            <img
              src={studio1}
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="relative overflow-hidden hidden md:block">
            <img
              src={studio2}
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 editorial-container pb-12 md:pb-20">
          <div className="mb-16 md:mb-24">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-8">
              African Game Development Archive
            </p>
            <h1 className="brutalist-headline text-background max-w-[14ch]">
              Documenting the studios building Africa's interactive future
            </h1>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-4">
            <ArrowDown className="w-4 h-4 text-background/60 animate-bounce" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-background/60">
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* Featured Studio - Full width */}
      <section className="py-24 md:py-32">
        <div className="editorial-container mb-12">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              The Archive
            </p>
            <h2 className="editorial-subhead mb-8">Studios</h2>
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

        {featuredStudio && (
          <div className="mb-24">
            <StudioCard studio={featuredStudio} index={0} variant="featured" />
          </div>
        )}
      </section>

      {/* Studio Grid - Alternating large layouts */}
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

      {/* Empty state when no studios match filter */}
      {filteredStudios.length === 0 && (
        <section className="py-24">
          <div className="editorial-container text-center">
            <p className="editorial-body text-muted-foreground">
              No studios found in {selectedCountry}. More studios coming soon.
            </p>
          </div>
        </section>
      )}

      {/* Visual Journey Section */}
      <section className="py-24 md:py-32 section-inverted">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mb-16 md:mb-24">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-6">
                Why This Matters
              </p>
              <h2 className="editorial-headline text-background mb-8">
                A medium being born deserves to be witnessed
              </h2>
              <p className="editorial-body text-background/70">
                Africa is experiencing a quiet revolution in interactive media. 
                Studios in Nairobi, Lagos, Johannesburg, Cairo, Kampala, and beyond 
                are creating games that reflect local experiences and challenge global narratives.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="aspect-square overflow-hidden">
                <img
                  src={studio1}
                  alt="Studio work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src={studio2}
                  alt="Game development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src={studio3}
                  alt="Creative process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="editorial-headline mb-8">
                Know a studio we should document?
              </h2>
              <Link
                to="/about"
                className="inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.15em] group"
              >
                <span className="link-underline">Get in touch</span>
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

export default Index;

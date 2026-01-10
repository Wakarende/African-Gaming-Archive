import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroReveal from "@/components/HeroReveal";
import GalleryPreview from "@/components/GalleryPreview";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";

const Landing = () => {
  return (
    <Layout hideHeader>
      {/* Hero - Full viewport immersive entrance */}
      <HeroReveal />

      {/* Mission Statement */}
      <section className="py-24 md:py-32 lg:py-40 border-b border-border">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
                What is AGDA?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] mb-8">
                A living archive documenting game development studios across the African continent
              </h2>
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                From Nairobi to Lagos, Johannesburg to Cairo—we're building the definitive record 
                of Africa's emerging interactive media industry.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Marquee divider */}
      <section className="py-8 md:py-12 border-b border-border overflow-hidden">
        <Marquee speed="slow" className="text-muted-foreground/30">
          <span className="font-serif text-6xl md:text-8xl lg:text-9xl italic mx-8">
            Studios
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] mx-8">•</span>
          <span className="font-serif text-6xl md:text-8xl lg:text-9xl italic mx-8">
            Creators
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] mx-8">•</span>
          <span className="font-serif text-6xl md:text-8xl lg:text-9xl italic mx-8">
            Games
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] mx-8">•</span>
          <span className="font-serif text-6xl md:text-8xl lg:text-9xl italic mx-8">
            Stories
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] mx-8">•</span>
        </Marquee>
      </section>

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Why This Matters - Full bleed inverted section */}
      <section className="section-inverted py-24 md:py-32 lg:py-40">
        <div className="editorial-container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text content */}
            <AnimatedSection animation="fade-up">
              <div className="md:pr-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 mb-6">
                  Why This Matters
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] tracking-[-0.02em] text-background mb-8">
                  A medium being born deserves to be witnessed
                </h2>
                <div className="space-y-6">
                  <p className="font-sans text-lg text-background/70 leading-relaxed">
                    Africa is experiencing a quiet revolution in interactive media. 
                    Studios in Nairobi, Lagos, Johannesburg, Cairo, Kampala, and beyond 
                    are creating games that reflect local experiences and challenge global narratives.
                  </p>
                  <p className="font-sans text-lg text-background/70 leading-relaxed">
                    Their stories deserve to be told—not as footnotes in Western gaming history, 
                    but as the foundation of their own legacy.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Image stack */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 border border-background/20">
                  <img
                    src={studio1}
                    alt="Game development"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                {/* Offset smaller images */}
                <div className="absolute -bottom-8 -left-8 w-1/2 border border-background/20 hidden md:block">
                  <img
                    src={studio2}
                    alt="Studio work"
                    className="w-full aspect-square object-cover grayscale"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-1/3 border border-background/20 hidden md:block">
                  <img
                    src={studio3}
                    alt="Creative process"
                    className="w-full aspect-[3/4] object-cover grayscale"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pull quote section */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <blockquote className="max-w-5xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic leading-[1.2] tracking-[-0.01em] text-foreground/80">
                "The games we create are extensions of who we are—our histories, 
                our struggles, our dreams. They deserve to be remembered."
              </p>
              <footer className="mt-8 md:mt-12">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  — A Studio Founder
                </span>
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Explore
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.95] tracking-[-0.02em] mb-8">
                Enter the Archive
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-12">
                Discover the studios, creators, and games shaping Africa's interactive future.
              </p>
              <Link
                to="/studios"
                className="inline-flex items-center gap-4 px-8 py-4 border border-foreground text-foreground font-mono text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <span>View All Studios</span>
                <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2">
                  Know a studio we should document?
                </h3>
                <p className="font-sans text-muted-foreground">
                  We're always looking to expand the archive.
                </p>
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.15em]"
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

export default Landing;

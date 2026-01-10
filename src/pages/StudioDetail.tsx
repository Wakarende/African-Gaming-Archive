import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GamesSection from "@/components/GamesSection";
import InterviewsSection from "@/components/InterviewsSection";
import VisualArchive from "@/components/VisualArchive";
import { getStudioById, getAdjacentStudios } from "@/data/studios";

const StudioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const studio = id ? getStudioById(id) : undefined;
  const { prev, next } = id ? getAdjacentStudios(id) : { prev: null, next: null };

  if (!studio) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      {/* Cinematic Hero - Full viewport */}
      <section className="relative min-h-screen flex items-end bg-foreground overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={studio.heroImage}
            alt={studio.name}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 editorial-container pb-16 md:pb-24 w-full">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-6">
              {studio.location}, {studio.country}
            </p>
            <h1 className="brutalist-display text-background mb-8">
              {studio.name}
            </h1>
            <p className="font-serif text-xl md:text-2xl text-background/80 max-w-2xl italic">
              {studio.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Modern Meta Info Section - Editorial Card Layout */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left - Logo and Label */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  {studio.logo && (
                    <div className="w-20 h-20 md:w-24 md:h-24 border border-border flex items-center justify-center p-3 bg-background mb-6">
                      <img
                        src={studio.logo}
                        alt={`${studio.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Studio Profile
                  </p>
                </div>
              </div>
              
              {/* Right - Meta Grid */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  {[
                    { label: "Founded", value: studio.founded },
                    { label: "Platform", value: studio.platform },
                    { label: "Status", value: studio.status },
                    { label: "Location", value: studio.country },
                  ].map((item, index) => (
                    <div key={item.label} className="relative">
                      {/* Connecting line on desktop */}
                      {index < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-border" />
                      )}
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        {item.label}
                      </p>
                      <p className="font-serif text-xl md:text-2xl leading-tight">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative Section - Split layout */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left column - pull quote */}
            <div className="lg:col-span-4">
              <AnimatedSection animation="slide-right">
                <div className="lg:sticky lg:top-32">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    The Story
                  </p>
                  <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight italic text-muted-foreground">
                    "{studio.description[0].split('.')[0]}."
                  </blockquote>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - full narrative */}
            <div className="lg:col-span-8 space-y-8">
              {studio.description.map((paragraph, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <p className="editorial-body text-foreground/90">{paragraph}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Archive - Asymmetric masonry gallery */}
      <VisualArchive images={studio.galleryImages} studioName={studio.name} />

      {/* Games Section */}
      <GamesSection games={studio.games} />

      {/* Interviews Section */}
      <InterviewsSection interviews={studio.interviews} />

      {/* Navigation - Large visual */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
          {/* Previous */}
          {prev ? (
            <Link
              to={`/studio/${prev.id}`}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[16/9] md:aspect-auto md:h-80">
                <img
                  src={prev.heroImage}
                  alt={prev.name}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-center p-8 md:p-12">
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-2" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Previous
                    </p>
                    <p className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                      {prev.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block bg-muted" />
          )}

          {/* Next */}
          {next ? (
            <Link
              to={`/studio/${next.id}`}
              className="group relative overflow-hidden border-t md:border-t-0 md:border-l border-border"
            >
              <div className="aspect-[16/9] md:aspect-auto md:h-80">
                <img
                  src={next.heroImage}
                  alt={next.name}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-end p-8 md:p-12 text-right">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Next
                    </p>
                    <p className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                      {next.name}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden md:block bg-muted" />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default StudioDetail;

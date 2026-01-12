import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GamesSection from "@/components/GamesSection";
import InterviewsSection from "@/components/InterviewsSection";
import VisualArchive from "@/components/VisualArchive";
import { getStudioBySlug, getGamesByStudio, getInterviewsByStudio, getAllStudios } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import type { Studio, Game, Interview } from "@/types/sanity";

const StudioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [studio, setStudio] = useState<Studio | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [prev, setPrev] = useState<Studio | null>(null);
  const [next, setNext] = useState<Studio | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;

      try {
        const studioData = await getStudioBySlug(slug);
        setStudio(studioData);

        if (studioData) {
          const [gamesData, interviewsData, allStudios] = await Promise.all([
            getGamesByStudio(studioData._id),
            getInterviewsByStudio(studioData._id),
            getAllStudios(),
          ]);
          setGames(gamesData);
          setInterviews(interviewsData);
          const currentIndex = allStudios.findIndex(s => s._id === studioData._id);
        const prevStudio = currentIndex > 0 ? allStudios[currentIndex - 1] : null;
        const nextStudio = currentIndex < allStudios.length - 1 ? allStudios[currentIndex + 1] : null;

        setPrev(prevStudio);
        setNext(nextStudio);
        
        }
      } catch (error) {
        console.error('Error fetching studio:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Loading studio...
          </p>
        </div>
      </Layout>
    );
  }


  if (!studio) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      {/* Editorial Hero - Grid-Based Layout */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Typography */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <AnimatedSection animation="fade-up">
                <div className="mb-8 lg:mb-12">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                    {studio.location.city}, {studio.location.country}
                  </p>
                  
                  {/* Studio Name - Large stacked display */}
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.85] tracking-tight mb-8">
                    {studio.name.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h1>
                  
                  <p className="font-serif text-lg md:text-xl text-muted-foreground italic max-w-md">
                    {studio.shortDescription}
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Meta Info - Integrated into hero */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-6 border-t border-border pt-6">
                    {[
                      { label: "Founded", value: studio.founded },
                      { label: "Platform", value: studio.platform.join(', ') },
                      { label: "Status", value: studio.status },
                      { label: "Location", value: studio.location.country },
                    ].map((item) => (
                      <div key={item.label} className="py-2">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="font-serif text-base">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Right Column - Featured Image */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="relative group">
                  <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden border border-border">
                    <img
                      src={studio.heroImage ? urlFor(studio.heroImage) : '/placeholder.jpg'}
                      alt={studio.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Logo overlay */}
                  {studio.logo && (
                  <div className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 bg-background border border-border p-3 opacity-90">
                    <img
                      src={urlFor(studio.logo)}
                      alt={`${studio.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                </div>
              </AnimatedSection>
            </div>
            
            {/* Mobile Meta Info */}
            <div className="lg:hidden col-span-full">
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="grid grid-cols-2 gap-6 border-t border-border pt-6">
                  {[
                    { label: "Founded", value: studio.founded },
                    { label: "Platform", value: studio.platform.join(', ') },
                    { label: "Status", value: studio.status },
                    { label: "Location", value: studio.location.country },
                  ].map((item) => (
                    <div key={item.label} className="py-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-serif text-base">{item.value}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
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
                    "{studio.shortDescription}."
                  </blockquote>
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - full narrative */}
            <div className="lg:col-span-8 space-y-8">
              {studio.narrative && studio.narrative.length > 0 ? (
                studio.narrative.map((block: any, index: number) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <p className="editorial-body text-foreground/90">
                      {block.children?.map((child: any) => child.text).join(' ')}
                    </p>
                  </AnimatedSection>
                ))
              ) : (
                <p className="editorial-body text-muted-foreground">No narrative available.</p>
              )}
          </div>
          </div>
        </div>
      </section>

      {/* Visual Archive - Asymmetric masonry gallery */}
      <VisualArchive images={studio.supportingImages || []} studioName={studio.name} />

      {/* Games Section */}
      <GamesSection games={games} />

      <InterviewsSection interviews={interviews} />

      {/* Navigation - Large visual */}
      <section className="border-t border-border">
        <div className="grid md:grid-cols-2">
          {/* Previous */}
          {prev ? (
            <Link
              to={`/studio/${prev.slug.current}`}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[16/9] md:aspect-auto md:h-80">
                <img
                  src={prev.heroImage ? urlFor(prev.heroImage) : '/placeholder.jpg'}
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
              to={`/studio/${next.slug.current}`}
              className="group relative overflow-hidden border-t md:border-t-0 md:border-l border-border"
            >
              <div className="aspect-[16/9] md:aspect-auto md:h-80">
                <img
                  src={next.heroImage ? urlFor(next.heroImage) : '/placeholder.jpg'}
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

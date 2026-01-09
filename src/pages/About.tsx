import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-image.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero - Full viewport */}
      <section className="relative min-h-[80vh] flex items-end bg-foreground overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Game developers at work"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 editorial-container pb-16 md:pb-24 w-full">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-6">
              About the Archive
            </p>
            <h1 className="brutalist-headline text-background max-w-[16ch]">
              Preserving the history of a medium as it's being made
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <AnimatedSection animation="slide-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Mission
                </p>
                <p className="font-serif text-2xl md:text-3xl leading-snug">
                  We believe game development is a form of cultural expression.
                </p>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="editorial-body text-foreground/90 mb-8">
                  The East African Game Development Archive exists to document and celebrate 
                  the growing community of game creators across the region. We believe that 
                  game development is a form of cultural expression, and that the stories 
                  of these studios—their struggles, innovations, and triumphs—deserve to be told.
                </p>
                <p className="editorial-body text-foreground/90">
                  Yet much of this work goes undocumented. Studios come and go, games are 
                  released and forgotten, and the institutional memory of the industry 
                  remains fragmented. This archive aims to change that—to create a 
                  permanent record of who is building, what they're creating, and why it matters.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-0">
        <AnimatedSection animation="scale">
          <div className="grid md:grid-cols-2 gap-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={studio1}
                alt="Studio environment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={studio2}
                alt="Development in progress"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why This Matters */}
      <section className="py-20 md:py-32 section-inverted">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-8">
                Why This Matters
              </p>
              <h2 className="editorial-headline text-background mb-12">
                East Africa is experiencing a quiet revolution in interactive media
              </h2>
              <p className="editorial-body text-background/80">
                Studios in Nairobi, Kampala, Dar es Salaam, and Kigali are creating 
                games that reflect local experiences, challenge global narratives, and 
                push the boundaries of the medium itself.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <AnimatedSection animation="slide-right">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Documentation process"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4">
                  A Nairobi studio during a late-night development session, 2024
                </p>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-7 flex items-center">
              <AnimatedSection animation="fade-up" delay={150}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Our Approach
                </p>
                <h2 className="editorial-subhead mb-8">
                  We approach each studio as we would a subject in a documentary photograph
                </h2>
                <p className="editorial-body text-foreground/90 mb-6">
                  With patience, attention to detail, and deep respect for their story. 
                  Our profiles are the result of extensive interviews, studio visits, 
                  and archival research.
                </p>
                <p className="editorial-body text-foreground/90">
                  We prioritize visual documentation, believing that images convey what 
                  words cannot. Each entry in the archive is designed to feel like a 
                  magazine spread—a moment frozen in time.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 md:py-32">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Get in Touch
              </p>
              <h2 className="editorial-headline mb-8">
                Know a studio we should document?
              </h2>
              <p className="editorial-body text-foreground/90 mb-8">
                We're always looking to expand the archive. If you know of a game 
                development studio in East Africa that should be included, or if 
                you're a studio looking to be featured, please reach out.
              </p>
              <a
                href="mailto:hello@eagda.org"
                className="inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.15em] group"
              >
                <span className="link-underline text-accent">hello@eagda.org</span>
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-2">
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

export default About;

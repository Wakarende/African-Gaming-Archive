import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="editorial-container">
          <div className="max-w-3xl">
            <p className="editorial-caption mb-4">About the Archive</p>
            <h1 className="editorial-headline mb-8">
              Preserving the history of a medium as it's being made
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="editorial-subhead">Mission</h2>
                <p className="editorial-body text-foreground/90 leading-relaxed">
                  The East African Game Development Archive exists to document and celebrate 
                  the growing community of game creators across the region. We believe that 
                  game development is a form of cultural expression, and that the stories 
                  of these studios—their struggles, innovations, and triumphs—deserve to be told.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="editorial-subhead">Why This Matters</h2>
                <p className="editorial-body text-foreground/90 leading-relaxed">
                  East Africa is experiencing a quiet revolution in interactive media. 
                  Studios in Nairobi, Kampala, Dar es Salaam, and Kigali are creating 
                  games that reflect local experiences, challenge global narratives, and 
                  push the boundaries of the medium itself.
                </p>
                <p className="editorial-body text-foreground/90 leading-relaxed">
                  Yet much of this work goes undocumented. Studios come and go, games are 
                  released and forgotten, and the institutional memory of the industry 
                  remains fragmented. This archive aims to change that—to create a 
                  permanent record of who is building, what they're creating, and why it matters.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="editorial-subhead">Our Approach</h2>
                <p className="editorial-body text-foreground/90 leading-relaxed">
                  We approach each studio as we would a subject in a documentary photograph: 
                  with patience, attention to detail, and deep respect for their story. 
                  Our profiles are the result of extensive interviews, studio visits, 
                  and archival research. We prioritize visual documentation, believing 
                  that images convey what words cannot.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={heroImage}
                  alt="Game developers working in an East African studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="editorial-meta italic">
                A Nairobi studio during a late-night development session, 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="editorial-container">
          <div className="max-w-xl">
            <p className="editorial-caption mb-4">Get in Touch</p>
            <h2 className="editorial-subhead mb-6">
              Know a studio we should document?
            </h2>
            <p className="editorial-body text-foreground/90 mb-6">
              We're always looking to expand the archive. If you know of a game 
              development studio in East Africa that should be included, or if 
              you're a studio looking to be featured, please reach out.
            </p>
            <a
              href="mailto:hello@eagda.org"
              className="inline-block font-serif text-lg border-b-2 border-accent text-accent hover:text-accent/80 transition-colors"
            >
              hello@eagda.org
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

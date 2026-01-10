import { Interview } from "@/data/studios";
import AnimatedSection from "./AnimatedSection";

interface InterviewsSectionProps {
  interviews: Interview[];
}

const InterviewsSection = ({ interviews }: InterviewsSectionProps) => {
  if (interviews.length === 0) return null;

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="editorial-container">
        <AnimatedSection animation="fade-up">
          <div className="mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Media Coverage
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Interviews & Press</h2>
          </div>
        </AnimatedSection>

        <div className="divide-y divide-border">
          {interviews.map((interview, index) => (
            <AnimatedSection key={interview.id} animation="fade-up" delay={index * 100}>
              <a
                href={interview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-8 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors mb-2">
                      {interview.headline}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 md:text-right shrink-0">
                    <span className="font-sans text-sm text-muted-foreground">
                      {interview.publication}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {interview.date}
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
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
      {/* Hero Image */}
      <section className="border-b border-border">
        <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-muted">
          <img
            src={studio.heroImage}
            alt={studio.name}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Studio Info */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <p className="editorial-caption mb-4">
              {studio.location}, {studio.country}
            </p>
            <h1 className="editorial-headline mb-8">{studio.name}</h1>
            
            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border">
              <div>
                <p className="editorial-caption mb-1">Founded</p>
                <p className="font-serif text-lg">{studio.founded}</p>
              </div>
              <div>
                <p className="editorial-caption mb-1">Platform</p>
                <p className="font-serif text-lg">{studio.platform}</p>
              </div>
              <div>
                <p className="editorial-caption mb-1">Status</p>
                <p className="font-serif text-lg">{studio.status}</p>
              </div>
              <div>
                <p className="editorial-caption mb-1">Location</p>
                <p className="font-serif text-lg">{studio.country}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="editorial-container">
          <div className="max-w-3xl space-y-6">
            {studio.description.map((paragraph, index) => (
              <p key={index} className="editorial-body text-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="editorial-container">
          <p className="editorial-caption mb-8">Gallery</p>
          <div className="grid md:grid-cols-2 gap-6">
            {studio.galleryImages.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={`${studio.name} gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 md:py-16">
        <div className="editorial-container">
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                to={`/studio/${prev.id}`}
                className="group flex items-center gap-3 hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <p className="editorial-caption mb-1">Previous</p>
                  <p className="font-serif text-lg">{prev.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {next ? (
              <Link
                to={`/studio/${next.id}`}
                className="group flex items-center gap-3 hover:text-accent transition-colors text-right"
              >
                <div>
                  <p className="editorial-caption mb-1">Next</p>
                  <p className="font-serif text-lg">{next.name}</p>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudioDetail;

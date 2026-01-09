import Layout from "@/components/Layout";
import StudioCard from "@/components/StudioCard";
import { studios } from "@/data/studios";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="editorial-container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="editorial-headline">
                Documenting the studios building Africa's interactive future
              </h1>
              <p className="editorial-body text-muted-foreground max-w-lg">
                A visual archive of game development studios across East Africa, 
                preserving the stories of creators shaping a new medium on the continent.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={heroImage}
                alt="East African game developers at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Grid */}
      <section className="py-16 md:py-24">
        <div className="editorial-container">
          <div className="mb-12">
            <p className="editorial-caption mb-4">The Archive</p>
            <h2 className="editorial-subhead">Featured Studios</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {studios.map((studio) => (
              <StudioCard key={studio.id} studio={studio} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

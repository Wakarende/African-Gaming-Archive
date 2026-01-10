import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import ImageLightbox from "./ImageLightbox";
import { cn } from "@/lib/utils";

interface VisualArchiveProps {
  images: string[];
  studioName: string;
}

// Layout patterns for different image counts
const getLayoutPattern = (count: number): string[][] => {
  if (count === 2) {
    return [
      ["md:col-span-8", "aspect-[16/10]"],
      ["md:col-span-4", "aspect-square"],
    ];
  }

  if (count === 3) {
    return [
      ["md:col-span-12", "aspect-[21/9]"],
      ["md:col-span-5", "aspect-[3/4]"],
      ["md:col-span-7", "aspect-[16/10]"],
    ];
  }

  if (count === 4) {
    return [
      ["md:col-span-8", "aspect-[16/10]"],
      ["md:col-span-4", "aspect-square"],
      ["md:col-span-4", "aspect-square"],
      ["md:col-span-8", "aspect-[16/10]"],
    ];
  }

  if (count === 5) {
    return [
      ["md:col-span-12", "aspect-[21/9]"],
      ["md:col-span-6", "aspect-[4/3]"],
      ["md:col-span-6", "aspect-[4/3]"],
      ["md:col-span-5", "aspect-[3/4]"],
      ["md:col-span-7", "aspect-[16/10]"],
    ];
  }

  if (count === 6) {
    return [
      ["md:col-span-8", "aspect-[16/10]"],
      ["md:col-span-4", "aspect-square"],
      ["md:col-span-4", "aspect-[3/4]"],
      ["md:col-span-4", "aspect-[3/4]"],
      ["md:col-span-4", "aspect-[3/4]"],
      ["md:col-span-12", "aspect-[21/9]"],
    ];
  }

  if (count === 7) {
    return [
      ["md:col-span-12", "aspect-[21/9]"],
      ["md:col-span-6", "aspect-[4/3]"],
      ["md:col-span-6", "aspect-[4/3]"],
      ["md:col-span-4", "aspect-square"],
      ["md:col-span-8", "aspect-[16/10]"],
      ["md:col-span-5", "aspect-[3/4]"],
      ["md:col-span-7", "aspect-[16/10]"],
    ];
  }

  // 8+ images: repeating pattern
  const patterns: string[][] = [];
  for (let i = 0; i < count; i++) {
    const position = i % 8;
    switch (position) {
      case 0:
        patterns.push(["md:col-span-8", "aspect-[16/10]"]);
        break;
      case 1:
        patterns.push(["md:col-span-4", "aspect-square"]);
        break;
      case 2:
        patterns.push(["md:col-span-5", "aspect-[3/4]"]);
        break;
      case 3:
        patterns.push(["md:col-span-7", "aspect-[16/10]"]);
        break;
      case 4:
        patterns.push(["md:col-span-12", "aspect-[21/9]"]);
        break;
      case 5:
        patterns.push(["md:col-span-6", "aspect-[4/3]"]);
        break;
      case 6:
        patterns.push(["md:col-span-6", "aspect-[4/3]"]);
        break;
      case 7:
        patterns.push(["md:col-span-4", "aspect-square"]);
        break;
    }
  }
  return patterns;
};

const VisualArchive = ({ images, studioName }: VisualArchiveProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const layoutPattern = getLayoutPattern(images.length);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-12 md:py-20 section-inverted">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-12">
              Visual Archive
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-12 gap-4">
            {images.map((image, index) => {
              const [colSpan, aspectRatio] = layoutPattern[index] || [
                "md:col-span-6",
                "aspect-[4/3]",
              ];

              return (
                <AnimatedSection
                  key={index}
                  animation="scale"
                  delay={index * 100}
                  className={cn(colSpan, "group")}
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className={cn(
                      "w-full overflow-hidden border border-background/10 cursor-pointer",
                      "transition-all duration-500",
                      "hover:border-background/30",
                      aspectRatio
                    )}
                    aria-label={`View ${studioName} gallery image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${studioName} archive ${index + 1}`}
                      className={cn(
                        "w-full h-full object-cover",
                        "transition-all duration-700",
                        "group-hover:scale-[1.03]",
                        "grayscale-0 group-hover:grayscale"
                      )}
                    />
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
        altPrefix={`${studioName} archive`}
      />
    </>
  );
};

export default VisualArchive;
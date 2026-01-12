import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import ImageLightbox from "./ImageLightbox";
import { cn } from "@/lib/utils";
import {urlFor} from "@/lib/sanity";

interface VisualArchiveProps {
  images: any[];
  studioName: string;
}

// Row-based layout configuration for matched heights
type RowConfig = {
  widths: string[];
  aspectRatio: string;
};

const getRowLayouts = (count: number): RowConfig[] => {
  if (count === 1) {
    return [{ widths: ["w-full"], aspectRatio: "aspect-[21/9]" }];
  }

  if (count === 2) {
    // Single row, same aspect ratio for matched heights
    return [{ widths: ["w-[60%]", "w-[40%]"], aspectRatio: "aspect-[16/10]" }];
  }

  if (count === 3) {
    return [
      { widths: ["w-full"], aspectRatio: "aspect-[21/9]" },
      { widths: ["w-[45%]", "w-[55%]"], aspectRatio: "aspect-[4/3]" },
    ];
  }

  if (count === 4) {
    return [
      { widths: ["w-[65%]", "w-[35%]"], aspectRatio: "aspect-[4/3]" },
      { widths: ["w-[35%]", "w-[65%]"], aspectRatio: "aspect-[4/3]" },
    ];
  }

  if (count === 5) {
    return [
      { widths: ["w-full"], aspectRatio: "aspect-[21/9]" },
      { widths: ["w-[50%]", "w-[50%]"], aspectRatio: "aspect-[4/3]" },
      { widths: ["w-[40%]", "w-[60%]"], aspectRatio: "aspect-[16/10]" },
    ];
  }

  if (count === 6) {
    return [
      { widths: ["w-[60%]", "w-[40%]"], aspectRatio: "aspect-[16/10]" },
      { widths: ["w-[33.33%]", "w-[33.33%]", "w-[33.33%]"], aspectRatio: "aspect-[3/4]" },
      { widths: ["w-full"], aspectRatio: "aspect-[21/9]" },
    ];
  }

  if (count === 7) {
    return [
      { widths: ["w-full"], aspectRatio: "aspect-[21/9]" },
      { widths: ["w-[50%]", "w-[50%]"], aspectRatio: "aspect-[4/3]" },
      { widths: ["w-[35%]", "w-[65%]"], aspectRatio: "aspect-[16/10]" },
      { widths: ["w-[55%]", "w-[45%]"], aspectRatio: "aspect-[4/3]" },
    ];
  }

  // 8+ images: build repeating row patterns
  const rows: RowConfig[] = [];
  let remaining = count;
  let patternIndex = 0;

  const patterns: RowConfig[] = [
    { widths: ["w-[60%]", "w-[40%]"], aspectRatio: "aspect-[16/10]" },
    { widths: ["w-[33.33%]", "w-[33.33%]", "w-[33.33%]"], aspectRatio: "aspect-[3/4]" },
    { widths: ["w-full"], aspectRatio: "aspect-[21/9]" },
    { widths: ["w-[45%]", "w-[55%]"], aspectRatio: "aspect-[4/3]" },
  ];

  while (remaining > 0) {
    const pattern = patterns[patternIndex % patterns.length];
    const imagesInRow = Math.min(pattern.widths.length, remaining);
    
    if (imagesInRow < pattern.widths.length && remaining <= 2) {
      // Last row with fewer images - adjust widths
      if (remaining === 1) {
        rows.push({ widths: ["w-full"], aspectRatio: "aspect-[21/9]" });
      } else {
        rows.push({ widths: ["w-[50%]", "w-[50%]"], aspectRatio: "aspect-[4/3]" });
      }
      break;
    }
    
    rows.push({ widths: pattern.widths.slice(0, imagesInRow), aspectRatio: pattern.aspectRatio });
    remaining -= imagesInRow;
    patternIndex++;
  }

  return rows;
};

const VisualArchive = ({ images, studioName }: VisualArchiveProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const imageUrls = images.map(img => 
    typeof img === 'string' ? img : urlFor(img)
  );

  const rowLayouts = getRowLayouts(imageUrls.length);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Build rows of images
  let imageIndex = 0;
  const rows = rowLayouts.map((row, rowIndex) => {
    const rowImages = row.widths.map((width, i) => {
      const currentIndex = imageIndex;
      imageIndex++;
      if (currentIndex >= imageUrls.length) return null;
      
      return {
        src: imageUrls[currentIndex],
        width,
        index: currentIndex,
      };
    }).filter(Boolean);

    return { ...row, images: rowImages, rowIndex };
  });

  return (
    <>
      <section className="py-12 md:py-20 section-inverted">
        <div className="editorial-container">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/60 mb-12">
              Visual Archive
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <div 
                key={row.rowIndex} 
                className="flex gap-4"
              >
                {row.images.map((img) => {
                  if (!img) return null;
                  
                  return (
                    <AnimatedSection
                      key={img.index}
                      animation="scale"
                      delay={img.index * 100}
                      className={cn(img.width, "flex-shrink-0")}
                    >
                      <button
                        onClick={() => openLightbox(img.index)}
                        className={cn(
                          "w-full overflow-hidden border border-background/10 cursor-pointer",
                          "transition-all duration-500",
                          "hover:border-background/30",
                          row.aspectRatio
                        )}
                        aria-label={`View ${studioName} gallery image ${img.index + 1}`}
                      >
                        <img
                          src={img.src}
                          alt={`${studioName} archive ${img.index + 1}`}
                          className={cn(
                            "w-full h-full object-cover",
                            "transition-all duration-700",
                            "group-hover:scale-[1.03]",
                            "grayscale-0 hover:grayscale"
                          )}
                        />
                      </button>
                    </AnimatedSection>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={imageUrls}
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
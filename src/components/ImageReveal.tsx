import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  overlay?: boolean;
  parallax?: boolean;
}

const ImageReveal = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-[4/3]",
  overlay = false,
  parallax = false,
}: ImageRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden bg-muted relative",
        aspectRatio,
        className
      )}
    >
      {/* Reveal overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-background z-10 transition-transform duration-1000 ease-out origin-left",
          isVisible && isLoaded ? "scale-x-0" : "scale-x-100"
        )}
      />
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-1000",
          isVisible && isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0",
          parallax && "hover:scale-105 transition-transform duration-700"
        )}
      />
      
      {/* Optional dark overlay for text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply" />
      )}
    </div>
  );
};

export default ImageReveal;

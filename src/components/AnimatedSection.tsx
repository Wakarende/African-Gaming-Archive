import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const baseStyles = "transition-all duration-1000 ease-out";
  
  const animationStyles = {
    "fade-up": {
      hidden: "opacity-0 translate-y-16",
      visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
    "slide-left": {
      hidden: "opacity-0 translate-x-16",
      visible: "opacity-100 translate-x-0",
    },
    "slide-right": {
      hidden: "opacity-0 -translate-x-16",
      visible: "opacity-100 translate-x-0",
    },
    "scale": {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
  };

  const currentAnimation = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        isVisible ? currentAnimation.visible : currentAnimation.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

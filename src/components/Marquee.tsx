import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

const Marquee = ({
  children,
  className,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) => {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap",
        pauseOnHover && "group",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center">{children}</span>
      </div>
    </div>
  );
};

export default Marquee;

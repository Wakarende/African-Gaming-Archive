import { Game } from "@/data/studios";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="group border border-border bg-background overflow-hidden">
      {/* Image - full bleed with grayscale effect */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </AspectRatio>
        
        {/* Status badge overlay */}
        <div className="absolute top-4 right-4">
          <span className={`font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 ${
            game.status === "Released" 
              ? "bg-foreground text-background" 
              : "bg-background/90 text-foreground border border-border"
          }`}>
            {game.status}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Meta info */}
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
          {game.year} · {game.platform}
        </p>
        
        {/* Title */}
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-tight">
          {game.title}
        </h3>
        
        {/* Play link */}
        {game.playUrl && game.status === "Released" && (
          <a
            href={game.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground group/link"
          >
            <span className="relative">
              Play Game
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default GameCard;

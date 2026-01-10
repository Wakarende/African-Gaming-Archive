import { Game } from "@/data/studios";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="bg-background border border-border p-10">
      <AspectRatio ratio={16 / 9} className="overflow-hidden mb-6">
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      
      <h3 className="font-serif text-2xl text-foreground mb-3">
        {game.title}
      </h3>
      
      <p className="font-sans text-sm text-muted-foreground mb-4">
        {game.year} • {game.platform} • {game.status}
      </p>
      
      {game.playUrl && game.status === "Released" && (
        <a
          href={game.playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent underline hover:no-underline"
        >
          Play Game
        </a>
      )}
    </div>
  );
};

export default GameCard;
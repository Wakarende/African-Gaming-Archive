import { Link } from "react-router-dom";
import type { Studio } from "@/data/studios";

interface StudioCardProps {
  studio: Studio;
}

const StudioCard = ({ studio }: StudioCardProps) => {
  return (
    <Link to={`/studio/${studio.id}`} className="group block">
      <article className="space-y-4">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={studio.heroImage}
            alt={`${studio.name} - ${studio.tagline}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <p className="editorial-caption">
            {studio.location}, {studio.country}
          </p>
          <h3 className="font-serif text-xl md:text-2xl group-hover:text-accent transition-colors">
            {studio.name}
          </h3>
          <p className="editorial-body text-muted-foreground line-clamp-2">
            {studio.tagline}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default StudioCard;

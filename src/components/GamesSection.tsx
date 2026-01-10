import { useState, useMemo } from "react";
import { Game } from "@/data/studios";
import GameCard from "./GameCard";
import AnimatedSection from "./AnimatedSection";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GamesSectionProps {
  games: Game[];
}

const GAMES_PER_PAGE = 6;

const GamesSection = ({ games }: GamesSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "released" && game.status === "Released") ||
        (statusFilter === "development" && game.status === "In Development");
      return matchesSearch && matchesStatus;
    });
  }, [games, searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE);
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * GAMES_PER_PAGE,
    currentPage * GAMES_PER_PAGE
  );

  const showPagination = filteredGames.length > GAMES_PER_PAGE;

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  if (games.length === 0) return null;

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="editorial-container">
        <AnimatedSection animation="fade-up">
          <div className="mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Games Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Games</h2>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="flex-1 bg-background border-border font-sans text-sm"
              />
              <Select value={statusFilter} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-full sm:w-48 bg-background border-border font-sans text-sm">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Games</SelectItem>
                  <SelectItem value="released">Released</SelectItem>
                  <SelectItem value="development">In Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </AnimatedSection>

        {/* Games Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {paginatedGames.map((game, index) => (
            <AnimatedSection key={game.id} animation="fade-up" delay={index * 100}>
              <GameCard game={game} />
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <AnimatedSection animation="fade-up">
            <p className="text-center text-muted-foreground font-sans py-16">
              No games found matching your criteria.
            </p>
          </AnimatedSection>
        )}

        {/* Pagination */}
        {showPagination && (
          <AnimatedSection animation="fade-up">
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 font-mono text-sm transition-colors ${
                      currentPage === page
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default GamesSection;
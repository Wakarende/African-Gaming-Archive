import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isLandingPage?: boolean;
}

const Header = ({ isLandingPage = false }: HeaderProps) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      // Show header after scrolling past viewport height (hero section)
      setIsPastHero(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // On landing page, hide header until user scrolls past hero
  const shouldHideHeader = isLandingPage && !isPastHero && !isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          shouldHideHeader
            ? "opacity-0 pointer-events-none -translate-y-4"
            : "opacity-100 pointer-events-auto translate-y-0",
          isScrolled || !isHome || isPastHero
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent",
          isScrolled ? "py-4" : "py-6 md:py-8"
        )}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-mono text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300",
              isScrolled || !isHome || isPastHero
                ? "text-foreground"
                : "text-background"
            )}
          >
            <img src="/src/assets/AGA.png" alt="AGA-logo" className="w-24 h-auto"></img>
         
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {[
              { path: "/studios", label: "Studios", active: true },
              { path: "#", label: "Creators", coming: true },
              { path: "#", label: "Esports", coming: true },
              { path: "#", label: "Spaces", coming: true },
            ].map((link) => (
              <div key={link.label} className="relative">
                {link.coming ? (
                  <span
                    className={cn(
                      "font-mono text-xs uppercase tracking-[0.15em] cursor-not-allowed",
                      isScrolled || !isHome || isPastHero
                        ? "text-muted-foreground/50"
                        : "text-background/40"
                    )}
                  >
                    {link.label}
                    <span className="ml-1 text-[9px] font-mono tracking-normal">(soon)</span>
                  </span>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "relative font-mono text-xs uppercase tracking-[0.15em] transition-colors py-2",
                      isScrolled || !isHome || isPastHero
                        ? "text-foreground/70 hover:text-foreground"
                        : "text-background/70 hover:text-background",
                      isActive(link.path) && "text-foreground"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left",
                        isScrolled || !isHome || isPastHero ? "bg-foreground" : "bg-background",
                        isActive(link.path) ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/about"
              className={cn(
                "relative font-mono text-xs uppercase tracking-[0.15em] transition-colors py-2",
                isScrolled || !isHome || isPastHero
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-background/70 hover:text-background",
                isActive("/about") && "text-foreground"
              )}
            >
              About
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left",
                  isScrolled || !isHome || isPastHero ? "bg-foreground" : "bg-background",
                  isActive("/about") ? "scale-x-100" : "scale-x-0"
                )}
              />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5",
              isScrolled || !isHome || isPastHero ? "text-foreground" : "text-background"
            )}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-px transition-all duration-300",
                isScrolled || !isHome || isPastHero ? "bg-foreground" : "bg-background",
                isMobileMenuOpen && "rotate-45 translate-y-1"
              )}
            />
            <span
              className={cn(
                "w-6 h-px transition-all duration-300",
                isScrolled || !isHome || isPastHero ? "bg-foreground" : "bg-background",
                isMobileMenuOpen && "-rotate-45 -translate-y-0.5"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 flex flex-col justify-center items-center",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {[
            { path: "/studios", label: "Studios", active: true },
            { path: "#", label: "Creators", coming: true },
            { path: "#", label: "Esports", coming: true },
            { path: "#", label: "Spaces", coming: true },
          ].map((link, index) => (
            <div key={link.label}>
              {link.coming ? (
                <span
                  className={cn(
                    "font-serif text-4xl md:text-5xl text-muted-foreground/40 cursor-not-allowed transition-all duration-500",
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {link.label}
                  <span className="ml-2 text-base font-mono tracking-normal">(soon)</span>
                </span>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "font-serif text-4xl md:text-5xl transition-all duration-500",
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8",
                    isActive(link.path)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/about"
            className={cn(
              "font-serif text-4xl md:text-5xl transition-all duration-500 mt-4 pt-4 border-t border-border",
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
              isActive("/about")
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            About
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;

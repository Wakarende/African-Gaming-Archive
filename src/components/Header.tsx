import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-border">
      <div className="editorial-container py-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg md:text-xl tracking-tight hover:text-accent transition-colors">
          East African Game Development Archive
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={`editorial-caption transition-colors hover:text-foreground ${
              isActive("/") ? "text-foreground" : ""
            }`}
          >
            Archive
          </Link>
          <Link
            to="/about"
            className={`editorial-caption transition-colors hover:text-foreground ${
              isActive("/about") ? "text-foreground" : ""
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

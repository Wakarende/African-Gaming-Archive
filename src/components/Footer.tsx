import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="editorial-container py-16 md:py-24">
        <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-6">
              <Link
                to="/"
                className="font-serif text-2xl md:text-3xl hover:text-accent transition-colors"
              >
                African Gaming
                <br />
                Archive
              </Link>
              <p className="editorial-body text-muted-foreground mt-6 max-w-md">
                Documenting Africa's gaming culture, one story at a time.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Navigate
              </p>
              <nav className="flex flex-col gap-4">
                <Link
                  to="/studios"
                  className="font-mono text-sm uppercase tracking-[0.1em] link-underline w-fit"
                >
                  Studios
                </Link>
                <Link
                  to="/about"
                  className="font-mono text-sm uppercase tracking-[0.1em] link-underline w-fit"
                >
                  About
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <p className="font-mono text-[10px]tracking-[0.2em] text-muted-foreground mb-6">
                Contact
              </p>
              <a
                href="mailto:AfricanGamingArchive@proton.me"
                className="font-mono text-sm link-underline"
              >
                AfricanGamingArchive@proton.me
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              © {currentYear} AGA. All rights reserved.
            </p>
            {/* <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Built with intention
            </p> */}
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="editorial-container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="editorial-meta">
          © {new Date().getFullYear()} East African Game Development Archive
        </p>
        <p className="editorial-meta">
          <a href="mailto:hello@eagda.org" className="hover:text-foreground transition-colors">
            hello@eagda.org
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

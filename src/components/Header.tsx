import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="text-2xl font-serif text-primary hover:text-primary/80 transition-colors">
          Astra Academics
        </Link>
      </div>
    </header>
  );
};

export default Header;

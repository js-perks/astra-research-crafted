import { Link } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif text-primary hover:text-primary/80 transition-colors">
          Astra Academics
        </Link>
        <CartDrawer />
      </div>
    </header>
  );
};

export default Header;

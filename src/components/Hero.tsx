import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import heroImage from "@/assets/hero-research.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-6 right-6 z-20">
        <CartDrawer />
      </div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
          Notebooks for research.
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-95">
          Designed for clarity, durability, and discovery.
        </p>
        <Button 
          onClick={scrollToProducts}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-lg group transition-all"
        >
          Explore Notebooks
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;

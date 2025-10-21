import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-light">Astra Academics</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium notebooks designed for researchers, scholars, and graduate students. 
              Supporting clarity, durability, and discovery since 2024.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Stay Updated
            </h4>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to receive updates about new products and insights on academic tools.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Astra Academics. All rights reserved.</p>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">About</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "These notebooks have become essential to my fieldwork. The durability is exceptional, and the layout keeps my observations organized.",
    author: "Dr. Sarah Chen",
    position: "Environmental Scientist, Stanford University",
  },
  {
    id: 2,
    text: "I've used countless notebooks throughout my career. Astra Academics finally understands what researchers actually need—quality that matches the importance of our work.",
    author: "Prof. Michael Torres",
    position: "Astrophysics, MIT",
  },
  {
    id: 3,
    text: "The Research Journal has transformed how I structure my literature reviews and experiment planning. It's become an archive I know will last.",
    author: "Dr. Aisha Patel",
    position: "Molecular Biology, Oxford University",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-4 tracking-tight">
            Trusted by Researchers
          </h2>
          <p className="text-lg text-muted-foreground">
            Used in laboratories, field sites, and libraries around the world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-border/50 bg-card">
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-8 w-8 text-accent/60" />
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

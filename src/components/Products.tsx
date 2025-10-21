import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fieldNotebook from "@/assets/field-notebook.jpg";
import researchJournal from "@/assets/research-journal.jpg";

const products = [
  {
    id: 1,
    name: "The Field Notebook",
    description: "Portable, durable, ideal for data collection and lab work.",
    image: fieldNotebook,
    features: [
      'Compact 5×8" format',
      "Water-resistant cover",
      "Grid or ruled pages",
      "Lay-flat binding",
    ],
  },
  {
    id: 2,
    name: "The Research Journal",
    description: "Larger format, structured for long-form notes and planning.",
    image: researchJournal,
    features: [
      'Spacious 8.5×11" format',
      "Premium 100gsm paper",
      "Numbered pages with index",
      "Archival quality",
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-4 tracking-tight">
            Our Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each notebook is crafted to support different aspects of academic work, 
            from field observations to comprehensive research documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-card">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="mr-2 text-accent">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts(10);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast({
      title: "Added to cart",
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  if (loading) {
    return (
      <section id="products" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

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

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No products found</p>
            <p className="text-muted-foreground">
              Tell me what product you'd like to create, including its name, description, and price!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => {
              const variant = product.node.variants.edges[0]?.node;
              const price = variant?.price;
              
              return (
                <Card key={product.node.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                  <Link to={`/product/${product.node.handle}`}>
                    <div className="aspect-square overflow-hidden bg-card cursor-pointer">
                      {product.node.images.edges[0]?.node ? (
                        <img 
                          src={product.node.images.edges[0].node.url} 
                          alt={product.node.images.edges[0].node.altText || product.node.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <p className="text-muted-foreground">No image</p>
                        </div>
                      )}
                    </div>
                  </Link>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary">
                      {product.node.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {product.node.description}
                    </CardDescription>
                    {price && (
                      <p className="text-xl font-semibold text-primary">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full" 
                      size="lg"
                      disabled={!variant?.availableForSale}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {variant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

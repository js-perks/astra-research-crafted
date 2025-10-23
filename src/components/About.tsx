const About = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-primary tracking-tight">
            Tools for focused thinking
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Astra Academics creates notebooks that support the work of researchers, scholars, 
              and graduate students. Each product is designed with intention—thoughtful layouts, 
              quality materials, and durable construction built to last through years of use.
            </p>
            <p>
              We believe good tools fade into the background, letting ideas take center stage. 
              Our notebooks offer clarity without distraction, supporting the deep, sustained focus 
              that meaningful research demands.
            </p>
            <p className="text-secondary font-medium italic">
              Quality materials. Intelligent design. Made for discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

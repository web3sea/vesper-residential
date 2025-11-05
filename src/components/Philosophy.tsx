import badge40Years from "@/assets/40-years-badge.jpg";

const Philosophy = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* 40 Years Badge */}
        <div className="absolute top-8 right-8 animate-fade-in">
          <img 
            src={badge40Years} 
            alt="40 Years - World Class Estates" 
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 drop-shadow-lg"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our Philosophy
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
          <p className="text-xl md:text-2xl text-center mb-12 text-muted-foreground font-light">
            Every residential project is a deeply personal journey—an opportunity to transform your vision, lifestyle, and aspirations into a home that is both timeless and inspiring.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Bespoke Excellence</h3>
              <p className="text-muted-foreground">
                We specialize in crafting extraordinary private residences and estates through bespoke design, meticulous craftsmanship, and a profound respect for each client's individuality and environment.
              </p>
              <p className="text-muted-foreground">
                Our philosophy blends artistry with precision, honoring the unique character of every client and place.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Integrated Approach</h3>
              <p className="text-muted-foreground">
                From initial concept to completion and ongoing care, our integrated team of architects, interior designers, landscape architects, and property management professionals brings global expertise and local insight to every stage.
              </p>
              <p className="text-muted-foreground">
                We are committed to thoughtful listening, creative collaboration, and a relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

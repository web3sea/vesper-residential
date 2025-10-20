import landscapeImage from "@/assets/landscape-design.jpg";

const GlobalPerspective = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Local Roots, Global Perspective
            </h2>
            <div className="w-24 h-1 bg-accent" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are deeply rooted in the communities we serve, offering unmatched local expertise and insight. What truly sets us apart is our extensive international experience across the <strong className="text-primary">United States, Europe, the Middle East, Africa, and Asia</strong>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This unique combination allows us to craft spaces that are not only tailored to their local context but also enriched by global influences. With our global expertise and deep appreciation for diverse cultures, we can infuse the spirit and elegance of any culture into your home.
            </p>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Cultural Design Integration
              </h3>
              <p className="text-muted-foreground">
                Whether you envision a home inspired by the warmth of the Mediterranean, the serenity of Japanese minimalism, the vibrancy of Middle Eastern courtyards, or the grandeur of classic European design, we have the knowledge and creative vision to bring these influences to life authentically and personally.
              </p>
            </div>

            <p className="text-lg text-primary font-semibold italic">
              We believe that the most memorable homes are those that honor the dreams and heritage of their owners while embracing the best ideas from around the world.
            </p>
          </div>

          <div className="relative">
            <img 
              src={landscapeImage} 
              alt="Landscape Architecture" 
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPerspective;

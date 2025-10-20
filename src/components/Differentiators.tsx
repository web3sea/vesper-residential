import { Award, Users, Globe, Shield, Sparkles, Heart } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "True Partnership",
    description: "You work directly with our principals and senior team, ensuring a hands-on, responsive experience from start to finish."
  },
  {
    icon: Sparkles,
    title: "Imagination Meets Discipline",
    description: "We combine creative artistry with meticulous project management, delivering spaces that are visionary yet grounded in quality and reliability."
  },
  {
    icon: Award,
    title: "Seamless Integration",
    description: "Our full-service model unites design management with development and property management for a cohesive, stress-free process."
  },
  {
    icon: Shield,
    title: "Legacy of Excellence",
    description: "Our team's award-winning work and enduring client relationships speak to our reputation for integrity, craftsmanship, and lasting value."
  },
  {
    icon: Globe,
    title: "Sustainability & Innovation",
    description: "We prioritize sustainable materials, energy efficiency, and timeless design principles, ensuring your home is beautiful and responsible."
  },
  {
    icon: Heart,
    title: "Ongoing Care",
    description: "Our property management division offers proactive, personalized service—so you can enjoy peace of mind and lasting comfort."
  }
];

const Differentiators = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A rare combination of partnership, creativity, and excellence that redefines what's possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-xl text-primary font-semibold italic">
            With Vesper, you gain a dedicated ally who stands alone in delivering extraordinary environments and a client experience that redefines what's possible. We don't just build projects, we build legacies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-estate.jpg";
import badge40Years from "@/assets/40-years-badge.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
      </div>

      {/* 40 Years Badge */}
      <div className="absolute top-8 right-8 z-10 animate-fade-in">
        <img 
          src={badge40Years} 
          alt="40 Years - World Class Estates" 
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Private Homes & Estates
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-delay">
          Crafting extraordinary private residences through bespoke design, meticulous craftsmanship, and a profound respect for each client's individuality
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          variant="hero"
          className="text-lg px-8 py-6"
        >
          Begin Your Journey
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground" />
      </div>
    </section>
  );
};

export default Hero;

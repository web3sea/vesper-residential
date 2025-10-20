import { Building2, Home, Trees, Briefcase, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import interiorImage from "@/assets/interior-luxury.jpg";

const services = [
  {
    icon: Building2,
    title: "Architecture Services",
    description: "Custom home design, renovations, sustainable design, and construction documentation executed with unwavering focus on artistry and craftsmanship.",
    details: [
      "Custom Home Design",
      "Site Analysis & Feasibility Studies",
      "Renovations & Expansions",
      "Sustainable Design",
      "Permitting & Compliance"
    ]
  },
  {
    icon: Home,
    title: "Interior Design",
    description: "Highly personalized, full-service solutions from concept and space planning to furnishings, finishes, and lighting selection.",
    details: [
      "Interior Space Planning",
      "Concept Development",
      "Furnishings & Finishes",
      "Custom Millwork",
      "Art & Accessory Selection"
    ]
  },
  {
    icon: Trees,
    title: "Landscape Architecture",
    description: "Outdoor spaces designed to connect you with your surroundings, prioritizing sustainability, resilience, and timeless beauty.",
    details: [
      "Outdoor Living Design",
      "Garden Design",
      "Sustainable Solutions",
      "Hardscape & Pools",
      "Outdoor Lighting"
    ]
  },
  {
    icon: Briefcase,
    title: "Development Services",
    description: "Comprehensive leadership coordinating consultants, managing budgets, and ensuring every aspect exceeds your expectations.",
    details: [
      "Project Leadership",
      "Budget & Schedule Management",
      "Quality Assurance",
      "Permitting Oversight",
      "Transparent Communication"
    ]
  },
  {
    icon: Shield,
    title: "Property Management",
    description: "Concierge-level care ensuring lasting value with proactive maintenance, financial oversight, and 24/7 support.",
    details: [
      "Comprehensive Care",
      "24/7 Emergency Support",
      "Vendor Coordination",
      "Transparent Reporting",
      "Investment Protection"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Comprehensive Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrated solutions from vision to completion and beyond
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 max-w-5xl mx-auto">
          <img 
            src={interiorImage} 
            alt="Luxury Interior Design" 
            className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-semibold text-primary mb-4">Flexible Project Management</h3>
          <p className="text-muted-foreground leading-relaxed">
            Whether you require a full-service design team or already have your own consultants in place, we adapt to your needs. We can assemble and lead the entire design team, or oversee and manage the design process—coordinating with your chosen architects, interior designers, and landscape professionals to ensure every detail aligns with your goals and standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

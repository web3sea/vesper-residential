import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Palmtree, MapPin } from "lucide-react";
import { NewsletterModal } from "@/components/NewsletterModal";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Begin Your Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's transform your vision into an extraordinary living environment. Contact us to schedule a confidential consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-border shadow-xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Scarsdale, NY</h3>
                  <a 
                    href="tel:+19147142272"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    914-714-2272
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">New York, NY</h3>
                  <a 
                    href="tel:+13323881323"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    332-388-1323
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Greenwich, CT</h3>
                  <a 
                    href="tel:+12039142429"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (203) 914-2429
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palmtree className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Florida</h3>
                  <a 
                    href="tel:+13058970270"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (305) 897-0270
                  </a>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Stay inspired with exclusive design insights, project highlights, and ideas from our team of experts.
                </p>
                
                <Button 
                  onClick={() => setModalOpen(true)}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary text-lg px-10 py-6"
                >
                  Subscribe to Our Design Ideas Newsletter
                </Button>

                <p className="text-sm text-muted-foreground italic">
                  Exclusive insights and inspiration delivered to your inbox
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Geiger's Home & Garden is committed to protecting your privacy. Information shared during consultations is held in strict confidence.
            </p>
          </div>
        </div>
      </div>

      <NewsletterModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Contact;

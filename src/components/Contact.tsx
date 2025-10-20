import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground">inquiries@vespergroup.com</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Office</h3>
                  <p className="text-muted-foreground">By Appointment</p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We invite you to explore how Vesper Real Estate Group can bring your residential vision to life with unparalleled expertise, creativity, and dedication.
                </p>
                
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary text-lg px-10 py-6"
                >
                  Schedule a Consultation
                </Button>

                <p className="text-sm text-muted-foreground italic">
                  All consultations are confidential and tailored to your unique needs
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Vesper Real Estate Group is committed to protecting your privacy. Information shared during consultations is held in strict confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Palmtree, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const newsletterSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
});

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate input
      const validatedData = newsletterSchema.parse({ name, email });

      // Save to database
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
          }
        ]);

      if (error) {
        throw error;
      }

      // Show success message
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our design ideas newsletter.",
      });

      // Reset form and close modal
      setName("");
      setEmail("");
      setOpen(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        toast({
          title: "Validation error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        // Handle database errors
        toast({
          title: "Subscription failed",
          description: "An error occurred. Please try again later.",
          variant: "destructive",
        });
        console.error("Error subscribing to newsletter:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
                
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-primary text-lg px-10 py-6"
                    >
                      Subscribe to Our Design Ideas Newsletter
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-playfair text-primary">
                        Join Our Newsletter
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Receive exclusive design insights, project highlights, and inspiration delivered to your inbox.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary">
                          Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border-border focus:ring-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-primary">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="border-border focus:ring-accent"
                        />
                      </div>
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-primary"
                      >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

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
    </section>
  );
};

export default Contact;

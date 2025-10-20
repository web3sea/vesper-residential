import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Palmtree } from "lucide-react";
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

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
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
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">New York</h3>
                  <a 
                    href="tel:+13323881323"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (332) 388-1323
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Connecticut</h3>
                  <a 
                    href="tel:+19176452915"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (917) 645-2915
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
                        className="w-full bg-accent hover:bg-accent/90 text-primary"
                      >
                        Subscribe
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
              Vesper Real Estate Group is committed to protecting your privacy. Information shared during consultations is held in strict confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Differentiators from "@/components/Differentiators";
import Services from "@/components/Services";
import { ImageCarousel } from "@/components/ImageCarousel";
import Process from "@/components/Process";
import GlobalPerspective from "@/components/GlobalPerspective";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <Differentiators />
      <Services />
      <ImageCarousel />
      <Process />
      <GlobalPerspective />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

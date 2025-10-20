import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Differentiators from "@/components/Differentiators";
import Services from "@/components/Services";
import Process from "@/components/Process";
import GlobalPerspective from "@/components/GlobalPerspective";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Philosophy />
      <Differentiators />
      <Services />
      <Process />
      <GlobalPerspective />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

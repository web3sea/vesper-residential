import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Vesper_Eye_Logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex items-center transition-transform hover:scale-105"
            aria-label="Geiger's Home & Garden - Return to top"
          >
            <img 
              src={logo} 
              alt="Geiger's Home & Garden Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              }`}
            />
          </button>
          
          <Button
            onClick={() => navigate("/auth")}
            variant="outline"
            className={`transition-all duration-300 ${
              isScrolled ? "border-border" : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Admin Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

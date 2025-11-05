import { useState, useEffect } from "react";
import logo from "@/assets/Vesper_Eye_Logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      </div>
    </nav>
  );
};

export default Navigation;

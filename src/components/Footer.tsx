const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold">Geiger's Home & Garden</h3>
          <a 
            href="https://www.vesperrealestategroup.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg opacity-90 hover:text-accent transition-colors inline-block"
          >
            a Vesper Real Estate Group company
          </a>
          <div className="w-24 h-1 bg-accent mx-auto" />
          <p className="text-sm opacity-75 max-w-2xl mx-auto">
            Crafting extraordinary private residences through integrated architecture, interior design, landscape architecture, development management, and property management services.
          </p>
          
          <div className="pt-8 space-y-3">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm opacity-90">
              <a 
                href="tel:+19147142272" 
                className="hover:text-accent transition-colors"
              >
                Scarsdale, NY - 914-714-2272
              </a>
              <span className="hidden sm:inline opacity-50">|</span>
              <a 
                href="tel:+13323881323" 
                className="hover:text-accent transition-colors"
              >
                New York, NY - 332-388-1323
              </a>
              <span className="hidden sm:inline opacity-50">|</span>
              <a 
                href="tel:+12039142429" 
                className="hover:text-accent transition-colors"
              >
                Greenwich, CT - (203) 914-2429
              </a>
              <span className="hidden sm:inline opacity-50">|</span>
              <a 
                href="tel:+13058970270" 
                className="hover:text-accent transition-colors"
              >
                Florida - (305) 897-0270
              </a>
            </div>
            <a 
              href="mailto:john@geigershomeandgarden.com" 
              className="block text-sm opacity-90 hover:text-accent transition-colors"
            >
              john@geigershomeandgarden.com
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Geiger's Home & Garden. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

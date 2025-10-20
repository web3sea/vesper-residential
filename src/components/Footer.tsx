const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold">Vesper Real Estate Group</h3>
          <p className="text-lg opacity-90">
            Private Homes & Estates
          </p>
          <div className="w-24 h-1 bg-accent mx-auto" />
          <p className="text-sm opacity-75 max-w-2xl mx-auto">
            Crafting extraordinary private residences through integrated architecture, interior design, landscape architecture, development management, and property management services.
          </p>
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Vesper Real Estate Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

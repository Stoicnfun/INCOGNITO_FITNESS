import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-display text-xl font-bold tracking-tight">
              <span className="text-foreground">INCOGNITO</span>
              <span className="gradient-text ml-1">FITNESS</span>
            </a>
            <p className="text-muted-foreground text-sm mt-1">Koregaon Park, Pune</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <p className="text-muted-foreground text-xs">
            © 2026 Incognito Fitness Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

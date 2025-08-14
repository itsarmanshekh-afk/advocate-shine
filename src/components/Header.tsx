import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Scale, Calculator, Users, Phone } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold heading-gradient">AIFTP</h1>
              <p className="text-xs text-muted-foreground">Tax Practitioners Federation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#membership" className="text-foreground hover:text-primary transition-colors font-medium">
              Membership
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors font-medium">
              Events
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="font-semibold">
              Member Login
            </Button>
            <Button className="btn-professional">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">
                Services
              </a>
              <a href="#membership" className="text-foreground hover:text-primary transition-colors py-2">
                Membership
              </a>
              <a href="#events" className="text-foreground hover:text-primary transition-colors py-2">
                Events
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Button variant="outline" className="font-semibold">
                Member Login
              </Button>
              <Button className="btn-professional">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
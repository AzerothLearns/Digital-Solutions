import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 fade-in">
            <button 
              onClick={() => scrollToSection('hero')}
              data-testid="logo-cfna"
              className="text-2xl font-bold gradient-text"
            >
              CFNA Marketing
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block fade-in fade-in-delay-1">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                data-testid="nav-services"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                data-testid="nav-about"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                data-testid="nav-contact"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden fade-in fade-in-delay-1">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('services')}
                data-testid="mobile-nav-services"
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                data-testid="mobile-nav-about"
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                data-testid="mobile-nav-contact"
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

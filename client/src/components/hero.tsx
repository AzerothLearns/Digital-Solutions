import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in" data-testid="hero-headline">
            <span className="block">Driving Clicks.</span>
            <span className="gradient-text">Delivering Growth.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in fade-in-delay-1" data-testid="hero-subtext">
            Transform your digital presence with data-driven marketing strategies that convert visitors into customers and scale your business exponentially.
          </p>
          
          <div className="fade-in fade-in-delay-2">
            <button 
              onClick={scrollToContact}
              data-testid="button-consultation"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-16 fade-in fade-in-delay-3">
            <p className="text-sm text-muted-foreground mb-6" data-testid="text-trusted">
              Trusted by 200+ businesses worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-20 h-8 bg-muted rounded" data-testid="logo-placeholder-1"></div>
              <div className="w-20 h-8 bg-muted rounded" data-testid="logo-placeholder-2"></div>
              <div className="w-20 h-8 bg-muted rounded" data-testid="logo-placeholder-3"></div>
              <div className="w-20 h-8 bg-muted rounded" data-testid="logo-placeholder-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

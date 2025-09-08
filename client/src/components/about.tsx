import { Check } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Proven Track Record",
      description: "Average 300% increase in qualified leads within 6 months"
    },
    {
      title: "Data-Driven Approach", 
      description: "Every decision backed by comprehensive analytics and market research"
    },
    {
      title: "Personalized Strategy",
      description: "Custom solutions tailored to your industry and business goals"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with team collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-office"
            />
          </div>
          
          <div className="fade-in fade-in-delay-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
              Why Choose <span className="gradient-text">CFNA Marketing</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="about-description">
              With over 8 years of experience in digital marketing, CFNA Marketing has helped hundreds of businesses transform their online presence and achieve unprecedented growth.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4" data-testid={`feature-${index + 1}`}>
                  <div className={`w-6 h-6 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full flex-shrink-0 flex items-center justify-center mt-1`}>
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" data-testid={`feature-title-${index + 1}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`feature-description-${index + 1}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

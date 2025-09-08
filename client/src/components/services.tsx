import { Users, Zap, Edit, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Social Media Management",
      description: "Build engaging communities and drive brand awareness across all major social platforms with strategic content and community management.",
      icon: Users,
      color: "primary"
    },
    {
      title: "Paid Advertising",
      description: "Maximize your ROI with expertly managed Google Ads, Facebook Ads, and multi-platform campaigns that deliver measurable results.",
      icon: Zap,
      color: "secondary"
    },
    {
      title: "Content Creation",
      description: "Captivate your audience with high-quality visual content, copywriting, and multimedia that tells your brand story effectively.",
      icon: Edit,
      color: "primary"
    },
    {
      title: "Search Engine Optimization",
      description: "Boost your website's visibility and drive organic traffic with expert SEO strategies that improve rankings and attract qualified leads.",
      icon: BarChart3,
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in" data-testid="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in fade-in-delay-1" data-testid="services-subtitle">
            We offer comprehensive digital marketing solutions tailored to your business goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className={`service-card bg-card border border-border rounded-lg p-8 text-center fade-in fade-in-delay-${index + 1}`}
                data-testid={`card-service-${index + 1}`}
              >
                <div className={`w-16 h-16 bg-${service.color}/10 rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`w-8 h-8 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`title-service-${index + 1}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`description-service-${index + 1}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

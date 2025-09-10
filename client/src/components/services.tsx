import { Users, Zap, Edit, BarChart3, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Services() {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: t("services.socialMedia.title", { defaultValue: "Social Media Management" }),
      description: t("services.socialMedia.description", { defaultValue: "Build engaging communities and drive brand awareness across all major social platforms with strategic content and community management." }),
      icon: Users,
      color: "primary"
    },
    {
      title: t("services.paidAds.title", { defaultValue: "Paid Advertising" }),
      description: t("services.paidAds.description", { defaultValue: "Maximize your ROI with expertly managed Google Ads, Facebook Ads, and multi-platform campaigns that deliver measurable results." }),
      icon: Zap,
      color: "secondary"
    },
    {
      title: t("services.contentCreation.title", { defaultValue: "Content Creation" }),
      description: t("services.contentCreation.description", { defaultValue: "Captivate your audience with high-quality visual content, copywriting, and multimedia that tells your brand story effectively." }),
      icon: Edit,
      color: "primary"
    },
    {
      title: t("services.seo.title", { defaultValue: "Search Engine Optimization" }),
      description: t("services.seo.description", { defaultValue: "Boost your website's visibility and drive organic traffic with expert SEO strategies that improve rankings and attract qualified leads." }),
      icon: BarChart3,
      color: "secondary"
    },
    {
      title: t("services.aiVisibility.title", { defaultValue: "AI Visibility Optimization" }),
      description: t("services.aiVisibility.description", { defaultValue: "Leverage artificial intelligence to enhance your brand's online visibility, automate insights, and outperform competitors in search and social platforms." }),
      icon: Eye,
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent" data-testid="services-title">
            {t("services.title", { defaultValue: "Our Services" })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in fade-in-delay-1" data-testid="services-subtitle">
            {t("services.subtitle", { defaultValue: "We offer comprehensive digital marketing solutions tailored to your business goals" })}
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
                <h3 className="text-xl font-semibold mb-4" data-testid={`title-service-${index + 1}`}>{service.title}</h3>
                <p className="text-muted-foreground" data-testid={`description-service-${index + 1}`}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

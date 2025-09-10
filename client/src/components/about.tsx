import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import workingPicture1 from "@assets/WorkingPicture1.jpg";

export default function About() {
  const { t } = useTranslation();
  const features = [
    {
      title: t("about.features.innovative.title", { defaultValue: "Innovative Strategies" }),
      description: t("about.features.innovative.description", { defaultValue: "We bring a fresh perspective to digital marketing, blending creativity with proven methods to deliver campaigns that make an impact." })
    },
    {
      title: t("about.features.data.title", { defaultValue: "Data-Driven Approach" }),
      description: t("about.features.data.description", { defaultValue: "Every decision backed by comprehensive analytics and market research" })
    },
    {
      title: t("about.features.personalized.title", { defaultValue: "Personalized Strategy" }),
      description: t("about.features.personalized.description", { defaultValue: "Custom solutions tailored to your industry and business goals" })
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src={workingPicture1}
              alt={t("about.imageAlt", { defaultValue: "Team working together in a modern office" })}
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-office"
            />
          </div>
          <div className="fade-in fade-in-delay-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent" data-testid="about-title">
              {t("about.title", { defaultValue: "Why Choose CFNA Digital Solutions?" })}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="about-description">
              {t("about.description", { defaultValue: "At CFNA Digital Solutions, we may be a new player in the industry, but we’re driven by bold ideas and a passion for helping businesses thrive in the digital world. Our mission is simple: to empower brands with innovative strategies that not only attract attention but also generate measurable growth." })}
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4" data-testid={`feature-${index + 1}`}> 
                  <div className={`w-6 h-6 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full flex-shrink-0 flex items-center justify-center mt-1`}>
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" data-testid={`feature-title-${index + 1}`}>{feature.title}</h3>
                    <p className="text-muted-foreground" data-testid={`feature-description-${index + 1}`}>{feature.description}</p>
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

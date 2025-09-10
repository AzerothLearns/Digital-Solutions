import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema.extend({
      name: insertContactSchema.shape.name.min(2, t("contact.form.nameError", { defaultValue: "Name must be at least 2 characters" })),
      email: insertContactSchema.shape.email.email(t("contact.form.emailError", { defaultValue: "Please enter a valid email address" })),
      message: insertContactSchema.shape.message.min(10, t("contact.form.messageError", { defaultValue: "Message must be at least 10 characters" }))
    })),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("contact.toast.successTitle", { defaultValue: "Message sent!" }),
        description: t("contact.toast.successDesc", { defaultValue: "Thank you for your message! We'll get back to you within 24 hours." })
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: t("contact.toast.errorTitle", { defaultValue: "Error" }),
        description: error.message || t("contact.toast.errorDesc", { defaultValue: "Failed to send message. Please try again." }),
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email", { defaultValue: "Email" }),
      value: "sales@cfnadigitalsolutions",
      color: "primary"
    },
    {
      icon: Phone,
      title: t("contact.info.phone", { defaultValue: "Phone" }),
      value: "+45 31 71 79 83",
      color: "secondary"
    },
    {
      icon: Clock,
      title: t("contact.info.responseTime", { defaultValue: "Response Time" }),
      value: t("contact.info.responseTimeValue", { defaultValue: "Within 24 hours" }),
      color: "primary"
    },
    {
      icon: MapPin,
      title: t("contact.info.location", { defaultValue: "Location" }),
      value: t("contact.info.locationValue", { defaultValue: "Denmark, Copenhagen" }),
      color: "secondary"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "#",
      color: "primary",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    },
    {
      name: "Instagram",
      url: "#",
      color: "secondary",
      path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.332 1.363-.053.225-.174.271-.402.163-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z"
    },
    {
      name: "Twitter",
      url: "#",
      color: "primary",
      path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="pt-2 text-4xl md:text-5xl font-bold mb-8 leading-tight fade-in md:bg-gradient-to-r md:from-blue-500 md:to-orange-500 md:bg-clip-text md:text-transparent" data-testid="contact-title">
            {t("contact.title", { defaultValue: "Ready to Get Started?" })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in fade-in-delay-1" data-testid="contact-subtitle">
            {t("contact.subtitle", { defaultValue: "Let's discuss how we can accelerate your business growth with proven digital marketing strategies" })}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fade-in fade-in-delay-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.name", { defaultValue: "Full Name" })}</FormLabel>
                      <FormControl>
              
                        <Input 
                          placeholder={t("contact.form.namePlaceholder", { defaultValue: "Enter your full name" })}
                          data-testid="input-name"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.email", { defaultValue: "Email Address" })}</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder={t("contact.form.emailPlaceholder", { defaultValue: "Enter your email address" })}
                          data-testid="input-email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.company", { defaultValue: "Company (Optional)" })}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("contact.form.companyPlaceholder", { defaultValue: "Your company name" })}
                          data-testid="input-company"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message", { defaultValue: "Message" })}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("contact.form.messagePlaceholder", { defaultValue: "Tell us about your project and goals..." })}
                          className="resize-none h-32"
                          data-testid="textarea-message"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? t("contact.form.sending", { defaultValue: "Sending..." }) : t("contact.form.send", { defaultValue: "Send Message" })}
                </Button>
              </form>
            </Form>
          </div>
          {/* Contact Information */}
          <div className="fade-in fade-in-delay-2">
            <div className="bg-card border border-border rounded-2xl p-8 h-fit">
              <h3 className="text-2xl font-bold mb-8" data-testid="contact-info-title">{t("contact.info.title", { defaultValue: "Contact Us" })}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4" data-testid={`contact-info-${index + 1}`}> 
                      <div className={`w-12 h-12 bg-${info.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground" data-testid={`contact-info-title-${index + 1}`}>{info.title}</h4>
                        <p className="text-muted-foreground mt-1" data-testid={`contact-info-value-${index + 1}`}>{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4" data-testid="social-title">{t("contact.social.title", { defaultValue: "Social Media" })}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                      className={`w-10 h-10 bg-${social.color}/10 rounded-lg flex items-center justify-center hover:bg-${social.color} hover:text-${social.color}-foreground transition-all duration-300`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

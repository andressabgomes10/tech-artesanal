import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Resposta inicial em 24h",
    "Consultoria gratuita personalizada", 
    "Proposta detalhada sem compromisso",
    "Suporte técnico especializado"
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-caja-yellow/10 text-caja-dark border-caja-yellow/20">
            💬 Vamos conversar
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Pronto para começar seu <span className="text-caja-yellow">próximo projeto?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
            Entre em contato e receba uma consultoria personalizada gratuita. 
            Vamos transformar sua ideia em realidade juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl text-foreground">
                Descreva seu projeto
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Conte-nos sobre suas necessidades e objetivos. Nossa equipe entrará em contato em até 24h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 text-lg border-2 border-border focus:border-caja-yellow rounded-xl"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 text-lg border-2 border-border focus:border-caja-yellow rounded-xl"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Empresa/Projeto
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 text-lg border-2 border-border focus:border-caja-yellow rounded-xl"
                    placeholder="Nome da sua empresa ou projeto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Conte-nos sobre seu projeto *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] text-lg border-2 border-border focus:border-caja-yellow rounded-xl resize-none"
                    placeholder="Descreva sua ideia, necessidades, objetivos e qualquer informação relevante..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14 rounded-xl font-semibold"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card className="border-0 shadow-card bg-gradient-to-br from-caja-yellow/5 to-caja-yellow/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Por que escolher a Cajá?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-caja-yellow flex-shrink-0" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid gap-6">
              <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-caja-yellow/10 rounded-xl group-hover:bg-caja-yellow/20 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-caja-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">contato@caja.tech</p>
                      <p className="text-sm text-caja-yellow font-medium">Resposta em até 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-caja-yellow/10 rounded-xl group-hover:bg-caja-yellow/20 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-caja-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                      <p className="text-sm text-caja-yellow font-medium">Atendimento comercial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-caja-yellow/10 rounded-xl group-hover:bg-caja-yellow/20 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-caja-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Localização</h4>
                      <p className="text-muted-foreground">São Paulo, SP</p>
                      <p className="text-sm text-caja-yellow font-medium">Atendimento nacional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial */}
            <Card className="border-0 shadow-card bg-muted/30">
              <CardContent className="p-8">
                <blockquote className="text-lg text-foreground italic leading-relaxed mb-4">
                  "A Cajá transformou nossa ideia em um MVP funcional em apenas 3 semanas. 
                  A qualidade e atenção aos detalhes superaram nossas expectativas."
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — João Silva, CEO TechStart
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@caja.tech",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      info: "+55 (11) 99999-9999",
      description: "Atendimento comercial"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Atendimento nacional"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-muted to-caja-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-caja-dark mb-6">
            Vamos <span className="text-caja-yellow">Conversar</span>
          </h2>
            <p className="text-xl text-caja-brown max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? Entre em contato e receba 
              uma consultoria personalizada gratuita.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-[var(--shadow-elegant)] border-border bg-caja-white">
            <CardHeader>
              <CardTitle className="text-2xl text-caja-dark flex items-center">
                <Send className="mr-3 h-6 w-6 text-caja-yellow" />
                Quero Minha Consultoria sob medida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-caja-dark mb-2">
                      Nome *
                    </label>
                     <Input
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className="border-2 border-caja-brown/50 focus:border-caja-yellow text-caja-dark"
                       placeholder="Seu nome completo"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-caja-dark mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-2 border-caja-brown/50 focus:border-caja-yellow text-caja-dark"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-caja-dark mb-2">
                    Empresa/Projeto
                  </label>
                   <Input
                     name="company"
                     value={formData.company}
                     onChange={handleChange}
                     className="border-2 border-caja-brown/50 focus:border-caja-yellow text-caja-dark"
                     placeholder="Nome da sua empresa ou projeto"
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-caja-dark mb-2">
                    Maior necessidade hoje *
                  </label>
                   <Input
                     name="need"
                     value={formData.need}
                     onChange={handleChange}
                     required
                     className="border-2 border-caja-brown/50 focus:border-caja-yellow text-caja-dark"
                     placeholder="Ex: Desenvolver MVP, Sistema personalizado, etc."
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-caja-dark mb-2">
                    Conte-nos mais sobre seu projeto
                  </label>
                   <Textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     className="border-2 border-caja-brown/50 focus:border-caja-yellow min-h-[120px] text-caja-dark"
                     placeholder="Descreva sua ideia, desafios ou objetivos..."
                   />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold shadow-[var(--shadow-elegant)] transition-all duration-300"
                >
                  Enviar Solicitação
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-caja-dark mb-6">Entre em Contato</h3>
              <p className="text-lg text-caja-brown leading-relaxed mb-8">
                Estamos prontos para entender suas necessidades e criar a solução perfeita 
                para seu projeto. Fale conosco pelos canais abaixo:
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-caja-white rounded-lg shadow-[var(--shadow-soft)]">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-lg">
                    <contact.icon className="h-6 w-6 text-caja-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-caja-dark mb-1">{contact.title}</h4>
                    <p className="text-caja-yellow font-medium mb-1">{contact.info}</p>
                    <p className="text-sm text-caja-brown">{contact.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-caja-yellow/10 to-caja-yellow-light/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-caja-dark mb-3">Prova Social</h4>
              <blockquote className="text-caja-brown italic leading-relaxed">
                "A Cajá transformou nossa ideia em um MVP funcional em apenas 3 semanas. 
                A qualidade e atenção aos detalhes superaram nossas expectativas."
              </blockquote>
              <footer className="mt-3 text-sm text-caja-brown">
                — João Silva, CEO TechStart
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
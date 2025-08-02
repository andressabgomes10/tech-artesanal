import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Resposta em até 24h",
      contact: "contato@caja.tech",
      action: "Enviar Email"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Seg-Sex, 9h às 18h",
      contact: "+55 (11) 99999-9999",
      action: "Ligar Agora"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida",
      contact: "+55 (11) 99999-9999",
      action: "Chamar no WhatsApp"
    }
  ];

  const faqs = [
    {
      question: "Qual o prazo para desenvolvimento de um MVP?",
      answer: "Normalmente entre 2-4 semanas, dependendo da complexidade e escopo do projeto."
    },
    {
      question: "Vocês trabalham com que tecnologias?",
      answer: "Trabalhamos com as principais tecnologias modernas: React, Node.js, Python, NextJS, e muito mais."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com pagamento parcelado, geralmente 50% no início e 50% na entrega."
    },
    {
      question: "Vocês oferecem suporte pós-entrega?",
      answer: "Sim, oferecemos diferentes planos de suporte e manutenção para todos os nossos projetos."
    }
  ];

  const offices = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000 - Bela Vista",
      cep: "01310-100",
      hours: "Seg-Sex: 9h às 18h"
    },
    {
      city: "Rio de Janeiro",
      address: "Rua da Carioca, 100 - Centro",
      cep: "20050-020",
      hours: "Seg-Sex: 9h às 18h"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-caja-white via-muted to-caja-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-caja-dark mb-6">
              Fale <span className="text-caja-yellow">Conosco</span>
            </h1>
            <p className="text-xl text-caja-brown leading-relaxed mb-8">
              Pronto para transformar sua ideia em realidade? Entre em contato e vamos 
              conversar sobre como criar a solução perfeita para seu projeto.
            </p>
            <Badge className="bg-caja-yellow text-caja-dark text-lg px-6 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Resposta inicial em 24h
            </Badge>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <CardTitle className="text-2xl text-caja-dark">Vamos conversar sobre seu projeto</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-caja-dark mb-2">
                        Nome *
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-caja-dark mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-caja-dark mb-2">
                        Telefone
                      </label>
                      <Input placeholder="(11) 99999-9999" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-caja-dark mb-2">
                        Empresa/Projeto
                      </label>
                      <Input placeholder="Nome da empresa" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-caja-dark mb-2">
                      Tipo de Projeto *
                    </label>
                    <select className="w-full p-3 border border-border rounded-lg focus:border-caja-yellow focus:outline-none">
                      <option value="">Selecione o tipo de projeto</option>
                      <option value="mvp">MVP Rápido</option>
                      <option value="sistema">Sistema Personalizado</option>
                      <option value="gestao">Gestão de Produtos</option>
                      <option value="treinamento">Treinamentos</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-caja-dark mb-2">
                      Orçamento Estimado
                    </label>
                    <select className="w-full p-3 border border-border rounded-lg focus:border-caja-yellow focus:outline-none">
                      <option value="">Selecione uma faixa</option>
                      <option value="15k">R$ 15.000 - R$ 30.000</option>
                      <option value="30k">R$ 30.000 - R$ 50.000</option>
                      <option value="50k">R$ 50.000 - R$ 100.000</option>
                      <option value="100k">Acima de R$ 100.000</option>
                      <option value="conversar">Prefiro conversar sobre isso</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-caja-dark mb-2">
                      Conte-nos sobre seu projeto *
                    </label>
                    <Textarea
                      placeholder="Descreva sua ideia, necessidades, objetivos e qualquer informação relevante..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold text-lg py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-sm text-caja-brown text-center">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-caja-dark mb-6">Outras formas de contato</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <method.icon className="h-6 w-6 text-caja-dark" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-caja-dark">{method.title}</h3>
                            <p className="text-sm text-caja-brown">{method.description}</p>
                            <p className="font-medium text-caja-dark">{method.contact}</p>
                          </div>
                          <Button variant="outline" size="sm" className="border-caja-brown text-caja-brown hover:bg-caja-brown hover:text-caja-white">
                            {method.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold text-caja-dark mb-6">Nossos Escritórios</h2>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="border-l-4 border-l-caja-yellow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-caja-yellow mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-caja-dark">{office.city}</h3>
                            <p className="text-caja-brown">{office.address}</p>
                            <p className="text-caja-brown">{office.cep}</p>
                            <p className="text-sm text-caja-brown mt-2">{office.hours}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-caja-dark mb-6">Perguntas Frequentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-caja-dark mb-2">{faq.question}</h3>
                        <p className="text-caja-brown text-sm leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-caja-dark mb-6">Onde Estamos</h2>
              <p className="text-xl text-caja-brown">
                Escritórios estrategicamente localizados para melhor atender nossos clientes.
              </p>
            </div>
            
            <div className="bg-caja-white rounded-lg overflow-hidden shadow-[var(--shadow-elegant)] aspect-video">
              <div className="w-full h-full bg-gradient-to-br from-muted to-caja-white flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-caja-yellow mx-auto mb-4" />
                  <p className="text-caja-brown">Mapa interativo em breve</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
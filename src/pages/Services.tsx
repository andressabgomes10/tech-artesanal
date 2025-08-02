import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rocket, Settings, LifeBuoy, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVPs Rápidos",
      description: "Transformamos sua ideia em produto mínimo viável em tempo recorde, validando conceitos e acelerando seu time-to-market.",
      features: [
        "Prototipagem ágil",
        "Validação de mercado",
        "Desenvolvimento iterativo",
        "Deploy automatizado",
        "Métricas de uso",
        "Feedback contínuo"
      ],
      pricing: "A partir de R$ 15.000",
      timeline: "2-4 semanas"
    },
    {
      icon: Settings,
      title: "Sistemas Personalizados",
      description: "Desenvolvemos soluções sob medida que se adaptam perfeitamente às necessidades específicas do seu negócio.",
      features: [
        "Arquitetura escalável",
        "Integração de APIs",
        "Interface intuitiva",
        "Segurança avançada",
        "Documentação completa",
        "Suporte técnico"
      ],
      pricing: "A partir de R$ 30.000",
      timeline: "6-12 semanas"
    },
    {
      icon: LifeBuoy,
      title: "Gestão de Produtos",
      description: "Acompanhamos o ciclo de vida completo do seu produto digital, desde a concepção até a evolução contínua.",
      features: [
        "Roadmap estratégico",
        "Análise de métricas",
        "Otimização contínua",
        "Suporte técnico",
        "Atualizações regulares",
        "Monitoramento 24/7"
      ],
      pricing: "A partir de R$ 8.000/mês",
      timeline: "Contrato mensal"
    },
    {
      icon: GraduationCap,
      title: "Treinamentos Práticos",
      description: "Capacitamos sua equipe com conhecimentos práticos em tecnologia e metodologias ágeis de desenvolvimento.",
      features: [
        "Workshops especializados",
        "Mentoria técnica",
        "Metodologias ágeis",
        "Boas práticas",
        "Certificados",
        "Material didático"
      ],
      pricing: "A partir de R$ 5.000",
      timeline: "1-2 semanas"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Descoberta",
      description: "Entendemos profundamente suas necessidades, objetivos e contexto de negócio."
    },
    {
      step: "02",
      title: "Estratégia",
      description: "Desenvolvemos uma estratégia personalizada alinhada aos seus objetivos."
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Criamos sua solução com metodologia ágil e comunicação transparente."
    },
    {
      step: "04",
      title: "Entrega",
      description: "Lançamos seu produto com suporte completo e acompanhamento contínuo."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-caja-white via-muted to-caja-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-caja-dark mb-6">
                Nossos <span className="text-caja-yellow">Serviços</span>
              </h1>
              <p className="text-xl text-caja-brown max-w-3xl mx-auto leading-relaxed">
                Oferecemos soluções completas em tecnologia artesanal, combinando inovação, 
                personalização e qualidade superior em cada projeto.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-caja-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border hover:border-caja-yellow/50 bg-caja-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-caja-dark" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-caja-dark group-hover:text-caja-yellow transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-caja-brown leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-caja-dark">
                          <CheckCircle className="h-4 w-4 text-caja-yellow mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-caja-brown">Investimento</p>
                          <p className="text-lg font-semibold text-caja-dark">{service.pricing}</p>
                        </div>
                        <div>
                          <p className="text-sm text-caja-brown">Prazo</p>
                          <p className="text-lg font-semibold text-caja-dark">{service.timeline}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full border-caja-brown text-caja-brown hover:bg-caja-brown hover:text-caja-white group transition-all duration-300">
                        Solicitar Proposta
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-caja-dark mb-6">Nosso Processo</h2>
              <p className="text-xl text-caja-brown max-w-3xl mx-auto">
                Uma metodologia testada e refinada para entregar resultados excepcionais
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-full text-caja-dark font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-caja-dark mb-2">{item.title}</h3>
                  <p className="text-caja-brown text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-caja-yellow/10 to-caja-yellow-light/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-caja-dark mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-xl text-caja-brown mb-8">
              Vamos conversar sobre como a Cajá pode criar a solução perfeita para seu projeto.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold shadow-[var(--shadow-elegant)] transition-all duration-300">
              Quero Minha Consultoria sob medida
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
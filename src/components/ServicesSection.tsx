import { Rocket, Settings, LifeBuoy, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVPs Ágeis e Precisos",
      description: "Valide suas ideias no mercado com MVPs desenvolvidos para máxima eficiência e mínimo investimento, acelerando seu time-to-market.",
      features: ["Prototipagem ágil", "Validação de mercado", "Desenvolvimento iterativo", "Deploy automatizado", "Métricas integradas", "Escalabilidade futura"]
    },
    {
      icon: Settings,
      title: "Sistemas Sob Medida de Alta Performance",
      description: "Desenvolvemos soluções que se adaptam perfeitamente às necessidades específicas do seu negócio, otimizadas para performance máxima.",
      features: ["Arquitetura escalável", "Integração de APIs", "Interface intuitiva", "Segurança avançada", "Otimização de performance", "Documentação completa"]
    },
    {
      icon: LifeBuoy,
      title: "Gestão Estratégica de Produtos Digitais",
      description: "Mantenha seu produto sempre competitivo com nossa gestão estratégica completa do ciclo de vida digital.",
      features: ["Roadmap estratégico", "Análise de métricas", "Otimização contínua", "Suporte técnico", "Monitoramento 24/7", "Evolução baseada em dados"]
    },
    {
      icon: GraduationCap,
      title: "Capacitação Técnica Acelerada",
      description: "Acelere o desenvolvimento da sua equipe com treinamentos práticos e atualizados, garantindo aplicação imediata do conhecimento.",
      features: ["Workshops especializados", "Mentoria técnica", "Metodologias ágeis", "Boas práticas", "Certificações", "Material didático atualizado"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-caja-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-caja-dark mb-6">
            Nossos <span className="text-caja-yellow">Serviços</span>
          </h2>
          <p className="text-xl text-caja-brown max-w-3xl mx-auto leading-relaxed font-medium">
            Oferecemos soluções digitais completas, combinando inovação de ponta, personalização inteligente 
            e qualidade superior em cada projeto, porque são <strong className="text-caja-dark">feitas sob medida para você</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
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
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-caja-dark">
                      <div className="w-1.5 h-1.5 bg-caja-yellow rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-2 border-caja-brown text-caja-brown hover:bg-caja-brown hover:text-caja-white group transition-all duration-300 font-semibold">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold shadow-[var(--shadow-elegant)] transition-all duration-300">
            Quero Minha Consultoria Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Rocket, Settings, LifeBuoy, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVPs Ágeis",
      description: "Valide suas ideias no mercado com MVPs desenvolvidos para máxima eficiência e mínimo investimento.",
      features: ["Prototipagem ágil", "Validação de mercado", "Desenvolvimento iterativo", "Deploy automatizado"],
      pricing: "A partir de R$ 15.000",
      timeline: "2-4 semanas",
      badge: "Mais Popular"
    },
    {
      icon: Settings,
      title: "Sistemas Sob Medida",
      description: "Desenvolvemos soluções que se adaptam perfeitamente às necessidades específicas do seu negócio.",
      features: ["Arquitetura escalável", "Integração de APIs", "Interface intuitiva", "Segurança avançada"],
      pricing: "A partir de R$ 30.000",
      timeline: "6-12 semanas"
    },
    {
      icon: LifeBuoy,
      title: "Gestão de Produtos",
      description: "Mantenha seu produto sempre competitivo com nossa gestão estratégica completa.",
      features: ["Roadmap estratégico", "Análise de métricas", "Otimização contínua", "Suporte 24/7"],
      pricing: "A partir de R$ 8.000/mês",
      timeline: "Contrato mensal"
    },
    {
      icon: GraduationCap,
      title: "Capacitação Técnica",
      description: "Acelere o desenvolvimento da sua equipe com treinamentos práticos e atualizados.",
      features: ["Workshops especializados", "Mentoria técnica", "Metodologias ágeis", "Certificações"],
      pricing: "A partir de R$ 5.000",
      timeline: "1-2 semanas"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Nossos <span className="text-caja-yellow">Serviços</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
            Oferecemos soluções completas em tecnologia artesanal, combinando inovação, 
            personalização e qualidade superior em cada projeto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group bg-background relative overflow-hidden">
              {service.badge && (
                <Badge className="absolute top-6 right-6 bg-caja-yellow text-caja-dark font-semibold">
                  {service.badge}
                </Badge>
              )}
              
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-caja-yellow/10 rounded-xl group-hover:bg-caja-yellow/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-caja-yellow" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-caja-yellow transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 text-caja-yellow mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Investimento</p>
                      <p className="text-xl font-bold text-foreground">{service.pricing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Prazo</p>
                      <p className="text-xl font-bold text-foreground">{service.timeline}</p>
                    </div>
                  </div>
                  
                  <Button size="lg" variant="outline" className="w-full group border-2">
                    Solicitar Proposta
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-0 shadow-card bg-gradient-to-br from-caja-yellow/5 to-caja-yellow/10 max-w-3xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Pronto para transformar sua ideia em realidade?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Vamos conversar sobre como a Cajá pode criar a solução perfeita para seu projeto.
              </p>
              <Button size="lg" className="text-lg px-12">
                Quero Minha Consultoria sob medida
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
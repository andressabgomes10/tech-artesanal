import { Target, Zap, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precisão Técnica",
      description: "Combinamos expertise de ponta com atenção meticulosa aos detalhes, garantindo soluções robustas e confiáveis."
    },
    {
      icon: Heart,
      title: "Personalização Inteligente",
      description: "Cada solução é única, desenvolvida especificamente para atender suas necessidades e objetivos de negócio."
    },
    {
      icon: Zap,
      title: "Agilidade com Qualidade",
      description: "Entregamos resultados rápidos sem comprometer a excelência, utilizando metodologias eficientes e testadas."
    },
    {
      icon: Users,
      title: "Inovação Orientada a Resultados",
      description: "Criamos tecnologia que não apenas funciona, mas que impulsiona o seu negócio e gera valor real."
    }
  ];

  const stats = [
    { number: "+50", label: "Projetos Únicos" },
    { number: "100%", label: "Personalização" },
    { number: "24h", label: "Resposta Inicial" },
    { number: "98%", label: "Satisfação" }
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Nossa <span className="text-caja-yellow">Abordagem Única</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
            Na Cajá, transformamos visões em produtos digitais únicos. Combinamos agilidade 
            tecnológica com qualidade superior e personalização inteligente.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-caja-yellow/10 rounded-xl group-hover:bg-caja-yellow/20 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-caja-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-caja-yellow transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-20">
          <Card className="border-0 shadow-card bg-gradient-to-br from-caja-yellow/5 to-caja-yellow/10 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nosso Propósito</h3>
              <p className="text-xl text-foreground leading-relaxed font-medium">
                "Entregar soluções digitais únicas, com agilidade, qualidade superior e personalização inteligente, 
                transformando suas ideias em produtos que fazem a diferença no mundo digital."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-caja-yellow mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
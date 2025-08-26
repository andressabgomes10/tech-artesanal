import { Heart, Zap, Users, Target } from "lucide-react";

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

  return (
    <section id="sobre" className="py-20 bg-caja-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-caja-dark mb-6">
                Nossa <span className="text-caja-yellow">Abordagem Única</span>
              </h2>
              <p className="text-xl text-caja-brown leading-relaxed mb-6 font-medium">
                Na Cajá, somos especialistas em transformar visões em produtos digitais únicos. Nossa abordagem combina 
                a agilidade da inovação tecnológica com a qualidade superior e a personalização que são a nossa marca, 
                entregando soluções <strong className="text-caja-dark">feitas sob medida para você</strong>.
              </p>
              <p className="text-lg text-caja-brown leading-relaxed">
                Nossa missão é entregar soluções digitais únicas, com agilidade, qualidade superior 
                e personalização inteligente. Acreditamos que cada projeto é único e merece atenção 
                especial e cuidado individualizado.
              </p>
            </div>

            <div className="bg-gradient-to-r from-caja-yellow/20 to-caja-yellow-light/20 rounded-xl p-6 border-l-4 border-caja-yellow">
              <h3 className="text-2xl font-bold text-caja-dark mb-3">Nosso Propósito</h3>
              <p className="text-caja-dark leading-relaxed font-medium">
                "Entregar soluções digitais únicas, com agilidade, qualidade superior e personalização inteligente, 
                transformando suas ideias em produtos que fazem a diferença no mundo digital, porque são 
                <strong className="text-caja-yellow-dark">feitas sob medida para você</strong>."
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-caja-dark mb-8">Nossos Valores</h3>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-colors duration-300">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-lg">
                    <value.icon className="h-6 w-6 text-caja-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-caja-dark mb-2">{value.title}</h4>
                    <p className="text-caja-brown leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-caja-yellow mb-2">+50</div>
              <div className="text-caja-brown">Projetos Únicos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-caja-yellow mb-2">100%</div>
              <div className="text-caja-brown">Personalização</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-caja-yellow mb-2">24h</div>
              <div className="text-caja-brown">Resposta Inicial</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-caja-yellow mb-2">98%</div>
              <div className="text-caja-brown">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
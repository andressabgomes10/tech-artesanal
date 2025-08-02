import { Heart, Zap, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Tecnologia Artesanal",
      description: "Combinamos o cuidado e toque humano com a mais avançada tecnologia digital."
    },
    {
      icon: Target,
      title: "Personalização",
      description: "Cada solução é única, desenvolvida especificamente para atender suas necessidades."
    },
    {
      icon: Zap,
      title: "Inovação com Alma",
      description: "Criamos tecnologia que não apenas funciona, mas que também inspira e transforma."
    },
    {
      icon: Users,
      title: "Simplicidade",
      description: "Design intuitivo e experiências claras que priorizam a usabilidade e eficiência."
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
                Sobre a <span className="text-caja-yellow">Cajá</span>
              </h2>
              <p className="text-xl text-caja-brown leading-relaxed mb-6">
                Somos especialistas em <strong>tecnologia artesanal</strong> — um conceito único que une 
                a inovação digital de ponta com a personalização e o cuidado de soluções feitas sob medida.
              </p>
              <p className="text-lg text-caja-brown leading-relaxed">
                Nossa missão é entregar soluções digitais únicas, com agilidade, qualidade superior 
                e personalização inteligente. Acreditamos que cada projeto é único e merece atenção 
                especial, assim como uma peça artesanal.
              </p>
            </div>

            <div className="bg-gradient-to-r from-caja-yellow/10 to-caja-yellow-light/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-caja-dark mb-3">Nosso Propósito</h3>
              <p className="text-caja-brown leading-relaxed">
                "Entregar soluções digitais únicas, com agilidade, qualidade superior e personalização inteligente, 
                transformando ideias em produtos que fazem a diferença no mundo digital."
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
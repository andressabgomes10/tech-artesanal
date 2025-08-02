import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Zap, Users, Target, Award, Clock, Lightbulb } from "lucide-react";

const About = () => {
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

  const team = [
    {
      name: "Ana Silva",
      role: "CTO & Fundadora",
      description: "15 anos de experiência em desenvolvimento de produtos digitais e liderança técnica.",
      image: "/placeholder.svg"
    },
    {
      name: "Carlos Santos",
      role: "Lead Developer",
      description: "Especialista em arquiteturas escaláveis e desenvolvimento full-stack moderno.",
      image: "/placeholder.svg"
    },
    {
      name: "Maria Oliveira",
      role: "Product Manager",
      description: "Expert em gestão de produtos e metodologias ágeis para entrega de valor.",
      image: "/placeholder.svg"
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
                Sobre a <span className="text-caja-yellow">Cajá</span>
              </h1>
              <p className="text-xl text-caja-brown max-w-3xl mx-auto leading-relaxed">
                Somos especialistas em tecnologia artesanal — um conceito único que une 
                a inovação digital de ponta com a personalização e o cuidado de soluções feitas sob medida.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-caja-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="/lovable-uploads/0f494ad3-bea1-4dee-b789-bf707b8ac6d1.png" 
                  alt="Cajá - Tecnologia Artesanal" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-caja-dark">Nossa Missão</h2>
                <p className="text-lg text-caja-brown leading-relaxed">
                  Entregar soluções digitais únicas, com agilidade, qualidade superior 
                  e personalização inteligente, transformando ideias em produtos que fazem 
                  a diferença no mundo digital.
                </p>
                <p className="text-lg text-caja-brown leading-relaxed">
                  Acreditamos que cada projeto é único e merece atenção especial, 
                  assim como uma peça artesanal. É essa filosofia que nos move a 
                  criar tecnologia com alma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-caja-dark mb-6">Nossos Valores</h2>
              <p className="text-xl text-caja-brown max-w-3xl mx-auto">
                Os princípios que guiam cada decisão e projeto na Cajá
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-caja-white rounded-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-lg">
                    <value.icon className="h-6 w-6 text-caja-dark" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-caja-dark mb-2">{value.title}</h3>
                    <p className="text-caja-brown leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-caja-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-caja-dark mb-6">Nossa Equipe</h2>
              <p className="text-xl text-caja-brown max-w-3xl mx-auto">
                Profissionais experientes unidos pela paixão por tecnologia artesanal
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-caja-yellow/20 group-hover:border-caja-yellow transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-caja-dark mb-1">{member.name}</h3>
                  <p className="text-caja-yellow font-medium mb-3">{member.role}</p>
                  <p className="text-caja-brown text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-caja-yellow/10 to-caja-yellow-light/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
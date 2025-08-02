import { ArrowRight, Code2, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-caja-white via-muted to-caja-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-caja-yellow/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-caja-brown/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-caja-yellow/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-caja-dark">Cajá.</span>
                <br />
                <span className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light bg-clip-text text-transparent">
                  Feita sob medida
                </span>
                <br />
                <span className="text-caja-dark">para Você.</span>
              </h1>
              
              <p className="text-xl text-caja-brown leading-relaxed">
                <strong>Transforme ideias em produtos digitais únicos:</strong> da concepção ao lançamento, 
                combinando a agilidade da inovação tecnológica com a qualidade superior e a personalização 
                que são a marca da Cajá.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                Quero Minha Consultoria sob medida
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-caja-brown text-caja-brown hover:bg-caja-brown hover:text-caja-white transition-all duration-300">
                Conheça Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-caja-yellow">24h</div>
                <div className="text-sm text-caja-brown">Resposta inicial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-caja-yellow">100%</div>
                <div className="text-sm text-caja-brown">Personalizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-caja-yellow">+50</div>
                <div className="text-sm text-caja-brown">Projetos únicos</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-caja-white rounded-2xl shadow-[var(--shadow-elegant)] p-8">
              <div className="text-center mb-6">
                <img 
                  src="/lovable-uploads/0f494ad3-bea1-4dee-b789-bf707b8ac6d1.png" 
                  alt="Cajá - Tecnologia Artesanal" 
                  className="mx-auto h-24 mb-4"
                />
                <h3 className="text-2xl font-bold text-caja-dark mb-2">Tecnologia Artesanal</h3>
                <p className="text-caja-brown">União da inovação digital com personalização</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <Code2 className="h-6 w-6 text-caja-yellow" />
                  <span className="text-caja-dark font-medium">MVPs em tempo recorde</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <Lightbulb className="h-6 w-6 text-caja-yellow" />
                  <span className="text-caja-dark font-medium">Sistemas personalizados</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <Users className="h-6 w-6 text-caja-yellow" />
                  <span className="text-caja-dark font-medium">Gestão completa do produto</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-caja-yellow rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-caja-brown rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
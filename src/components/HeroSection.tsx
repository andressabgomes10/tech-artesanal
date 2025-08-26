import { ArrowRight, Code2, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[var(--gradient-hero)] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white animate-fade-in drop-shadow-lg">
              Tudo que você precisa para
              <br />
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-md">
                transformar ideias
              </span>
              <br />
              em produtos digitais únicos
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
              Combinamos a agilidade da inovação tecnológica com a qualidade superior e a personalização 
              que são a marca da Cajá — feita sob medida para você.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className="flex-1 px-6 py-4 rounded-lg text-lg border-2 border-white/30 bg-white/15 backdrop-blur-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 font-medium"
              />
              <Button size="lg" variant="hero" className="group whitespace-nowrap">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-white/90 font-medium">
              Ao clicar em "Começar Agora", você concorda com nossos{" "}
              <a href="#" className="underline hover:text-white transition-colors font-semibold">Termos & Condições</a>{" "}
              e <a href="#" className="underline hover:text-white transition-colors font-semibold">Política de Privacidade</a>.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16">
            <p className="text-white/90 text-sm mb-8 font-medium">Empresas que confiam na Cajá</p>
            <div className="flex justify-center items-center space-x-12 opacity-80">
              <div className="text-white font-bold text-lg drop-shadow-sm">Santander</div>
              <div className="text-white font-bold text-lg drop-shadow-sm">Canva</div>
              <div className="text-white font-bold text-lg drop-shadow-sm">Apple</div>
              <div className="text-white font-bold text-lg drop-shadow-sm">Microsoft</div>
              <div className="text-white font-bold text-lg drop-shadow-sm">Calendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
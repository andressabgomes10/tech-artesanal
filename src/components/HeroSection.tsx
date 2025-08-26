import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const floatingCards = [
    {
      title: "MVP Ágil",
      subtitle: "2-4 semanas",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      icon: Zap,
      position: "top-16 left-8"
    },
    {
      title: "Sistema Personalizado", 
      subtitle: "Sob medida",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      icon: Target,
      position: "top-32 right-12"
    },
    {
      title: "Gestão de Produtos",
      subtitle: "Suporte 24/7",
      color: "bg-gradient-to-br from-green-50 to-green-100", 
      icon: Sparkles,
      position: "bottom-24 left-16"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Floating Cards */}
      {floatingCards.map((card, index) => (
        <Card key={index} className={`absolute ${card.position} ${card.color} shadow-card border-0 hidden lg:block animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
          <CardContent className="p-4 w-48">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-white/60 rounded-lg">
                <card.icon className="h-4 w-4 text-caja-dark" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-caja-dark">{card.title}</h4>
                <p className="text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 text-center">
        <div className="space-y-12">
          {/* Trust Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-caja-yellow/10 text-caja-dark border-caja-yellow/20">
              ⚡ +50 produtos únicos entregues
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-8xl font-bold leading-tight text-caja-dark tracking-tight">
              Websites designed &
              <br />
              <span className="text-caja-yellow">built faster</span> with
              <br />
              Tecnologia Artesanal
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-medium">
              Use nossa expertise como seu aliado de design, não uma substituição. Gere instantaneamente 
              sitemaps, wireframes e protótipos para sites de marketing—tudo em minutos.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Descreva sua empresa em uma frase ou duas..." 
                  className="w-full px-6 py-4 rounded-xl text-lg border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-caja-yellow/20 focus:border-caja-yellow font-medium shadow-soft"
                />
              </div>
              <Button size="lg" className="bg-caja-dark hover:bg-caja-brown-dark text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-soft">
                Gerar Site
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Teste gratuitamente com um{" "}
              <button className="underline hover:text-caja-yellow transition-colors font-medium">exemplo</button>
            </p>
          </div>

          {/* Stats */}
          <div className="pt-16">
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              Usado por marcas líderes e empresas de todo o mundo
            </p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-caja-dark font-bold text-lg">Santander</div>
              <div className="text-caja-dark font-bold text-lg">Canva</div>
              <div className="text-caja-dark font-bold text-lg">Apple</div>
              <div className="text-caja-dark font-bold text-lg">Microsoft</div>
              <div className="text-caja-dark font-bold text-lg">Calendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
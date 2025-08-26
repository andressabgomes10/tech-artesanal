import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Conteúdo", href: "/conteudo" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Contato", href: "/contato" }
  ];

  const services = [
    "MVPs Rápidos",
    "Sistemas Personalizados", 
    "Gestão de Produtos",
    "Treinamentos Técnicos"
  ];

  const company = [
    "Nossa História",
    "Equipe",
    "Carreiras",
    "Imprensa"
  ];

  const legal = [
    "Termos de Uso",
    "Política de Privacidade",
    "Cookies",
    "LGPD"
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-card bg-gradient-to-br from-caja-yellow/5 to-caja-yellow/10">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Fique por dentro das novidades
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Receba insights exclusivos sobre tecnologia, desenvolvimento e inovação digital 
                direto na sua caixa de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  className="h-12 text-lg border-2 border-border focus:border-caja-yellow rounded-xl"
                />
                <Button size="lg" className="h-12 px-8 rounded-xl font-semibold whitespace-nowrap">
                  Inscrever-se
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <img 
                  src="/lovable-uploads/5fc60226-c087-44e8-9198-b86309f5ec63.png" 
                  alt="Cajá Logo" 
                  className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Cajá</h2>
                  <p className="text-sm text-muted-foreground">Tecnologia Artesanal</p>
                </div>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-lg">
                Especialistas em tecnologia artesanal, criando soluções digitais únicas 
                com personalização e qualidade superior.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Feita sob medida para você.</strong>
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Navegação</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-muted-foreground hover:text-caja-yellow transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Serviços</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/servicos" 
                      className="text-muted-foreground hover:text-caja-yellow transition-colors font-medium"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-caja-yellow transition-colors font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-medium">
              © {currentYear} Cajá. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-muted-foreground font-medium">
                Desenvolvido com ❤️ em São Paulo
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-caja-yellow transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-caja-yellow transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-caja-yellow transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
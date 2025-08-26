import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-caja-dark text-caja-white">
      {/* Newsletter Section */}
      <div className="border-b border-caja-brown/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Fique por dentro das novidades</h3>
              <p className="text-white/80 font-medium">
                Receba insights exclusivos sobre tecnologia, desenvolvimento e inovação digital.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="bg-white/15 border-2 border-white/30 text-white placeholder:text-white/70 focus:border-caja-yellow"
              />
              <Button className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold">
                Inscrever-se
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/5fc60226-c087-44e8-9198-b86309f5ec63.png" 
                alt="Cajá Logo" 
                className="h-10 w-10 brightness-0 invert"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">cajá</h2>
                <p className="text-sm text-white/70">Feita sob medida para Você.</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md font-medium">
              Especialistas em tecnologia artesanal, criando soluções digitais únicas 
              com personalização e qualidade superior.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-caja-yellow" />
                <span className="text-white/90">contato@caja.tech</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-caja-yellow" />
                <span className="text-white/90">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-caja-yellow" />
                <span className="text-white/90">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#servicos" className="hover:text-caja-yellow transition-colors font-medium">MVPs Rápidos</a></li>
              <li><a href="#servicos" className="hover:text-caja-yellow transition-colors font-medium">Sistemas Personalizados</a></li>
              <li><a href="#servicos" className="hover:text-caja-yellow transition-colors font-medium">Gestão de Produtos</a></li>
              <li><a href="#servicos" className="hover:text-caja-yellow transition-colors font-medium">Treinamentos</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#sobre" className="hover:text-caja-yellow transition-colors font-medium">Sobre Nós</a></li>
              <li><a href="#conteudo" className="hover:text-caja-yellow transition-colors font-medium">Blog & Insights</a></li>
              <li><a href="#contato" className="hover:text-caja-yellow transition-colors font-medium">Contato</a></li>
              <li><a href="#" className="hover:text-caja-yellow transition-colors font-medium">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80 font-medium">
              © {currentYear} Cajá. Todos os direitos reservados.
            </p>
            <p className="text-sm text-white/80 mt-2 md:mt-0 font-medium">
              Tecnologia Artesanal • Feita sob medida para Você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
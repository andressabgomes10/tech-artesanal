import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Conteúdo", href: "/conteudo" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-caja-white shadow-[var(--shadow-soft)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/5fc60226-c087-44e8-9198-b86309f5ec63.png" 
              alt="Cajá Logo" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-caja-dark">cajá</h1>
              <p className="text-xs text-caja-brown">Feita sob medida para Você.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-caja-dark hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:inline-flex bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold shadow-[var(--shadow-elegant)] transition-all duration-300">
            Consultoria Gratuita
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-caja-dark" />
            ) : (
              <Menu className="h-6 w-6 text-caja-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-caja-white">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-caja-dark hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold">
                Consultoria Gratuita
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
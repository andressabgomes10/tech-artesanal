import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Sobre Nós",
    href: "/sobre"
  }, {
    name: "Serviços",
    href: "/servicos"
  }, {
    name: "Conteúdo",
    href: "/conteudo"
  }, {
    name: "Newsletter",
    href: "/newsletter"
  }, {
    name: "Contato",
    href: "/contato"
  }];
  return <header className="bg-background/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/lovable-uploads/5fc60226-c087-44e8-9198-b86309f5ec63.png" alt="Cajá Logo" className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
            <div>
              <h1 className="text-xl font-bold text-foreground group-hover:text-caja-yellow transition-colors duration-300">Cajá</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => 
              <Link 
                key={item.name} 
                to={item.href} 
                className={`transition-colors duration-300 font-medium text-sm ${
                  location.pathname === item.href 
                    ? 'text-caja-yellow border-b-2 border-caja-yellow pb-1' 
                    : 'text-foreground hover:text-caja-yellow'
                }`}
              >
                {item.name}
              </Link>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-muted-foreground">
              <Link to="/contato">Contato</Link>
            </Button>
            <Button size="lg" asChild className="bg-caja-dark hover:bg-caja-brown-dark text-white font-semibold rounded-xl">
              <Link to="/contato">Começar grátis</Link>
            </Button>
          </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navigation.map(item => 
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`block px-3 py-2 transition-colors duration-300 ${
                    location.pathname === item.href 
                      ? 'text-caja-yellow font-semibold' 
                      : 'text-foreground hover:text-caja-yellow'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
              <div className="mt-4 space-y-2">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/contato" onClick={() => setIsOpen(false)}>Começar Agora</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;
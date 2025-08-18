import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  return <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/5fc60226-c087-44e8-9198-b86309f5ec63.png" alt="Cajá Logo" className="h-8 w-8" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">cajá</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-gray-700 hover:text-[hsl(263_70%_50%)] transition-colors duration-300 font-medium text-sm">
                {item.name}
              </a>)}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-700 hover:text-[hsl(263_70%_50%)] font-medium">
              Contato
            </Button>
            <Button className="bg-[hsl(263_70%_50%)] hover:bg-[hsl(263_70%_45%)] text-white font-semibold px-6">
              Começar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-[hsl(263_70%_50%)] transition-colors duration-300" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="mt-4 space-y-2">
                <Button variant="ghost" className="w-full text-gray-700 hover:text-[hsl(263_70%_50%)] font-medium">
                  Contato
                </Button>
                <Button className="w-full bg-[hsl(263_70%_50%)] hover:bg-[hsl(263_70%_45%)] text-white font-semibold">
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-caja-white via-muted to-caja-white px-4">
      <Card className="max-w-md w-full text-center shadow-[var(--shadow-elegant)]">
        <CardHeader className="pb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-10 w-10 text-caja-dark" />
          </div>
          <CardTitle className="text-6xl font-bold text-caja-yellow mb-2">404</CardTitle>
          <CardDescription className="text-xl text-caja-brown">
            Oops! Página não encontrada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-caja-brown leading-relaxed">
            A página que você está procurando não existe ou foi movida. 
            Que tal voltar ao início e explorar nossos serviços?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1 group" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Voltar
              </Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Ir ao Início
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-caja-brown mb-3">Links úteis:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/sobre">Sobre</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/servicos">Serviços</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/contato">Contato</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
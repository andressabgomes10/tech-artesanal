import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-caja-white via-muted to-caja-white px-4">
          <Card className="max-w-md w-full text-center shadow-[var(--shadow-elegant)]">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-destructive/20 to-destructive/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
              <CardTitle className="text-2xl text-caja-dark mb-2">Ops! Algo deu errado</CardTitle>
              <CardDescription className="text-caja-brown">
                Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="text-left bg-muted p-4 rounded-lg">
                  <p className="text-sm text-caja-brown font-mono">
                    {this.state.error.message}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 group" onClick={this.handleReload}>
                  <RotateCcw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  Recarregar
                </Button>
                <Button className="flex-1" onClick={this.handleGoHome}>
                  <Home className="mr-2 h-4 w-4" />
                  Ir ao Início
                </Button>
              </div>
              
              <p className="text-sm text-caja-brown mt-4">
                Se o problema persistir, entre em contato conosco:{" "}
                <a href="mailto:contato@caja.tech" className="text-caja-yellow hover:underline">
                  contato@caja.tech
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
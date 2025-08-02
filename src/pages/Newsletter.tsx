import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, CheckCircle, Calendar, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Newsletter = () => {
  const benefits = [
    "Insights exclusivos sobre tecnologia artesanal",
    "Novidades sobre metodologias ágeis",
    "Casos de sucesso detalhados",
    "Dicas práticas de desenvolvimento",
    "Convites para eventos e webinars",
    "Conteúdo antes de todos os outros"
  ];

  const pastEditions = [
    {
      title: "Como a IA está transformando o desenvolvimento",
      date: "15 Jan 2024",
      description: "Exploramos as principais ferramentas de IA que estão revolucionando a forma como desenvolvemos software.",
      topics: ["Inteligência Artificial", "Desenvolvimento", "Produtividade"]
    },
    {
      title: "Metodologias Ágeis: 2024 em Retrospectiva",
      date: "8 Jan 2024",
      description: "Um resumo das principais tendências e evoluções nas metodologias ágeis durante 2024.",
      topics: ["Agile", "Scrum", "Product Management"]
    },
    {
      title: "Startup to Scale: Lições de quem cresceu",
      date: "1 Jan 2024",
      description: "Entrevistas exclusivas com fundadores que escalaram suas startups de forma sustentável.",
      topics: ["Startups", "Scaling", "Empreendedorismo"]
    },
    {
      title: "Tecnologia Artesanal: O que aprendemos",
      date: "25 Dez 2023",
      description: "Reflexões sobre um ano aplicando nossa filosofia de tecnologia artesanal em diversos projetos.",
      topics: ["Tecnologia Artesanal", "Retrospectiva", "Aprendizados"]
    }
  ];

  const stats = [
    { number: "2.500+", label: "Assinantes" },
    { number: "95%", label: "Taxa de Abertura" },
    { number: "12", label: "Edições por Ano" },
    { number: "4.8/5", label: "Avaliação Média" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-caja-white via-muted to-caja-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-full mb-8">
              <Mail className="h-10 w-10 text-caja-dark" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-caja-dark mb-6">
              Newsletter <span className="text-caja-yellow">Cajá</span>
            </h1>
            
            <p className="text-xl text-caja-brown leading-relaxed mb-8">
              Insights exclusivos sobre tecnologia artesanal, desenvolvimento e inovação digital 
              direto na sua caixa de entrada. Conteúdo cuidadosamente curado para profissionais 
              que buscam excelência.
            </p>

            {/* Subscription Form */}
            <div className="bg-caja-white rounded-2xl shadow-[var(--shadow-elegant)] p-8 mb-12">
              <h2 className="text-2xl font-bold text-caja-dark mb-6">Faça parte da nossa comunidade</h2>
              <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 border-caja-brown/30 focus:border-caja-yellow"
                />
                <Button className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold">
                  Inscrever-se Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-caja-brown mt-4">
                Sem spam. Você pode cancelar a qualquer momento.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-caja-yellow mb-2">{stat.number}</div>
                  <div className="text-caja-brown">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-caja-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-caja-dark mb-6">O que você vai receber</h2>
              <p className="text-xl text-caja-brown">
                Conteúdo exclusivo e de alta qualidade, pensado especialmente para nossa comunidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                  <CheckCircle className="h-6 w-6 text-caja-yellow flex-shrink-0" />
                  <span className="text-caja-dark">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Editions */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-caja-dark mb-6">Edições Anteriores</h2>
              <p className="text-xl text-caja-brown">
                Confira alguns dos nossos conteúdos mais populares dos últimos meses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pastEditions.map((edition, index) => (
                <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="h-4 w-4 text-caja-yellow" />
                      <span className="text-sm text-caja-brown">{edition.date}</span>
                    </div>
                    <CardTitle className="text-xl text-caja-dark">{edition.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {edition.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {edition.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="border-caja-brown text-caja-brown hover:bg-caja-brown hover:text-caja-white group">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-caja-yellow/10 to-caja-yellow-light/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-caja-dark mb-6">
              Não perca os próximos insights
            </h2>
            <p className="text-xl text-caja-brown mb-8">
              Junte-se a mais de 2.500 profissionais que já recebem nosso conteúdo exclusivo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 border-caja-brown/30 focus:border-caja-yellow"
              />
              <Button className="bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark font-semibold">
                Quero Receber
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
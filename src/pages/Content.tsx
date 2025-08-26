import { useScrollToTop } from "@/hooks/useScrollToTop";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Calendar, Tag, ArrowRight, BookOpen, Video, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Content = () => {
  useScrollToTop();
  const categories = [
    { icon: BookOpen, name: "Blog & Notícias", count: 24, color: "bg-blue-100 text-blue-800" },
    { icon: FileText, name: "Estudos de Caso", count: 12, color: "bg-green-100 text-green-800" },
    { icon: FileText, name: "Guias & Whitepapers", count: 8, color: "bg-purple-100 text-purple-800" },
    { icon: Video, name: "Tutoriais & Vídeos", count: 16, color: "bg-red-100 text-red-800" },
    { icon: Users, name: "Eventos & Webinars", count: 6, color: "bg-orange-100 text-orange-800" }
  ];

  const featuredPosts = [
    {
      title: "Como criar um MVP em 30 dias: Guia completo",
      description: "Metodologia prática para validar sua ideia rapidamente e com eficiência.",
      category: "Guias",
      date: "15 Jan 2024",
      readTime: "8 min",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Tecnologia Artesanal: O futuro do desenvolvimento",
      description: "Entenda como a personalização está revolucionando o setor de tecnologia.",
      category: "Blog",
      date: "12 Jan 2024",
      readTime: "5 min",
      image: "/placeholder.svg"
    },
    {
      title: "Case Study: E-commerce que cresceu 300% em 6 meses",
      description: "Como nossa abordagem artesanal transformou um pequeno negócio.",
      category: "Estudos de Caso",
      date: "10 Jan 2024",
      readTime: "12 min",
      image: "/placeholder.svg"
    }
  ];

  const recentPosts = [
    {
      title: "5 tendências de UX/UI para 2024",
      category: "Design",
      date: "8 Jan 2024",
      readTime: "6 min"
    },
    {
      title: "Arquitetura de microsserviços: Quando usar?",
      category: "Desenvolvimento",
      date: "5 Jan 2024",
      readTime: "10 min"
    },
    {
      title: "Webinar: Metodologias Ágeis na Prática",
      category: "Eventos",
      date: "3 Jan 2024",
      readTime: "45 min"
    },
    {
      title: "Tutorial: Deploy automatizado com CI/CD",
      category: "Tutorial",
      date: "1 Jan 2024",
      readTime: "15 min"
    }
  ];

  const tags = [
    "MVP", "Desenvolvimento", "UX/UI", "Metodologias Ágeis", 
    "Arquitetura", "APIs", "React", "Node.js", "Startup", 
    "Product Management", "CI/CD", "DevOps"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Conteúdo & Insights - Blog Cajá sobre Tecnologia e Desenvolvimento"
        description="Artigos, tutoriais e insights sobre tecnologia artesanal, desenvolvimento de software, MVPs e inovação digital."
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-caja-white via-muted to-caja-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-caja-dark mb-6">
                Conteúdo & <span className="text-caja-yellow">Insights</span>
              </h1>
              <p className="text-xl text-caja-brown max-w-3xl mx-auto leading-relaxed">
                Conhecimento prático sobre tecnologia, desenvolvimento e inovação digital 
                para impulsionar seus projetos.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-caja-brown" />
                <Input
                  type="text"
                  placeholder="Buscar artigos, tutoriais, estudos de caso..."
                  className="pl-10 pr-4 py-3 text-lg border-caja-brown/30 focus:border-caja-yellow"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark">
                  Buscar
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 cursor-pointer border-border hover:border-caja-yellow/50">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-gradient-to-br from-caja-yellow to-caja-yellow-light rounded-lg w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-caja-dark" />
                    </div>
                    <h3 className="font-semibold text-caja-dark mb-1">{category.name}</h3>
                    <p className="text-sm text-caja-brown">{category.count} artigos</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Post */}
              <section>
                <h2 className="text-2xl font-bold text-caja-dark mb-6">Artigo em Destaque</h2>
                <Card className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={featuredPosts[0].image}
                        alt={featuredPosts[0].title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge className="bg-caja-yellow text-caja-dark">{featuredPosts[0].category}</Badge>
                        <div className="flex items-center text-sm text-caja-brown">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPosts[0].date}
                        </div>
                        <span className="text-sm text-caja-brown">{featuredPosts[0].readTime} de leitura</span>
                      </div>
                      <h3 className="text-2xl font-bold text-caja-dark mb-3">{featuredPosts[0].title}</h3>
                      <p className="text-caja-brown mb-4 leading-relaxed">{featuredPosts[0].description}</p>
                      <Button variant="outline" className="border-caja-brown text-caja-brown hover:bg-caja-brown hover:text-caja-white group">
                        Ler Artigo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Recent Posts */}
              <section>
                <h2 className="text-2xl font-bold text-caja-dark mb-6">Artigos Recentes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.slice(1).map((post, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300 cursor-pointer group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-caja-brown">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-caja-dark mb-2 group-hover:text-caja-yellow transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-caja-brown text-sm leading-relaxed">{post.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* All Posts */}
              <section>
                <h2 className="text-2xl font-bold text-caja-dark mb-6">Todos os Artigos</h2>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-300 cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <Badge variant="outline">{post.category}</Badge>
                              <div className="flex items-center text-sm text-caja-brown">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date}
                              </div>
                              <span className="text-sm text-caja-brown">{post.readTime} de leitura</span>
                            </div>
                            <h3 className="text-lg font-semibold text-caja-dark group-hover:text-caja-yellow transition-colors">
                              {post.title}
                            </h3>
                          </div>
                          <ArrowRight className="h-5 w-5 text-caja-brown group-hover:text-caja-yellow group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-caja-yellow/10 to-caja-yellow-light/10">
                <CardHeader>
                  <CardTitle className="text-caja-dark">Newsletter Cajá</CardTitle>
                  <CardDescription>
                    Receba insights exclusivos sobre tecnologia e inovação digital.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input type="email" placeholder="Seu melhor email" />
                    <Button className="w-full bg-gradient-to-r from-caja-yellow to-caja-yellow-light hover:from-caja-yellow-dark hover:to-caja-yellow text-caja-dark">
                      Inscrever-se
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-caja-dark flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Tags Populares
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-caja-yellow hover:text-caja-dark transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts Sidebar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-caja-dark">Mais Lidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="cursor-pointer group">
                        <h4 className="font-medium text-caja-dark group-hover:text-caja-yellow transition-colors text-sm leading-relaxed">
                          {post.title}
                        </h4>
                        <p className="text-xs text-caja-brown mt-1">{post.date} • {post.readTime}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Content;
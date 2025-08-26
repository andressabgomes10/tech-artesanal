import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = "Cajá - Tecnologia Artesanal | Feita sob medida para Você",
  description = "Especialistas em tecnologia artesanal, criando soluções digitais únicas com personalização e qualidade superior. MVPs, sistemas personalizados e gestão de produtos.",
  keywords = "tecnologia artesanal, desenvolvimento software, MVP, sistemas personalizados, consultoria digital, startup, inovação",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, type: "name" | "property" = "name") => {
      let element = document.querySelector(`meta[${type}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(type, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    
    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", image, "property");
    updateMetaTag("og:type", "website", "property");
    
    if (url) {
      updateMetaTag("og:url", url, "property");
    }
    
    // Twitter tags
    updateMetaTag("twitter:card", "summary_large_image", "name");
    updateMetaTag("twitter:title", title, "name");
    updateMetaTag("twitter:description", description, "name");
    updateMetaTag("twitter:image", image, "name");
    
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEOHead;
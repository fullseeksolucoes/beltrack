export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://beltrack.com.br/#business",
        name: "Beltrack",
        description:
          "Rastreador veicular com monitoramento em tempo real, bloqueio remoto e instalação especializada. Acompanhe seu veículo pelo celular.",
        url: "https://beltrack.com.br",
        telephone: "+5531994351895",
        email: "contato@beltrack.com.br",
        areaServed: "Brasil",
        logo: "https://beltrack.com.br/logo-header.svg",
        image: "https://beltrack.com.br/logo-header.webp",
        sameAs: ["https://wa.me/5531994351895"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Belo Horizonte",
          addressRegion: "MG",
          addressCountry: "BR",
        },
        priceRange: "R$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://beltrack.com.br/#organization",
        name: "Beltrack",
        url: "https://beltrack.com.br",
        logo: "https://beltrack.com.br/logo-header.svg",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+5531994351895",
          contactType: "sales",
          availableLanguage: ["Portuguese"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://beltrack.com.br/#website",
        name: "Beltrack",
        url: "https://beltrack.com.br",
        inLanguage: "pt-BR",
        publisher: {
          "@id": "https://beltrack.com.br/#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "https://beltrack.com.br/#service",
        name: "Rastreador Veicular Beltrack",
        description:
          "Monitoramento veicular em tempo real, bloqueio remoto, histórico de trajetos e instalação especializada.",
        provider: {
          "@id": "https://beltrack.com.br/#business",
        },
        areaServed: "Brasil",
        category: "Vehicle Tracking",
        offers: {
          "@type": "AggregateOffer",
          offerCount: "2",
          description: "Planos Essencial e Premium",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://beltrack.com.br/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Como funciona o rastreador veicular da Beltrack?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O rastreador é instalado no veículo e transmite a localização em tempo real. Você acompanha tudo pelo aplicativo no celular: trajetos, paradas, velocidade e muito mais.",
            },
          },
          {
            "@type": "Question",
            name: "Precisa de fidelidade?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Não. A Beltrack não exige fidelidade. Você pode usar o serviço enquanto fizer sentido para você, sem burocracia ou contratos longos.",
            },
          },
          {
            "@type": "Question",
            name: "Como é feita a instalação do rastreador?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A instalação é realizada por técnicos especializados, de forma segura e discreta, garantindo o funcionamento correto do equipamento.",
            },
          },
          {
            "@type": "Question",
            name: "O rastreador funciona para carros e motos?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, a Beltrack oferece soluções de rastreamento tanto para carros quanto para motos, com equipamentos adaptados para cada tipo de veículo.",
            },
          },
          {
            "@type": "Question",
            name: "O que é o bloqueio remoto?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O bloqueio remoto permite desligar o veículo à distância pelo aplicativo, em caso de furto ou roubo. Está disponível no Plano Premium.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://beltrack.com.br/#business",

        additionalType: "https://schema.org/AutomotiveBusiness",

        name: "Beltrack",

        description:
          "Rastreamento veicular em Sabará e região metropolitana de Belo Horizonte com monitoramento em tempo real, acesso via aplicativo e instalação especializada.",

        url: "https://beltrack.com.br",

        telephone: "+5531994351895",

        email: "contato@beltrack.com.br",

        logo: "https://beltrack.com.br/logo-header.svg",

        image: "https://beltrack.com.br/og",

        sameAs: ["https://wa.me/5531994351895"],

        priceRange: "R$",

        areaServed: [
          {
            "@type": "City",
            name: "Sabará",
          },
          {
            "@type": "City",
            name: "Belo Horizonte",
          },
          {
            "@type": "AdministrativeArea",
            name: "Região Metropolitana de Belo Horizonte",
          },
        ],

        address: {
          "@type": "PostalAddress",
          addressLocality: "Sabará",
          addressRegion: "MG",
          addressCountry: "BR",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: "-19.8864",
          longitude: "-43.8267",
        },

        knowsAbout: [
          "Rastreamento veicular",
          "GPS automotivo",
          "Monitoramento de frotas",
          "Bloqueio remoto",
          "Rastreamento para motos",
          "Rastreamento para caminhões",
          "Rastreamento para tratores",
          "Rastreamento para máquinas",
        ],
      },

      {
        "@type": "Organization",
        "@id": "https://beltrack.com.br/#organization",

        name: "Beltrack",

        url: "https://beltrack.com.br",

        logo: "https://beltrack.com.br/logo-header.svg",

        image: "https://beltrack.com.br/og",

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+5531994351895",
          contactType: "customer support",
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

        name: "Rastreamento Veicular Beltrack",

        description:
          "Monitoramento veicular em tempo real, bloqueio remoto, histórico de trajetos e instalação especializada.",

        provider: {
          "@id": "https://beltrack.com.br/#business",
        },

        category: "Rastreamento Veicular",

        areaServed: [
          {
            "@type": "City",
            name: "Sabará",
          },
          {
            "@type": "City",
            name: "Belo Horizonte",
          },
          {
            "@type": "AdministrativeArea",
            name: "Região Metropolitana de Belo Horizonte",
          },
        ],

        serviceType: [
          "Rastreamento veicular",
          "Monitoramento veicular",
          "Bloqueio remoto",
          "GPS veicular",
          "Rastreamento de frota",
          "Rastreamento para motos",
          "Rastreamento para caminhões",
          "Rastreamento para tratores",
          "Rastreamento para máquinas",
        ],

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planos Beltrack",

          itemListElement: [
            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Plano Essencial",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",
                name: "Plano Premium",
              },
            },
          ],
        },

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

              text: "O rastreador é instalado no veículo e transmite a localização em tempo real. Você acompanha tudo pelo aplicativo no celular, incluindo trajetos, paradas e informações do veículo.",
            },
          },

          {
            "@type": "Question",

            name: "Precisa de fidelidade?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Não. A Beltrack não exige fidelidade. Você pode utilizar o serviço enquanto fizer sentido para você, sem contratos longos ou burocracia.",
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

            name: "O rastreador funciona para quais veículos?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "A Beltrack oferece soluções de rastreamento para carros, motos, caminhões, tratores, máquinas e veículos automotores em geral.",
            },
          },

          {
            "@type": "Question",

            name: "O que é o bloqueio remoto?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "O bloqueio remoto permite desligar o veículo à distância pelo aplicativo. A funcionalidade está disponível em planos selecionados e depende das condições de sinal e compatibilidade elétrica do veículo.",
            },
          },

          {
            "@type": "Question",

            name: "A Beltrack é uma seguradora?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Não. A Beltrack é uma empresa de tecnologia especializada em rastreamento e monitoramento veicular. O serviço não substitui seguro automotivo.",
            },
          },

          {
            "@type": "Question",

            name: "O equipamento precisa ser devolvido após o cancelamento?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Sim. O equipamento é cedido em regime de comodato e deve ser devolvido após o cancelamento do serviço.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

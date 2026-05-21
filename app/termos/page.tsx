import type { Metadata } from "next";
import {
  AlertTriangle,
  FileText,
  XCircle,
  Lock,
  Package,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";
import Button from "@/components/site/Button";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso da Beltrack. Entenda as condições do serviço de rastreamento veicular, responsabilidades e limites do monitoramento GPS.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://beltrack.com.br/termos",
  },
  openGraph: {
    title: "Termos de Uso | Beltrack",
    description:
      "Termos de Uso da Beltrack. Entenda as condições do serviço de rastreamento veicular, responsabilidades e limites do monitoramento GPS.",
    url: "https://beltrack.com.br/termos",
  },
};

const sections = [
  {
    id: "introducao",
    title: "1. Introdução",
    content: (
      <div className="space-y-4">
        <p>
          Bem-vindo aos Termos de Uso da Beltrack. Ao contratar ou utilizar
          nossos serviços de rastreamento veicular, você declara ter lido,
          compreendido e aceito todas as condições descritas neste documento.
        </p>
        <p>
          A Beltrack é uma empresa de tecnologia especializada em rastreamento e
          monitoramento veicular. Nosso serviço consiste na instalação de
          equipamentos de rastreamento GPS, fornecimento de acesso à plataforma
          de monitoramento via aplicativo e suporte técnico relacionado ao
          funcionamento do sistema.
        </p>
        <p>
          A Beltrack <strong>não é uma seguradora</strong> e{" "}
          <strong>não oferece seguro veicular</strong>. Os serviços prestados se
          limitam ao rastreamento e monitoramento da localização do veículo,
          conforme descrito neste documento.
        </p>
      </div>
    ),
  },
  {
    id: "servico",
    title: "2. Descrição dos Serviços",
    content: (
      <div className="space-y-4">
        <p>Os serviços oferecidos pela Beltrack incluem:</p>
        <ul className="space-y-2">
          {[
            "Instalação de equipamento de rastreamento GPS no veículo",
            "Acesso ao aplicativo de monitoramento para acompanhamento da localização",
            "Histórico de trajetos e relatórios de deslocamento",
            "Alertas e notificações sobre movimentação do veículo",
            "Suporte técnico para orientação sobre o funcionamento do sistema",
            "Bloqueio remoto (disponível em planos selecionados)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          A Beltrack se reserva o direito de atualizar, modificar ou
          descontinuar funcionalidades da plataforma a qualquer momento,
          mediante comunicação prévia aos clientes.
        </p>
      </div>
    ),
  },
  {
    id: "responsabilidades-beltrack",
    title: "3. Responsabilidades da Beltrack",
    content: (
      <div className="space-y-4">
        <p>São responsabilidades da Beltrack:</p>
        <ul className="space-y-2">
          {[
            "Fornecer equipamento de rastreamento em boas condições de funcionamento",
            "Realizar a instalação do rastreador por técnico especializado",
            "Disponibilizar acesso ao aplicativo de monitoramento",
            "Manter a plataforma em operação dentro dos limites técnicos descritos neste documento",
            "Prestar suporte técnico para dúvidas relacionadas ao funcionamento do sistema",
            "Substituir equipamentos com defeito comprovado de fabricação",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "responsabilidades-cliente",
    title: "4. Responsabilidades do Cliente",
    content: (
      <div className="space-y-4">
        <p>São responsabilidades do cliente:</p>
        <ul className="space-y-2">
          {[
            "Manter os pagamentos em dia conforme o plano contratado",
            "Informar imediatamente qualquer problema técnico identificado no equipamento",
            "Permitir o acesso ao veículo para instalação, manutenção ou remoção do rastreador",
            "Utilizar a plataforma e o aplicativo de acordo com as finalidades previstas",
            "Manter seus dados de cadastro atualizados junto à Beltrack",
            "Não adulterar, violar ou remover o equipamento de rastreamento",
            "Comunicar a venda, transferência ou perda total do veículo",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "limitacoes-tecnicas",
    title: "5. Limitações Técnicas do Serviço",
    content: (
      <div className="space-y-4">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="size-5 text-amber-500 mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-amber-800">
                O serviço de rastreamento está sujeito a limitações técnicas
              </p>
              <p className="text-amber-700">
                O funcionamento do rastreador depende de fatores externos que
                estão fora do controle da Beltrack. O cliente deve estar ciente
                de que o rastreamento pode ser afetado por condições de sinal,
                ambiente e integridade do equipamento.
              </p>
            </div>
          </div>
        </div>

        <p>O serviço de rastreamento veicular está sujeito a:</p>
        <ul className="space-y-2">
          {[
            "Disponibilidade e qualidade do sinal GPS",
            "Cobertura e estabilidade da rede de telefonia móvel",
            "Alimentação elétrica do veículo (bateria)",
            "Integridade física do equipamento instalado",
            "Condições climáticas e ambientais adversas",
            "Interferências eletromagnéticas em túneis, garagens subterrâneas e áreas de sinal restrito",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "gps-conectividade",
    title: "6. GPS e Conectividade",
    content: (
      <div className="space-y-4">
        <p>
          O rastreamento veicular depende da combinação de sinal GPS (para
          determinação da posição) e rede de telefonia móvel (para transmissão
          dos dados). A Beltrack utiliza equipamentos e chips de qualidade, mas
          não pode garantir que o sinal estará disponível em todos os locais e
          momentos.
        </p>
        <p>Podem ocorrer falhas de conectividade em situações como:</p>
        <ul className="space-y-2">
          {[
            "Regiões com cobertura limitada de telefonia móvel",
            "Áreas remotas ou de difícil acesso",
            "Interiores de túneis, estacionamentos subterrâneos e garagens fechadas",
            "Locais com alta interferência eletromagnética",
            "Períodos de manutenção ou instabilidade na rede da operadora",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "bloqueio-remoto",
    title: "7. Bloqueio Remoto",
    content: (
      <div className="space-y-4">
        <div className="rounded-2xl bg-brand-blue/5 border border-brand-blue/20 p-5 text-sm">
          <div className="flex items-start gap-3">
            <Lock className="size-5 text-brand-blue mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-brand-blue">
                Bloqueio remoto disponível em planos selecionados
              </p>
              <p className="text-ink-muted">
                O bloqueio remoto é uma funcionalidade complementar disponível
                apenas no Plano Premium. Seu acionamento depende de
                compatibilidade elétrica do veículo e condições de sinal no
                momento da solicitação.
              </p>
            </div>
          </div>
        </div>

        <p>
          O bloqueio remoto permite desligar o veículo à distância por meio do
          aplicativo. Esta funcionalidade:
        </p>
        <ul className="space-y-2">
          {[
            "Está disponível apenas no Plano Premium",
            "Depende de compatibilidade do sistema elétrico do veículo",
            "Requer sinal de rede móvel para ser acionado",
            "Pode não funcionar se o veículo estiver em movimento em determinadas condições",
            "Não substitui sistemas de segurança ou seguros veiculares",
            "Não garante a prevenção de furto ou roubo",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "isentacao",
    title: "8. Limites do serviço",
    content: (
      <div className="space-y-4">
        <div className="rounded-2xl bg-red-50 border border-red-200 p-5 text-sm">
          <div className="flex items-start gap-3">
            <XCircle className="size-5 text-red-500 mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-red-800">
                A Beltrack não se responsabiliza por furto, roubo ou perda do
                veículo
              </p>
              <p className="text-red-700">
                O serviço de rastreamento veicular não constitui seguro. A
                Beltrack não garante a recuperação do veículo em caso de furto
                ou roubo, nem se responsabiliza por danos, perdas ou prejuízos
                decorrentes desses eventos.
              </p>
            </div>
          </div>
        </div>

        <p>
          A Beltrack <strong>não será responsabilizada</strong> por:
        </p>
        <ul className="space-y-2">
          {[
            "Furto, roubo ou perda do veículo",
            "Danos materiais ou pessoais decorrentes de crimes contra o veículo",
            "Remoção ou danificação do equipamento por terceiros",
            "Falhas de rastreamento causadas por adulteração ou violação do equipamento",
            "Instabilidade ou indisponibilidade temporária da plataforma",
            "Perda de dados decorrente de falhas técnicas fora de seu controle",
            "Danos indiretos, lucros cessantes ou oportunidades de negócio perdidas",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "interrupcao",
    title: "9. Disponibilidade da plataforma",
    content: (
      <div className="space-y-4">
        <p>
          A Beltrack emprega os melhores esforços para manter o serviço em
          operação contínua. No entanto, podem ocorrer interrupções temporárias
          para:
        </p>
        <ul className="space-y-2">
          {[
            "Manutenção programada da plataforma",
            "Atualizações do sistema e do aplicativo",
            "Instabilidades na rede de telefonia móvel",
            "Falhas técnicas não previstas",
            "Casos fortuitos ou de força maior",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          A Beltrack não será responsabilizada por indisponibilidades
          temporárias, desde que não caracterizem falha reiterada e
          injustificada do serviço contratado.
        </p>
      </div>
    ),
  },
  {
    id: "privacidade",
    title: "10. Privacidade e Uso de Dados",
    content: (
      <div className="space-y-4">
        <p>
          A Beltrack coleta e trata dados de localização e informações dos
          clientes exclusivamente para a prestação dos serviços contratados. Os
          dados são armazenados de forma segura e não são compartilhados com
          terceiros sem autorização, exceto quando exigido por lei.
        </p>
        <p>Para mais informações, consulte nossa Política de Privacidade.</p>
      </div>
    ),
  },
  {
    id: "cancelamento",
    title: "11. Cancelamento",
    content: (
      <div className="space-y-4">
        <p>
          O cliente pode cancelar o serviço a qualquer momento, sem necessidade
          de fidelidade. Para cancelar, basta entrar em contato com nossa equipe
          de suporte.
        </p>
        <p>Procedimento de cancelamento:</p>
        <ul className="space-y-2">
          {[
            "Solicitação deve ser feita pelo WhatsApp ou canais oficiais",
            "Após a confirmação, o desligamento do equipamento é agendado",
            "O equipamento de rastreamento será retirado por técnico especializado",
            "Valores proporcionais aos dias utilizados serão calculados conforme plano contratado",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "comodato",
    title: "12. Comodato do Equipamento",
    content: (
      <div className="space-y-4">
        <div className="rounded-2xl bg-brand-blue/5 border border-brand-blue/20 p-5 text-sm">
          <div className="flex items-start gap-3">
            <Package className="size-5 text-brand-blue mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold text-brand-blue">
                Equipamento fornecido em comodato
              </p>
              <p className="text-ink-muted">
                O equipamento de rastreamento instalado no veículo é de
                propriedade da Beltrack e foi cedido ao cliente para uso
                enquanto o serviço estiver ativo. Não há fidelidade — você pode
                cancelar quando quiser.
              </p>
            </div>
          </div>
        </div>

        <p>
          O equipamento de rastreamento GPS instalado no veículo é propriedade
          exclusiva da Beltrack e foi cedido ao cliente em regime de comodato —
          ou seja, por empréstimo gratuito durante a vigência do contrato de
          prestação de serviços.
        </p>

        <p>Condições do comodato:</p>
        <ul className="space-y-2">
          {[
            "O cliente não adquire qualquer direito de propriedade sobre o equipamento",
            "O equipamento deve ser mantido em boas condições de uso durante o período do serviço",
            "Não é permitido adulterar, violar, remover ou transferir o equipamento para outro veículo sem autorização da Beltrack",
            "Em caso de defeito comprovado de fabricação, a Beltrack realizará a substituição sem custo",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-semibold text-ink">Devolução do equipamento</p>
        <ul className="space-y-2">
          {[
            "Ao cancelar o serviço, o equipamento deve ser devolvido à Beltrack",
            "A retirada será realizada preferencialmente por técnico autorizado, em data agendada",
            "O cliente também pode devolver o equipamento em ponto de coleta indicado pela Beltrack",
            "A não devolução do equipamento poderá resultar em cobrança pelo valor do aparelho",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-semibold text-ink">Danos ao equipamento</p>
        <ul className="space-y-2">
          {[
            "Danos decorrentes de uso inadequado, adulteração ou violação intencional do equipamento serão de responsabilidade do cliente",
            "Remoção não autorizada do equipamento por terceiros é considerada caso fortuito e não será imputada ao cliente, desde que este não tenha concorrido para o evento",
            "A Beltrack poderá cobrar pelo reparo ou substituição do equipamento em caso de danos causados por mau uso",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "alteracoes",
    title: "13. Alterações nos Termos",
    content: (
      <div className="space-y-4">
        <p>
          A Beltrack poderá alterar estes Termos de Uso a qualquer momento para
          refletir mudanças no serviço, na legislação aplicável ou em suas
          práticas operacionais. As alterações serão comunicadas aos clientes
          por meio do aplicativo ou canais oficiais de contato.
        </p>
        <p>
          O uso continuado do serviço após a comunicação das alterações implica
          aceitação dos novos termos.
        </p>
      </div>
    ),
  },
  {
    id: "contato",
    title: "14. Contato",
    content: (
      <div className="space-y-4">
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato com
          nossa equipe:
        </p>
        <ul className="space-y-2">
          {["WhatsApp: (31) 99435-1895"].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "disclaimer",
    title: "15. Disposições Finais",
    content: (
      <div className="space-y-4">
        <p>
          Estes Termos de Uso constituem o acordo integral entre a Beltrack e o
          cliente, substituindo quaisquer entendimentos anteriores.
        </p>
        <p>
          Caso qualquer disposição destes Termos seja considerada inválida ou
          inexequível, as demais disposições permanecerão em pleno vigor e
          efeito.
        </p>
        <p>
          A Beltrack é uma empresa de tecnologia que presta serviços de
          rastreamento e monitoramento veicular. Nenhuma parte deste documento
          deve ser interpretada como contrato de seguro, garantia de recuperação
          veicular ou obrigação de resultado.
        </p>
      </div>
    ),
  },
];

const faq = [
  {
    q: "A Beltrack é uma seguradora?",
    a: "Não. A Beltrack é uma empresa de tecnologia especializada em rastreamento e monitoramento veicular. Não oferecemos seguros, não garantimos recuperação de veículos e não nos responsabilizamos por furto ou roubo.",
  },
  {
    q: "O rastreamento funciona em qualquer situação?",
    a: "Não. O funcionamento do rastreamento depende de sinal GPS, cobertura da rede móvel, alimentação elétrica do veículo e integridade do equipamento. Em alguns ambientes, como túneis, garagens subterrâneas ou áreas sem cobertura, podem ocorrer limitações temporárias.",
  },
  {
    q: "O bloqueio remoto evita o roubo do veículo?",
    a: "O bloqueio remoto é uma ferramenta de auxílio que permite desligar o veículo à distância. No entanto, seu funcionamento depende de condições de sinal e compatibilidade elétrica do veículo. Não substitui sistemas de segurança ou seguros.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. A Beltrack não exige fidelidade. Você pode cancelar quando quiser, sem multa ou burocracia.",
  },
  {
    q: "O que acontece se o equipamento apresentar defeito?",
    a: "Equipamentos com defeito comprovado de fabricação serão substituídos pela Beltrack sem custo adicional. Basta entrar em contato com nosso suporte técnico.",
  },
  {
    q: "O equipamento de rastreamento é meu?",
    a: "Não. O equipamento é fornecido em regime de comodato, ou seja, permanece como propriedade da Beltrack enquanto o serviço estiver ativo.",
  },
  {
    q: "Preciso devolver o rastreador após o cancelamento?",
    a: "Sim. Após o cancelamento do serviço, o equipamento deve ser devolvido ou removido por técnico autorizado da Beltrack, conforme agendamento realizado com nossa equipe.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg radar-mask opacity-60 pointer-events-none" />
        <div className="absolute -top-48 -right-48 w-160 h-160 rounded-full bg-brand-green-soft blur-3xl opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl container-px">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hairline text-xs font-medium text-ink-muted">
              <FileText className="size-3.5" />
              Informações legais
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-balance">
              Termos de Uso
            </h1>
            <p className="mt-4 text-lg text-ink-muted max-w-xl leading-relaxed">
              Informações importantes sobre a utilização dos serviços e da
              plataforma Beltrack.
            </p>
            <p className="mt-3 text-sm text-ink-muted/70">
              Última atualização: 21 de maio de 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">
                  Conteúdo
                </p>
                <nav className="space-y-1" aria-label="Índice dos termos">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-ink-muted hover:text-primary transition-colors py-1"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="max-w-3xl space-y-16">
                {sections.map((s) => (
                  <section key={s.id} id={s.id}>
                    <h2 className="text-2xl font-bold text-ink">{s.title}</h2>
                    <div className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {s.content}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-surface-muted">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <HelpCircle className="size-5 text-brand-green" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-green">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-balance">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-ink-muted">
              Dúvidas comuns sobre nossos serviços e termos de uso.
            </p>

            <div className="mt-10 space-y-3">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl bg-white hairline overflow-hidden transition-shadow hover:shadow-sm"
                >
                  <summary className="flex items-center justify-between px-6 py-5 text-sm font-semibold text-ink cursor-pointer list-none">
                    {item.q}
                    <span className="ml-4 text-brand-green transition-transform duration-200 group-open:rotate-45">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="8" y1="2" x2="8" y2="14" />
                        <line x1="2" y1="8" x2="14" y2="8" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-ink-muted leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl container-px">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-balance">
              Ficou com alguma dúvida?
            </h2>
            <p className="mt-4 text-ink-muted max-w-lg mx-auto">
              Nossa equipe está disponível para esclarecer qualquer questão
              sobre estes Termos de Uso ou sobre nossos serviços.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={waLink(
                  "Olá, tenho uma dúvida sobre os Termos de Uso da Beltrack.",
                )}
                variant="green"
              >
                Falar no WhatsApp
                <ArrowUpRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

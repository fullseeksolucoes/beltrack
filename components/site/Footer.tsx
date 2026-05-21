import Logo from "./Logo";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-blue">
      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo variant="footer" />
            <p className="mt-5 text-sm text-white/60 max-w-sm leading-relaxed">
              Rastreador veicular com tecnologia brasileira, monitoramento em
              tempo real e atendimento humano 24 horas por dia.
            </p>
          </div>

          <FooterNav />
          <FooterContact />
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <div className="leading-relaxed">
            &copy; {new Date().getFullYear()} Beltrack Monitoramento Veicular.
            Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/termos"
              className="text-white/50 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <span className="text-white/20">·</span>
            <span>Desenvolvido por</span>
            <a
              href="https://www.fullseek.com.br/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white/70 hover:text-brand-green transition-colors"
            >
              FullSeek
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

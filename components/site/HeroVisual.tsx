import { ShieldCheck, MapPin, Activity } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative aspect-5/5 sm:aspect-6/5 w-full">
      <div className="absolute inset-0 rounded-[28px] bg-white hairline shadow-[0_30px_80px_-40px_rgba(19,58,96,0.35)] overflow-hidden">
        <div className="absolute inset-0 bg-surface-muted">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="dots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="#cfd6df" />
              </pattern>
            </defs>
            <rect width="600" height="600" fill="url(#dots)" />
            <path
              d="M0,420 C140,380 220,440 320,400 S520,300 600,330"
              stroke="#dfe5ec"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M-20,180 C120,220 200,150 320,200 S520,260 620,210"
              stroke="#dfe5ec"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M180,-20 C220,140 160,260 240,360 S320,540 280,620"
              stroke="#dfe5ec"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M60,460 C160,420 220,470 300,410 S470,330 540,260"
              stroke="#133a60"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 8"
              className="animate-dash"
            />
            <circle cx="60" cy="460" r="6" fill="#133a60" />
            <circle
              cx="60"
              cy="460"
              r="11"
              fill="none"
              stroke="#133a60"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
            <circle cx="540" cy="260" r="6" fill="#61a636" />
          </svg>

          <div className="absolute left-[58%] top-[44%] -translate-x-1/2 -translate-y-1/2 w-44 h-44">
            <div className="absolute inset-0 rounded-full border border-brand-green/30" />
            <div className="absolute inset-4 rounded-full border border-brand-green/25" />
            <div className="absolute inset-10 rounded-full border border-brand-green/20" />
            <div
              className="absolute inset-0 rounded-full animate-radar"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(97,166,54,0.35), rgba(97,166,54,0) 35%)",
              }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-green shadow-[0_0_0_6px_rgba(97,166,54,0.18)]" />
          </div>
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur hairline px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-green animate-blink" />
            <span className="text-[11px] font-semibold tracking-wide text-primary uppercase">
              Em rota
            </span>
            <span className="text-[11px] text-ink-muted">· ID #BTK-4821</span>
          </div>
          <span className="text-[11px] font-mono text-ink-muted">
            -23.5505, -46.6333
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white hairline p-4 shadow-sm flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-brand-green-soft flex items-center justify-center">
            <MapPin className="size-5 text-brand-green" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-ink truncate">
              Volkswagen Polo Track
            </div>
            <div className="text-xs text-ink-muted">
              Av. Prefeito Vitor Fantini, 139 · Sabará / MG
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] text-ink-muted">Velocidade</div>
            <div className="text-sm font-semibold text-primary">62 km/h</div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute -left-4 top-12 items-center gap-2 rounded-full bg-white hairline px-3 py-2 shadow-sm animate-float">
        <ShieldCheck className="size-4 text-brand-green" />
        <span className="text-xs font-medium text-ink">
          Bloqueio remoto disponível
        </span>
      </div>
      <div className="hidden sm:flex absolute -right-3 bottom-24 items-center gap-2 rounded-full bg-primary text-white px-3 py-2 shadow-[0_10px_30px_-12px_rgba(19,58,96,0.6)]">
        <Activity className="size-4 text-brand-green" />
        <span className="text-xs font-medium">Sinal estável</span>
      </div>
    </div>
  );
}

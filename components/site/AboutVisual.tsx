const miniStats = [
  { k: "Ativos", v: "284" },
  { k: "Em rota", v: "147" },
  { k: "Alertas", v: "02" },
];

export default function AboutVisual() {
  return (
    <div className="relative aspect-5/6 sm:aspect-6/5 lg:aspect-5/6 rounded-[28px] overflow-hidden hairline bg-surface-muted">
      <div className="absolute inset-0 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-blink" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Rastreamento em tempo real
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {miniStats.map((s) => (
            <div key={s.k} className="rounded-2xl bg-white hairline p-4">
              <div className="text-[10px] uppercase tracking-wider text-ink-muted">
                {s.k}
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-primary">
                {s.v}
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 rounded-2xl bg-white hairline p-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-ink">
              Tráfego em tempo real
            </div>
            <div className="text-[10px] text-ink-muted">Últimas 24h</div>
          </div>
          <svg
            className="absolute inset-x-0 bottom-0 w-full h-3/4"
            viewBox="0 0 400 160"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gf" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#61a636" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#61a636" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,120 C40,110 60,80 100,90 S160,140 200,110 260,40 300,60 360,110 400,80 L400,160 L0,160 Z"
              fill="url(#gf)"
            />
            <path
              d="M0,120 C40,110 60,80 100,90 S160,140 200,110 260,40 300,60 360,110 400,80"
              stroke="#133a60"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="rounded-2xl bg-primary text-white p-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-green font-bold text-sm">
            !
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold">Alerta · BTK-2271</div>
            <div className="text-[11px] text-white/70 truncate">
              Última atualização do veículo em Rod. Anhanguera, km 32
            </div>
          </div>
          <span className="text-[10px] font-mono text-white/70">há 12s</span>
        </div>
      </div>
    </div>
  );
}

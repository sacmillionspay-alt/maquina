import { IconCheck } from '../../components/Icons'

const beneficios = [
  {
    title: 'Processo 100% online',
    desc: 'Do pedido à aprovação sem sair de casa. Simples e sem burocracia.',
    icon: '🖥️',
  },
  {
    title: 'Equipamento novo com garantia',
    desc: 'Maquininha zero-quilômetro entregue na sua porta com garantia total.',
    icon: '📦',
  },
  {
    title: 'Liberação rápida',
    desc: 'Análise ágil e ativação em tempo recorde para você vender logo.',
    icon: '⚡',
  },
  {
    title: 'Suporte dedicado',
    desc: 'Time especializado disponível para te ajudar quando precisar.',
    icon: '🎧',
  },
]

export function PorQue() {
  return (
    <section style={{ background: '#0C0E0B', color: '#fff', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes porqueFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }

        .pq-item {
          display: flex; align-items: center; gap: 18px;
          padding: 20px 22px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(12,16,11,0.8);
          box-shadow: 0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .pq-item::before {
          content: '';
          position: absolute; left: 0; top: 10%; bottom: 10%;
          width: 2.5px; border-radius: 999px;
          background: linear-gradient(to bottom, transparent, #07D141, transparent);
          opacity: 0;
          transition: opacity 0.4s, top 0.4s, bottom 0.4s;
        }
        .pq-item::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(110deg, rgba(7,209,65,0.05) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
          border-radius: 20px;
        }
        .pq-item:hover {
          border-color: rgba(7,209,65,0.2);
          transform: translateX(8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(7,209,65,0.08), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .pq-item:hover::before { opacity: 1; top: 5%; bottom: 5%; }
        .pq-item:hover::after { opacity: 1; }
        .pq-item:hover .pq-icon-wrap {
          background: rgba(7,209,65,0.15) !important;
          border-color: rgba(7,209,65,0.4) !important;
          box-shadow: 0 0 20px rgba(7,209,65,0.15) !important;
          transform: scale(1.1) rotate(-4deg);
        }
        .pq-item:hover .pq-item-title { color: #fff !important; }
        .pq-item:hover .pq-item-desc { color: rgba(255,255,255,0.65) !important; }

        .pq-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #07D141; color: #080e09;
          font-weight: 900; font-size: 15px;
          padding: 16px 32px; border-radius: 16px;
          text-decoration: none; letter-spacing: -0.01em;
          box-shadow: 0 8px 28px rgba(7,209,65,0.35);
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .pq-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.25s;
        }
        .pq-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(7,209,65,0.45); background: #0fe84a; }
        .pq-btn:hover::after { opacity: 1; }
        .pq-btn:active { transform: translateY(0); }

        .pq-img-wrap {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 3/4;
        }
        .pq-img-wrap::before {
          content: '';
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to top, rgba(8,14,9,0.7) 0%, transparent 50%);
        }
        .pq-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s ease;
        }
        .pq-img-wrap:hover img { transform: scale(1.03); }

        .pq-stat {
          position: absolute; z-index: 2;
          background: rgba(7,13,9,0.7);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(7,209,65,0.2);
          border-radius: 14px;
          padding: 12px 16px;
        }

        @media (max-width: 900px) {
          .pq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .pq-img-col { order: 0 !important; display: block !important; }
          .pq-grid > div:first-child { order: 1 !important; }
          .pq-img-wrap {
            aspect-ratio: unset !important;
            height: auto !important;
            max-height: unset !important;
            border-radius: 20px !important;
          }
          .pq-img-wrap img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
            object-position: center center !important;
          }
          .pq-stat { display: none !important; }
          .pq-btn { display: flex !important; justify-content: center !important; text-align: center !important; }
        }
      `}</style>

      {/* Glow de fundo */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(7,209,65,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 32px' }}>
        <div className="pq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'center' }}>

          {/* ── Coluna esquerda — texto ── */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(7,209,65,0.08)', border: '1px solid rgba(7,209,65,0.2)', borderRadius: 999, padding: '6px 14px', marginBottom: 24 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#07D141', boxShadow: '0 0 8px #07D141' }} />
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#07D141' }}>Por que a Millionspay?</span>
            </div>

            {/* Headline */}
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 16 }}>
              Simples de pedir,{' '}
              <span style={{ color: '#07D141' }}>poderosa</span>{' '}
              para vender
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, lineHeight: 1.65, marginBottom: 40, maxWidth: 460 }}>
              Somos especialistas em maquininha. Taxas competitivas, suporte dedicado e processo simples do início ao fim.
            </p>

            {/* Benefícios */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 44 }}>
              {beneficios.map((b) => (
                <div key={b.title} className="pq-item">
                  <div
                    className="pq-icon-wrap"
                    style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      background: 'rgba(7,209,65,0.08)',
                      border: '1px solid rgba(7,209,65,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18,
                      transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                      <span className="pq-item-title" style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', transition: 'color 0.3s' }}>{b.title}</span>
                      <IconCheck style={{ width: 14, height: 14, color: '#07D141', flexShrink: 0 }} />
                    </div>
                    <p className="pq-item-desc" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5, transition: 'color 0.3s' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#pedir" className="pq-btn">
              Solicitar maquininha
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* ── Coluna direita — foto ── */}
          <div className="pq-img-col" style={{ position: 'relative' }}>

            {/* Foto principal */}
            <div className="pq-img-wrap" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <img src="/mulhermillion.jpeg" alt="Millionspay" />
            </div>

            {/* Stat flutuante — canto superior esquerdo */}
            <div className="pq-stat" style={{ top: 24, left: -28 }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#07D141', lineHeight: 1 }}>+5k</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, marginTop: 2, whiteSpace: 'nowrap' }}>lojistas ativos</div>
            </div>

            {/* Stat flutuante — canto inferior direito */}
            <div className="pq-stat" style={{ bottom: 40, right: -20 }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: '#07D141', lineHeight: 1 }}>0,75%</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600, marginTop: 2, whiteSpace: 'nowrap' }}>no débito</div>
            </div>

            {/* Linha decorativa verde */}
            <div style={{ position: 'absolute', top: '15%', right: -16, width: 3, height: '40%', background: 'linear-gradient(to bottom, transparent, #07D141, transparent)', borderRadius: 999 }} />
          </div>

        </div>
      </div>
    </section>
  )
}
import { BENEFICIOS } from '../../constants'

export function Beneficios() {
  return (
    <section id="beneficios" className="scroll-mt-20" style={{ background: '#f8faf9', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes benFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes benGlow { 0%,100% { opacity:0.5; } 50% { opacity:1; } }

        .ben-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid var(--border, #e5e7eb);
          padding: 24px;
          display: flex; flex-direction: column;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .ben-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .ben-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(7,209,65,0.15) 0%, rgba(7,209,65,0.05) 100%);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px; flex-shrink: 0;
        }

        .ben-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #0d3320; color: #fff;
          font-weight: 900; font-size: 15px;
          padding: 18px 40px; border-radius: 18px;
          text-decoration: none; letter-spacing: -0.01em;
          position: relative; overflow: hidden;
          transition: all 1s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 8px 28px rgba(13,51,32,0.25);
        }
        .ben-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #07D141 0%, #0fe84a 100%);
          opacity: 0;
          transition: opacity 1s ease;
        }
        .ben-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(7,209,65,0.35);
          color: #0a2010;
        }
        .ben-btn:hover::before { opacity: 1; }
        .ben-btn span, .ben-btn svg { position: relative; z-index: 1; }
        .ben-btn:active { transform: translateY(0); }
      `}</style>

      {/* Background decorations */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(7,209,65,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(13,51,32,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(7,209,65,0.08)', border: '1px solid rgba(7,209,65,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#07D141', boxShadow: '0 0 8px #07D141', animation: 'benGlow 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#07D141' }}>O que está incluído</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, color: '#0d3320', letterSpacing: '-0.025em', lineHeight: 1.08, margin: '0 0 14px' }}>
            Benefícios da sua maquininha
          </h2>
          <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 380, margin: '0 auto', lineHeight: 1.6 }}>
            Tudo para vender mais e gerir o seu negócio com facilidade.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          className="ben-grid">
          <style>{`
            @media (max-width: 900px) { .ben-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 500px) { .ben-grid { grid-template-columns: 1fr !important; } }
          `}</style>
          {BENEFICIOS.map((b, i) => (
            <div key={i} className="ben-card">
              <div className="ben-icon-wrap">
                <b.Icon style={{ width: 24, height: 24, color: '#07D141' }} />
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 15, color: '#0d3320', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{b.titulo}</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="#pedir" className="ben-btn">
            <span>Quero adquirir minha maquininha</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'relative', zIndex: 1 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>Sem aluguel · Sem mensalidade · Processo 100% online</p>
        </div>

      </div>
    </section>
  )
}
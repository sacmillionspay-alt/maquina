import { IconCheckCircle } from '../../components/Icons'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-0 bg-[#070d09] text-white overflow-hidden">
      <style>{`
        @keyframes heroFadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes heroPulse { 0%,100% { opacity:0.6; transform:scale(1); } 50% { opacity:1; transform:scale(1.04); } }
        @keyframes heroShimmer { from { background-position: -200% center; } to { background-position: 200% center; } }

        .hero-h1  { animation: heroFadeUp 0.7s 0.10s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-sub { animation: heroFadeUp 0.7s 0.25s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-rates { animation: heroFadeUp 0.7s 0.38s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-cta { animation: heroFadeUp 0.7s 0.50s cubic-bezier(0.22,1,0.36,1) both; }

        .rate-card {
          transition: all 0.22s ease;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.3) !important;
          backdrop-filter: blur(16px);
        }
        .rate-card:hover {
          border-color: rgba(7,209,65,0.5);
          background: rgba(7,209,65,0.08) !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(7,209,65,0.15);
        }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #07D141; color: #070d09;
          font-weight: 900; font-size: 15px;
          padding: 16px 32px; border-radius: 16px;
          text-decoration: none; letter-spacing: -0.01em;
          box-shadow: 0 0 0 0 rgba(7,209,65,0.5);
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .btn-primary::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.25s;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(7,209,65,0.45);
          background: #0fe84a;
        }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:active { transform: translateY(0); }

        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 600;
          text-decoration: none;
          padding: 16px 24px; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);
          transition: all 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.28);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(7,209,65,0.25);
        }
        .btn-secondary:active { transform: translateY(0); }

        .glow-orb { animation: heroPulse 6s ease-in-out infinite; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}>
          <source src="/video-maquina.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(7,13,9,0.70) 0%, rgba(7,13,9,0.50) 45%, rgba(7,13,9,0.30) 100%)' }} />
        <div className="glow-orb absolute top-0 left-0 w-[600px] h-[500px] rounded-full" style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(7,209,65,0.12) 0%, transparent 65%)' }} />
      </div>

      {/* ── Conteúdo ── */}
      <div className="relative" style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px 120px 20px' }}>

        {/* Eyebrow pill */}
        <div className="hero-h1 inline-flex items-center gap-2 mb-7" style={{ background: 'rgba(7,209,65,0.08)', border: '1px solid rgba(7,209,65,0.22)', borderRadius: 999, padding: '7px 16px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#07D141', boxShadow: '0 0 10px #07D141', flexShrink: 0 }} />
          <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#07D141' }}>
            As melhores taxas para o seu negócio
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-h1" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 900, lineHeight: 1.04, marginBottom: 22, letterSpacing: '-0.03em', maxWidth: 600 }}>
          Adquira sua<br />
          maquininha{' '}
          <span style={{
            background: 'linear-gradient(90deg, #07D141 0%, #4ade80 40%, #07D141 60%, #22c55e 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'heroShimmer 3s linear infinite',
          }}>Millionspay</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.88)' }}>e venda mais</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 440, marginBottom: 36, lineHeight: 1.65 }}>
          Pix ilimitado, taxas justas e liberdade garantida.{" "}
          <span style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 600 }}>Sem aluguel nem mensalidade.</span>
        </p>

        {/* CTAs */}
        <div className="hero-cta" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href="#pedir" className="btn-primary">
            Solicitar minha maquininha
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#adquira" className="btn-secondary">
            Ver modelos
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(16px)', padding: '13px 24px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 28px' }}>
          {['PIX ILIMITADO', 'SEM ALUGUEL', 'ANTECIPE SEM BUROCRACIA', 'ATENDIMENTO'].map(item => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}>
              <IconCheckCircle className="w-3.5 h-3.5" style={{ color: '#07D141', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

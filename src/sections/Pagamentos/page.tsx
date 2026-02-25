export function Pagamentos() {

  const bandeiras = [
    {
      nome: 'Visa',
      svg: <svg viewBox="0 0 780 250" xmlns="http://www.w3.org/2000/svg" width="64" height="21">
        <path d="M293 170.7L316.5 79h37.8L330 170.7H293zm161.2-89.3c-7.5-2.8-19.2-5.8-33.8-5.8-37.3 0-63.5 18.8-63.7 45.7-.2 19.9 18.8 31 33.1 37.6 14.7 6.8 19.6 11.1 19.6 17.2-.1 9.3-11.8 13.5-22.6 13.5-15.1 0-23.2-2.1-35.6-7.2l-4.9-2.2-5.3 31c8.8 3.9 25 7.3 41.8 7.5 39.4 0 65-18.5 65.3-47.1.1-15.7-9.9-27.6-31.5-37.4-13.1-6.4-21.2-10.6-21.1-17 0-5.7 6.8-11.8 21.5-11.8 12.3-.2 21.2 2.5 28.1 5.3l3.4 1.6 5.7-29.9zm96.7-1.1h-29.1c-9 0-15.7 2.5-19.7 11.6L440.4 170.7h39.4s6.4-16.9 7.9-20.6c4.3 0 42.5.1 47.9.1 1.1 4.8 4.5 20.5 4.5 20.5H575L535.9 80.3zm-46.1 55.9c3.1-7.9 14.9-38.3 14.9-38.3-.2.3 3.1-8 5-13.2l2.5 11.9s7.2 32.7 8.7 39.6h-31.1zM262.1 80.3L225.4 145 221.6 126c-6.8-21.8-27.9-45.4-51.5-57.2l33.8 101.9H243l60.1-90.4h-41z" fill="#1A1F71"/>
        <path d="M192.8 80.3H131l-.5 2.9c48.1 11.6 79.9 39.7 93.1 73.4L210 92.1c-2.3-9-8.8-11.5-17.2-11.8z" fill="#F9A533"/>
      </svg>,
    },
    {
      nome: 'Mastercard',
      svg: <svg viewBox="0 0 131.39 86.9" xmlns="http://www.w3.org/2000/svg" width="52" height="34">
        <circle cx="47.19" cy="43.45" r="30" fill="#EB001B"/>
        <circle cx="84.2" cy="43.45" r="30" fill="#F79E1B"/>
        <path d="M65.7 19.74a30 30 0 0 1 0 47.42 30 30 0 0 1 0-47.42z" fill="#FF5F00"/>
      </svg>,
    },
    {
      nome: 'Elo',
      svg: <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" width="64" height="27">
        <text x="4" y="42" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="46" fill="#FFD100">elo</text>
      </svg>,
    },
    {
      nome: 'PIX',
      svg: <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        {/* top-left diamond */}
        <path d="M14 32 L22 24 L30 32 L22 40 Z" fill="#32BCAD"/>
        {/* top-right diamond */}
        <path d="M50 32 L42 24 L34 32 L42 40 Z" fill="#32BCAD"/>
        {/* top center diamond */}
        <path d="M32 14 L40 22 L32 30 L24 22 Z" fill="#32BCAD"/>
        {/* bottom center diamond */}
        <path d="M32 50 L40 42 L32 34 L24 42 Z" fill="#32BCAD"/>
      </svg>,
    },
    {
      nome: 'Amex',
      svg: <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" width="72" height="18">
        <text x="4" y="38" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="38" fill="#2E77BC" letterSpacing="4">AMEX</text>
      </svg>,
    },
    {
      nome: 'Hipercard',
      svg: <svg viewBox="0 0 280 50" xmlns="http://www.w3.org/2000/svg" width="80" height="18">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="36" fill="#B22222">Hipercard</text>
      </svg>,
    },
    {
      nome: 'Débito',
      svg: <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="32">
        <rect x="1" y="1" width="42" height="30" rx="4" stroke="#374151" strokeWidth="2" fill="#f8fafc"/>
        <rect x="1" y="9" width="42" height="8" fill="#374151" opacity="0.12"/>
        <rect x="5" y="22" width="14" height="3" rx="1.5" fill="#374151" opacity="0.3"/>
        <rect x="23" y="22" width="8" height="3" rx="1.5" fill="#07D141"/>
      </svg>,
    },
    {
      nome: 'Crédito',
      svg: <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="32">
        <rect x="1" y="1" width="42" height="30" rx="4" fill="#1a1a2e"/>
        <rect x="1" y="10" width="42" height="8" fill="white" opacity="0.08"/>
        <circle cx="28" cy="23" r="5" fill="#EB001B" opacity="0.9"/>
        <circle cx="33" cy="23" r="5" fill="#F79E1B" opacity="0.9"/>
        <rect x="5" y="6" width="10" height="7" rx="1" fill="#FFD700" opacity="0.8"/>
      </svg>,
    },
    {
      nome: 'Alelo',
      svg: <svg viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg" width="64" height="20">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="36" fill="#E8420F">Alelo</text>
      </svg>,
    },
    {
      nome: 'Sodexo',
      svg: <svg viewBox="0 0 210 50" xmlns="http://www.w3.org/2000/svg" width="70" height="17">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="36" fill="#0061A0">Sodexo</text>
      </svg>,
    },
    {
      nome: 'VR',
      svg: <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg" width="48" height="30">
        <text x="2" y="42" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="44" fill="#E4000F">VR</text>
      </svg>,
    },
    {
      nome: 'Ticket',
      svg: <svg viewBox="0 0 190 50" xmlns="http://www.w3.org/2000/svg" width="64" height="17">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="36" fill="#FF6900">Ticket</text>
      </svg>,
    },
    {
      nome: 'Cabal',
      svg: <svg viewBox="0 0 170 50" xmlns="http://www.w3.org/2000/svg" width="56" height="17">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="36" fill="#00529B">Cabal</text>
      </svg>,
    },
    {
      nome: 'Diners',
      svg: <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" width="64" height="16">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="36" fill="#004A97">Diners</text>
      </svg>,
    },
    {
      nome: 'Link',
      svg: <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
        <path d="M16 24l-2 2a5 5 0 01-7-7l5-5a5 5 0 017 0l1 1" stroke="#07D141" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 16l2-2a5 5 0 017 7l-5 5a5 5 0 01-7 0l-1-1" stroke="#07D141" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
    },
    {
      nome: 'Voucher',
      svg: <svg viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="32">
        <rect x="1" y="1" width="42" height="30" rx="4" stroke="#6366f1" strokeWidth="2" fill="#f5f3ff"/>
        <path d="M16 1v30" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5"/>
        <circle cx="9" cy="16" r="3" fill="#6366f1" opacity="0.4"/>
        <rect x="20" y="12" width="18" height="3" rx="1.5" fill="#6366f1" opacity="0.6"/>
        <rect x="20" y="18" width="12" height="3" rx="1.5" fill="#6366f1" opacity="0.4"/>
      </svg>,
    },
    {
      nome: 'Hiper',
      svg: <svg viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg" width="52" height="18">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="36" fill="#E4000F">Hiper</text>
      </svg>,
    },
    {
      nome: 'Ben',
      svg: <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" width="44" height="22">
        <text x="2" y="40" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="42" fill="#FF6900">Ben</text>
      </svg>,
    },
    {
      nome: 'Banescard',
      svg: <svg viewBox="0 0 280 50" xmlns="http://www.w3.org/2000/svg" width="80" height="15">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#005CA9">Banescard</text>
      </svg>,
    },
    {
      nome: 'GoodCard',
      svg: <svg viewBox="0 0 260 50" xmlns="http://www.w3.org/2000/svg" width="74" height="15">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#00A651">GoodCard</text>
      </svg>,
    },
    {
      nome: 'Verocard',
      svg: <svg viewBox="0 0 240 50" xmlns="http://www.w3.org/2000/svg" width="72" height="15">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#0066CC">Verocard</text>
      </svg>,
    },
    {
      nome: 'Credz',
      svg: <svg viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg" width="54" height="17">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#FF0066">Credz</text>
      </svg>,
    },
    {
      nome: 'BanriCard',
      svg: <svg viewBox="0 0 270 50" xmlns="http://www.w3.org/2000/svg" width="76" height="15">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#003F8A">BanriCard</text>
      </svg>,
    },
    {
      nome: 'Sicredi',
      svg: <svg viewBox="0 0 210 50" xmlns="http://www.w3.org/2000/svg" width="68" height="16">
        <text x="2" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="34" fill="#009B3A">Sicredi</text>
      </svg>,
    },
  ]

  const linha1 = bandeiras.slice(0, 12)
  const linha2 = bandeiras.slice(12)

  const Item = ({ b }: { b: typeof bandeiras[0] }) => (
    <div style={{
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
      padding: '0 28px',
      opacity: 0.7,
    }}>
      {b.svg}
    </div>
  )

  return (
    <section id="pagamentos" className="scroll-mt-20" style={{ background: '#fff', padding: '96px 0', overflow: 'hidden' }}>
      <style>{`
        @keyframes scrollRight {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollLeft {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes pagGlow { 0%,100% { opacity:0.5; } 50% { opacity:1; } }

        .scroll-right {
          display: flex; align-items: center;
          animation: scrollRight 35s linear infinite;
          width: max-content;
          will-change: transform;
        }
        .scroll-left {
          display: flex; align-items: center;
          animation: scrollLeft 28s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .scroll-wrap {
          position: relative;
          overflow: hidden;
        }
        .scroll-wrap::before, .scroll-wrap::after {
          content: '';
          position: absolute; top: 0; bottom: 0; width: 160px; z-index: 2; pointer-events: none;
        }
        .scroll-wrap::before { left: 0; background: linear-gradient(to right, #fff 0%, transparent 100%); }
        .scroll-wrap::after  { right: 0; background: linear-gradient(to left, #fff 0%, transparent 100%); }

        .pay-item-sep {
          width: 1px; height: 20px; background: #e5e7eb; flex-shrink: 0;
        }

        .pay-cta {
          display: inline-flex; align-items: center; gap: 8px;
          color: #07D141; font-weight: 800; font-size: 15px;
          text-decoration: none;
          padding: 12px 28px; border-radius: 14px;
          border: 2px solid rgba(7,209,65,0.25);
          background: rgba(7,209,65,0.04);
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .pay-cta:hover {
          background: #07D141; color: #0a2010;
          border-color: #07D141;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(7,209,65,0.3);
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(7,209,65,0.08)', border: '1px solid rgba(7,209,65,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 20 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#07D141', boxShadow: '0 0 8px #07D141', animation: 'pagGlow 2s ease-in-out infinite' }} />
          <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#07D141' }}>Aceite de tudo</span>
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, color: '#0d3320', letterSpacing: '-0.025em', lineHeight: 1.08, margin: '0 0 12px' }}>
          Todas as formas de pagamento
        </h2>
        <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>
          Mais de 80 bandeiras. Nunca perca uma venda.
        </p>
      </div>

      {/* Linha 1 */}
      <div className="scroll-wrap" style={{ marginBottom: 32, borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '16px 0' }}>
        <div className="scroll-right">
          {[...linha1, ...linha1].map((b, i) => (
            <span key={`r1-${i}`} style={{ display: 'flex', alignItems: 'center' }}>
              <Item b={b} />
              <span className="pay-item-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* Linha 2 */}
      <div className="scroll-wrap" style={{ borderBottom: '1px solid #f1f5f9', padding: '16px 0' }}>
        <div className="scroll-left">
          {[...linha2, ...linha2].map((b, i) => (
            <span key={`r2-${i}`} style={{ display: 'flex', alignItems: 'center' }}>
              <Item b={b} />
              <span className="pay-item-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <a href="#pedir" className="pay-cta">
          Solicitar maquininha
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <p style={{ marginTop: 12, fontSize: 12, color: '#9ca3af', fontWeight: 500 }}>+80 bandeiras aceitas · Débito, Crédito, PIX e muito mais</p>
      </div>

    </section>
  )
}
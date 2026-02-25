import { Logo } from '../../components/Logo'

interface HeaderProps {
  menuOpen: boolean
  onMenuToggle: () => void
}

const WaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.85L.057 23.928a.5.5 0 00.61.61l6.094-1.47A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.903 9.903 0 01-5.032-1.371l-.36-.214-3.733.9.918-3.636-.235-.374A9.938 9.938 0 012.062 12C2.062 6.508 6.508 2.062 12 2.062S21.938 6.508 21.938 12 17.492 21.938 12 21.938z"/>
  </svg>
)

export function Header({ menuOpen, onMenuToggle }: HeaderProps) {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(7,13,9,0.9)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <style>{`
        /* Nav links */
        .nav-link {
          position: relative;
          font-size: 13px; font-weight: 600;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.9s ease;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: #07D141;
          border-radius: 999px;
          transition: width 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }

        /* Support button */
        .btn-support {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.75);
          padding: 9px 16px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .btn-support:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.2);
          color: #fff;
          transform: translateY(-1px);
        }
        .btn-support:active { transform: translateY(0); }

        /* CTA button */
        .btn-cta {
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800;
          color: #070d09;
          padding: 11px 22px; border-radius: 999px;
          background: #07D141;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(7,209,65,0.3);
          transition: all 0.2s;
          white-space: nowrap;
          letter-spacing: -0.01em;
          position: relative; overflow: hidden;
        }
        .btn-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.2s;
        }
        .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(7,209,65,0.45); background: #0fe84a; }
        .btn-cta:hover::before { opacity: 1; }
        .btn-cta:active { transform: translateY(0); }

        /* Hamburger — só visível no mobile */
        .hamburger-btn {
          display: none;
          flex-direction: column; justify-content: center; align-items: center;
          gap: 5px; width: 40px; height: 40px; border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer; padding: 0;
          transition: background 0.2s;
        }
        .hamburger-btn:hover { background: rgba(255,255,255,0.1); }
        .hamburger-line {
          width: 18px; height: 1.5px;
          background: rgba(255,255,255,0.85);
          border-radius: 999px;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          transform-origin: center;
        }
        .hamburger-btn.open .hamburger-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger-btn.open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger-btn.open .hamburger-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile menu links */
        .mobile-link {
          display: flex; align-items: center; gap: 12px;
          color: rgba(255,255,255,0.7);
          font-size: 15px; font-weight: 600;
          padding: 14px 4px;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s, padding-left 0.25s;
        }
        .mobile-link:hover { color: #07D141; padding-left: 8px; }
        .mobile-link:last-of-type { border-bottom: none; }
        .mobile-icon {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
          transition: background 0.2s;
        }
        .mobile-link:hover .mobile-icon { background: rgba(7,209,65,0.12); }

        @keyframes menuDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        .mobile-menu { animation: menuDown 0.25s cubic-bezier(0.22,1,0.36,1) both; }

        /* ── Breakpoints ── */

        /* Mobile (≤ 767px): mostrar hambúrguer, esconder nav e suporte */
        @media (max-width: 767px) {
          .hamburger-btn { display: flex; }
          .desktop-nav { display: none !important; }
          .btn-support-desktop { display: none !important; }
          .btn-cta-full { display: none !important; }
          .btn-cta-mobile { display: inline-flex !important; }
          .header-logo { transform: scale(1.05); }
        }

        /* Tablet / Desktop (≥ 768px): esconder hambúrguer e menu mobile */
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
          .btn-cta-mobile { display: none !important; }
          .btn-cta-full { display: inline-flex; }
        }
      `}</style>

      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo — ligeiramente maior */}
          <div className="header-logo" style={{ transition: 'transform 0.2s' }}>
            <Logo variant="dark" />
          </div>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <a href="#adquira" className="nav-link">Maquininha</a>
            <a href="#beneficios" className="nav-link">Benefícios</a>
            <a href="#pagamentos" className="nav-link">Pagamentos</a>
            <a href="#pedir" className="nav-link">Solicitar</a>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

            {/* Suporte — desktop only */}
            <a
              href="https://wa.me/5511946780757?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20pagamento%20da%20Millionspay."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-support btn-support-desktop"
            >
              <WaIcon />
              Fale com suporte
            </a>

            {/* CTA desktop */}
            <a href="#pedir" className="btn-cta btn-cta-full">
              Quero minha maquininha
            </a>

            {/* CTA mobile — texto curto */}
            <a href="#pedir" className="btn-cta btn-cta-mobile" style={{ padding: '10px 16px', display: 'none' }}>
              Solicitar
            </a>

            {/* Hambúrguer — só mobile */}
            <button
              type="button"
              onClick={onMenuToggle}
              className={`hamburger-btn${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mobile-menu" style={{ paddingBottom: 22, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 6 }}>
            <a href="#adquira" className="mobile-link" onClick={onMenuToggle}>
              <span className="mobile-icon">💳</span><span>Maquininha</span>
            </a>
            <a href="#beneficios" className="mobile-link" onClick={onMenuToggle}>
              <span className="mobile-icon">✨</span><span>Benefícios</span>
            </a>
            <a href="#pagamentos" className="mobile-link" onClick={onMenuToggle}>
              <span className="mobile-icon">💰</span><span>Pagamentos</span>
            </a>
            <a href="#pedir" className="mobile-link" onClick={onMenuToggle}>
              <span className="mobile-icon">📋</span><span>Solicitar</span>
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
              <a
                href="https://wa.me/5511946780757?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20pagamento%20da%20Millionspay."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-support"
                style={{ justifyContent: 'center' }}
              >
                <WaIcon />
                Fale com suporte
              </a>
              <a href="#pedir" className="btn-cta" onClick={onMenuToggle} style={{ justifyContent: 'center' }}>
                Quero minha maquininha
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
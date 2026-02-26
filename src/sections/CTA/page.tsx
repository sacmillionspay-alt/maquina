export function CTA() {
  return (
    <section className="cta-section">
      {/* Background layers */}
      <div className="cta-bg-grid" />
      <div className="cta-glow cta-glow-1" />
      <div className="cta-glow cta-glow-2" />
      <div className="cta-glow cta-glow-3" />



      <div className="cta-container">

        {/* Badge */}
        <div className="cta-badge">
          <span className="badge-dot" />
          Disponível agora
        </div>

        {/* Title */}
        <h2 className="cta-title">
          Pronto para começar
          <br />
          <span className="cta-title-accent">a vender mais?</span>
        </h2>

        <p className="cta-description">
          Adquira sua maquininha Millionspay e comece a receber pagamentos hoje mesmo. Sem burocracia, sem aluguel.
        </p>

        {/* Actions */}
        <div className="cta-actions">
          <a href="#pedir" className="cta-btn-primary">
            <span className="btn-shimmer" />
            <span className="btn-label">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Quero minha maquininha
            </span>
          </a>
        </div>

        {/* Stats row */}
        <div className="cta-stats">
          <div className="cta-stat">
            <span className="stat-value">+10k</span>
            <span className="stat-label">clientes ativos</span>
          </div>
          <div className="cta-stat-div" />
          <div className="cta-stat">
            <span className="stat-value">24h</span>
            <span className="stat-label">suporte</span>
          </div>
          <div className="cta-stat-div" />
          <div className="cta-stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">online e sem fila</span>
          </div>
        </div>

      </div>

      <style>{`
        .cta-section {
          position: relative;
          padding: 120px 24px;
          background: #0C0E0B;
          overflow: hidden;
        }

        /* Grid */
        .cta-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
          background-position: -1px -1px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, black 30%, transparent 100%);
        }

        /* Glows */
        .cta-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
        }
        .cta-glow-1 {
          width: 700px; height: 500px;
          top: -150px; left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(7,209,65,0.14) 0%, transparent 65%);
          animation: ctaFloat1 7s ease-in-out infinite alternate;
        }
        .cta-glow-2 {
          width: 350px; height: 350px;
          bottom: -80px; left: 10%;
          background: radial-gradient(ellipse, rgba(13,51,32,0.5) 0%, transparent 70%);
        }
        .cta-glow-3 {
          width: 300px; height: 300px;
          bottom: -60px; right: 10%;
          background: radial-gradient(ellipse, rgba(7,209,65,0.08) 0%, transparent 70%);
          animation: ctaFloat2 9s ease-in-out infinite alternate;
        }
        @keyframes ctaFloat1 {
          from { transform: translateX(-50%) translateY(0); }
          to   { transform: translateX(-50%) translateY(-24px); }
        }
        @keyframes ctaFloat2 {
          from { transform: translateY(0); }
          to   { transform: translateY(-16px); }
        }

        /* Decorative vertical lines */
        .cta-line {
          position: absolute; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(7,209,65,0.15) 40%, rgba(7,209,65,0.15) 60%, transparent);
          pointer-events: none;
        }
        .cta-line-left  { left: 15%; }
        .cta-line-right { right: 15%; }

        /* Container */
        .cta-container {
          position: relative; z-index: 1;
          max-width: 620px;
          margin: 0 auto;
          text-align: center;
        }

        /* Badge */
        .cta-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(7,209,65,0.08);
          border: 1px solid rgba(7,209,65,0.22);
          color: #07D141;
          font-size: 11px; font-weight: 800;
          letter-spacing: 0.16em; text-transform: uppercase;
          padding: 7px 16px; border-radius: 999px;
          margin-bottom: 28px;
        }
        .badge-dot {
          width: 7px; height: 7px;
          background: #07D141; border-radius: 50%;
          box-shadow: 0 0 10px #07D141;
          animation: ctaPulse 2s ease-in-out infinite;
        }
        @keyframes ctaPulse {
          0%,100% { opacity:1; box-shadow: 0 0 10px #07D141; }
          50%      { opacity:0.5; box-shadow: 0 0 4px #07D141; }
        }

        /* Title */
        .cta-title {
          font-size: clamp(2.2rem, 5.5vw, 3.8rem);
          font-weight: 900;
          color: #f0f5f1;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .cta-title-accent {
          background: linear-gradient(135deg, #07D141 0%, #0fe84a 50%, #07D141 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ctaGradient 4s linear infinite;
        }
        @keyframes ctaGradient {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* Description */
        .cta-description {
          color: rgba(255,255,255,0.45);
          font-size: 1rem; line-height: 1.7;
          max-width: 400px;
          margin: 0 auto 44px;
        }

        /* Actions */
        .cta-actions {
          display: flex; align-items: center;
          justify-content: center; gap: 20px;
          flex-wrap: wrap; margin-bottom: 52px;
        }

        /* Primary button */
        .cta-btn-primary {
          position: relative;
          display: inline-flex; align-items: center;
          background: #07D141;
          color: #050f07;
          font-size: 1rem; font-weight: 900;
          padding: 17px 36px; border-radius: 16px;
          text-decoration: none; overflow: hidden;
          box-shadow: 0 4px 24px rgba(7,209,65,0.4), 0 0 0 1px rgba(7,209,65,0.3);
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease;
          letter-spacing: -0.01em;
        }
        .cta-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 48px rgba(7,209,65,0.5), 0 0 0 1px rgba(7,209,65,0.4);
        }
        .btn-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          transform: translateX(-100%);
          animation: ctaShimmer 3.5s ease-in-out infinite;
        }
        @keyframes ctaShimmer {
          0%      { transform: translateX(-100%); }
          40%,100%{ transform: translateX(200%); }
        }
        .btn-label {
          position: relative;
          display: flex; align-items: center; gap: 10px;
        }

        /* Secondary button */
        .cta-btn-secondary {
          color: rgba(255,255,255,0.4);
          font-size: 0.95rem; font-weight: 600;
          text-decoration: none;
          transition: color 0.4s ease;
          letter-spacing: 0.01em;
        }
        .cta-btn-secondary:hover { color: rgba(255,255,255,0.8); }

        /* Stats */
        .cta-stats {
          display: inline-flex; align-items: center; gap: 0;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 20px 32px;
          gap: 0;
        }
        .cta-stat {
          display: flex; flex-direction: column; align-items: center;
          padding: 0 28px;
        }
        .stat-value {
          font-size: 1.5rem; font-weight: 900;
          color: #07D141; letter-spacing: -0.03em; line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.72rem; font-weight: 600;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase; letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .cta-stat-div {
          width: 1px; height: 36px;
          background: rgba(255,255,255,0.08);
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .cta-section { padding: 72px 20px; }

          .cta-btn-primary { width: 100%; justify-content: center; padding: 15px 24px; }
          .cta-actions { flex-direction: column; width: 100%; }

          /* stats: empilha em coluna no mobile */
          .cta-stats {
            flex-direction: column;
            width: 100%;
            padding: 20px 24px;
            gap: 0;
            border-radius: 16px;
          }
          .cta-stat {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 14px 0;
          }
          .stat-value { font-size: 1.25rem; margin-bottom: 0; }
          .stat-label {
            font-size: 0.72rem;
            white-space: normal;
            text-align: right;
          }
          /* divisória horizontal entre os itens */
          .cta-stat-div {
            width: 100%;
            height: 1px;
            background: rgba(255,255,255,0.08);
          }
        }
      `}</style>
    </section>
  )
}
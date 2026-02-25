import { useState } from 'react'
import { IconCheckCircle } from '../../components/Icons'

const volumes = [
  { value: 'abaixo-15', label: 'Até R$ 15k',      sub: 'por mês' },
  { value: '15-50',     label: 'R$ 15k–50k',      sub: 'por mês' },
  { value: '50-100',    label: 'R$ 50k–100k',     sub: 'por mês' },
  { value: 'acima-100', label: 'Acima de R$ 100k', sub: 'por mês' },
]

const modelos = [
  {
    id: 'p2',
    nome: 'P2',
    nomeCompleto: 'Millionspay P2',
    tag: 'MELHOR ESCOLHA',
    tagStyle: { background: '#07D141', color: '#0a2010' },
    desc: 'Top de linha. Design slim, 4G + Wi-Fi, NFC e bateria que dura o dia todo.',
    preco: '12x R$ 22,90',
    precoObs: 'sem juros',
    img: '/P2.png',
    features: ['4G + Wi-Fi', 'NFC contactless', 'Bateria 8h', 'Impressora térmica'],
    destaque: true,
    bg: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  {
    id: 'a910',
    nome: 'A910',
    nomeCompleto: 'Millionspay A910',
    tag: 'MAIS VENDIDA',
    tagStyle: { background: '#0d3320', color: '#07D141' },
    desc: 'Robusta e versátil. Perfeita para médio e alto volume com total confiabilidade.',
    preco: '12x R$ 19,90',
    precoObs: 'sem juros',
    img: '/A910.png',
    features: ['4G + Wi-Fi', 'Tela touchscreen', 'Bateria 6h', 'Android'],
    destaque: false,
    bg: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
  },
  {
    id: 'x990',
    nome: 'X990',
    nomeCompleto: 'Millionspay X990',
    tag: 'COMPACTA',
    tagStyle: { background: '#0d3320', color: '#07D141' },
    desc: 'Leve e portátil. Para quem precisa de mobilidade sem abrir mão da performance.',
    preco: '12x R$ 17,90',
    precoObs: 'sem juros',
    img: '/x990.png',
    features: ['Wi-Fi', 'Ultra leve', 'Bateria 5h', 'Plug & play'],
    destaque: false,
    bg: 'linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%)',
  },
]

const recomendacoes: Record<string, string> = {
  'abaixo-15': 'x990',
  '15-50':     'a910',
  '50-100':    'p2',
  'acima-100': 'p2',
}

export function Adquira() {
  const [volume, setVolume] = useState('abaixo-15')
  const [hovered, setHovered] = useState<string | null>(null)
  const recId = recomendacoes[volume]

  return (
    <section id="adquira" className="scroll-mt-20" style={{ background: '#F8FAF9', padding: '100px 0 80px', overflow: 'hidden', position: 'relative' }}>
      <style>{`
        /* ── animations ── */
        @keyframes adqUp   { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes adqPop  { from { opacity:0; transform:scale(0.96); }     to { opacity:1; transform:scale(1); }     }
        @keyframes adqGlow { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
        @keyframes adqShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        /* ── volume pills ── */
        .vol-pill {
          position: relative;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          font-size: 13px; font-weight: 700;
          cursor: pointer; text-align: left;
          color: #374151;
          transition: all 1s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        .vol-pill::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(7,209,65,0.08) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.25s;
        }
        .vol-pill:hover { border-color: #07D141; color: #0d3320; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(7,209,65,0.1); }
        .vol-pill:hover::after { opacity: 1; }
        .vol-pill.active {
          background: #0d3320; border-color: #0d3320; color: #fff;
          box-shadow: 0 6px 20px rgba(13,51,32,0.25);
        }
        .vol-pill.active::after { opacity: 0; }

        /* ── product card ── */
        .adq-card {
          position: relative;
          border-radius: 28px;
          border: 1.5px solid #e8eaed;
          background: #fff;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.6s ease,
                      box-shadow 0.6s ease;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .adq-card:hover {
          transform: translateY(-8px);
          border-color: #07D141;
          box-shadow: 0 20px 50px rgba(0,0,0,0.10), 0 0 32px rgba(7,209,65,0.28), 0 0 8px rgba(7,209,65,0.15);
        }
        .adq-card-inner {
          position: relative; z-index: 1;
          background: #fff; border-radius: 26px;
          overflow: hidden; display: flex;
          flex-direction: column; height: 100%;
        }

        /* image area */
        .adq-img-area {
          position: relative; overflow: hidden;
          display: flex; align-items: flex-end; justify-content: center;
          padding: 40px 20px 0; height: 260px;
        }
        .adq-img-area img {
          width: auto;
          height: 220px;
          max-width: 100%;
          object-fit: contain;
          object-position: bottom center;
          position: relative; z-index: 1;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.18));
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
          display: block;
        }
        .adq-card:hover .adq-img-area img { transform: translateY(-10px) scale(1.04); }

        /* tag badge */
        .adq-tag {
          position: absolute; top: 16px; left: 16px; z-index: 2;
          font-size: 9px; font-weight: 900; letter-spacing: 0.12em;
          padding: 5px 10px; border-radius: 999px;
          text-transform: uppercase;
        }

        /* feature chips */
        .feat-chip {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 11px; font-weight: 700;
          padding: 4px 10px; border-radius: 999px;
          background: #f0fdf4; color: #15803d;
          border: 1px solid #bbf7d0;
        }

        /* cta buttons */
        .adq-cta {
          display: block; width: 100%; text-align: center;
          padding: 14px 20px; border-radius: 16px;
          font-weight: 800; font-size: 14px;
          text-decoration: none;
          transition: all 1s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .adq-cta.dark {
          background: #0d3320; color: #fff;
          box-shadow: 0 4px 14px rgba(13,51,32,0.2);
        }
        .adq-cta.dark:hover {
          background: #07D141; color: #0a2010;
          box-shadow: 0 8px 28px rgba(7,209,65,0.3);
          transform: translateY(-2px);
        }
        .adq-cta.green {
          background: #07D141; color: #0a2010;
          box-shadow: 0 4px 20px rgba(7,209,65,0.35);
        }
        .adq-cta.green:hover {
          background: #0fe84a;
          box-shadow: 0 10px 36px rgba(7,209,65,0.5);
          transform: translateY(-2px);
        }
        .adq-cta::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.25s;
        }
        .adq-cta:hover::after { opacity: 1; }

        /* rec label */
        .rec-label {
          animation: adqPop 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }

        /* ── responsive ── */
        @media (max-width: 900px) {
          .adq-cards { grid-template-columns: 1fr 1fr !important; }
          .adq-vol-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .adq-cards { grid-template-columns: 1fr !important; }
          .adq-vol-grid { grid-template-columns: repeat(2,1fr) !important; }
          .adq-bottom-strip { flex-direction: column !important; align-items: center !important; text-align: center !important; padding: 32px 24px !important; }
          .adq-bottom-strip a { width: 100% !important; text-align: center !important; }
          .adq-bottom-strip p { max-width: 100% !important; }
        }
      `}</style>

      {/* subtle bg decoration */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(7,209,65,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(13,51,32,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 60, animation: 'adqUp 0.6s cubic-bezier(0.22,1,0.36,1) both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(7,209,65,0.07)', border: '1px solid rgba(7,209,65,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#07D141', boxShadow: '0 0 10px #07D141', animation: 'adqGlow 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#07D141' }}>Escolha o seu modelo</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 52px)', fontWeight: 900, color: '#0d3320', letterSpacing: '-0.03em', lineHeight: 1.08, margin: '0 0 14px' }}>
            Adquira sua maquininha
          </h2>
          <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 420, margin: '0 auto', lineHeight: 1.6 }}>
            Selecione o seu volume mensal e encontre o modelo perfeito para o seu negócio.
          </p>
        </div>

        {/* ── Volume selector ── */}
        <div style={{ maxWidth: 680, margin: '0 auto 64px', background: '#f9fafb', borderRadius: 22, padding: '24px 24px 20px', border: '1.5px solid #e5e7eb' }}>
          <p style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: 12 }}>
            Quanto você pretende vender por mês?
          </p>
          <div className="adq-vol-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 16 }}>
            {volumes.map(v => (
              <button
                key={v.value}
                type="button"
                className={`vol-pill${volume === v.value ? ' active' : ''}`}
                onClick={() => setVolume(v.value)}
              >
                {volume === v.value && <span style={{ color: '#07D141', marginRight: 4 }}>✓</span>}
                <span style={{ display: 'block', fontSize: 13, fontWeight: 800, lineHeight: 1.2 }}>{v.label}</span>
                <span style={{ display: 'block', fontSize: 10, opacity: 0.6, fontWeight: 600, marginTop: 2 }}>{v.sub}</span>
              </button>
            ))}
          </div>

          {/* Recomendação */}
          <div className="rec-label" key={volume} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1.5px solid #bbf7d0', borderRadius: 14, padding: '13px 16px' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#07D141', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <IconCheckCircle style={{ width: 20, height: 20, color: '#fff' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#0d3320' }}>
                Recomendamos: Millionspay {modelos.find(m => m.id === recId)?.nome}
              </p>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: '#6b7280' }}>Ideal para o seu volume de vendas</p>
            </div>
            <a href="#pedir" style={{ flexShrink: 0, padding: '9px 18px', borderRadius: 10, background: '#0d3320', color: '#fff', fontSize: 12, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background 0.2s, transform 0.2s' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = '#07D141'; (e.target as HTMLElement).style.color = '#0a2010'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = '#0d3320'; (e.target as HTMLElement).style.color = '#fff'; }}
            >
              Solicitar →
            </a>
          </div>
        </div>

        {/* ── Product cards ── */}
        <div className="adq-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {modelos.map((m, idx) => {
            const isRec = m.id === recId
            return (
              <div
                key={m.id}
                className={`adq-card${isRec ? ' rec' : ''}`}
                style={{ animationDelay: `${idx * 0.08}s` }}
                onMouseEnter={() => setHovered(m.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="adq-card-inner">

                  {/* Tag */}
                  <div className="adq-tag" style={m.tagStyle}>{m.tag}</div>

                  {/* "Recomendado" ribbon when matched */}
                  {isRec && (
                    <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 3, background: '#07D141', color: '#0a2010', fontSize: 9, fontWeight: 900, padding: '4px 10px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      ★ Para você
                    </div>
                  )}

                  {/* Image */}
                  <div className="adq-img-area" style={{ background: '#f8fafc' }}>
                    <img src={m.img} alt={m.nomeCompleto} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>

                    {/* Name + price */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div>
                        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: '#0d3320', letterSpacing: '-0.02em' }}>{m.nomeCompleto}</h3>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 8 }}>
                        <div style={{ fontSize: 15, fontWeight: 900, color: '#07D141', letterSpacing: '-0.02em', lineHeight: 1 }}>{m.preco}</div>
                        <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, marginTop: 2 }}>{m.precoObs}</div>
                      </div>
                    </div>

                    <p style={{ margin: '0 0 16px', fontSize: 13, color: '#6b7280', lineHeight: 1.6, flex: 1 }}>{m.desc}</p>

                    {/* Feature chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                      {m.features.map(f => (
                        <span key={f} className="feat-chip">
                          <span style={{ color: '#07D141', fontSize: 9 }}>●</span>
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href="#pedir" className={`adq-cta ${isRec ? 'green' : 'dark'}`}>
                      Solicitar {m.nome}
                      <span style={{ marginLeft: 6 }}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="adq-bottom-strip" style={{ marginTop: 56, background: '#0d3320', borderRadius: 28, padding: '40px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
          {/* decorative circles */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(7,209,65,0.08)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -40, right: 180, width: 140, height: 140, borderRadius: '50%', background: 'rgba(7,209,65,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '50%', left: 320, transform: 'translateY(-50%)', width: 1, height: '60%', background: 'rgba(7,209,65,0.15)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            <p style={{ margin: '0 0 5px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#07D141' }}>Sem burocracia</p>
            <h3 style={{ margin: '0 0 7px', fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>Pronto para vender mais?</h3>
            <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>Preencha o formulário e nossa equipe entra em contato em breve.</p>
          </div>

          <a
            href="#pedir"
            style={{ position: 'relative', flexShrink: 0, padding: '15px 36px', borderRadius: 16, background: '#07D141', color: '#0a2010', fontWeight: 900, fontSize: 15, textDecoration: 'none', boxShadow: '0 6px 24px rgba(7,209,65,0.4)', letterSpacing: '-0.01em', transition: 'all 0.25s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(7,209,65,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(7,209,65,0.4)'; }}
          >
            Solicitar minha maquininha →
          </a>
        </div>

      </div>
    </section>
  )
}
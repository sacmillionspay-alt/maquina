const IconMail = () => (
  <svg width={14} height={14} fill="none" stroke="#07D141" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const IconMapPin = () => (
  <svg width={14} height={14} fill="none" stroke="#07D141" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconInstagram = () => (
  <svg width={18} height={18} fill="none" stroke="#07D141" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

export function Footer() {
  return (
    <footer style={{ background: '#0C0E0B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <style>{`
        .footer-social {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.4s ease;
          text-decoration: none;
        }
        .footer-social:hover {
          background: rgba(7,209,65,0.1);
          border-color: rgba(7,209,65,0.3);
          transform: translateY(-2px);
        }
        .footer-status {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .footer-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: #07D141;
          animation: footerPulse 2s ease-in-out infinite;
        }
        @keyframes footerPulse {
          0%,100% { opacity:1; }
          50% { opacity:0.4; }
        }
        @media (max-width: 768px) {
          .footer-bottom { flex-direction: column !important; text-align: center !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '40px 24px 28px' }}>

        {/* Branding centralizado */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 36 }}>
          <a href="/">
            <img src="/logo.png" alt="MillionsPay" style={{ height: 44, width: 'auto' }} />
          </a>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.7, maxWidth: 320, textAlign: 'center', margin: 0 }}>
            Soluções de pagamento inteligentes para escalar o seu negócio com segurança e tecnologia de ponta.
          </p>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconMail />
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>contato@sejamillionspay.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconMapPin />
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>Brasil</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://wa.me/5511946780757?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20pagamento%20da%20Millionspay." target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp">
              <svg width={18} height={18} fill="#07D141" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.instagram.com/millionspay/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
            © {new Date().getFullYear()} MillionsPay. Todos os direitos reservados.
            <span style={{ margin: '0 8px', opacity: 0.4 }}>|</span>
            CNPJ: 56.002.183/0001-39
          </p>
          <div className="footer-status">
            <div className="footer-pulse" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              System Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
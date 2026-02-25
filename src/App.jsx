import { useState } from 'react'
import {
  Header,
  Hero,
  Adquira,
  Beneficios,
  PorQue,
  Pagamentos,
  Formulario,
  CTA,
  Footer,
  WhatsApp,
} from './sections'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((o) => !o)} />
      <Hero />
      <Adquira />
      <Beneficios />
      <PorQue />
      <Pagamentos />
      <Formulario />
      <CTA />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default App

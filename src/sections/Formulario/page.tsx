import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const ACCEPTED_FILES = 'application/pdf,image/jpeg,image/png,image/webp'
const MAX_SIZE = 10 * 1024 * 1024

const initialData = {
  nomeRazao: '', nomeFantasia: '', cnpj: '', email: '', ramoAtividade: '', cnae: '', dataFundacao: '', inscricaoEstadual: '',
  faturamentoMensal: '', logradouro: '', numero: '', complemento: '', bairro: '', municipio: '', cep: '', telComercial: '', celular: '',
  respNome: '', respCpf: '', respTel: '', respEmail: '', finNome: '', finCpf: '', finEmail: '', finTel: '',
  bandeira: 'TODAS', banco: '', numBanco: '', agencia: '', conta: '', equipQtd: '', equipModelo: '', equipOperadora: '', equipObs: '',
  taxaFormaPagamento: 'boleto', taxaIsencao: false, antecipacaoAutomatica: true, antecipacaoPeriodo: 'rotativo',
  docFrenteVerso: null as File | null, docDomicilioBancario: null as File | null, docFrenteEstabelecimento: null as File | null,
}

type DataType = typeof initialData

const STEPS = [
  { id: 1, label: 'Estabelecimento', icon: '📍', desc: 'Dados gerais da empresa' },
  { id: 2, label: 'Endereço',         icon: '📌', desc: 'Localização e contatos' },
  { id: 3, label: 'Responsáveis',     icon: '👤', desc: 'Assinatura e financeiro' },
  { id: 4, label: 'Bancário',         icon: '🏦', desc: 'Banco e equipamentos' },
  { id: 5, label: 'Configurações',    icon: '⚡', desc: 'Taxa e antecipação' },
  { id: 6, label: 'Documentos',       icon: '📎', desc: 'Anexar arquivos' },
]

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ color: 'var(--mp-green-dark)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }}>
        {label}{required && <span style={{ color: 'var(--primary)', marginLeft: 4 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 16px',
  borderRadius: '10px',
  border: '1.5px solid var(--border)',
  background: 'var(--background)',
  color: 'var(--foreground)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--primary)' : 'var(--border)',
        boxShadow: focused ? '0 0 0 3px rgba(7,209,65,0.15)' : 'none',
        background: props.readOnly ? 'var(--muted)' : 'var(--background)',
        color: props.readOnly ? 'var(--muted-foreground)' : 'var(--foreground)',
        ...(props.style || {}),
      }}
      onFocus={e => { setFocused(true); props.onFocus?.(e) }}
      onBlur={e => { setFocused(false); props.onBlur?.(e) }}
    />
  )
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--primary)' : 'var(--border)',
        boxShadow: focused ? '0 0 0 3px rgba(7,209,65,0.15)' : 'none',
        cursor: 'pointer',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 14px center',
        paddingRight: 36,
      }}
      onFocus={e => { setFocused(true); props.onFocus?.(e) }}
      onBlur={e => { setFocused(false); props.onBlur?.(e) }}
    />
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--primary)' : 'var(--border)',
        boxShadow: focused ? '0 0 0 3px rgba(7,209,65,0.15)' : 'none',
        resize: 'vertical',
        minHeight: 80,
      }}
      onFocus={e => { setFocused(true); props.onFocus?.(e) }}
      onBlur={e => { setFocused(false); props.onBlur?.(e) }}
    />
  )
}

function SubSection({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '4px 0 18px' }}>
      <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mp-green-dark)', whiteSpace: 'nowrap' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}

export function Formulario() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [data, setData] = useState<DataType>(initialData)

  const update = (name: string, value: unknown) => { setData(p => ({ ...p, [name]: value })); setError('') }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const target = e.target as HTMLInputElement
    if (type === 'file') {
      const f = target.files?.[0]
      if (f && f.size > MAX_SIZE) { setError('Arquivo deve ter no máximo 10MB.'); return }
      update(name, f || null)
    } else if (type === 'checkbox') {
      update(name, target.checked)
    } else {
      update(name, value)
    }
  }

  const docsRequired = ['docFrenteVerso', 'docDomicilioBancario', 'docFrenteEstabelecimento'] as const
  const docsOk = docsRequired.every(name => data[name] instanceof File)

  const [loadingMsg, setLoadingMsg] = useState('')

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    if (!cloudName || !uploadPreset || cloudName === 'SUBSTITUIR') {
      throw new Error('Configure VITE_CLOUDINARY_CLOUD_NAME e VITE_CLOUDINARY_UPLOAD_PRESET no .env')
    }
    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', uploadPreset)
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: fd,
    })
    if (!res.ok) throw new Error(`Falha ao enviar "${file.name}". Verifique o upload preset do Cloudinary.`)
    const json = await res.json()
    if (json.error) throw new Error(`Cloudinary: ${json.error.message}`)
    return json.secure_url as string
  }

  const doSubmit = async () => {
    if (step !== STEPS.length || !docsOk) return
    setStatus('sending')
    setError('')

    try {
      // Passo 1: upload dos 3 documentos para o Cloudinary
      setLoadingMsg('Enviando documentos (1/3)…')
      const docFrenteVersoUrl = await uploadToCloudinary(data.docFrenteVerso!)

      setLoadingMsg('Enviando documentos (2/3)…')
      const docDomicilioBancarioUrl = await uploadToCloudinary(data.docDomicilioBancario!)

      setLoadingMsg('Enviando documentos (3/3)…')
      const docFrenteEstabelecimentoUrl = await uploadToCloudinary(data.docFrenteEstabelecimento!)

      // Passo 2: enviar e-mail via EmailJS com todos os dados + URLs
      setLoadingMsg('Enviando formulário…')
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (!serviceId || serviceId === 'SUBSTITUIR') {
        throw new Error('Configure as variáveis VITE_EMAILJS_* no arquivo .env')
      }

      await emailjs.send(serviceId, templateId, {
        nomeRazao:                  data.nomeRazao,
        nomeFantasia:               data.nomeFantasia,
        cnpj:                       data.cnpj,
        email:                      data.email,
        ramoAtividade:              data.ramoAtividade,
        cnae:                       data.cnae,
        dataFundacao:               data.dataFundacao,
        inscricaoEstadual:          data.inscricaoEstadual,
        faturamentoMensal:          data.faturamentoMensal,
        logradouro:                 data.logradouro,
        numero:                     data.numero,
        complemento:                data.complemento,
        bairro:                     data.bairro,
        municipio:                  data.municipio,
        cep:                        data.cep,
        telComercial:               data.telComercial,
        celular:                    data.celular,
        respNome:                   data.respNome,
        respCpf:                    data.respCpf,
        respTel:                    data.respTel,
        respEmail:                  data.respEmail,
        finNome:                    data.finNome,
        finCpf:                     data.finCpf,
        finEmail:                   data.finEmail,
        finTel:                     data.finTel,
        banco:                      data.banco,
        agencia:                    data.agencia,
        conta:                      data.conta,
        equipQtd:                   data.equipQtd,
        equipModelo:                data.equipModelo,
        equipOperadora:             data.equipOperadora,
        taxaFormaPagamento:         data.taxaFormaPagamento,
        taxaIsencao:                data.taxaIsencao ? 'Sim' : 'Não',
        antecipacaoAutomatica:      data.antecipacaoAutomatica ? 'Sim' : 'Não',
        antecipacaoPeriodo:         data.antecipacaoPeriodo,
        docFrenteVersoUrl,
        docDomicilioBancarioUrl,
        docFrenteEstabelecimentoUrl,
      }, { publicKey })

      setStatus('success')
      setLoadingMsg('')
      setData(initialData)
      setStep(1)
    } catch (err) {
      setStatus('error')
      setLoadingMsg('')
      setError(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.')
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Bloqueia envio por Enter ou duplo clique acidental
    if (step < STEPS.length) return
    if (!docsOk) {
      setError('Por favor, anexe os 3 documentos obrigatórios antes de enviar.')
      return
    }
    doSubmit()
  }

  const handleProsseguir = () => {
    setStep(s => s + 1)
    setError('')
  }

  const progress = ((step - 1) / (STEPS.length - 1)) * 100

  return (
    <section id="pedir" style={{ padding: '80px 0', background: '#ffffff', scrollMarginTop: 80 }}>
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .form-step { animation: fadeSlideIn 0.28s cubic-bezier(0.22,1,0.36,1) both; }
        .btn-nav { transition: all 0.18s; }
        .btn-nav:hover { transform: translateY(-1px); }
        .btn-nav:active { transform: translateY(0); }
        .upload-zone:hover { border-color: var(--primary) !important; background: #f0fdf4 !important; }
        .step-chip:hover { opacity: 0.8; }
      `}</style>

      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--primary)', marginBottom: 10 }}>
            Solicitação de Credenciamento
          </p>
          <h2 style={{ fontSize: 34, fontWeight: 900, color: 'var(--mp-green-dark)', margin: '0 0 10px', lineHeight: 1.15 }}>
            Solicite sua maquininha
          </h2>
          <p style={{ color: 'var(--mp-gray)', fontSize: 15, margin: 0 }}>
            Preencha os dados abaixo. Nossa equipe entra em contato em breve.
          </p>
        </div>

        {/* Step chips */}
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
          {STEPS.map(s => (
            <button
              key={s.id}
              type="button"
              className="step-chip btn-nav"
              onClick={() => s.id < step && setStep(s.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 999,
                border: s.id === step ? '2px solid var(--mp-green-dark)' : '2px solid transparent',
                fontSize: 12, fontWeight: 700,
                cursor: s.id < step ? 'pointer' : 'default',
                background: s.id === step ? 'var(--mp-green-dark)' : s.id < step ? 'var(--secondary)' : 'var(--muted)',
                color: s.id === step ? '#fff' : s.id < step ? 'var(--primary)' : 'var(--muted-foreground)',
                transition: 'all 0.2s',
              }}
            >
              {s.id < step
                ? <span style={{ fontWeight: 900 }}>✓</span>
                : <span style={{ opacity: s.id === step ? 1 : 0.5 }}>{s.icon}</span>
              }
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: 4, background: 'var(--border)', borderRadius: 999, marginBottom: 28, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'var(--primary)', borderRadius: 999, transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1)' }} />
        </div>

        {/* Main card */}
        <div style={{ background: '#fff', borderRadius: 20, border: '1.5px solid var(--border)', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
          <div style={{ height: 4, background: 'linear-gradient(90deg, var(--mp-green-dark) 0%, var(--primary) 100%)' }} />

          {status === 'success' ? (
            <div style={{ padding: '60px 40px', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 32 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: 'var(--mp-green-dark)', margin: '0 0 8px' }}>Solicitação enviada!</h3>
              <p style={{ color: 'var(--mp-gray)', marginBottom: 28 }}>Nossa equipe entrará em contato em breve.</p>
              <button className="btn-nav" onClick={() => setStatus('idle')} style={{ padding: '12px 28px', borderRadius: 10, border: 'none', background: 'var(--mp-green-dark)', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                Nova solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              {/* Step header */}
              <div style={{ padding: '24px 28px 20px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--mp-green-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                  {STEPS[step - 1].icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: 17, fontWeight: 900, color: 'var(--mp-green-dark)' }}>{STEPS[step - 1].label}</h3>
                  <p style={{ margin: 0, fontSize: 12, color: 'var(--mp-gray)' }}>{STEPS[step - 1].desc}</p>
                </div>
                <div style={{ padding: '4px 12px', borderRadius: 999, background: 'var(--secondary)', fontSize: 11, fontWeight: 800, color: 'var(--mp-green-dark)' }}>
                  {step} / {STEPS.length}
                </div>
              </div>

              {/* Form body */}
              <div className="form-step" key={step} style={{ padding: '24px 28px' }}>

                {/* STEP 1 */}
                {step === 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={{ gridColumn: '1/3' }}><Field label="Nome / Razão Social" required><Input name="nomeRazao" required value={data.nomeRazao} onChange={handleChange} placeholder="Razão social completa" /></Field></div>
                    <Field label="Nome Fantasia" required><Input name="nomeFantasia" required value={data.nomeFantasia} onChange={handleChange} /></Field>
                    <Field label="CNPJ" required><Input name="cnpj" required value={data.cnpj} onChange={handleChange} placeholder="00.000.000/0001-00" /></Field>
                    <Field label="E-mail" required><Input type="email" name="email" required value={data.email} onChange={handleChange} /></Field>
                    <Field label="Ramo de Atividade" required><Input name="ramoAtividade" required value={data.ramoAtividade} onChange={handleChange} /></Field>
                    <Field label="CNAE" required><Input name="cnae" required value={data.cnae} onChange={handleChange} /></Field>
                    <Field label="Data de Fundação" required><Input type="date" name="dataFundacao" required value={data.dataFundacao} onChange={handleChange} /></Field>
                    <Field label="Inscrição Estadual"><Input name="inscricaoEstadual" value={data.inscricaoEstadual} onChange={handleChange} /></Field>
                    <div style={{ gridColumn: '1/3' }}><Field label="Faturamento Mensal em Cartões (R$)" required><Input name="faturamentoMensal" required value={data.faturamentoMensal} onChange={handleChange} placeholder="Ex.: 15.000" /></Field></div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={{ gridColumn: '1/3' }}><Field label="Logradouro" required><Input name="logradouro" required value={data.logradouro} onChange={handleChange} placeholder="Rua, Avenida..." /></Field></div>
                    <Field label="Número" required><Input name="numero" required value={data.numero} onChange={handleChange} /></Field>
                    <Field label="Complemento"><Input name="complemento" value={data.complemento} onChange={handleChange} placeholder="Apto, Sala..." /></Field>
                    <Field label="Bairro" required><Input name="bairro" required value={data.bairro} onChange={handleChange} /></Field>
                    <Field label="CEP" required><Input name="cep" required value={data.cep} onChange={handleChange} placeholder="00000-000" /></Field>
                    <div style={{ gridColumn: '1/3' }}><Field label="Município" required><Input name="municipio" required value={data.municipio} onChange={handleChange} /></Field></div>
                    <Field label="Telefone Comercial" required><Input type="tel" name="telComercial" required value={data.telComercial} onChange={handleChange} /></Field>
                    <Field label="Celular" required><Input type="tel" name="celular" required value={data.celular} onChange={handleChange} /></Field>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div>
                    <SubSection title="Responsável pela assinatura" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
                      <Field label="Nome" required><Input name="respNome" required value={data.respNome} onChange={handleChange} /></Field>
                      <Field label="CPF" required><Input name="respCpf" required value={data.respCpf} onChange={handleChange} placeholder="000.000.000-00" /></Field>
                      <Field label="Telefone" required><Input type="tel" name="respTel" required value={data.respTel} onChange={handleChange} /></Field>
                      <Field label="E-mail" required><Input type="email" name="respEmail" required value={data.respEmail} onChange={handleChange} /></Field>
                    </div>
                    <SubSection title="Contato financeiro" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <Field label="Nome" required><Input name="finNome" required value={data.finNome} onChange={handleChange} /></Field>
                      <Field label="CPF" required><Input name="finCpf" required value={data.finCpf} onChange={handleChange} /></Field>
                      <Field label="E-mail" required><Input type="email" name="finEmail" required value={data.finEmail} onChange={handleChange} /></Field>
                      <Field label="Telefone" required><Input type="tel" name="finTel" required value={data.finTel} onChange={handleChange} /></Field>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div>
                    <SubSection title="Domicílio bancário" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
                      <Field label="Bandeira"><Input value="TODAS" readOnly /></Field>
                      <Field label="Banco" required><Input name="banco" required value={data.banco} onChange={handleChange} /></Field>
                      <Field label="Nº do Banco" required><Input name="numBanco" required value={data.numBanco} onChange={handleChange} /></Field>
                      <Field label="Agência" required><Input name="agencia" required value={data.agencia} onChange={handleChange} /></Field>
                      <div style={{ gridColumn: '1/3' }}><Field label="Conta" required><Input name="conta" required value={data.conta} onChange={handleChange} /></Field></div>
                    </div>
                    <SubSection title="Gestão de equipamentos" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <Field label="Quantidade" required><Input name="equipQtd" required value={data.equipQtd} onChange={handleChange} placeholder="Ex.: 2" /></Field>
                      <Field label="Modelo" required><Input name="equipModelo" required value={data.equipModelo} onChange={handleChange} placeholder="Ex.: SMART A-910" /></Field>
                      <div style={{ gridColumn: '1/3' }}><Field label="Operadora"><Input name="equipOperadora" value={data.equipOperadora} onChange={handleChange} /></Field></div>
                      <div style={{ gridColumn: '1/3' }}><Field label="Observações"><Textarea name="equipObs" value={data.equipObs} onChange={handleChange} placeholder="Informações adicionais..." /></Field></div>
                    </div>
                  </div>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div style={{ background: 'var(--secondary)', borderRadius: 14, padding: 20, border: '1.5px solid var(--border)' }}>
                      <SubSection title="Taxa de adesão" />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <Field label="Valor">
                          <div style={{ padding: '11px 16px', borderRadius: 10, border: '1.5px solid var(--border)', background: '#fff', fontSize: 20, fontWeight: 900, color: 'var(--mp-green-dark)' }}>R$ 499</div>
                        </Field>
                        <Field label="Forma de pagamento" required>
                          <Select name="taxaFormaPagamento" required value={data.taxaFormaPagamento} onChange={handleChange}>
                            <option value="boleto">Boleto</option>
                            <option value="cartao">Cartão</option>
                            <option value="ted">TED ou PIX</option>
                          </Select>
                        </Field>
                      </div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14, cursor: 'pointer' }}>
                        <div onClick={() => update('taxaIsencao', !data.taxaIsencao)} style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${data.taxaIsencao ? 'var(--primary)' : 'var(--border)'}`, background: data.taxaIsencao ? 'var(--primary)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0, cursor: 'pointer' }}>
                          {data.taxaIsencao && <span style={{ color: '#fff', fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </div>
                        <input type="checkbox" name="taxaIsencao" checked={data.taxaIsencao} onChange={handleChange} style={{ display: 'none' }} />
                        <span style={{ fontSize: 13, color: 'var(--foreground)' }}>Solicitar isenção da taxa <span style={{ color: 'var(--mp-gray)', fontSize: 12 }}>(mediante aprovação)</span></span>
                      </label>
                      <p style={{ fontSize: 11, color: 'var(--mp-gray)', marginTop: 8, marginBottom: 0 }}>⚠️ Não aceitar pagamento em espécie.</p>
                    </div>

                    <div style={{ background: 'var(--secondary)', borderRadius: 14, padding: 20, border: '1.5px solid var(--border)' }}>
                      <SubSection title="Antecipação automática" />
                      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                        {[{ val: true, label: 'Ativar', icon: '✓' }, { val: false, label: 'Desativar', icon: '✕' }].map(opt => (
                          <label key={String(opt.val)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 16px', borderRadius: 10, border: `2px solid ${data.antecipacaoAutomatica === opt.val ? 'var(--primary)' : 'var(--border)'}`, background: data.antecipacaoAutomatica === opt.val ? '#f0fdf4' : '#fff', cursor: 'pointer', transition: 'all 0.2s' }}>
                            <input type="radio" style={{ display: 'none' }} checked={data.antecipacaoAutomatica === opt.val} onChange={() => update('antecipacaoAutomatica', opt.val)} />
                            <span style={{ fontSize: 13, fontWeight: 800, color: data.antecipacaoAutomatica === opt.val ? 'var(--primary)' : 'var(--border)' }}>{opt.icon}</span>
                            <span style={{ fontSize: 13, fontWeight: 700, color: data.antecipacaoAutomatica === opt.val ? 'var(--mp-green-dark)' : 'var(--mp-gray)' }}>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                      <p style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--mp-gray)', marginBottom: 10, marginTop: 0 }}>Período de recebimento</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                        {[
                          { val: 'rotativo', label: 'Rotativo', sub: 'D+1' },
                          { val: 'mensal', label: 'Mensal', sub: '' },
                          { val: 'quinzenal', label: 'Quinzenal', sub: '' },
                          { val: 'semanal', label: 'Semanal', sub: '' },
                        ].map(opt => (
                          <label key={opt.val} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 6px', borderRadius: 10, border: `2px solid ${data.antecipacaoPeriodo === opt.val ? 'var(--primary)' : 'var(--border)'}`, background: data.antecipacaoPeriodo === opt.val ? '#f0fdf4' : '#fff', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' }}>
                            <input type="radio" name="antecipacaoPeriodo" value={opt.val} checked={data.antecipacaoPeriodo === opt.val} onChange={handleChange} style={{ display: 'none' }} />
                            <span style={{ fontSize: 12, fontWeight: 800, color: data.antecipacaoPeriodo === opt.val ? 'var(--mp-green-dark)' : 'var(--foreground)' }}>{opt.label}</span>
                            {opt.sub && <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary)', marginTop: 2 }}>{opt.sub}</span>}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 6 */}
                {step === 6 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div style={{ background: 'var(--secondary)', borderRadius: 10, padding: '12px 16px', border: '1.5px solid var(--border)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>ℹ️</span>
                      <div>
                        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: 'var(--mp-green-dark)' }}>Documentos obrigatórios</p>
                        <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--mp-gray)', lineHeight: 1.4 }}>Envie fotos nítidas em PDF, JPG, PNG ou WebP · Máx. 10MB por arquivo</p>
                      </div>
                    </div>

                    {[
                      { name: 'docFrenteVerso' as keyof DataType, label: 'Documento de identidade', desc: 'Foto da frente e do verso — RG, CNH ou equivalente', icon: '🪪' },
                      { name: 'docDomicilioBancario' as keyof DataType, label: 'Comprovante bancário', desc: 'Extrato, cartão ou documento com os dados da conta', icon: '🏦' },
                      { name: 'docFrenteEstabelecimento' as keyof DataType, label: 'Foto do estabelecimento', desc: 'Foto nítida da fachada ou entrada do local', icon: '🏪' },
                    ].map(doc => {
                      const file = data[doc.name] as File | null
                      return (
                        <label key={String(doc.name)} className="upload-zone" style={{ display: 'flex', alignItems: 'center', gap: 14, borderRadius: 12, border: `2px dashed ${file ? 'var(--primary)' : 'var(--border)'}`, background: file ? '#f0fdf4' : '#fafafa', padding: '16px 18px', cursor: 'pointer', transition: 'all 0.2s' }}>
                          <input type="file" name={String(doc.name)} accept={ACCEPTED_FILES} onChange={handleChange} style={{ display: 'none' }} />
                          <div style={{ width: 46, height: 46, borderRadius: 12, background: file ? 'var(--primary)' : 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0, transition: 'background 0.2s' }}>
                            {file ? '✅' : doc.icon}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ margin: 0, fontSize: 13, fontWeight: 800, color: 'var(--mp-green-dark)' }}>{doc.label} <span style={{ color: 'var(--primary)' }}>*</span></p>
                            <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--mp-gray)', lineHeight: 1.4 }}>{doc.desc}</p>
                            {file && <p style={{ margin: '6px 0 0', fontSize: 11, fontWeight: 700, color: 'var(--primary)', background: '#dcfce7', padding: '3px 8px', borderRadius: 6, display: 'inline-block', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>✓ {file.name}</p>}
                          </div>
                          <div style={{ flexShrink: 0, padding: '8px 14px', borderRadius: 8, background: file ? 'var(--primary)' : 'var(--mp-green-dark)', color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                            {file ? 'Alterar' : 'Selecionar'}
                          </div>
                        </label>
                      )
                    })}

                    {error && (
                      <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: 10, padding: '12px 16px', display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span>⚠️</span>
                        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--destructive)' }}>{error}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div style={{ padding: '20px 28px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)' }}>
                {step > 1 ? (
                  <button type="button" className="btn-nav" onClick={() => setStep(s => s - 1)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 20px', borderRadius: 10, border: '1.5px solid var(--border)', background: '#fff', color: 'var(--foreground)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                    ← Voltar
                  </button>
                ) : <div />}

                {step < STEPS.length ? (
                  <button type="button" className="btn-nav" onClick={handleProsseguir} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 28px', borderRadius: 10, border: 'none', background: 'var(--mp-green-dark)', color: '#fff', fontWeight: 800, fontSize: 14, cursor: 'pointer', boxShadow: '0 4px 12px rgba(7,209,65,0.22)' }}>
                    Prosseguir →
                  </button>
                ) : (
                  <button type="button" className="btn-nav" disabled={status === 'sending' || !docsOk} onClick={() => { if (docsOk) doSubmit(); else setError('Por favor, anexe os 3 documentos obrigatórios antes de enviar.') }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 28px', borderRadius: 10, border: 'none', background: status === 'sending' ? 'var(--muted-foreground)' : docsOk ? 'var(--primary)' : 'var(--muted)', color: '#fff', fontWeight: 800, fontSize: 14, cursor: status === 'sending' || !docsOk ? 'not-allowed' : 'pointer', boxShadow: status === 'sending' || !docsOk ? 'none' : '0 4px 12px rgba(7,209,65,0.35)' }}>
                    {status === 'sending' ? `⏳ ${loadingMsg || 'Enviando…'}` : docsOk ? '✅ Enviar formulário' : '📎 Anexe os 3 documentos'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--muted-foreground)', marginTop: 20 }}>
          🔒 Seus dados são protegidos e utilizados apenas para processamento desta solicitação.
        </p>
      </div>
    </section>
  )
}
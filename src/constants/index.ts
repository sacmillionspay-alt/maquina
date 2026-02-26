import type { ComponentType } from 'react'
import {
  IconPix,
  IconChart,
  IconCheck,
  IconZap,
  IconPhone,
  IconShield,
} from '../components/Icons'

export const MAQUININHA_IMAGES = { tap: '', flash: '' }

export const BANDEIRAS_LINHA1 = [
  'Visa', 'Mastercard', 'Elo', 'Amex', 'Hipercard', 'Pix', 'Apple Pay', 'Samsung Pay',
  'Google Pay', 'Alelo', 'VR', 'Sodexo', 'Ticket', 'Pluxee',
]

export const BANDEIRAS_LINHA2 = [
  'Cabal', 'Diners', 'Discover', 'JCB', 'Banricompras', 'Credz', 'Mee', 'Policard',
  'Valecard', 'Banescard', 'Credsystem', 'Sorocred', 'Avista', 'Cooper',
]

export const BENEFICIOS = [
  { titulo: 'Pix ilimitado', desc: 'Receba e pague com Pix sem limite.', Icon: IconPix },
  { titulo: 'Taxas que caem', desc: 'Quanto mais você vende, menores as taxas.', Icon: IconChart },
  { titulo: 'Sem aluguel ou multa', desc: 'Maquininha sua, sem pegadinhas.', Icon: IconCheck },
  { titulo: 'Antecipação rápida', desc: 'Receba na hora ou em 1 dia útil.', Icon: IconZap },
  { titulo: 'Atendimento humano', desc: 'Suporte por telefone e WhatsApp.', Icon: IconPhone },
  { titulo: 'Segurança', desc: 'Transações protegidas e garantia.', Icon: IconShield },
] as { titulo: string; desc: string; Icon: ComponentType }[]

export const TAXAS_HERO = [
  { value: 'Pix', sub: 'grátis e ilimitado' },
  { value: '0,75%', sub: 'no Débito' },
  { value: '2,69%', sub: 'no Crédito 1x' },
  { value: '8,99%', sub: 'no Crédito 12x' },
]

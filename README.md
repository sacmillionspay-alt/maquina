# Millionspay - Landing Page

Landing page para captação de leads (aquisição de maquininha), moderna e responsiva.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Formulário funcional

1. Crie um formulário em [Formspree](https://formspree.io) (plano gratuito permite envio de arquivos).
2. Copie o ID do formulário (ex: `xyzabcde`).
3. Crie um arquivo `.env` na raiz do projeto (use `.env.example` como base) e defina:
   ```
   VITE_FORMSPREE_ID=xyzabcde
   ```
4. Reinicie o `npm run dev`. Os dados do lead e o anexo (opcional) serão enviados ao Formspree.

## Logo

Coloque a imagem da logo em **`public/logo.png`**. Se o arquivo não existir, a página usa um fallback (ícone M + texto “Millionspay”).

## Vídeo no Hero

Para usar um vídeo de background na primeira seção:

1. Coloque o arquivo de vídeo em `public/hero-video.mp4` (e opcionalmente `public/hero-poster.jpg`).
2. No `src/App.jsx`, na seção Hero: descomente a tag `<video>` e comente ou remova a `div` que usa a imagem de fundo atual.

## Fotos das maquininhas nos cards

No `src/App.jsx`, no objeto `MAQUININHA_IMAGES`, defina as URLs das imagens:

```js
const MAQUININHA_IMAGES = {
  tap: '/maquininha-tap.jpg',   // coloque o arquivo em public/
  flash: '/maquininha-flash.jpg',
}
```

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

- **Header**: logo, navegação, CTA “Quero minha maquininha” (sem login)
- **Hero**: manchete, taxas, CTA; preparado para vídeo de background
- **Quer ser Millionspay?**: seletor de faturamento e cards Tap/Flash (com slot para fotos)
- **Benefícios**: lista de vantagens
- **Bandeiras**: formas de pagamento
- **Formulário**: nome, e-mail, telefone, CNPJ/CPF, anexo (opcional), envio via Formspree
- **CTA final** e **Footer**
- Botão flutuante WhatsApp

Cores e tipografia usam as variáveis da marca (CSS: `--primary`, `--mp-green-light`, `--mp-green-dark`, etc.).

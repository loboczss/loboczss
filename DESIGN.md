---
name: Loboczss
description: Uma oficina editorial vista atraves do vidro - tipografia gigante, reguas finas e camadas tonais sob paineis translucidos.
colors:
  violet-signal: "#8b5cf6"
  violet-deep: "#6d28d9"
  emerald-live: "#10b981"
  surface-lowest: "#060d20"
  surface-low: "#131b2e"
  surface: "#0b1326"
  surface-container: "#171f33"
  surface-high: "#222a3e"
  surface-highest: "#2d3449"
  surface-content: "#dbe2fd"
  surface-lowest-day: "#f1f5f9"
  surface-low-day: "#e2e8f0"
  surface-day: "#cbd5e1"
  surface-container-day: "#94a3b8"
  surface-high-day: "#64748b"
  surface-highest-day: "#475569"
  surface-content-day: "#0f172a"
typography:
  display:
    fontFamily: "Outfit, Inter, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 13vw, 13rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Outfit, Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Outfit, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.05em"
  metric:
    fontFamily: "Outfit, Inter, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Inter, Outfit, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Outfit, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  md: "8px"
  lg: "16px"
  xl: "40px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.violet-signal}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "20px 40px"
  button-primary-hover:
    backgroundColor: "{colors.violet-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.surface-content}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  input-text:
    backgroundColor: "{colors.surface-lowest}"
    textColor: "{colors.surface-content}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  card-soft:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.surface-content}"
    rounded: "{rounded.xl}"
    padding: "40px"
  card-editorial:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.surface-content}"
    rounded: "{rounded.none}"
    padding: "48px"
  kpi-slab:
    backgroundColor: "{colors.violet-signal}"
    textColor: "#ffffff"
    typography: "{typography.metric}"
    rounded: "{rounded.none}"
    padding: "80px 96px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.surface-content}"
    typography: "{typography.label}"
    padding: "0px"
---

# Design System: Loboczss

## Overview

**Creative North Star: "Oficina Sob Vidro"**

Uma oficina de trabalho vista através de uma parede de vidro. O trabalho por trás é reto, técnico e editorial: tipografia enorme, réguas finas, serviços numerados 01/02/03, uma malha de pontos ao fundo. O vidro é o que fica entre você e ele — painéis translúcidos sobre fotografia, desfoque, uma escada de seis superfícies tonais que faz a profundidade sem nunca desenhar uma sombra. Nada flutua por decoração; o que flutua é porque está literalmente na frente de outra coisa.

A densidade é baixa e deliberada. Seções respiram 128px em cima e embaixo, o texto para em `max-w-7xl` (1280px) mesmo quando a seção sangra de ponta a ponta, e a hierarquia se resolve por contraste brutal de escala — um título de 13rem contra um label de 10px, sem nada no meio para amortecer. O sistema é nativamente escuro: a fundação noturna (`#0b1326`) é onde ele foi desenhado, e o modo claro é uma inversão da mesma escada tonal, não um segundo tema com regras próprias.

A personalidade vem do atrito entre dois materiais. A arquitetura é reta — seções, slabs e blocos de conteúdo têm canto vivo. Os controles são macios — botão redondo por completo, input de 16px, card de 40px. Você sente a diferença entre o que é edifício e o que é máquina antes de ler qualquer palavra.

**Key Characteristics:**
- Escuro como estado natural, claro como inversão da mesma escada
- Contraste extremo de escala tipográfica, sem degraus intermediários
- Régua fina como divisor; contorno nunca envolve
- Profundidade por camada tonal e vidro, quase nunca por sombra
- Arquitetura reta, controles redondos
- No máximo um slab de cor saturada por página (padrão definido, hoje sem instância)

## Colors

Uma fundação azul-noite quase monocromática, cortada por exatamente dois acentos: um violeta que sinaliza ação e um esmeralda que sinaliza vida.

### Primary
- **Violeta Sinal** (`violet-signal`): o único acento de ação do sistema. Aparece no ponto final depois de "Loboczss", no botão de CTA, nos micro-labels que abrem cada seção, no hover dos links de navegação, e, quando um slab existe, inundando uma seção inteira. É a cor que significa "isto responde ao toque".
- **Violeta Profundo** (`violet-deep`): estado pressionado e hover do botão primário. Existe na escala do projeto (`primary-700`) mas hoje não está ligado — veja *Do's and Don'ts*.

### Secondary
- **Esmeralda Vivo** (`emerald-live`): reservado para sinal de vida e de sistema. O ponto pulsante de status no rodapé, o asterisco de campo obrigatório, a mensagem de sucesso do formulário, a barra de acento do canal de e-mail. Nunca decora; sempre informa que algo está ativo, correto ou vivo.

### Neutral
A escada tonal noturna, do mais fundo ao mais alto. Cada degrau existe para separar planos sem desenhar uma única linha:
- **Poço** (`surface-lowest`): o fundo mais profundo. Seções de serviços, contato e rodapé — o chão onde o conteúdo assenta.
- **Noite** (`surface`): a fundação padrão da página e o material do hero.
- **Grafite Baixo** (`surface-low`) e **Grafite** (`surface-container`): superfícies elevadas — cards, campos em foco, o pill do seletor de idioma.
- **Grafite Alto** (`surface-high`) e **Grafite Máximo** (`surface-highest`): estados de hover e as réguas divisoras quando precisam ser vistas.
- **Luz Fria** (`surface-content`): todo o texto. Um branco levemente azulado, nunca branco puro — o que impede a fadiga no fundo escuro.

O tema claro (`*-day`) inverte a mesma escada: papel frio no fundo, tinta quase preta no texto. É a metade mais frágil do sistema hoje — o `surface-day` (`#cbd5e1`) é um cinza médio, mais escuro do que "claro" sugere, e a escada tem menos ar entre os degraus do que a noturna.

### Named Rules

**The Single Slab Rule.** O violeta inunda no máximo **uma** seção por página. Nenhuma página exerce esse direito hoje: a faixa de métricas que o ocupava foi removida por conter dados fabricados, e o slab segue disponível para quem precisar dele. Em qualquer outro lugar o violeta é pontuação: um ponto final, uma régua de 2px, um label de 10px, um botão. A raridade é o que faz o slab funcionar; dois slabs matam os dois.

**The Emerald Is Alive Rule.** Esmeralda só aparece onde algo está vivo, correto ou obrigatório. Um esmeralda decorativo — num título, num fundo, num ícone sem estado — quebra a leitura de todos os outros.

**The Never-Pure-White Rule.** Texto sobre fundo escuro é `surface-content`, nunca `#ffffff`. Branco puro só existe dentro do slab violeta e sobre fotografia, onde o contraste já é forçado por outro meio.

## Typography

**Display Font:** Outfit (com Inter e system-ui como fallback)
**Body Font:** Inter (com Outfit e system-ui como fallback)

**Character:** Outfit é geométrica e larga — aguenta ser esticada a 13rem sem virar caricatura, e o `tracking-tighter` fecha as letras até o título virar um bloco sólido de massa. Inter faz o trabalho oposto: sobrevive a 10px em caixa alta com 0.2em de espaçamento, que é onde o sistema passa a maior parte da sua informação funcional. Uma grita, a outra fala.

### Hierarchy
- **Display** (600, `clamp(4.5rem, 13vw, 13rem)`, altura 0.88): exclusivo do nome no hero. Uma vez por site.
- **Headline** (600, `clamp(3rem, 6vw, 5.5rem)`, altura 1): abertura de seção e o título do rodapé. É o que carrega a voz editorial.
- **Title** (600, `clamp(1.5rem, 3vw, 2.25rem)`): nomes de serviço, títulos de projeto, cabeçalhos de card.
- **Metric** (900 itálico, `clamp(3.5rem, 8vw, 6.5rem)`): só numerais. Sem instância no código hoje — o papel foi definido pela faixa de métricas removida e fica reservado para o próximo número verdadeiro que o site tiver.
- **Body** (400, 1rem–1.125rem, altura 1.625): parágrafos, sempre a 50–60% de opacidade contra o título ao lado. Limite de leitura em torno de 65ch (`max-w-md` a `max-w-3xl`).
- **Label** (700, 10px, caixa alta, `0.2em`): a unidade mais repetida do sistema inteiro. Abre seções, numera itens, marca canais, assina o rodapé.

### Named Rules

**The Two Voices Rule.** Outfit grita (display, headline, title, metric), Inter fala (body, label). Nenhum papel mistura as duas, e nenhum texto novo introduz uma terceira família.

**The Ten-Pixel Label Rule.** Todo micro-label é 10px / peso 700 / caixa alta / `0.2em` de tracking. Sem exceção de tamanho: se não cabe, corte a palavra, não o tamanho.

**The No-Middle-Ground Rule.** A hierarquia vive nos extremos. Entre um headline de 5.5rem e um label de 10px não entra um "subtítulo de 1.5rem" para suavizar a queda — a queda é o efeito.

## Layout

Não existe container global. O layout raiz é apenas coluna flex de altura total; **cada seção possui o próprio padding e centraliza um miolo de `max-w-7xl` (1280px)**. É o que permite uma seção sangrar de ponta a ponta (o slab de métricas, o hero fotográfico) enquanto a seguinte respeita a mesma coluna de leitura.

O ritmo horizontal é de três degraus: `24px` no celular, `48px` no tablet, `96px` no desktop. O vertical é de dois: `96px` de respiro padrão entre seções, `128px` quando a seção precisa de peso editorial. O espaçamento interno anda numa escala curta — 8 / 16 / 24 / 48 — e gaps grandes (48px a 80px) separam blocos dentro de uma seção.

A responsividade é de reflow, não de reescala: colunas lado a lado no desktop viram empilhamento no celular, e a tipografia acompanha por `clamp()` em vez de saltos por breakpoint. A grade de métricas é a exceção — ela quebra de 4 para 2 colunas e mantém os divisores verticais.

O cabeçalho é fixo e muda de material no scroll: sobre o hero ele é vidro escuro sobre fotografia (`bg-black/35`, blur 12px); passados 20px de rolagem vira vidro da própria superfície (`bg-surface/90`, blur 24px) e encolhe o padding. Todo conteúdo de página interna começa com `pt-32` (128px) para não passar por baixo dele.

### Named Rules

**The Section-Owns-Its-Padding Rule.** Nenhum wrapper global limita largura. Uma seção nova traz o próprio `px-6 md:px-12 lg:px-24` e o próprio miolo `max-w-7xl`. Quem esquece, cola no canto da tela.

## Elevation & Depth

**Este sistema não usa sombra para criar profundidade.** Ele usa duas coisas: a escada de seis superfícies tonais e o vidro.

A escada faz todo o trabalho estrutural. Um card não paira sobre o fundo — ele é um degrau acima dele (`surface-container` sobre `surface`), e o hover sobe mais um degrau (`surface-high`). Um input afunda um degrau (`surface-lowest`) para ler como cavidade. A profundidade é informação de posição na escada, não ilusão de luz.

O vidro fica reservado para o que está **literalmente sobreposto a outro conteúdo**: o cabeçalho fixo, o overlay de menu no celular, o painel do hero sobre a fotografia, o dropdown de idioma. Fora esses quatro casos, nada desfoca.

Sombra existe hoje em alguns componentes (`shadow-2xl` no card, sombra colorida no botão) e é a parte menos coerente do sistema — ela não acrescenta nada que a escada tonal já não resolva, e some por completo no tema claro.

### Named Rules

**The Glass Floats, Nothing Else Does Rule.** Desfoque só em elemento que cobre outro conteúdo. Um card na grade não é vidro; ele é um degrau da escada.

**The Ladder Before Light Rule.** Precisa separar dois planos? Suba um degrau na escada tonal. Sombra é o último recurso, não o primeiro.

## Shapes

A linguagem de forma é deliberadamente dividida em dois materiais.

**Arquitetura é reta.** Tudo que é estrutura ou conteúdo tem canto vivo (`0px`): as seções, o slab de métricas, o card do formulário de contato, as imagens de projeto, os cards numerados de orçamento, as réguas divisoras. Isso é o que dá o caráter editorial — uma página de revista não tem cantos arredondados.

**Controle é redondo.** Tudo que responde ao toque é macio: botão primário totalmente circular (`9999px`), card de conteúdo em 40px, input e ícone em 16px, botão secundário em 8px, pill de idioma e toggle de tema circulares.

Sobre bordas: o sistema usa a **régua fina** como divisor estrutural — o `1px` no topo de cada seção, os divisores verticais entre métricas, a barra de acento de 2px à esquerda dos títulos de privacidade e ao lado dos canais de contato. Esse uso é coerente e carrega trabalho tipográfico real. O que não funciona é o **contorno** — envolver um container inteiro numa borda translúcida quase invisível, que não separa nada e desaparece por completo no tema claro.

### Named Rules

**The Straight Architecture, Round Controls Rule.** Se é edifício, canto vivo. Se é máquina, canto macio. Um card de conteúdo com raio de 40px dentro de uma seção reta é a assinatura; um slab de seção com raio é um erro.

**The Rule Divides, The Outline Never Wraps Rule.** Uma linha de 1px é legítima quando separa dois blocos ao longo de um eixo — topo de seção, divisor de coluna, acento lateral. Nunca quando contorna os quatro lados de um container. Se o container precisa se destacar, ele sobe um degrau na escada tonal.

## Components

### Buttons
- **Shape:** primário totalmente circular (`9999px`); secundário levemente curvo (`8px`).
- **Primary:** violeta sólido sobre texto branco, padding generoso (`20px 40px`), tipografia de label (10px, caixa alta, `0.2em`) e uma seta inline que desliza 4px para a direita no hover. O deslocamento da seta é o feedback principal — mais expressivo que a mudança de cor.
- **Hover / Focus:** fundo escurece para violeta profundo; transição de 300ms. O botão secundário reduz para `active:scale-95`.
- **Ghost:** sem fundo nem borda, só texto em label; usado para "ver portfólio completo" e ações terciárias.
- **Disabled:** opacidade 50% mais dessaturação total (`grayscale`), o que remove o violeta e comunica indisponibilidade sem depender só de opacidade.

### Cards / Containers
- **Corner Style:** 40px no card macio; `0px` no bloco editorial.
- **Background:** um degrau acima da seção que o contém (`surface-container` sobre `surface`).
- **Shadow Strategy:** nenhuma — veja *Elevation & Depth*. A separação é tonal.
- **Border:** nenhuma. O contorno translúcido presente hoje deve sair.
- **Internal Padding:** 24px (compacto), 40px (padrão), 64px (bloco editorial).
- **Hover:** sobe um degrau tonal e escala 1.01 em 700ms — lento o bastante para ler como material, não como clique.

### Inputs / Fields
- **Style:** sem borda, fundo afundado um degrau (`surface-lowest`), raio de 16px, padding `16px 24px`, sombra interna sutil que reforça a cavidade.
- **Label:** 10px caixa alta acima do campo, que muda para violeta quando o campo recebe foco (`group-focus-within`) — a etiqueta acende antes do campo.
- **Focus:** anel de 2px em violeta a 40% de opacidade; o fundo sobe para `surface-container`.
- **Error:** anel vermelho de 2px, ícone de alerta à direita dentro do campo e mensagem em 10px itálico abaixo.

### Navigation
- **Style:** links em tipografia de label (10px, caixa alta, `0.2em`), espaçados 32–48px.
- **Material:** o cabeçalho troca de vidro conforme o scroll (veja *Layout*). Sobre o hero, os links são brancos a 85%; após rolar, ficam em `surface-content` a 60% com hover em violeta.
- **CTA:** pill violeta destacado à direita, sempre visível.
- **Mobile:** overlay sólido de tela cheia que entra deslizando da direita em 500ms; os links sobem de 10px para `1.875rem` em peso 700 — a navegação vira display quando ganha a tela inteira. Idioma e tema aparecem como duas linhas rotuladas no rodapé do overlay.

### Slab (signature, sem instância)
O padrão que inverte a paleta inteira: fundo violeta sólido, texto branco, uma malha de linhas diagonais a 6% de opacidade, divisores verticais brancos a 10% e nada com raio dentro. Sua única instância era a faixa de métricas da home, removida por conter números fabricados. O padrão continua definido porque a decisão de sistema é real — um momento de cor saturada por página, como pontuação de leitura —, mas nada o usa hoje. Reintroduzir exige conteúdo verdadeiro.

### Section Rule (signature)
A régua de abertura de seção: `1px` no topo em `surface-container` a 40–50% de opacidade, seguida do label de 10px em violeta, seguida do headline. Essa sequência de três partes abre praticamente toda seção do site e é o padrão mais reutilizável do sistema.

## Do's and Don'ts

### Do:
- **Do** abrir toda seção com a tríade régua fina + label de 10px violeta + headline em Outfit.
- **Do** separar planos subindo um degrau na escada tonal (`surface` → `surface-container` → `surface-high`) antes de considerar qualquer sombra.
- **Do** dar a cada seção o próprio `px-6 md:px-12 lg:px-24` e um miolo `max-w-7xl`, porque não existe container global.
- **Do** manter numerais de item no formato `01` / `02` / `03` em label de 10px, nunca `1.` ou bullet.
- **Do** reservar o itálico black exclusivamente para números.
- **Do** usar `surface-content` para texto, inclusive dentro de cards — o tema claro depende disso.
- **Do** deixar o violeta inundar no máximo uma seção por página.

### Don't:
- **Don't** contornar um container com borda. Régua divide ao longo de um eixo; contorno nunca envolve os quatro lados.
- **Don't** escrever `text-white`, `border-white/5` ou `bg-white/5` fixos em superfície tematizada. Hoje `BaseCard`, `KpiCard` e o label do `BaseInput` fazem isso, e o resultado no tema claro é texto branco sobre cinza médio — ilegível. Sempre `surface-content`.
- **Don't** usar `bg-primary-dark` ou `bg-secondary-dark`: essas classes não existem na configuração do projeto, então o hover do `BaseButton` primário hoje não faz nada. Use `violet-deep` (`primary-700`).
- **Don't** arredondar seção, slab ou bloco de conteúdo. Raio pertence a controle.
- **Don't** introduzir um terceiro acento. A paleta é violeta + esmeralda sobre a escada azul-noite.
- **Don't** usar esmeralda como decoração — ele significa estado vivo, correto ou obrigatório.
- **Don't** amortecer a hierarquia com um tamanho intermediário entre headline e label.
- **Don't** aplicar desfoque em elemento que não está sobreposto a outro conteúdo.

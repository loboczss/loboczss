# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primário — dono de PME / empreendedor brasileiro.** Encontrou o nome "Loboczss" por indicação, busca ou link direto e precisa decidir se contrata. Normalmente não é técnico. O trabalho dele na visita é entender o que Juan faz, acreditar que ele entrega, e abrir conversa. Quer clareza de escopo, prazo e investimento — não jargão. **Quando os públicos conflitarem, este decide.**

Públicos secundários, atendidos mas nunca ao custo do primário:

- **Clientes internacionais** — a razão de existir o locale `en`. Contratação remota, comunicação assíncrona.
- **Empresas e agências** que subcontratam — avaliam stack, arquitetura e capacidade de entrega.
- **Recrutadores (vaga CLT)** — usam o site como currículo: histórico técnico e profundidade.

## Product Purpose

Site pessoal e portfólio de **Juan Reis (Loboczss)**, desenvolvedor solo de apps, sites e automações com I.A.

Existe para converter alguém que já ouviu o nome em uma conversa comercial, e para dar respaldo verificável quando alguém pesquisa esse nome.

Sucesso, na ordem: (1) pedido de orçamento qualificado pelo formulário; (2) contato direto no WhatsApp; (3) credibilidade — a pessoa sai convencida mesmo sem agir na hora. O site também hospeda as páginas legais dos apps do Juan; essa função é obrigatória, não decorativa.

## Positioning

Um profissional só que cobre a cadeia inteira — app mobile, web, automação com I.A. **e a infraestrutura onde tudo roda**. Juan não só entrega código: opera servidor próprio (Debian, Cloudflare Tunnel, n8n, Coolify), faz o deploy e mantém no ar. Um freelancer vizinho não copia isso honestamente.

Registro condicional: a posição é real e sustentada pela infra confirmada, mas ainda não está provada no site. Só pode ser afirmada quando acompanhada da evidência listada em *Evidence on Hand*.

## Operating Context

- **Duas portas de contato, ambas válidas:** formulário estruturado (`/budget` e `/contact`, via Resend → `juan@loboczss.cloud`, com cópia para `juanmproducoes@gmail.com` e auto-resposta ao remetente) e **WhatsApp direto** em `+55 (68) 99255-2607`. O mercado brasileiro conversa por WhatsApp; o formulário existe para quem prefere formalizar.
- **Cena de avaliação real:** leitura provável no celular, sessão curta, decisão de mandar mensagem ou fechar a aba.
- **Mercado:** Brasil primeiro (PT é o locale padrão, sem prefixo de URL), inglês para o público de fora.
- **Deploy:** Coolify com Nixpacks, Node ≥ 22.12. O `package-lock.json` precisa carregar os binários opcionais de Linux (`npm install --os=linux --cpu=x64 --libc=glibc --save-optional --package-lock-only`), senão o build quebra. Detalhes em `DEPLOYMENT.md`.
- **Domínio:** `loboczss.cloud`.

## Capabilities and Constraints

**Stack existente:** Nuxt 4 / Vue 3 / Tailwind (`@nuxtjs/tailwindcss`), `@nuxtjs/i18n`, `@nuxtjs/color-mode`, Resend no servidor.

**Rotas:** `/`, `/services`, `/portfolio`, `/contact`, `/budget`, `/privacy`, `/delete-account`.

**Restrições duras:**

- **Bilíngue obrigatório.** Toda string visível vive em `i18n/locales/pt.json` e `en.json`. Estratégia `no_prefix`, padrão `pt`. Texto novo direto no template é um bug.
- **Tema único.** O modo claro foi removido na reconstrução, com liberação explícita do Juan: um portal de shader não tem modo claro. A fundação é a paleta Void.
- **Sem imagens de banco.** O fundo é um campo WebGL gerado e as vitrines são malhas SVG autoradas; `app/config/images.ts` foi removido junto com as fotos que posavam de screenshot.
- **`/privacy` e `/delete-account` são páginas legais.** Vieram de um app publicado em loja, hoje abandonado. Mantenha as rotas e o conteúdo até o Juan confirmar que a ficha do app saiu do ar. Elas não são prova de produto ativo.
- **`RESEND_API_KEY`** é obrigatório em produção; sem ele o formulário retorna erro 500.

**Explicitamente indefinido (não inventar):**

- Nomes, links e imagens dos projetos reais de clientes.
- Qual app foi publicado, em qual loja, e se a ficha ainda existe.
- Quais repositórios do GitHub servem de vitrine.
- Se `/portfolio` e `/services` ganham páginas de detalhe por projeto/serviço.
- Preços, pacotes ou faixas de investimento.

## Brand Commitments

- **Nome:** Loboczss. **Pessoa:** Juan Reis. Marca pessoal, não empresa.
- **Voz — correção confirmada pelo Juan:** é **uma pessoa, primeira pessoa**. O "nós construímos / nossa equipe / nossos serviços" espalhado por `pt.json` e `en.json` é artefato da geração inicial e representa mal o negócio. Deve ser reescrito para primeira pessoa. Essa reescrita está autorizada.
- **Canais oficiais:** `juan@loboczss.cloud` · `+55 (68) 99255-2607` · `github.com/loboczss` · `instagram.com/loboczss`.
- **Ativos existentes:** favicons claro/escuro em `public/`, fontes Outfit + Inter já carregadas.
- "The Neural Architect" é rótulo do mundo visual em `DESIGN.md`, não compromisso de produto — o trabalho visual pode substituí-lo.

## Evidence on Hand

**REAL — confirmado pelo Juan:**

- Pelo menos um **app publicado em loja**, hoje abandonado. As páginas `/privacy` e `/delete-account` nasceram dessa publicação.
- **Projetos entregues para clientes reais.** Nomes e detalhes ainda não fornecidos.
- **Código público** em `github.com/loboczss`.
- **Infraestrutura própria:** o servidor doméstico loboczss (Debian, Cloudflare Tunnel, n8n, Jellyfin, backups) e **este próprio site**, em Coolify. Hoje é a prova mais concreta que existe.

**FABRICADO — está no código e precisa sair. Nunca repetir:**

- Projetos **"Neural Defense"** e **"Vault Flow"** — não existem.
- Claim *"protegendo mais de US$ 500 milhões em ativos digitais"* — falsa.
- KPIs *"50+ Projetos Ativos"*, *"100% Satisfação"*, *"10x Ganho de Eficiência"*, *"24/7 Monitoramento I.A."* — todos inventados.
- Fotos de banco do Unsplash posando como screenshots de projeto (`app/config/images.ts`).
- Teatro de rodapé: *"STATUS DO SISTEMA: IDEAL"*, *"© 2024"* (ano defasado).

**AUSENTE — proibido fabricar:** nomes de clientes, depoimentos, métricas de resultado, estudos de caso, preços, tamanho de equipe, anos de experiência, certificações, prêmios, logos de clientes.

**PENDÊNCIA ABERTA:** o Juan precisa entregar os nomes reais dos projetos, o link do app, screenshots e os repositórios antes que qualquer afirmação de portfólio vá ao ar. Até lá, a seção de portfólio não pode alegar trabalho específico.

## Product Principles

1. **Nada não verificável entra no site.** Um portfólio honesto e curto vence um inflado. Toda claim precisa de lastro nomeável.
2. **O PME brasileiro desempata.** Clareza de escopo, prazo e próximo passo acima de sofisticação técnica exibida.
3. **Uma pessoa, primeira pessoa.** Nada de fachada de agência.
4. **Duas portas de contato, sem fricção.** Orçamento estruturado para quem formaliza, WhatsApp para quem quer resolver agora. Nenhuma das duas escondida.
5. **PT e EN de verdade.** Inglês não é tradução de segunda classe; o público internacional é real.

## Accessibility & Inclusion

Nenhum padrão formal foi estabelecido pelo Juan. Fatos relevantes já confirmados: audiência majoritariamente mobile, leitura em português com paridade em inglês, e preferência de tema do sistema respeitada com fallback escuro. Ambos os temas precisam ser legíveis de fato — o dark-first não pode deixar o modo claro quebrado.

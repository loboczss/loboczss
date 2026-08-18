/**
 * Direction contract, emitted into the served <body> so it survives the
 * production build and stays auditable. Vue strips template comments in prod
 * and `hooks` in nuxt.config only registers build-time Nuxt hooks, so this
 * has to be a Nitro runtime plugin. Seed key 20c4cb9b.
 */
const DIRECTION_CONTRACT = `<!--
THESIS: Um portal de shader em tela cheia onde o campo vivo E o produto: a
pagina prova na GPU do visitante que uma pessoa constroi e opera sistemas
vivos. Recusa a grade de cards sobre fundo chapado que todo portfolio de dev
entrega, e recusa o oposto previsivel, o editorial creme com serifada.
OWN-WORLD: Void #0B0620, Abyss #140C33, Echo #2A2152, Glimmer #5B4D9A, Mist
#8E86B7, e Incandescent #FF6A88 reservado a acao. Grotesca variavel (Archivo)
em eixo de largura: display enorme e leve, todo rotulo em caixa alta com
0.3em de tracking. Materiais: grao de filme fino, brilho liquido, malha
vetorial. Moldura de 1px, nunca preenchimento chapado.
STORY: O visitante entende que uma pessoa so constroi e mantem no ar;
acredita porque o site E a demonstracao rodando; e age no WhatsApp ou no
orcamento.
FIRST VIEWPORT: Shader ocupando tudo. Marca do lobo em malha vetorial dentro
do anel, topo esquerdo. LOBOCZSS em display gigante e leve, os oficios logo
ABAIXO do nome como conteudo (nunca acima como kicker: o craft floor proibe
sem excecao, e nem este contrato nem o card do mundo podem autorizar),
proposta em duas linhas, botao PEDIR ORCAMENTO com moldura e seta
incandescentes JA EM REPOUSO, porque a cena de leitura e um celular e :hover
nunca dispara la. No pe, a faixa de contato lisa e nivelada: WhatsApp e
e-mail lado a lado.
FORM: Portal de shader (desafiante de catalogo, registro bolder, escolhido
pelo usuario sobre a lider A Alcova). Seed key 20c4cb9b.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its
provenance
-->`

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.bodyPrepend.push(DIRECTION_CONTRACT)
  })
})

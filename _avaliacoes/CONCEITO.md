# CONCEITO — ideia em construção

> Documento vivo. Atualizado a cada avaliação diária com os aprendizados do estudo e o feedback do Alisson. Quando o Alisson escrever no FEEDBACK.md que o conceito está fechado, este arquivo vira guia de execução e para de expandir.

**Status: ABERTO** · Última atualização: 2026-06-12 (noite, 2ª execução)

## Essência
Portfólio **editorial bold** (referência estrutural: Estúdio Artefato) para um designer que transita entre 2D e 3D. O site é uma peça de design em si: tipografia gigante disciplinada, palco off-white neutro, cor como acento funcional (categorias), e motion sóbrio que informa em vez de decorar.
**Tese verbal do site (12/06 noite): "Ideia vira coisa."** — o portfólio inteiro conta a história de transformar ideia em objeto (marca, revista, render, produto impresso). Hero, seção de processo, CTAs e footer ecoam essa tese.

## Tipografia
- Poppins 800 uppercase para display (line-height .95, tracking −0.03em) + Inter para corpo. **Manter.**
- Direção (Type Wolf, 12/06): contraste de escala como motor; um peso de destaque por bloco; tracking aberto só em micro-labels.
- **Novo (Pangram Pangram, 12/06 noite): display como espécime** — palavra-chave vazada (`-webkit-text-stroke`, classe `.display-outline`) dá camada visual ao título sem nova cor. Aplicado nos heros das 4 páginas; aguardando veredito.
- A explorar: peso/estilo "voz editorial" para citações no sobre.html.

## Cor
- Paleta Leiautar: azul #2B3FD8 (primária/ação), vermelho #ED2647, laranja #FF8A00, verde #3FA110, off-white #F1F0EC, preto #1C1C1A.
- Regra (The Brand Identity, 12/06): com imagens reais, a cor do chrome recua — pills/thumbs são acento.
- Acessibilidade: pills vermelha/verde escurecidas (#C71B38 / #2E7A0C) — **mantidas pelo Alisson em 12/06**.
- Novo uso (12/06 noite): borda superior colorida nos passos do processo (azul→vermelho→laranja→verde) — cor como índice sequencial, mesmo papel funcional das pills.

## Layout / Grid
- Estrutura: header fino → hero display → marquee azul → seções em cards brancos → footer preto com CTA gigante. **Manter.**
- **Aplicado (12/06 noite): "ficha técnica" nos cards** (Fonts In Use + Visual Journal) — linha `.project-meta` (ferramenta · natureza) em micro-tipografia uppercase com borda superior. Aguardando veredito.
- **Aplicado (12/06 noite): seção "Como a ideia vira coisa"** na home — 4 passos numerados (Pesquisa, Conceito, Forma, Entrega) com número gigante e borda colorida. Storytelling de processo. Aguardando veredito.
- Futuro: páginas de detalhe por projeto (case study); os cards ainda não são clicáveis.

## Motion
Princípios: sóbrio, rápido (.2–.6s), `prefers-reduced-motion` sempre respeitado; hover **informa**, não decora.
- Mantidos pelo Alisson (12/06): reveal stagger, seta no hover, pausa do marquee, scroll-behavior condicionado.
- Novo (12/06 noite): stagger estendido à seção Processo (4 tempos); `:focus-visible` azul consistente em links/botões.
- A explorar: transição animada dos filtros de projeto (fade/slide dos cards ao filtrar).

## Tom de voz / textos
**Direção consolidada (12/06 noite): voz de pessoa, não de empresa** (Pop Up Grocer) + **títulos-afirmação em vez de rótulos** (It's Nice That).
- Títulos aplicados: "Ideia vira coisa aqui" (home) · "Feito à mão e à máquina" (projetos) · "Projeto, logo existo" (sobre) · "Me conta a ideia" (contato) · footer "Vamos dar forma a isso?".
- Seções renomeadas: "O que eu faço" → "Três frentes, um processo" · "Projetos em destaque" → "Direto da bancada".
- Descrições de projeto reescritas com gancho narrativo na 1ª frase ("E se o fim do mundo precisasse de direção de arte?").
- CTAs com personalidade: "Ver o que já virou" / "Trazer uma ideia".
- Tudo aguardando veredito visual — se rejeitado, voltar à versão do backup e registrar abaixo.

## Fluxo de trabalho (definido pelo Alisson em 12/06)
Melhorias **aplicadas direto no site** (com backup) para avaliação **visual**; veredito via FEEDBACK.md; rejeitado = revertido + listado abaixo. Dosagem: ≥1 mudança claramente perceptível por dia.

## Mantido pelo Alisson (aprovado visualmente)
- 12/06: pills escurecidas, stagger nos grids, seta no hover dos cards, pausa do marquee, scroll-behavior condicionado.

## Rejeitado pelo Alisson (nunca reaplicar)
- 12/06 noite: **seção "Como a ideia vira coisa"** (processo em 4 passos na home) — reverter na próxima execução e não reaplicar.
- 12/06 noite: **tom informal demais no contato** ("respondo… provavelmente com perguntas") — reescrever sóbrio; evitar gracinhas em CTAs/subs de contato.

## Correções pedidas (prioridade amanhã)
- projetos.html: **acentos do display sobrepõem a linha de cima** (line-height .95 + uppercase com acento, ex. "à máquina") — revisar line-height/espaçamento do `.display` sem perder o peso editorial.

## Decisões pendentes do Alisson
1. Veredito visual das mudanças de 12/06 noite (hero "Ideia vira coisa" + outline, seção Processo, ficha técnica, reescritas, footer novo).
2. Conferir se as **ferramentas citadas nas fichas técnicas** dos cards estão corretas (assumi Photoshop/InDesign/Illustrator/Blender por projeto — corrigir no HTML se necessário).
3. Destino dos arquivos órfãos (three-scene.js, publica.css, files/, files.zip, run.ps1) — usar o Motion.glb numa cena 3D no hero?
4. Links reais das redes sociais (hoje são "#").
5. `pt / en` decorativo no nav — remover ou ativar?

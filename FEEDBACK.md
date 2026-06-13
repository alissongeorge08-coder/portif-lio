# FEEDBACK — Alisson ⇄ Claude

> **Como funciona:** as melhorias do dia **já são aplicadas direto no site** (sempre com backup em `_backups\`). Você abre o site, **vê o resultado** e escreve aqui o veredito: o que fica, o que reverte, o que quer diferente. O que você rejeitar é restaurado do backup e nunca reaplicado.
>
> - **Manter:** "Mantém a mudança X" (ou só não comente — silêncio = segue em observação).
> - **Reverter:** "Reverte a mudança X" — restauro do backup no dia seguinte (ou reverta você mesmo copiando o arquivo de `_backups\<data>\` de volta).
> - **Fechar o conceito:** quando `_avaliacoes\CONCEITO.md` estiver do seu gosto, escreva "conceito aprovado/fechado".
>
> Relatórios diários em `_avaliacoes\AAAA-MM-DD.md` · estudos em `_avaliacoes\estudos\`.

---

## Links para ver o site (Ctrl+F5 para atualizar o CSS)
- [Home](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/index.html)
- [Projetos](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/projetos.html)
- [Sobre](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/sobre.html)
- [Contato](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/contato.html)

## Aplicado em 2026-06-12 (noite) — aguardando seu veredito visual
Backup: `_backups\2026-06-12-2100\` (4 HTML + css/style.css + js/main.js). Reversão total: copiar tudo de volta por cima.
**Abra com Ctrl+F5** (o CSS mudou de versão).

1. **Nova seção "Como a ideia vira coisa"** (4 passos com número gigante e borda colorida) — [index.html](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/index.html)
2. **Heros com palavra vazada (outline)** nas 4 páginas — [index](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/index.html) · [projetos](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/projetos.html) · [sobre](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/sobre.html) · [contato](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/contato.html)
3. **Textos novos em tudo**: "Ideia vira coisa aqui" / "Feito à mão e à máquina" / "Projeto, logo existo" / "Me conta a ideia", seções "Três frentes, um processo" e "Direto da bancada", bio reescrita, descrições com gancho, CTAs novos, footer "Vamos dar forma a isso?" — todas as páginas
4. **Ficha técnica nos cards** (FERRAMENTA · NATUREZA) — [projetos.html](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/projetos.html) e [home](file:///C:/Users/AGeor/OneDrive/Imagens/SITE_LAB/lab-interface/index.html). *Confira se as ferramentas que citei estão certas!*
5. **Foco visível azul** ao navegar com Tab (acessibilidade) — qualquer página

Detalhes e reversão individual: `_avaliacoes\2026-06-12-noite.md`.

## Aplicado em 2026-06-12 — aguardando seu veredito visual
Backup: `_backups\2026-06-12-1845\` (só `css/style.css` foi alterado)

1. **Pills vermelha e verde mais escuras** (contraste WCAG) — veja nos cards de projetos e no sobre.html.
2. **Reveal em cascata** — recarregue index.html ou projetos.html e veja os cards entrarem em sequência.
3. **Seta no hover dos cards de projeto** — passe o mouse sobre qualquer card.
4. **Marquee pausa no hover** — passe o mouse sobre a faixa azul da home.
5. **Scroll suave desativado p/ quem prefere menos movimento** (invisível no uso normal).

Reversão total: copie `_backups\2026-06-12-1845\css\style.css` por cima de `css\style.css`.

## Suas anotações

_(escreva abaixo desta linha)_

- **(2026-06-12, via chat) Alisson:** mudanças de 12/06 visualizadas — veredito **positivo, manter tudo**. Não percebi mudanças significativas; nas próximas execuções fazer alterações **mais substanciais e perceptíveis**, e também pensar **novas ideias e novas abordagens para os textos** descritos nas seções.
- **(2026-06-12 noite, via chat) Alisson — veredito das mudanças da noite:**
  - **REVERTER:** seção "Como a ideia vira coisa" (não gostou).
  - **REVERTER:** informalidade no contato — "respondo em até 48h, provavelmente com perguntas" (reescrever mais sóbrio).
  - **CORRIGIR:** em projetos.html, os **acentos do título ficaram sobre o texto de cima** (ex.: "à máquina") — repensar os espaçamentos/line-height do display.
  - **MANTER:** todo o resto (outline nos heros, fichas técnicas, demais textos, footer, foco visível).

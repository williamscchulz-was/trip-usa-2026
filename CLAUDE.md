# CLAUDE.md

Contexto pra Claude Code ao trabalhar neste projeto.

## Sobre

Apresentação HTML single-page com roteiro de viagem em família pelos EUA (dez 2026 – jan 2027). Audiência: 6 adultos + 1 bebê. Documento interno pra planejamento e compartilhamento no grupo familiar.

## Stack

- HTML + CSS vanilla em **single file** (`index.html`)
- Fontes Google: DM Sans + JetBrains Mono
- Imagens via loremflickr.com (placeholder dinâmico por keywords)
- **Sem build step, sem JS framework, sem dependencies**

## Design system

### Paleta (travada)
```
--ink:        #26282B   /* base escura */
--ink-2:      #353941   /* escuro secundário */
--ink-muted:  #8E939C   /* texto apagado */
--blue:       #5F85DB   /* primary accent */
--blue-light: #90B8F8   /* secondary accent */
--paper:      #FFFFFF
--bg:         #FAFBFC
--bg-2:       #F4F6F9
--border:     #E6E9EE
```

### Tipografia
- **DM Sans** pra tudo (300/400/500)
- **JetBrains Mono** só pra datas, códigos de voo, labels de seção e metadados (uppercase, letter-spacing 0.08–0.15em)

### Princípios
- Editorial minimal, Swiss grid, estilo Linear/Vercel/Framer
- Nunca usar serifas (incluindo italic)
- Azul é o **único** accent — sem outras cores
- Peso 300 pros títulos grandes, 500 pros destaques
- Números em display são o principal recurso visual
- Respeitar a paleta travada — não introduzir cores novas

## Estrutura do documento

1. Nav sticky (Schulz · Horn · Pitz)
2. Hero dark com foto de backdrop + lista de 6 destinos
3. Stats (17 noites / 6 destinos / 6+1 / 2 feriados)
4. §01 Voos (ida + volta)
5. §02 Itinerário timeline horizontal
6. 6 × City section (visual 21:9 + meta sticky + destaques + galeria 2×1 + notas)
7. §03 Louise (seção invertida dark, grid 3×2)
8. §04 Grupo (logística 2×3)
9. Footer

## Preferências de comunicação

- Responder em português casual americanizado (usa IMO, FYI, OFC)
- Curto e direto ao ponto
- Pra decisões de design: mostrar opção e seguir, não perguntar demais

## Workflows comuns

- **Adicionar cidade:** copiar bloco `.city` existente, trocar conteúdo, manter estrutura
- **Ajustar foto:** trocar `src` das tags `<img>` — qualquer URL pública funciona
- **Nova seção tipo §:** usar o padrão `section.block` com `.section-head` (index + title + sub)
- **Print/PDF:** já tem `@media print` no CSS, Ctrl+P → Save as PDF

## Coisas que NÃO fazer

- Não adicionar libs externas (Tailwind, jQuery, frameworks)
- Não quebrar em múltiplos arquivos sem motivo forte
- Não introduzir novas cores fora da paleta
- Não usar serifas
- Não adicionar animações pesadas (só hover sutil existente)

## TODO ativo

Ver seção "Próximos passos" no README.md.

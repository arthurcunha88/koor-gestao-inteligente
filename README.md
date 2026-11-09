# Koor — Gestão Inteligente

**Hub digital de aprendizagem e aplicação prática da liderança.**

**Concepção, direção do projeto e autoria:** **Arthur Andrade Cunha** ([arthurcunha88](https://github.com/arthurcunha88)).

A **Koor — Gestão Inteligente** reúne referências de gestão de pessoas, filosofia, psicologia organizacional e administração em um ambiente digital de estudo, reflexão e prática. A proposta é ajudar lideranças a coordenar esforços com clareza, responsabilidade, escuta, pensamento crítico e critérios verificáveis, sem apresentar receitas universais.

O nome Koor foi inspirado pela ideia de **coordenação**, associada ao húngaro *koordinálás*, e evoca foneticamente *core* (núcleo, essência). O conceito visual parte de um círculo que representa o núcleo e de um **K** em espaço negativo que sugere direção e alinhamento. É um conceito de marca, não uma etimologia literal do nome.

## O que você encontra no site

O conteúdo está organizado em **cinco trilhas**:

1. **Gestão de pessoas e autonomia:** desenvolvimento, delegação, motivação e segurança psicológica.
2. **Comunicação e feedback:** escuta, conversas difíceis e acordos de melhoria.
3. **Tomada de decisão e pensamento crítico:** vieses, critérios, incerteza e análise de riscos.
4. **Gestão de conflitos e negociação:** interesses, posições, mediação e responsabilidade.
5. **Ética e confiança:** integridade, coerência, justiça e credibilidade.

Cada trilha apresenta fundamentos teóricos, contrapontos, casos para análise, indicadores orientativos e um plano curto de aplicação.

O **Laboratório** inclui ferramentas de preparação de feedback, reflexão sobre delegação e registro de decisões. A **Biblioteca** organiza 24 fontes e referências. O progresso de práticas e algumas escolhas são armazenados **localmente no navegador**, via `localStorage`; não existe conta de usuário, banco de dados ou sincronização.

## Direção de arte

A interface segue uma linguagem editorial, com assimetria, espaço negativo, tipografia funcional, progressão de leitura discreta e fotografias de situações de liderança. A paleta é baseada no manual de marca da Koor, com papel/off-white, areia, cacau e marrom. A identidade visual evita componentes repetitivos, microtextos ornamentais excessivos e efeitos de movimento sem função.

As **imagens editoriais** em `assets/` foram **geradas por inteligência artificial** para este protótipo, e **não** são fotografias documentais de pessoas ou eventos reais.

## Estrutura do projeto

```text
koor-gestao-inteligente/
├── index.html                 # interface, conteúdo, estilos e interatividade
├── assets/
│   ├── logo.svg              # símbolo Koor
│   ├── hero-team.jpg         # reunião de equipe — imagem gerada por IA
│   ├── coaching.jpg          # conversa individual — imagem gerada por IA
│   └── workshop.jpg          # oficina de planejamento — imagem gerada por IA
└── README.md
```

## Execução local

O projeto é um site **estático**, desenvolvido com **HTML, CSS e JavaScript**, sem bibliotecas ou processo de compilação obrigatórios.

Você pode abrir `index.html` diretamente no navegador. Para executar com servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação na Vercel

1. Acesse [Vercel — New Project](https://vercel.com/new) e conecte sua conta GitHub.
2. Importe o repositório `arthurcunha88/koor-gestao-inteligente`.
3. Escolha **Framework Preset: Other** e **Root Directory: ./**.
4. Use a configuração padrão para publicação estática, sem comando de build.
5. Clique em **Deploy**. Os commits futuros na branch de produção poderão acionar novas publicações.

> A conexão GitHub → Vercel é uma etapa de publicação; enviar arquivos ao GitHub não publica automaticamente o site se ainda não houver um projeto Vercel conectado.

## Referências e créditos intelectuais

Os materiais do hub são **sínteses pedagógicas e aplicações autorais** baseadas em obras e pesquisas. **Não** reproduzem integralmente capítulos, livros ou artigos, e as explicações **não são citações literais** dos autores. Para consulta, consulte também a biblioteca dentro do site.

### Obras de base e perspectivas de liderança

- **Simon Sinek** — *Start with Why* / *Comece pelo porquê* (2009). [Página do autor](https://simonsinek.com/books/start-with-why).
- **James C. Hunter** — *The Servant* / *O monge e o executivo* (1998). [Editora](https://www.penguinrandomhouse.com/books/84466/the-servant-by-james-c-hunter/).
- **Ram Charan, Stephen Drotter e James Noel** — *The Leadership Pipeline* / *Pipeline de liderança* (2000). [Página do autor](https://ram-charan.com/books/the-leadership-pipeline/).
- **Paulo Freire** — *Pedagogia da autonomia* (1996).
- **Richard M. Ryan e Edward L. Deci** — teoria da autodeterminação e motivação (2000).
- **Amy Edmondson** — segurança psicológica e aprendizagem em equipes (1999).
- **Peter F. Drucker** — *The Effective Executive* (1967).
- **Daniel Goleman** — *Leadership That Gets Results* (2000).

### Comunicação e feedback

- **Edgar H. Schein** — *Humble Inquiry* (2013).
- **Marshall B. Rosenberg** — *Nonviolent Communication: A Language of Life*.
- **Kim Scott** — estudos e publicações sobre feedback e liderança.
- **Douglas Stone e Sheila Heen** — *Thanks for the Feedback* (2014).

### Decisões e pensamento crítico

- **Herbert A. Simon** — *Administrative Behavior* (1947).
- **Amos Tversky e Daniel Kahneman** — *Judgment under Uncertainty: Heuristics and Biases* (1974).
- **Gary Klein** — *Performing a Project Premortem* (2007).
- **Philip E. Tetlock e Dan Gardner** — *Superforecasting* (2015).

### Conflitos e negociação

- **Mary Parker Follett** — textos e palestras sobre administração e conflito.
- **Roger Fisher, William Ury e Bruce Patton** — *Getting to Yes*.
- **Kenneth Thomas e Ralph Kilmann** — *Thomas–Kilmann Conflict Mode Instrument*.
- **Douglas Stone, Bruce Patton e Sheila Heen** — *Difficult Conversations*.

### Ética e confiança

- **Aristóteles** — ética das virtudes, com apoio em material acadêmico de referência.
- **Roger C. Mayer, James H. Davis e F. David Schoorman** — *An Integrative Model of Organizational Trust* (1995).
- **James M. Kouzes e Barry Z. Posner** — *The Leadership Challenge*.
- **Michael E. Brown, Linda K. Treviño e David A. Harrison** — *Ethical Leadership: A Social Learning Perspective* (2005).

**Créditos de produção:** o projeto foi concebido e dirigido por **Arthur Andrade Cunha**, com **assistência de inteligência artificial** na pesquisa inicial, organização do conteúdo, redação de sínteses, criação de imagens e implementação do protótipo em frontend. A presença de uma referência nesta lista indica inspiração ou fundamentação conceitual; **não** implica endosso, participação ou afiliação dos autores à Koor.

## Uso, limitações e responsabilidade

- O conteúdo é **educacional**: não substitui avaliação profissional, políticas de recursos humanos ou normas internas.
- Ferramentas, exercícios e indicadores são instrumentos de reflexão, **não testes psicométricos validados**.
- O armazenamento local não oferece backup/sincronização; limpar os dados do navegador pode apagar o progresso.
- O uso de marcas, títulos de obras e links de referência ocorre para **identificação bibliográfica**.
- **Não há licença open-source concedida neste repositório por padrão.** Para utilização, distribuição ou adaptação do código e identidade visual fora do projeto, entre em contato com o autor.

---

**Koor — Gestão Inteligente** · Idealização e direção: **Arthur Andrade Cunha**.

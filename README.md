# Koor — Gestão Inteligente

> Hub de aprendizado aplicado para quem lidera pessoas, coordena trabalho e toma decisões.

**Idealização, autoria e direção do projeto: Arthur Andrade Cunha** — [@arthurcunha88](https://github.com/arthurcunha88).

A **Koor** reúne estudos de liderança em cinco trilhas, apoiados em autores da administração, da educação, da filosofia e da psicologia organizacional. O foco é combinar **evidências, contexto e prática**, evitando recomendações universais ou slogans gerenciais.

## O que o site oferece

- **Gestão de pessoas e autonomia** — desenvolvimento, motivação e delegação.
- **Comunicação e feedback** — escuta, alinhamento e conversas difíceis.
- **Decisão e pensamento crítico** — vieses, critérios e decisões sob incerteza.
- **Conflitos e negociação** — interesses, mediação e acordos.
- **Ética e confiança** — coerência, integridade e justiça organizacional.

Cada trilha apresenta fundamentos, análise de caso, contrapontos, indicadores de reflexão e um plano prático. O **Laboratório** oferece preparação de feedback, reflexão sobre delegação e registro de decisões. A **Biblioteca** reúne 24 fontes, inclusive os livros indicados para a construção do projeto.

O progresso de ações e respostas de casos é mantido no **localStorage** do navegador. Não há banco de dados, autenticação, sincronização entre dispositivos ou coleta das respostas por servidor.

## Arquitetura — TypeScript + Vite

A versão inicial era um protótipo de HTML único. Esta versão migrou **100% da lógica e dos dados para TypeScript**, mantendo HTML como ponto de entrada e CSS como linguagem de apresentação. A migração preserva o conteúdo, as cinco trilhas, as ferramentas e a navegação.

```text
.
├── index.html                   # estrutura inicial do documento
├── public/
│   └── assets/                 # imagens editoriais e símbolo Koor
├── src/
│   ├── main.ts                 # inicialização, rotas e eventos de interface
│   ├── types.ts                # modelos tipados do domínio
│   ├── core/
│   │   ├── context.ts          # utilitários, estado e persistência local
│   │   └── layout.ts           # cabeçalho, rodapé e movimento
│   ├── data/
│   │   ├── index.ts            # agregação das fontes e trilhas
│   │   ├── topics.ts           # agregação dos cinco temas
│   │   ├── topics/             # dados de cada tema separados
│   │   ├── lenses.ts           # três lentes: Sinek, Hunter e Charan
│   │   └── sources.ts          # referências bibliográficas
│   ├── views/
│   │   ├── home.ts             # página inicial
│   │   ├── tracks.ts           # catálogo de trilhas
│   │   ├── topic.ts            # estudo e prática por trilha
│   │   ├── laboratory.ts       # ferramentas interativas
│   │   ├── library.ts          # biblioteca e modelos
│   │   └── about.ts            # conceito e método Koor
│   └── styles/
│       ├── base.css            # tokens e base
│       ├── editorial.css       # componentes e grids
│       └── refinements.css     # ajustes visuais e responsividade
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

### Rodar localmente

Requer Node.js atualizado (recomendado **22 LTS** ou superior).

```bash
npm install
npm run dev
```

O Vite informará a URL do servidor de desenvolvimento, geralmente `http://localhost:5173`.

### Verificar tipos e compilar

```bash
npm run typecheck
npm run build
npm run preview
```

A compilação gera a pasta **dist/**. O TypeScript faz parte do código-fonte; o navegador recebe JavaScript compilado. Não é necessário inserir scripts compilados manualmente no repositório.

### Publicar pela Vercel

1. Na Vercel, selecione **Add New → Project** e importe este repositório GitHub.
2. Escolha **Framework Preset: Vite**; a configuração `vercel.json` já define `npm run build` e `dist`.
3. Defina **Root Directory: `./`** e publique.
4. Commits posteriores na branch `main` poderão criar novos deploys automaticamente, quando a integração estiver configurada.

**Não** há variáveis de ambiente obrigatórias ou backend nesta versão.

## Atualização editorial das imagens e do rodapé

O site utiliza imagens de liderança geradas por inteligência artificial, com tratamento e otimização WebP para melhorar o carregamento. Os arquivos `koor-collaboration.webp`, `koor-mentoring.webp`, `koor-workshop.webp` e `koor-footer.webp` ilustram respectivamente coordenação, mentoria, trabalho coletivo e encerramento de uma sessão. São imagens conceituais, não registros fotográficos de reuniões reais.

O rodapé é intencionalmente compacto: reúne uma fotografia panorâmica, navegação essencial e atribuição explícita de autoria a **Arthur Andrade Cunha**. As referências bibliográficas completas continuam disponíveis na Biblioteca e neste README.

## Direção de arte e identidade

A Koor foi pensada como uma experiência editorial, não um template de SaaS. Usa grid assimétrico, tipografia de contraste e movimentos funcionais, com leitura clara e espaço negativo. O núcleo visual deriva do manual de marca fornecido pelo autor: **marrom Koor `#6B3E26`**, **areia `#EADBCF`**, **cacau `#2E1A10`** e **off-white `#FAF6F1`**.

As três fotografias editoriais foram **geradas por inteligência artificial para o protótipo** e ilustram situações hipotéticas: reunião, coaching e workshop. Não representam pessoas ou eventos específicos.

## Referências bibliográficas e créditos intelectuais

Os textos são **sínteses pedagógicas e interpretações aplicadas**, não transcrições das obras. A presença de um autor na biblioteca identifica influência conceitual, **não** participação ou endosso à Koor. As ferramentas e os indicadores são materiais didáticos próprios, sem pretensão de validação psicométrica.

### Três obras especialmente relacionadas à concepção

- **Simon Sinek** — *Start with Why / Comece pelo porquê* (2009). [Site do autor](https://simonsinek.com/books/start-with-why).
- **James C. Hunter** — *The Servant / O monge e o executivo* (1998). [Editora](https://www.penguinrandomhouse.com/books/84466/the-servant-by-james-c-hunter/).
- **Ram Charan, Stephen Drotter e James Noel** — *The Leadership Pipeline / Pipeline de liderança* (2000). [Página do autor](https://ram-charan.com/books/the-leadership-pipeline/).

Os links externos de resumos indicados durante a concepção foram utilizados como **materiais de consulta**, sem redistribuir PDFs ou textos protegidos por direitos autorais neste repositório.

### Catálogo de referências presentes no hub

- **Paulo Freire** — *Pedagogia da autonomia* (1996). [Consultar referência](https://bds.unb.br/handle/123456789/622).
- **Richard M. Ryan & Edward L. Deci** — *Self-determination theory and the facilitation of intrinsic motivation* (2000). [Consultar referência](https://pubmed.ncbi.nlm.nih.gov/11392867/).
- **Amy Edmondson** — *Psychological Safety and Learning Behavior in Work Teams* (1999). [Consultar referência](https://dash.harvard.edu/entities/publication/13a7b031-0fdd-45ec-a7e0-2b80e2bc679f).
- **Peter F. Drucker** — *The Effective Executive* (1967). [Consultar referência](https://www.routledge.com/The-Effective-Executive/Drucker/p/book/9781138470101).
- **Daniel Goleman** — *Leadership That Gets Results* (2000). [Consultar referência](https://hbr.org/2000/03/leadership-that-gets-results).
- **Edgar H. Schein** — *Humble Inquiry* (2013). [Consultar referência](https://www.oreilly.com/library/view/humble-inquiry/9781609949815/).
- **Marshall B. Rosenberg** — *Nonviolent Communication: A Language of Life*. [Consultar referência](https://nonviolentcommunication.com/product/nvc/).
- **Kim Scott** — *Understand What Motivates Each Person on Your Team* (2017). [Consultar referência](https://onlinelibrary.wiley.com/doi/full/10.1002/ltl.20319).
- **Douglas Stone & Sheila Heen** — *Thanks for the Feedback* (2014). [Consultar referência](https://www.penguinrandomhouse.com/books/313485/thanks-for-the-feedback-by-douglas-stone-and-sheila-heen/).
- **Herbert A. Simon** — *Administrative Behavior* (1947). [Consultar referência](https://books.google.com/books/about/Administrative_Behavior.html?id=HISz4n8xfkIC).
- **Amos Tversky & Daniel Kahneman** — *Judgment under Uncertainty: Heuristics and Biases* (1974). [Consultar referência](https://pubmed.ncbi.nlm.nih.gov/17835457/).
- **Gary Klein** — *Performing a Project Premortem* (2007). [Consultar referência](https://hbr.org/2007/09/performing-a-project-premortem).
- **Philip E. Tetlock & Dan Gardner** — *Superforecasting* (2015). [Consultar referência](https://www.penguinrandomhouse.com/books/227815/superforecasting-by-philip-e-tetlock-and-dan-gardner/).
- **Mary Parker Follett** — *Conferências sobre administração e conflito* (1926). [Consultar referência](https://rowntree.exeter.ac.uk/items/show/608).
- **Roger Fisher, William Ury & Bruce Patton** — *Getting to Yes*. [Consultar referência](https://www.pon.harvard.edu/shop/getting-to-yes-negotiating-agreement-without-giving-in/).
- **Kenneth Thomas & Ralph Kilmann** — *Thomas–Kilmann Conflict Mode Instrument*. [Consultar referência](https://www.themyersbriggs.com/en-US/Products-and-Services/TKI).
- **Douglas Stone, Bruce Patton & Sheila Heen** — *Difficult Conversations* (2023). [Consultar referência](https://www.pon.harvard.edu/shop/difficult-conversations-how-to-discuss-what-matters-most/).
- **Aristóteles** — *Aristotle’s Ethics*. [Consultar referência](https://plato.stanford.edu/entries/aristotle-ethics/).
- **Roger C. Mayer, James H. Davis & F. David Schoorman** — *An Integrative Model of Organizational Trust* (1995). [Consultar referência](https://doi.org/10.5465/AMR.1995.9508080335).
- **James M. Kouzes & Barry Z. Posner** — *The Leadership Challenge* (2023). [Consultar referência](https://www.wiley.com/en-us/The+Leadership+Challenge%3A+How+to+Make+Extraordinary+Things+Happen+in+Organizations%2C+7th+Edition-p-9781119736127).
- **Michael E. Brown, Linda K. Treviño & David A. Harrison** — *Ethical Leadership: A Social Learning Perspective* (2005). [Consultar referência](https://doi.org/10.1016/j.obhdp.2005.03.002).
- **Simon Sinek** — *Start with Why / Comece pelo porquê* (2009). [Consultar referência](https://simonsinek.com/books/start-with-why).
- **James C. Hunter** — *The Servant / O monge e o executivo* (1998). [Consultar referência](https://www.penguinrandomhouse.com/books/84466/the-servant-by-james-c-hunter/).
- **Ram Charan, Stephen Drotter & James Noel** — *The Leadership Pipeline / Pipeline de liderança* (2000). [Consultar referência](https://ram-charan.com/books/the-leadership-pipeline/).

### Produção e créditos

- **Arthur Andrade Cunha:** autoria, concepção do projeto, direcionamento editorial e de identidade, seleção dos materiais e decisões de produto.
- **Assistência de IA:** apoio na redação de sínteses, organização do acervo, geração de imagens e desenvolvimento/refatoração do frontend. O uso de IA não transfere a autoria ou o direcionamento da proposta a terceiros.
- **Pesquisadores e autores listados acima:** créditos pelas ideias e obras referenciadas, sem afiliação ou endosso implícitos.

## Limitações e próximos passos

Esta versão é educativa, sem autenticação ou acompanhamento institucional. Recomendações não substituem avaliação especializada nem políticas de organizações. Uma evolução futura pode incluir persistência segura por usuário, editores de conteúdo, trilhas com acessibilidade ampliada, testes automatizados e relatórios de aprendizagem. Priorize esses recursos a partir de necessidades validadas.

**Direitos e utilização:** a publicação do código neste repositório não implica concessão de licença open-source para uso externo. Entre em contato com o autor antes de redistribuir ou comercializar a marca, os textos e o código.

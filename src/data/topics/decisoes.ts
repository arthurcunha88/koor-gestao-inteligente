import type { Topic } from '../../types';

export const decisoes: Topic = {
  "id": "decisoes",
  "num": "03",
  "short": "Decisão & pensamento",
  "title": "Decidir com rigor, mesmo sem certeza.",
  "eyebrow": "DECISÃO E PENSAMENTO CRÍTICO",
  "lead": "Uma decisão boa não é aquela que sempre dá certo; é aquela cujo processo torna hipóteses, riscos e critérios discutíveis.",
  "challenge": "Pressa, confiança excessiva e informações incompletas costumam parecer convicção — até a realidade contrariá-las.",
  "signal": "Critérios são registrados antes da decisão e as hipóteses podem ser revisadas.",
  "question": "Em que decisão recente uma hipótese foi tratada como fato?",
  "foundations": [
    {
      "name": "Reconheça a racionalidade limitada",
      "author": "Herbert A. Simon",
      "work": "Administrative Behavior · 1947",
      "text": "As pessoas decidem com tempo e informações limitadas. O objetivo não é esperar onisciência, mas tornar explícitas as restrições do processo.",
      "apply": "Declare a informação que falta e estabeleça quando a decisão precisa ocorrer."
    },
    {
      "name": "Identifique atalhos cognitivos",
      "author": "Tversky & Kahneman",
      "work": "Science · 1974",
      "text": "Heurísticas ajudam a julgar rapidamente, mas podem introduzir vieses sistemáticos. A impressão inicial não substitui a checagem de evidências.",
      "apply": "Peça uma interpretação alternativa antes da aprovação final."
    },
    {
      "name": "Imagine o fracasso antes de agir",
      "author": "Gary Klein",
      "work": "Performing a Project Premortem · 2007",
      "text": "No pré-mortem, o grupo supõe que a iniciativa falhou e levanta razões possíveis. A técnica pode revelar riscos ignorados.",
      "apply": "Pergunte “se isso falhar em um mês, qual terá sido a causa?”."
    },
    {
      "name": "Atualize crenças com novas evidências",
      "author": "Tetlock & Gardner",
      "work": "Superforecasting · 2015",
      "text": "Previsões e julgamentos podem melhorar com decomposição, probabilidades e revisão. O líder não precisa defender eternamente a primeira resposta.",
      "apply": "Anote o que faria você mudar de ideia."
    }
  ],
  "cycle": {
    "name": "Ciclo D-E-C-I",
    "subtitle": "Procedimento prático Koor; não se trata de uma escala acadêmica validada.",
    "steps": [
      [
        "Definir",
        "Delimite a decisão, os envolvidos e o prazo."
      ],
      [
        "Evidenciar",
        "Liste dados, hipóteses e lacunas separadamente."
      ],
      [
        "Comparar",
        "Avalie opções por critérios e riscos."
      ],
      [
        "Inspecionar",
        "Registre razões e uma data de revisão."
      ]
    ]
  },
  "traps": [
    [
      "Confiança ≠ competência",
      "Pessoas seguras podem estar mal informadas; evidências importam."
    ],
    [
      "Resultado ≠ processo",
      "Uma escolha mal fundamentada pode dar certo por sorte."
    ],
    [
      "Rigor ≠ lentidão",
      "Decisões reversíveis pedem menos burocracia que compromissos de alto custo."
    ]
  ],
  "scenario": {
    "title": "Um fornecedor precisa ser escolhido hoje",
    "context": "Há três propostas, orçamento limitado e evidências incompletas sobre o prazo de entrega.",
    "choices": [
      [
        "Escolher o menor preço sem comparar riscos.",
        "Economiza tempo inicial, mas pode ignorar falhas críticas de execução."
      ],
      [
        "Adiar indefinidamente até ter certeza completa.",
        "A busca por certeza pode destruir a oportunidade."
      ],
      [
        "Comparar critérios essenciais, registrar suposições e definir uma revisão.",
        "Permite agir com limites explícitos e corrigir se surgirem dados novos."
      ]
    ],
    "best": 2
  },
  "plan": [
    [
      "Dia 1",
      "Selecionar uma decisão",
      "Escolha uma decisão real e relevante."
    ],
    [
      "Dia 2",
      "Definir critérios",
      "Escreva os fatores que realmente importam."
    ],
    [
      "Dia 4",
      "Fazer um pré-mortem",
      "Antecipe três motivos plausíveis de falha."
    ],
    [
      "Dia 7",
      "Registrar revisão",
      "Agende uma verificação de resultados e premissas."
    ]
  ],
  "metrics": [
    [
      "Decisões documentadas",
      "Escolhas relevantes com opções, critérios e responsáveis.",
      "Evitar registros para decisões triviais."
    ],
    [
      "Hipóteses testadas",
      "Premissas críticas revistas antes ou após agir.",
      "Não confundir quantidade de testes com qualidade."
    ],
    [
      "Reversões fundamentadas",
      "Mudanças realizadas com nova evidência documentada.",
      "Mudar de ideia não deve ser automaticamente punido."
    ]
  ],
  "refs": [
    "simon",
    "tversky-kahneman",
    "klein",
    "tetlock",
    "sinek"
  ]
};

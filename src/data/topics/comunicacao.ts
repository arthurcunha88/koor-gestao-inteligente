import type { Topic } from '../../types';

export const comunicacao: Topic = {
  "id": "comunicacao",
  "num": "02",
  "short": "Comunicação & feedback",
  "title": "Clareza é uma forma de respeito.",
  "eyebrow": "COMUNICAÇÃO E FEEDBACK",
  "lead": "Conversas produtivas combinam escuta genuína, fatos verificáveis, expectativas explícitas e compromisso com a próxima ação.",
  "challenge": "A maior parte dos ruídos não nasce da falta de palavras, mas de expectativas que nunca foram realmente compartilhadas.",
  "signal": "Ao fim da conversa, as pessoas conseguem repetir o acordo com o mesmo significado.",
  "question": "Que conversa você está adiando, e qual fato objetivo tornaria sua abordagem mais justa?",
  "foundations": [
    {
      "name": "Pergunte antes de interpretar",
      "author": "Edgar H. Schein",
      "work": "Humble Inquiry · 2013",
      "text": "A investigação humilde valoriza perguntas sinceras, especialmente quando há assimetria de autoridade. A intenção é compreender antes de propor respostas.",
      "apply": "Comece com “o que tornou esta entrega difícil?” e escute sem interromper."
    },
    {
      "name": "Separe fato, sentimento e pedido",
      "author": "Marshall Rosenberg",
      "work": "Nonviolent Communication",
      "text": "A comunicação não violenta diferencia observações de interpretações e propõe explicitar necessidades e pedidos. Não é evitar assuntos difíceis.",
      "apply": "Troque “você é descomprometido” por “o prazo de terça passou sem atualização”."
    },
    {
      "name": "Combine cuidado com franqueza",
      "author": "Kim Scott",
      "work": "Leader to Leader · 2017",
      "text": "Dar atenção à pessoa e desafiar diretamente comportamentos ou resultados são dimensões complementares de feedback, não polos incompatíveis.",
      "apply": "Nomeie o problema sem diminuir quem está envolvido."
    },
    {
      "name": "Receber feedback também é uma habilidade",
      "author": "Stone & Heen",
      "work": "Thanks for the Feedback · 2014",
      "text": "O valor de um retorno depende de como ele é interpretado e trabalhado. O líder deve verificar sua própria defensividade e pedir exemplos concretos.",
      "apply": "Pergunte “o que eu deveria fazer diferente na próxima semana?”."
    }
  ],
  "cycle": {
    "name": "Ciclo C-O-A-C",
    "subtitle": "Síntese operacional Koor a partir dos fundamentos do material original.",
    "steps": [
      [
        "Contextualizar",
        "Cite os fatos e os acordos anteriores, sem supor intenções."
      ],
      [
        "Ouvir",
        "Convide a outra pessoa a descrever o contexto e os obstáculos."
      ],
      [
        "Alinhar",
        "Combine resultado, restrições, prazo e padrão de qualidade."
      ],
      [
        "Concluir",
        "Confirme o entendimento e registre o ponto de revisão."
      ]
    ]
  },
  "traps": [
    [
      "Clareza ≠ dureza",
      "Tom agressivo pode obscurecer a mensagem e desestimular perguntas."
    ],
    [
      "Feedback ≠ correção de erro",
      "Reconhecimento específico mostra quais comportamentos repetir."
    ],
    [
      "Escutar ≠ concordar",
      "Você pode compreender uma justificativa e manter um compromisso necessário."
    ]
  ],
  "scenario": {
    "title": "Dois prazos foram perdidos",
    "context": "Uma pessoa não entregou uma atividade em duas ocasiões. A equipe começa a especular sobre a causa.",
    "choices": [
      [
        "Cobrar publicamente para servir de exemplo.",
        "Pode expor sem compreender as causas e prejudicar a confiança."
      ],
      [
        "Evitar o tema para não criar desconforto.",
        "Mantém o problema e transfere incerteza para o resto do time."
      ],
      [
        "Conversar em particular com fatos, ouvir obstáculos e fechar um novo acordo.",
        "Preserva a dignidade e produz um compromisso verificável."
      ]
    ],
    "best": 2
  },
  "plan": [
    [
      "Dia 1",
      "Mapear um ruído",
      "Escolha um alinhamento recorrente que não foi nomeado."
    ],
    [
      "Dia 2",
      "Conversar com fatos",
      "Use fatos, perguntas e expectativas explícitas."
    ],
    [
      "Dia 4",
      "Confirmar entendimento",
      "Peça que a pessoa descreva o próximo passo."
    ],
    [
      "Dia 7",
      "Revisar o acordo",
      "Cheque avanços e ajuste as condições necessárias."
    ]
  ],
  "metrics": [
    [
      "Combinados explícitos",
      "Reuniões com responsável, prazo e conclusão definidos.",
      "Não transformar toda conversa em burocracia."
    ],
    [
      "Correção de ruídos",
      "Dúvidas essenciais resolvidas antes de executar.",
      "Perguntar é sinal de prudência, não fraqueza."
    ],
    [
      "Fechamento de feedbacks",
      "Acordos revisados no momento prometido.",
      "Evitar métrica vazia de quantidade de feedbacks."
    ]
  ],
  "refs": [
    "schein",
    "rosenberg",
    "kim",
    "stone-heen",
    "hunter"
  ]
};

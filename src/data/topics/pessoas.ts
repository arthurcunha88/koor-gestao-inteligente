import type { Topic } from '../../types';

export const pessoas: Topic = {
  "id": "pessoas",
  "num": "01",
  "short": "Pessoas & autonomia",
  "title": "Desenvolver pessoas sem concentrar decisões.",
  "eyebrow": "GESTÃO DE PESSOAS",
  "lead": "Uma liderança sólida transforma responsabilidade em capacidade distribuída: direção clara, espaço para decidir e retorno frequente.",
  "challenge": "Quando toda escolha depende do líder, o time pode até entregar hoje — mas não aprende a sustentar o amanhã.",
  "signal": "O time toma decisões compatíveis com seu domínio e sabe quando pedir apoio.",
  "question": "Qual decisão permanece com você apenas porque ainda não criou condições para delegá-la?",
  "foundations": [
    {
      "name": "Autonomia se aprende no diálogo",
      "author": "Paulo Freire",
      "work": "Pedagogia da autonomia · 1996",
      "text": "A prática educativa não se reduz à transmissão de respostas. Na liderança, a analogia é criar condições para que cada pessoa explique escolhas, analise consequências e desenvolva julgamento.",
      "apply": "Pergunte “qual alternativa você recomenda e por quê?” antes de oferecer a solução."
    },
    {
      "name": "Motivação depende do contexto",
      "author": "Ryan & Deci",
      "work": "Self-determination theory · 2000",
      "text": "Autonomia, competência e vínculo são necessidades relevantes para a motivação autodeterminada. Incentivos e pressão não substituem um ambiente em que a equipe tem espaço e capacidade para agir.",
      "apply": "Defina o resultado esperado, mas permita escolhas reais sobre o caminho."
    },
    {
      "name": "Aprender exige segurança para falar",
      "author": "Amy Edmondson",
      "work": "Psychological safety · 1999",
      "text": "Times aprendem melhor quando discordar, perguntar e reconhecer erros não é tratado como ameaça interpessoal. Isso não elimina padrões de qualidade ou responsabilidade.",
      "apply": "Após uma falha, discuta o processo e as evidências antes de procurar culpados."
    },
    {
      "name": "Desenvolvimento exige contribuição",
      "author": "Peter Drucker",
      "work": "The Effective Executive · 1967",
      "text": "A eficácia gerencial depende de priorização, contribuição e uso consciente do tempo. Autonomia sem objetivos claros pode se tornar dispersão.",
      "apply": "Delegue entregas com propósito, critério de qualidade e data de revisão."
    },
    {
      "name": "O estilo depende da situação",
      "author": "Daniel Goleman",
      "work": "Leadership That Gets Results · 2000",
      "text": "Líderes precisam variar comportamentos conforme necessidade e contexto. Orientar de perto um iniciante não significa retirar permanentemente sua autonomia.",
      "apply": "Ajuste a frequência do acompanhamento à complexidade e ao domínio observável."
    }
  ],
  "cycle": {
    "name": "Ciclo C-R-I-A",
    "subtitle": "Método editorial Koor — síntese aplicada, não modelo formal dos autores.",
    "steps": [
      [
        "Compreender",
        "Escute interesses, experiência, bloqueios e condições de trabalho."
      ],
      [
        "Referenciar",
        "Defina entrega, autonomia, limites e critério de conclusão."
      ],
      [
        "Investir",
        "Ofereça recurso, tempo, orientação e oportunidade de decisão."
      ],
      [
        "Avaliar",
        "Reveja resultado, aprendizados e próximo grau de responsabilidade."
      ]
    ]
  },
  "traps": [
    [
      "Autonomia ≠ abandono",
      "Delegar sem suporte não desenvolve; apenas transfere risco."
    ],
    [
      "Confiança ≠ ausência de cobrança",
      "Acompanhar compromissos pode fortalecer a confiança quando critérios são previsíveis."
    ],
    [
      "Desenvolver ≠ apenas treinar",
      "Conhecimento só se converte em capacidade quando é aplicado em responsabilidade real."
    ]
  ],
  "scenario": {
    "title": "Uma entrega depende sempre de sua aprovação",
    "context": "Uma pessoa experiente pede validação para escolhas simples, atrasando o time.",
    "choices": [
      [
        "Continue validando tudo para não correr riscos.",
        "A centralização reduz autonomia e cria um gargalo recorrente."
      ],
      [
        "Diga que agora ela deve resolver tudo sozinha.",
        "A falta de fronteiras aumenta incerteza e pode elevar erros evitáveis."
      ],
      [
        "Estabeleça decisões autônomas, critérios de escalonamento e revisão semanal.",
        "Equilibra espaço de decisão, clareza e apoio; acompanhe se a regra funciona."
      ]
    ],
    "best": 2
  },
  "plan": [
    [
      "Dia 1",
      "Mapear uma dependência",
      "Identifique uma decisão que poderia ser descentralizada."
    ],
    [
      "Dia 2",
      "Acordar fronteiras",
      "Descreva resultado, restrições e quando escalar."
    ],
    [
      "Dia 4",
      "Acompanhar sem tomar o volante",
      "Faça perguntas sobre critérios e evidências."
    ],
    [
      "Dia 7",
      "Ampliar ou ajustar",
      "Revise erros, qualidade e próximo passo de autonomia."
    ]
  ],
  "metrics": [
    [
      "Decisões com autonomia",
      "Decisões tomadas no nível combinado, sem retrabalho relevante.",
      "Não premiar decisões precipitadas."
    ],
    [
      "Clareza de entregas",
      "Percentual de atividades com responsável, prazo e qualidade definidos.",
      "Medir clareza, não apenas quantidade."
    ],
    [
      "Aprendizado aplicado",
      "Exemplos de novas responsabilidades assumidas com sucesso.",
      "Não confundir treinamento concluído com competência."
    ]
  ],
  "refs": [
    "freire",
    "ryan-deci",
    "edmondson",
    "drucker",
    "goleman",
    "pipeline"
  ]
};

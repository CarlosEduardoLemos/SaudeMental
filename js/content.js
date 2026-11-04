(() => {
  const SOURCES = {
    ministryMental: {
      label: "Ministério da Saúde — Saúde Mental",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental"
    },
    whoMental: {
      label: "Organização Mundial da Saúde — Mental health (em inglês)",
      url: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response"
    },
    anxiety: {
      label: "Ministério da Saúde — Transtornos de Ansiedade no adulto",
      url: "https://linhasdecuidado.saude.gov.br/portal/ansiedade/sou-paciente"
    },
    depression: {
      label: "Ministério da Saúde — Depressão",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/depressao/depressao"
    },
    whoStress: {
      label: "Organização Mundial da Saúde — Stress (em inglês)",
      url: "https://www.who.int/news-room/questions-and-answers/item/stress"
    },
    whoResources: {
      label: "Organização Mundial da Saúde — Recursos de bem-estar mental (em inglês)",
      url: "https://www.who.int/news-room/feature-stories/mental-well-being-resources-for-the-public/"
    },
    activity: {
      label: "Ministério da Saúde — Guia de Atividade Física para a População Brasileira",
      url: "https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/programa-crescer-saudavel/"
        + "publicacoes/guia-de-atividade-fisica-para-a-populacao-brasileira"
    },
    rapS: {
      label: "Ministério da Saúde — Rede de Atenção Psicossocial (RAPS)",
      url: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps"
    },
    caps: {
      label: "Ministério da Saúde — Centros de Atenção Psicossocial (CAPS)",
      url: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps"
    }
  };

  const CONTENTS = {
    "saude-mental": {
      category: "Bem-estar",
      title: "Saúde mental e bem-estar",
      paragraphs: [
        "Saúde mental faz parte da saúde como um todo. Ela está ligada ao bem-estar, à possibilidade "
          + "de lidar com desafios cotidianos, aprender, trabalhar e participar da comunidade. Não "
          + "significa estar feliz o tempo inteiro nem se resume à ausência de transtornos.",
        "O bem-estar é influenciado por muitos fatores que se relacionam: saúde física, vínculos, "
          + "condições de vida, ambiente e fatores sociais e econômicos. Por isso, dificuldades "
          + "emocionais não são uma falha pessoal, e cada experiência merece ser compreendida em seu "
          + "contexto.",
        "Este material é educativo. Se você sente que precisa de apoio, pode conversar com alguém de "
          + "confiança ou procurar um serviço de saúde."
      ],
      sources: [SOURCES.ministryMental, SOURCES.whoMental]
    },
    ansiedade: {
      category: "Emoções",
      title: "Ansiedade",
      paragraphs: [
        "A ansiedade pode ser uma reação humana diante de situações novas, incertas ou exigentes — "
          + "como falar em público, fazer uma prova ou participar de uma entrevista. A experiência varia "
          + "de pessoa para pessoa.",
        "Quando a preocupação ou o desconforto se tornam intensos, frequentes ou atrapalham "
          + "atividades importantes, conversar com um profissional pode ajudar a entender o que está "
          + "acontecendo e conhecer possibilidades de cuidado.",
        "Uma lista de sinais não permite concluir que alguém tem um transtorno. Diagnóstico e "
          + "orientação individual cabem a profissionais habilitados."
      ],
      sources: [SOURCES.anxiety, SOURCES.ministryMental]
    },
    depressao: {
      category: "Saúde emocional",
      title: "Depressão",
      paragraphs: [
        "Depressão é uma condição de saúde que pode afetar emoções, pensamentos, relações e "
          + "atividades do cotidiano. Ela não é falta de esforço, fraqueza ou algo que se resolva apenas "
          + "com força de vontade.",
        "Mudanças persistentes no humor, no interesse ou na disposição podem ter diferentes causas. A "
          + "avaliação é feita por profissionais de saúde, considerando a história e as necessidades de "
          + "cada pessoa.",
        "Se você está preocupado com o que sente, procure uma Unidade Básica de Saúde ou outro "
          + "serviço de saúde. Você merece ser ouvido e receber orientação adequada."
      ],
      sources: [SOURCES.depression, SOURCES.ministryMental]
    },
    "estresse-academico": {
      category: "Vida universitária",
      title: "Estresse acadêmico",
      paragraphs: [
        "O estresse é uma resposta humana a situações difíceis ou exigentes. Na vida universitária, "
          + "prazos, provas, apresentações, deslocamentos e incertezas podem se somar a outras "
          + "responsabilidades.",
        "Em períodos de estresse, algumas pessoas percebem dificuldade para relaxar ou se concentrar, "
          + "irritabilidade, desconfortos físicos ou mudanças no sono. Essas experiências não fecham um "
          + "diagnóstico, e cada pessoa pode vivê-las de um jeito.",
        "Se a pressão está persistindo ou afetando sua vida, considere conversar com alguém de "
          + "confiança, verificar os canais de apoio estudantil disponíveis na sua instituição ou "
          + "procurar um serviço de saúde."
      ],
      sources: [SOURCES.whoStress, SOURCES.ministryMental]
    },
    sobrecarga: {
      category: "Múltiplas jornadas",
      title: "Conciliar trabalho e estudos",
      paragraphs: [
        "Conciliar estudo, trabalho, deslocamento, cuidado da família e vida pessoal pode exigir "
          + "muito tempo e energia. Nem sempre é possível resolver a sobrecarga apenas reorganizando a "
          + "agenda: as condições de vida e de trabalho também influenciam o bem-estar.",
        "Pode ser útil identificar o que é urgente, o que pode ser renegociado e que tipo de apoio "
          + "existe ao seu redor. Quando for possível, conversar com uma pessoa de confiança, docente, "
          + "coordenação ou serviço estudantil pode abrir espaço para pensar alternativas.",
        "Se a sobrecarga afeta seu bem-estar por um período prolongado, você pode buscar orientação "
          + "em um serviço de saúde. Não é preciso comparar sua experiência com a de outras pessoas."
      ],
      sources: [SOURCES.ministryMental, SOURCES.whoStress]
    },
    "ajuda-profissional": {
      category: "Rede de cuidado",
      title: "Procurar ajuda profissional",
      paragraphs: [
        "Buscar apoio é uma forma de cuidado. Você pode procurar uma Unidade Básica de Saúde (UBS) "
          + "para conversar sobre o que está vivendo e receber orientação sobre os serviços adequados no "
          + "seu território.",
        "Os Centros de Atenção Psicossocial (CAPS) são serviços públicos de saúde mental. O "
          + "Ministério da Saúde informa que a procura pode ser direta ou por encaminhamento; para saber "
          + "qual serviço existe na sua região, consulte a UBS ou a Secretaria Municipal de Saúde.",
        "Se você estuda em uma instituição de ensino, confira os canais oficiais para saber se há "
          + "acolhimento, orientação estudantil ou serviço-escola. A oferta varia conforme a instituição."
      ],
      sources: [SOURCES.ministryMental, SOURCES.rapS, SOURCES.caps]
    },
    "organizar-rotina": {
      category: "Rotina",
      title: "Organizar a rotina possível",
      paragraphs: [
        "Planejamento serve para apoiar você, não para preencher cada minuto. Comece anotando os "
          + "compromissos que não podem mudar e escolha uma ou duas prioridades realistas para o dia.",
        "Se ajudar, divida uma tarefa grande em etapas menores e deixe algum espaço para pausas e "
          + "imprevistos. Experimente um formato simples — papel, calendário ou lista — e ajuste conforme "
          + "perceber o que funciona para a sua vida.",
        "A rotina de outra pessoa não precisa ser a sua. Se as demandas parecem impossíveis de "
          + "acomodar, talvez seja importante conversar sobre apoio ou renegociar prazos quando isso "
          + "estiver ao seu alcance."
      ],
      sources: [SOURCES.whoStress, SOURCES.whoResources]
    },
    sono: {
      category: "Bem-estar",
      title: "Dar espaço ao sono",
      paragraphs: [
        "O sono é importante para o corpo e a mente. Demandas de trabalho e estudo podem dificultar o "
          + "descanso; se possível, observe o que costuma ajudar você a desacelerar no fim do dia.",
        "A Organização Mundial da Saúde cita hábitos como manter horários regulares para dormir e "
          + "acordar e tornar o ambiente de sono confortável, silencioso e escuro quando isso for viável. "
          + "Mudanças pequenas e realistas podem ser um começo.",
        "Dificuldades persistentes com o sono merecem atenção profissional. Evite iniciar "
          + "medicamentos ou suplementos por conta própria."
      ],
      sources: [SOURCES.whoStress, SOURCES.ministryMental]
    },
    pausas: {
      category: "Bem-estar",
      title: "Fazer pausas com intenção",
      paragraphs: [
        "Quando a agenda permite, uma pausa curta pode marcar a passagem entre tarefas. Você pode "
          + "levantar, alongar o corpo, beber água, olhar pela janela ou simplesmente ficar alguns "
          + "instantes sem uma nova demanda.",
        "Não existe uma única forma correta de descansar. Escolha algo acessível no momento e "
          + "respeite suas condições físicas, de mobilidade, de tempo e de espaço.",
        "Se o descanso parece impossível ou a rotina está continuamente exigente, esse também pode "
          + "ser um sinal de que vale procurar apoio e rever as demandas com alguém de confiança."
      ],
      sources: [SOURCES.whoStress, SOURCES.activity]
    },
    "equilibrio-jornadas": {
      category: "Estudos e trabalho",
      title: "Equilibrar as jornadas",
      paragraphs: [
        "Estudo, trabalho e responsabilidades pessoais disputam tempo e energia. Em vez de buscar um "
          + "equilíbrio perfeito, pode ajudar observar como sua semana está distribuída e reconhecer "
          + "quais necessidades ficaram sem espaço.",
        "Quando for possível, combine limites claros para horários de estudo e descanso, converse "
          + "sobre prazos com antecedência ou peça apoio para dividir uma tarefa. Nem toda sugestão cabe "
          + "em todas as realidades — adapte ou descarte o que não fizer sentido.",
        "Fatores sociais e condições de vida afetam a saúde mental. Se a sobrecarga continua, procure "
          + "os canais de apoio da sua instituição ou um serviço de saúde."
      ],
      sources: [SOURCES.ministryMental, SOURCES.whoStress]
    },
    "manejo-estresse": {
      category: "Estudos e trabalho",
      title: "Lidar com momentos de estresse",
      paragraphs: [
        "Em um momento de tensão, algumas pessoas acham útil pausar e notar o que está acontecendo ao "
          + "redor: sentir os pés apoiados, nomear uma emoção ou voltar a atenção para uma respiração "
          + "confortável. Você pode experimentar com gentileza e parar se não for útil.",
        "Também pode ajudar conversar com alguém de confiança, fazer uma atividade de que você goste "
          + "ou reduzir por um tempo a exposição a notícias e telas se perceber que isso aumenta a "
          + "tensão.",
        "Essas são ideias gerais de autocuidado, não tratamento. Se o estresse estiver difícil de "
          + "manejar ou afetando sua saúde, busque orientação profissional."
      ],
      sources: [SOURCES.whoStress, SOURCES.whoResources]
    },
    "conexao-apoio": {
      category: "Rede de apoio",
      title: "Manter conexões",
      paragraphs: [
        "Ter alguém com quem conversar pode ajudar a não atravessar momentos difíceis em isolamento. "
          + "Pode ser uma pessoa amiga, familiar, colega, docente ou alguém da sua comunidade — escolha "
          + "quem lhe transmite segurança.",
        "Se for difícil começar, você pode dizer que precisa conversar e explicar que tipo de apoio "
          + "seria útil: ser ouvido, pensar em um próximo passo ou encontrar um serviço. A outra pessoa "
          + "não precisa ter todas as respostas.",
        "A rede pessoal complementa, mas não substitui, o atendimento profissional. A Central de "
          + "Apoio reúne caminhos públicos e institucionais para saber mais."
      ],
      sources: [SOURCES.whoResources, SOURCES.ministryMental]
    }
  };

  window.MenteEquilibrio = Object.freeze({ contents: CONTENTS });
})();


# Mente em Equilíbrio

Protótipo de plataforma web educativa sobre saúde mental, autocuidado e caminhos para buscar apoio. A proposta é oferecer informação clara e acolhedora a estudantes universitários adultos, em especial a quem concilia estudo, trabalho e responsabilidades pessoais.

## Objetivo

Facilitar o acesso a conteúdos introdutórios e a informações oficiais sobre saúde mental, com uma biblioteca de autocuidado e uma central de apoio. O site foi pensado para as etapas de Prototipação e Validação de um projeto acadêmico que aplica princípios de Design Thinking.

## Público-alvo

Estudantes universitários adultos, com atenção a pessoas que conciliam estudos, trabalho e responsabilidades pessoais.

## Problema identificado

Encontrar informação confiável, compreensível e caminhos de apoio pode ser difícil quando a rotina universitária se soma a outras responsabilidades. O protótipo organiza esses pontos em uma experiência simples, responsiva e gratuita.

## Solução proposta

Uma plataforma estática de acesso livre com conteúdos educativos, materiais de autocuidado, pesquisa e filtros, além de links oficiais para serviços públicos e de apoio emocional. O site não coleta dados e não oferece avaliação ou atendimento clínico.

## Tecnologias utilizadas

- HTML5 semântico;
- CSS3, com layout responsivo e preferência por movimento reduzido;
- JavaScript puro, sem backend, armazenamento pessoal, dependências ou etapa de compilação;
- SVG inline para ícones e ilustração;
- Google Fonts (DM Sans e Manrope), com fontes de sistema como alternativa.

## Funcionalidades disponíveis

- Navegação por âncoras, menu móvel e atalho para pular ao conteúdo;
- Busca de temas educativos;
- Busca e filtro por categoria na biblioteca de autocuidado;
- Cartões que abrem leituras detalhadas em uma janela acessível por teclado;
- Fontes oficiais associadas aos conteúdos e links externos seguros;
- Orientações gerais sobre SUS, RAPS, CAPS, CVV e apoio institucional;
- Atalho de retorno ao início e aviso educativo visível;
- Área discreta preparada para receber futuramente o link de avaliação do protótipo.

## Estrutura de arquivos

```text
mente-em-equilibrio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
├── README.md
└── .gitignore
```

A ilustração principal e os ícones são SVG inline; por isso, a pasta `assets/images/` está prevista para imagens que venham a ser adicionadas em versões futuras.

## Executar localmente

1. Baixe ou clone este repositório.
2. Abra `index.html` diretamente no navegador. O site funciona sem servidor e sem backend.
3. Para uma prévia usando servidor local, execute no diretório do projeto:

   ```bash
   python -m http.server 8000
   ```

4. Acesse `http://localhost:8000`.

O conteúdo e os recursos locais funcionam sem conexão. Google Fonts e os links externos dependem de conexão à internet.

## Publicar no GitHub Pages

1. Envie estes arquivos para um repositório no GitHub.
2. Abra **Settings → Pages** no repositório.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch principal e a pasta `/ (root)` e salve.
5. Aguarde a publicação e use o endereço fornecido pelo GitHub Pages.

Os caminhos de CSS e JavaScript são relativos, então o site pode ser publicado na raiz de um domínio ou em um repositório de projeto.

## Fontes consultadas

- [Ministério da Saúde — Saúde Mental](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental)
- [Ministério da Saúde — Rede de Atenção Psicossocial (RAPS)](https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps)
- [Ministério da Saúde — Centros de Atenção Psicossocial (CAPS)](https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps)
- [Ministério da Saúde — Transtornos de Ansiedade no adulto](https://linhasdecuidado.saude.gov.br/portal/ansiedade/sou-paciente)
- [Ministério da Saúde — Depressão](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/depressao/depressao)
- [Ministério da Saúde — Guia de Atividade Física para a População Brasileira](https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/programa-crescer-saudavel/publicacoes/guia-de-atividade-fisica-para-a-populacao-brasileira)
- [Centro de Valorização da Vida — Ligue 188](https://cvv.org.br/ligue-188-3/)
- [Organização Mundial da Saúde — Mental health (em inglês)](https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response)
- [Organização Mundial da Saúde — Stress (em inglês)](https://www.who.int/news-room/questions-and-answers/item/stress)
- [Organização Mundial da Saúde — Recursos de bem-estar mental (em inglês)](https://www.who.int/news-room/feature-stories/mental-well-being-resources-for-the-public/)

As informações de serviços foram conferidas nas páginas oficiais listadas. A disponibilidade e os meios de acesso variam conforme o município e a instituição de ensino; consulte os canais oficiais locais.

## Limitações do protótipo

- O conteúdo é educativo e geral, não substitui avaliação, diagnóstico ou acompanhamento por profissionais de saúde.
- O protótipo não tem backend, login, cadastro, registro de respostas ou armazenamento de informações pessoais.
- Não há localização automática de UBS/CAPS nem listagem de serviços por município.
- Os serviços de apoio estudantil dependem da oferta de cada instituição; não foi presumida disponibilidade local.
- O formulário Google Forms de validação ainda não foi configurado. A seção está reservada para adicionar o link real posteriormente.
- Parte das fontes da OMS está em inglês; links oficiais podem ser alterados pelos próprios órgãos.

## Possíveis melhorias futuras

- Adicionar o link real de avaliação depois de preparar o formulário de validação;
- Conduzir sessões com estudantes e aprimorar navegação, linguagem e filtros a partir do retorno;
- Incluir uma página de fontes e datas da última revisão editorial;
- Acrescentar informações locais de apoio após validação com instituições e serviços responsáveis;
- Ampliar a revisão de acessibilidade com pessoas usuárias de tecnologias assistivas.

## Contexto acadêmico

Projeto desenvolvido individualmente como atividade acadêmica da disciplina de Inovação e Criatividade. O protótipo aplica a abordagem de Design Thinking e foi concebido para demonstração e validação com estudantes universitários.

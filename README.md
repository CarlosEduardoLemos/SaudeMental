# Mente em Equilíbrio

**Plataforma educativa sobre saúde mental, autocuidado e caminhos para buscar apoio.**

[Acessar o site publicado](https://carloseduardolemos.github.io/SaudeMental/) · [Ver o repositório no GitHub](https://github.com/CarlosEduardoLemos/SaudeMental)

## Sobre o projeto

O Mente em Equilíbrio é uma plataforma web educativa que desenvolvi individualmente como projeto acadêmico. O site organiza informações sobre saúde mental, ideias gerais de autocuidado e caminhos para encontrar serviços de apoio.

O conteúdo é informativo. O site não oferece diagnóstico, psicoterapia, atendimento clínico ou assistência emergencial.

## Motivação

Estudantes universitários adultos podem conciliar estudos, trabalho, deslocamentos e responsabilidades pessoais. Encontrar informações compreensíveis e saber onde buscar apoio nem sempre é simples. O projeto reúne esses recursos em uma plataforma gratuita, com navegação direta e linguagem acolhedora.

## Objetivos

- Facilitar o acesso a informações educativas e a fontes institucionais.
- Promover conscientização e compreensão sobre saúde mental.
- Oferecer acolhimento informativo sem fazer avaliação clínica.
- Apresentar ideias gerais de autocuidado, sem tratá-las como substitutas de atendimento.
- Orientar sobre possibilidades de apoio profissional e emocional.
- Manter a navegação simples e considerar acessibilidade em diferentes dispositivos.

## Público-alvo

O público inicial são estudantes universitários adultos, em especial pessoas que conciliam estudo, trabalho e outras responsabilidades. Os materiais também podem ser úteis a outras pessoas, mas o projeto ainda não foi validado com todos os públicos.

## Funcionalidades

### Conteúdos educativos

- Materiais sobre saúde mental e bem-estar, ansiedade, depressão, estresse acadêmico, sobrecarga e busca por ajuda profissional.
- Leituras detalhadas em diálogos nativos, com links de referência associados a cada conteúdo.

### Biblioteca de autocuidado

- Ideias gerais sobre rotina, sono, pausas, conciliação de responsabilidades, estresse e conexões de apoio.
- Aviso de que as sugestões são gerais e não substituem orientações profissionais.

### Central de apoio

- Orientações sobre UBS, RAPS, CAPS e serviços de apoio estudantil, cuja oferta depende da instituição.
- Informações de apoio emocional do CVV pelo telefone 188.
- Orientação para procurar uma UPA ou pronto-socorro ou acionar o SAMU pelo 192 em situações de emergência ou risco imediato.

### Pesquisa e filtros

- Busca sem distinção de acentos nos títulos, resumos, termos de busca, textos completos e fontes.
- Filtro por categoria na biblioteca e contagem de resultados com estado para tecnologia assistiva.
- Mensagens para pesquisas sem resultados.

### Acessibilidade e navegação

- Menu móvel com estado anunciado e fechamento por Escape.
- Atalho para pular ao conteúdo, foco visível, rótulos para campos de busca e navegação por teclado.
- Diálogos nativos com título acessível, fechamento por Escape e retorno do foco ao botão que abriu o conteúdo.
- Layout responsivo e respeito à preferência por movimento reduzido.

## Estrutura do projeto

```text
.
├── assets/
│   └── images/
│       └── .gitkeep
├── css/
│   └── style.css
├── js/
│   ├── content-utils.js
│   ├── content.js
│   └── main.js
├── tests/
│   └── site-checks.test.cjs
├── index.html
├── LICENSE
└── README.md
```

- `index.html` define a estrutura semântica, a navegação, os campos e os espaços dos catálogos.
- `js/content.js` reúne textos, resumos, categorias, palavras-chave e fontes dos materiais em um catálogo.
- `js/content-utils.js` contém as funções de normalização e busca usadas pela interface e pelos testes.
- `js/main.js` cria os cartões com APIs seguras do DOM e controla menu, filtros, busca e diálogos.
- `css/style.css` contém identidade visual, estados de foco, ajustes responsivos e movimento reduzido.
- `tests/site-checks.test.cjs` verifica o catálogo, busca, filtros e relações entre IDs e links internos com recursos nativos do Node.js.

## Tecnologias utilizadas

- HTML5 semântico.
- CSS3.
- JavaScript sem framework ou dependências de execução.
- SVG inline para ícones e ilustração.
- Node.js e módulo `node:test` para verificações automatizadas locais.
- GitHub Pages para hospedagem estática.
- Google Fonts (DM Sans e Manrope), com fontes de sistema como alternativas.

## Como executar localmente

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/CarlosEduardoLemos/SaudeMental.git
cd SaudeMental
```

Inicie um servidor estático com Python:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador. A aplicação atual é estática e não exige backend, instalação de dependências ou etapa de compilação. O catálogo e os arquivos locais ficam no repositório; Google Fonts e os links externos dependem da conexão com a internet.

Para executar as verificações automatizadas, use Node.js:

```bash
node --test tests/site-checks.test.cjs
```

## Publicação

**Site publicado:** [https://carloseduardolemos.github.io/SaudeMental/](https://carloseduardolemos.github.io/SaudeMental/)

O projeto pode ser publicado diretamente pelo GitHub Pages:

1. Envie os arquivos do projeto para o repositório no GitHub.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch principal e a pasta **/(root)** e salve.
5. Aguarde o GitHub Pages publicar o endereço indicado nas configurações.

Os caminhos de CSS e JavaScript são relativos, o que permite publicar o site na raiz do usuário ou em um repositório de projeto. Não há processo de build nem workflow de deploy neste repositório.

## Acessibilidade

O código inclui landmarks semânticos, hierarquia de títulos, link para pular ao conteúdo, campos rotulados, foco visível, controles operáveis por teclado, estados de resultado e diálogos nativos. O CSS considera reflow em telas menores e a preferência por movimento reduzido. As verificações automatizadas cobrem requisitos estruturais e funções de busca; elas não comprovam conformidade WCAG 2.2 AA. Ainda são necessários testes manuais em diferentes navegadores, validação com leitores de tela e avaliação com pessoas usuárias.

## Segurança e privacidade

O código da aplicação não inclui cadastro, formulários de relato, análise de saúde, cookies próprios, armazenamento em `localStorage` ou `sessionStorage`, nem scripts de rastreamento. A busca ocorre no navegador com dados estáticos do repositório.

O site carrega folhas de estilo e fontes do Google Fonts quando há conexão e abre páginas de instituições externas. Esses serviços e o GitHub Pages podem processar dados técnicos de acesso de acordo com suas próprias políticas. O projeto não controla o processamento feito por terceiros.

Uma política CSP em meta tag restringe scripts, estilos, fontes e outros recursos às origens necessárias, bloqueia objetos e restringe a origem base. Os cartões e diálogos são criados com APIs do DOM e `textContent`; os links de fontes aceitam somente URLs HTTPS e usam `noopener noreferrer` ao abrir outra aba.

## Fontes e referências

O site associa fontes às leituras. Os links abaixo são referências institucionais utilizadas pelo projeto; a disponibilidade e o conteúdo podem mudar, por isso não se afirma uma revisão contínua.

- [Ministério da Saúde — Saúde Mental](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental)
- [Ministério da Saúde — Rede de Atenção Psicossocial (RAPS)](https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps)
- [Ministério da Saúde — Centros de Atenção Psicossocial (CAPS)](https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps)
- [Ministério da Saúde — Linha de cuidado para ansiedade](https://linhasdecuidado.saude.gov.br/portal/ansiedade/sou-paciente)
- [Ministério da Saúde — Depressão](https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/depressao/depressao)
- [Ministério da Saúde — Guia de Atividade Física para a População Brasileira](https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/programa-crescer-saudavel/publicacoes/guia-de-atividade-fisica-para-a-populacao-brasileira)
- [Centro de Valorização da Vida — Ligue 188](https://cvv.org.br/ligue-188-3/)
- [Organização Mundial da Saúde — Saúde mental (em inglês)](https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response)
- [Organização Mundial da Saúde — Estresse (em inglês)](https://www.who.int/news-room/questions-and-answers/item/stress)
- [Organização Mundial da Saúde — Recursos de bem-estar mental (em inglês)](https://www.who.int/news-room/feature-stories/mental-well-being-resources-for-the-public/)
- [W3C — Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)

## Conteúdo sensível

O Mente em Equilíbrio não é um portal de notícias. Eventuais materiais sobre suicídio, negligência, violações de direitos humanos ou acontecimentos históricos devem ter finalidade educativa e contribuir para conscientização, prevenção, respeito e contextualização. A política editorial prevê evitar títulos sensacionalistas e detalhes gráficos, nunca descrever métodos de suicídio e oferecer caminhos de apoio quando o tema exigir. A seção secundária **Histórias, Memória e Reflexão** ainda não tem materiais publicados; nenhum cartão ou referência fictícia foi incluído.

## Roadmap

- [x] Centralizar metadados, resumos e textos do catálogo em uma única fonte.
- [x] Manter busca, filtro de categorias, contagem de resultados e diálogos a partir do catálogo.
- [x] Adicionar verificações automatizadas sem dependências externas.
- [ ] Ampliar a biblioteca educativa com conteúdo e fontes revisados.
- [ ] Cadastrar materiais históricos verificados em uma seção editorial secundária.
- [ ] Revisar periodicamente as referências institucionais e registrar datas de revisão quando ocorrerem.
- [ ] Validar acessibilidade com leitores de tela, navegadores diferentes e pessoas usuárias.
- [ ] Realizar sessões de usabilidade com estudantes e outros públicos.

## Limitações

- A finalidade é exclusivamente educativa; não há atendimento clínico, diagnóstico ou resposta emergencial.
- O site não identifica automaticamente serviços locais. A disponibilidade de UBS, CAPS, UPA e apoio estudantil pode variar conforme município e instituição.
- O conteúdo depende de fontes externas, cujos endereços, recomendações e disponibilidade podem mudar.
- A hospedagem estática não oferece contas, dados personalizados ou integração para localizar serviços.
- A seção **Histórias, Memória e Reflexão**, os registros de datas editoriais e a validação com usuários ainda não foram implementados.
- Os testes automatizados atuais não substituem verificação visual, testes de interação em navegador, leitor de tela ou auditoria completa de acessibilidade.

## Contribuições

Sugestões, correções e melhorias podem ser propostas por meio de uma issue ou pull request no [repositório do GitHub](https://github.com/CarlosEduardoLemos/SaudeMental). Ao reportar um problema, descreva os passos para reproduzi-lo e o comportamento observado. Não publique relatos pessoais, dados médicos ou outras informações sensíveis em issues públicas. Uma contribuição não representa revisão clínica nem atendimento individual.

## Licença

O projeto está sob a licença [MIT](LICENSE), conforme o arquivo de licença existente.

## Autoria e contexto acadêmico

Desenvolvi este projeto individualmente como parte de uma atividade acadêmica da disciplina de Inovação e Criatividade, aplicando princípios de Design Thinking. O nome associado à licença do projeto é Carlos Eduardo De Souza Lemos.

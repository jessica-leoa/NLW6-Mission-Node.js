# NLW6-Mission-Node.js
Maratona NLW6 Mission Node.js, aprofundando os conhecimentos com Node.js no back-end
 
Projeto desse commit é  "NLW VALORIZA" descrito abaixo
-- Cadastro de usuário 
-- Cadastro de Tags (elogios possíveis)
 - Somente usuários administrador
-- Cadastro de elogios
 - ID do usuário
 - ID da tag
 - Data de criacao
-- Autenticacao de usuário
 - Gerar token JWT
 - Validar usuário logado nas rotas necessárias
-- Listagem de usuário
-- Listagem de tags
-- Listagem de elogios por usuário
 
 
FERRAMENTAS USADAS (INSTALACOES)
-- Node e NPM
-- VScode
-- Extensoes
 - omni
 - MAterial Icon Theme
 
DEPENDENCIAS DO PROJETO QUANDO INICIAR NO TERMINAL
-- npm init
-- npm i typescript
 
EXECUÇŌES NO TERMINAL PARA RODAR O PROGRAMA
 
-- npm add -D typescript (install)
-- npx tsc --init (inicializando typeScript) ou Criar o arquivo tsconfig.json
-- node index.js (executndo pasta expecifica no node)
-- npx tsc (transformar o TS para JS, para que o navegador interprete)
 
(executar as rotas como API, usando esse framework)
-- npm install express-generator      (Instalar o express-generator)
--npx express        (Criar um projeto utilizando express-generator)
-- npm add @types/express -D
-- npm add ts-node-dev -D (Converte pra mim todos os arquivos gerando durante o desensvolvimento sem precisar eu mesma fazer  a conversao de typescript para js por exemplo, e atualizar o servidor sozinho sem precisar eu fazer)
  - Adiciona esse escript no package.json: "dev": "ts-node-dev src/server.ts"
  - e roda de novo no terminal: npm run dev
 
 
 
-- COMO FUNCIONA O NODE?
 - O node é composto por um event-loop sendo single-threade, o evente loop gerencia as requisicoes, fazendo com que sejam executada uma por vez. A sacada do evente-loop é atender a uma requisiao sem fazer seu processamente, ele delega esse atividade para as threads disponíveis.  Sendo assim, o node é single-thread para receber as requisicoes no evente loop e processadas nas multiplas threads a qual sao direcionadas.
 Além disso segue o conceito Non-blocking, ele nao espera terminar um processamento para atender uma nova requisicao, pois existe mais de uma thread e um time pode ser determinado para certas execucoes.
 
 OBS: por padrao sao disponíveis 4 threads, mas dependendo do PC pode ter mais vc definindo.
 
-- O QUE É UMA API?
 - API nada mais é do que um conceito sobre a criação de um projeto, são alguns padrões que ao construir nosso projeto seguindo sob essas regras vai definir nosso projeto como uma API.
 
 Antigamente os programas eram criados em um único arquivo, até nascer o conceito tao fafala CLIENT-SERVE, traduzindo, cliente-servidor, ou seja, BACK-END e FRONT-END.
 - Client: HTML, CSS, JS
 - Server: Regra de nefócio, acesso ao BD, autenticacao de usuário, dados críticos.
 
 Onde a API entra nisso?
   - Após a divisao do cliente e o servidos as informacoes(req,res) entre eles acontecem por meior  da API que indica as rotas.
     Sendo assim, o conceito de API consiste em nosso back-end tendo um recurso sendo chamado, que é nossa rota, que leva para o servidor a resquisicao do nosso cliente e retorna uam resposta para o nosso servidos(ou nao).
 
     OBS: normalmente o formato de arquivo é o JSON
 
-- O que é o type-script?
 - Tipa um objetp para um formato específico, nap permitindo que o usuário coloque um dado errado, sendo alertado antes e dar um confirme e gerar um erro.
 Uma das maiores vantagens da TypeScript é possibilitar que os IDEs proporcionem um ambiente mais seguro, ao apontar erros enquanto o código é digitado pelo usuário. A linguagem TypeScript adiciona tipagem estática ao JavaScript, que, originalmente, possui tipagem dinâmica.
 O TYPE SCRIPT NAO É OBRIGATÓRIOS, MAS AJUDA SIGNIFICATIVAMENTE O GRUPOS NO QUISITO PRODUTIVIDADE, MAIS CLAREZA DOS PARAMETROS A SEREM PASSADOS PARA AS FUNCOES.
 
 "TypeScript é uma linguagem criada pela Microsoft e é um super conjunto da linguagem JavaScript, que fornece classes , interfaces e a tipagem estática opcional."
 
 "Uma das grandes vantagens da TypeScript é permitir que os IDEs proporcionem um ambiente mais rico para detectar erros comuns enquanto você digita o código usando o recurso Intellisense."

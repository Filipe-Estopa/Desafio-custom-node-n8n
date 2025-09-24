📌 Desafio: Custom Node n8n – Random Number Generator

Este repositório contém um Custom Node para o n8n chamado Random, que utiliza a API do Random.org
 para gerar números aleatórios verdadeiros entre valores mínimo e máximo fornecidos pelo usuário.

📦 Instalação das dependências

Antes de compilar o node, é necessário instalar as dependências.

Entre na pasta do node:

cd custom-nodes/Random


Instale as dependências do projeto:

npm install


Compile o TypeScript para gerar o arquivo dist/Random.node.js:

npm run build

🐳 Executando o serviço localmente (Docker)

A aplicação utiliza Docker Compose para subir o ambiente com:

PostgreSQL (banco de dados do n8n).

n8n (aplicação principal).

Na raiz do projeto (Desafio/), suba os containers:

docker compose up -d


Acesse o n8n no navegador:

👉 http://localhost:5678

⚙️ Configuração do ambiente

As variáveis de ambiente já estão configuradas no docker-compose.yml.

environment:
  DB_TYPE: postgresdb
  DB_POSTGRESDB_HOST: postgres
  DB_POSTGRESDB_PORT: 5432
  DB_POSTGRESDB_DATABASE: n8n
  DB_POSTGRESDB_USER: n8n
  DB_POSTGRESDB_PASSWORD: n8n
  N8N_PORT: 5678


📌 Resumo da configuração

Banco: PostgreSQL

Usuário: n8n

Senha: n8n

Porta: 5432

n8n rodando em: http://localhost:5678

Os custom nodes são montados via volume:

volumes:
  - ./custom-nodes:/home/node/.n8n/custom


Isso garante que o n8n consiga carregar o seu node Random.

🧪 Executando os testes

O node pode ser testado diretamente dentro do n8n:

Acesse http://localhost:5678
.

Crie um novo Workflow.

Clique em + Add Node e selecione Random.

Escolha a operação True Random Number Generator.

Defina valores para Min e Max.

Execute o workflow → O retorno será um número aleatório.

📂 Estrutura de pastas
Desafio/
 ├── custom-nodes/
 │    └── Random/
 │         ├── Random.node.ts     # Código do node
 │         ├── random.svg         # Ícone SVG do node
 │         ├── package.json       # Dependências do node
 │         ├── tsconfig.json      # Configuração do TypeScript
 │         └── dist/              # Código compilado (gerado pelo build)
 ├── docker-compose.yml
 └── README.md

🖼️ Ícone do Node

O node utiliza um ícone SVG localizado em random.svg.
A referência é feita no código:

icon: 'file:random.svg',

ℹ️ Informações adicionais

Sempre que alterar o código do node, rode:

npm run build
docker compose restart n8n


Caso o node não apareça no n8n:

Verifique se está na pasta correta: Desafio/custom-nodes/Random.

Confirme que o dist/Random.node.js foi gerado.

Reinicie o container do n8n.

👉 Com isso, qualquer pessoa consegue instalar, configurar e testar o seu custom node Random no n8n.

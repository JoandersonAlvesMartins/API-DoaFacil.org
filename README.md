# API Doa Fácil.org
Instruções de instalação e configuração 

# Título do projeto

Projeto acadêmico de campanha de doação financeira para a manutenção e sustentabilidade das organizações sem fins lucrativos e não governamentais.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

Você vai precisar ter instalado em sua maquina os seguintes pacotes

* [Node](https://nodejs.org/en/download/) - Escolha o dowload de acordo com o seu sistema operacional e instale-o.

* [Git](https://git-scm.com/downloads) - Sistema de controle de versões distribuído.

* [DotNet](https://dotnet.microsoft.com/download) - Caso o seu dotnet Framework esteja desatualizado, click no link e atualize.

* [VS Code](https://code.visualstudio.com/download) - Você pode usar o editor de código de sua preferência.

* [Insomnia](https://insomnia.rest/download) - Interface para visualizar e testar o código sem que seja preciso criar uma interface,mais você pode usar o de sua preferência. 

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

## Back End

```
# Clonando o repositório na sua maquina
git clone https://github.com/JoandersonAlvesMarti
ns/API-DoaFacil.org.git

```
```
# Acessar a pastar
cd API-DoaFacil.org
```
```
# Instalando as dependências do projeto
npm install
```
```
# Para levantar o servidor
nodemom start
```

## 🛠️ Construído com 

* [Node](https://nodejs.org/en/download/) - Escolha o dowload de acordo com o seu sistema operacional e instale-o.

* [Git](https://git-scm.com/downloads) - Sistema de controle de versões distribuído.

* [VS Code](https://code.visualstudio.com/download) - Você pode usar o editor de código de sua preferência.

* [Insomnia](https://insomnia.rest/download) - Interface para visualizar e testar o código sem que seja preciso criar uma interface,mais você pode usar o de sua preferência.

* [Express](https://expressjs.com/en/starter/installing.html) - Express é uma estrutura de aplicativo da web Node.js mínima e flexível que fornece um conjunto robusto de recursos para aplicativos da web e móveis.

* [GitHub](https://github.com/) - Repositório de códigos

## No Insomnia

# Método GET

* 1º Crie um projeto com o nome Api Doa Fácil.org
* 2º Crie uma pasta chamada de API
* 3º Crie uma new request e dê o nome de lista
* 4º Mude o método para GET
* 5º A baixo do método GET, mude a opção para json
* 6º Na url do método GET cole está url "localhost:3003/campanhas", em seguida, click em SEND para ver a lista de campanhas.

# Método POST

* 1º Dentro da pasta, crie um new request e dê o nome de criar
* 2º Mude o método para POST
* 3º A baixo do método POST, mude a opção para JSON
* 4º Crie um arquivo json com o seguinte código 
{
  "descricao": "campanha criada 04",
  "meta": "85,23"
} 

e click em SEND

# Método PUT

# Método DELETE

# Instalando o Banco de Dados Sqglite3
npm i -S sqlite3

# Instalando o squelize
npm i -S sequelize

# Instalando o sequelize-cli apenas no ambiente de desenvolvimento
npm i -D sequelize-cli

# Criando o arquivo.sequelizerc
Arquivo criado para, no sequelize é um arquivo de configuraçao que possibilitar o trabalha atráves de rotas, apois criar mudar seu tipo para javascript, pois ele usa a esrutura do js no seu corpo.

# npx sequelize init
O npx execulta o pacote sem precisar instala-lo, criando pastas e arquivos dentro da pasta src.

# Arquivo config.json
Esse arquivo trás toda uma configuração de abiente com o banco de dados, produção,teste e desenvolvimento.
Nele você pode especifica qual o dialeto do seu banco, senha, no da base de dados e senha, deixando totalmente configurado.

# npx sequelize model:generate -- Organizacao --attributes continua...'colocar o nome dos atributos da tabela apois o --attrtbutes' 
Cria um modelo de uma tabela, nesse caso organizacao já com seus atributos, com esse modelo de arquivo, podemos manipular a tabela organização na base de dados.

# npx sequelize db:migrate
Criando o banco de dados

# npm start
Para levantar o servidor

# npx sequelize migration:create --name campanha-add-status
Inserindo um campo na tabela campanha 

# npx sequelize model:generate --name ListaCampanha --attributes meta:integer,arrecadacao:integer,total_Doadores:integer,status:string,Cod_Campanha:integer
Criando o modelo de lista, parei no video do dia 25 no time 45:51

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺 
* Obrigado publicamente 🤓.
* etc.


---
⌨️ com ❤️ por [Joanderson Alves](https://gist.github.com/JoandersonAlvesMartins) 😊
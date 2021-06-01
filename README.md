# API Doa Fácil.org
Instruções de instalação e configuração 

# Título do projeto

Projeto acadêmico de campanha de doação financeira para a manutenção e sustentabilidade das organizações sem fins lucrativos e não governamentais.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

Você vai precisar ter instalado em sua maquina os seguintes pacotes

* [Node](https://nodejs.org/en/download/) - Escolha o dowload de acordo com o seu sistema operacional e instale-o
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

## 🛠️ Construído com editar

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

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
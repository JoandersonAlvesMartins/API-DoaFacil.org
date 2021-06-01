//importando o express pelo metodo require
const express = require('express')

//exportando o bodyParser para poder trabalhar com requisições
const bodyParser = require('body-parser')

//iniciando um objeto construtor para o express
const app = express()

//passando o bodyParser dentro o app
app.use(bodyParser.urlencoded({extended: true}))

//para trabalharmos com os metodos no formato json
app.use(bodyParser.json())

//criando uma constante para exportar o arquivo(função) de rotas
const routes = require('./src/routes/route.js')

//routes() passa a ser uma função e apartir de agora podemos usar o arquivo de rotas chamado de route.js
routes(app)

// criando uma rota raiz para minha aplicação
app.route('/')
    .get((req, res) => {
        res.send('API Doa Fácil.org!')
    })

//criando uma variável de ambiente para pegar a porta que estiver disponível pelo servidor ou aporta definida pelo programador
const port = process.env.PORT || 3003 // o nome da variávelde ambiente, deve ser tudo maiusculo

// passando uma porta por onde o servidor irar escultar ou receber/enviar as requisições
//app.listen(3000)

//recebendo a porta de forma dinâmica
app.listen(port)

//exibindo uma mensagem no console do terminal,mostrando o servidor funcionando
console.log('Servidor Funcionando na porta:'+ port)

const { response } = require("express")

//exportando a função de listar campanha 
exports.listAll = (req, res) => {
    // criando um mockup ou array de campanhas
    let campanhas = [
        {
            descricao: 'campanha criada 01',
            meta: '10,00'
        },
        {
            descricao: 'campanha criada 02',
            meta: '08,50'
        },
        {
            descricao: 'campanha criada 03',
            meta: '138,56'
        }
    ]
    res.send(campanhas)
}

//exportando a função de criar campanha
exports.createOne = (req, res) => {
    let response = {
        message: 'Campanha criada com sucesso!',
        data: req.body // para mostrar o que foi criado
    }
    res.send(response)
}
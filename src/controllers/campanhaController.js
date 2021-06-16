
const Campanha = require('../models').Campanha

//exportando a função de listar campanha 
exports.listAll = (req, res) => {
    Campanha.findAll().then(campanha=> {
        res.send(campanha)
    }).catch(error => {
        res.send(campanha)
    })
    // criando um mockup ou array de campanhas
   /* let campanha = [
        {
            "id": "01",
            "cod_Org": "01",
            "meta": "85,23",
            "descricao": "campanha de tete número 01"
        },
        {
            "id": "02",
            "cod_Org": "01",
            "meta": "123,00",
            "descricao": "campanha de tete número 02"
        },
        {
            "id": "01",
            "cod_Org": "02",
            "meta": "18,89",
            "descricao": "campanha de tete número 01"
        }
    ]*/
}

//exportando a função de criar campanha
exports.createOne = (req, res) => {
    //console.log(Campanha)
    const { meta, descricao } = req.body
    Campanha.create({meta,descricao}).then(campanha => {
        res.send(campanha)
    }).catch(error => {
        res.send(error)
    })
   // let response = {
     // message: 'Campanha criada com sucesso!',
     //   data: req.body // para mostrar o que foi criado
    //}
    //res.send(response)
}
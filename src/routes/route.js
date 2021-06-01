module.exports = function (app) {
    //importando o controlador
    const campanhas = require('../controllers/controle.js')
    app.route('/campanhas') // se o método for o get, ele vai receber uma função que lista as campanhas
    .get(campanhas.listAll) // passando afunção de listar como parametro dentro do método get
    .post(campanhas.createOne) // passando afunção de criar como parametro dentro do método post
}
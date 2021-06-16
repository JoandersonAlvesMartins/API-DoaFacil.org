'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doacao.init({
    name: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    email: DataTypes.STRING,
    valor_doacao: DataTypes.DOUBLE,
    forma_Pagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doacao',
  });
  return Doacao;
};
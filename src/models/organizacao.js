'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organizacao.init({
    cnpj: DataTypes.INTEGER,
    nomefantasia: DataTypes.STRING,
    razaosocial: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    complemento: DataTypes.STRING,
    email: DataTypes.STRING,
    contato: DataTypes.INTEGER,
    agencia: DataTypes.INTEGER,
    conta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Organizacao',
  });
  return Organizacao;
};
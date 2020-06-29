const Sequelize = require('sequelize');
const sequelize = require('../config/config');
const Model =Sequelize.Model;

class People extends Model {}

People.init({
  // Model attributes are defined here
  id:{
      type:Sequelize.UUID,
      defaultValue:Sequelize.UUIDV1,
      primaryKey:true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  age:{
      type: Sequelize.INTEGER
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'people' // We need to choose the model name
});
module.exports=People;
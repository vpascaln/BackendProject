const Sequelize=require('sequelize');


const sequelize = new Sequelize('ppl_database', 'ppl_user', 'harouna', {
  host: 'localhost',
  dialect:  'postgres' 
});

module.exports=sequelize;
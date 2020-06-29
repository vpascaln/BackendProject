const Sequelize=require('sequelize');


// const sequelize = new Sequelize('ppl_database', 'ppl_user', 'harouna', {
//   host: 'localhost',
//   dialect:  'postgres' 
// });


const sequelize = new Sequelize('mysql://b0c65c38ce144d:96f34267@us-cdbr-east-02.cleardb.com/heroku_42902aead1b8139?reconnect=true' 
);










module.exports=sequelize;
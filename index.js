const express =require('express');
const app=express();
const db=require('./config/config');
const bodyParser=require("body-parser");

app.use(bodyParser.json());

db.authenticate()
    .then(()=>{
            return console.log('Harouns big  head is connected to the db')})
    .catch((err)=>{ return console.err(err)})
db.sync();






app.get('/', (req, res)=>{res.send("Hello Harouna!")});
app.use("/people", require('./routers/people'));
app.listen(5000,()=>console.log("server is running"));

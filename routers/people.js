const express=require('express');
const router=express.Router();
const People=require('../models/people');



router.get("/", async (req,res)=>{
    let people =await People.findAll();
    res.send(people);
});

router.post("/", async(req, res)=>{
    let {firstName, lastName,age }=req.body;
    
    await People.create({firstName, lastName,age})
        .then((new_person)=>{
            res.status(200).send({
                status:200,
                success:true,
                message: "A Person Was Created!!",
                new_person,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                status:500,
                sucess:false,
                message:"ERROR - Person Not Created",
                Error:err,
            })
        })

})

module.exports=router;
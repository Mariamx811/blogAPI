const express = require("express");
const router = express.Router();
const {user} = require("../models/main_model");

router.get("/",async(req,res)=>{
    const users = await user.findAll();
    res.send(users);
})

router.post("/",async(req,res)=>{
    const newUser = await user.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    });
    res.send(newUser);
})

router.patch("/:id",async(req,res)=>{

    const updatedUser = await user.update({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role
    },
    {
        where : 
        {
            id: req.params.id
        }
    }
        
    )
    res.send(updatedUser)

});

router.delete("/:id",async(req,res)=>{

    const deleteUser = await user.destroy(
    {
        where : 
        {
            id: req.params.id
        }
    }
        
    )
})

module.exports = router;

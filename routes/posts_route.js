const express = require("express");
const router = express.Router();
const {post} = require("../models/main_model");


router.get("/",async(req,res)=>{
    const users = await post.findAll();
    res.send(users);
})

router.post("/",async(req,res)=>{
    const newUser = await post.create({
        name : req.body.name,
        title : req.body.title,
        body : req.body.body,
        userid : req.body.userid
    });
    res.send(newUser)
})

router.patch("/:id",async(req,res)=>{

    const updatedUser = await post.update({
        name : req.body.name,
        title : req.body.title,
        body : req.body.body,
        userid : req.body.userid
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

    const deleteUser = await post.destroy(
    {
        where : 
        {
            id: req.params.id
        }
    }
        
    )
})

module.exports = router;
const express = require('express')

const path = require('path')

const router=express.Router()

router.get("/get",(req,res,next)=>{
    console.log("Im redirecting to home")
    console.log(req.body)
    res.sendFile(path.join(__dirname,"../","views","shop.html"))
})

module.exports=router
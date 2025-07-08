const express = require("express")
const http = require("http")
const bodyparser=require("body-parser")
const app=express()
const adminRouter=require('./routes/admin')
const productRouter=require('./routes/products')
const path = require("path")

app.use(bodyparser.urlencoded({ extended: false }))

app.use('/admin',adminRouter);
app.use('/product',productRouter);

app.use((req,res,next)=>{
   res.sendFile(path.join(__dirname,'.',"views","404.html"))
})

app.listen(3000)
const express = require("express");

const path = require('path')

const routePath = require('../util/path')
const router  = express.Router();
// const app=express();
// app and router functions works in same way so use any here i am using router
router.get("/add-product",(req,res,next)=>{
    console.log("it is another middleware ")
    res.sendFile(path.join(routePath,"views",'add-product.html'))
});
router.post("/add-product",(req,res,next)=>{
    console.log(req.body)
   res.redirect("/")
//    next();//jump to next middleware in line 
})

module.exports=router;
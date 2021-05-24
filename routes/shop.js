const express = require("express");
const router = express.Router();



router.get("/",(req,res,next)=>{
    // console.log(req.body)
    res.send("<h1>Products is added !</h1>")
//    next();//jump to next middleware in line 
})


module.exports =router
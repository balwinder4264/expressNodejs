const express = require("express");
const router = express.Router();
const path = require('path')

const routePath = require('../util/path')

router.get("/",(req,res,next)=>{
    // console.log(req.body)
    res.sendfile(path.join(routePath,'views','shop.html'))
//    next();//jump to next middleware in line 
})


module.exports =router
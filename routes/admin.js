const express = require("express");

const router  = express.Router();
// const app=express();
// app and router functions works in same way so use any here i am using router
router.get("/add-products",(req,res,next)=>{
    console.log("it is another middleware ")
    res.send("<form action='/products' method='POST'><input type='text' name ='title'/><button type='submit'>Press me</button></form>")
});
router.post("/products",(req,res,next)=>{
    console.log(req.body)
    res.send("<h1>Products is added her !</h1>")
//    next();//jump to next middleware in line 
})

module.exports=router;
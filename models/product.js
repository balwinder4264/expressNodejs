const routePath = require('../util/path')

const path = require('path')
const fs =require('fs');

const p = path.join(routePath,'data',"products.json")

const getAllProductsFromFile = cb=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent))
        }
      
    })
}
module.exports = class Product{
    constructor(t){
        this.title=t;
    }

    save (){
        //
        getAllProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err)
            })
        })
        
       
        
    }

    static fetchAll(cb){
        getAllProductsFromFile(cb)
        
        
    }
}
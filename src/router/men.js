

const express = require("express")
const router = new express.Router();


const menRanking = require("../model/mens")




router.post("/mens", async (req,res)=>{
    try{
    const adddata = new menRanking(req.body);
    console.log(req.body)
     const insertmens = await  adddata.save();
    res.status(200).send(insertmens);
    
    
    }
    
    catch(err) {
        res.status(400).send(err)
    console.log("Something Went Wrong")
    }
    })
    
    
    //get Request
    
    router.get("/mens/:id", async (req,res)=>{
        try{
    
    
    const _id = req.params.id
    
    const getmens =  await menRanking.findById(_id)
         
        res.send(getmens);
        
        
        }
        
        catch(err) {
            res.status(400).send(err)
        console.log("Something Went Wrong")
        }
        })
    
    
    
    
        //update method -- we can use patch method 
    
    
        router.patch("/mens/:id", async (req,res)=>{
            try{
        
        
        const _id = req.params.id
        
        const getmens =  await menRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })
             
            res.send(getmens);
            
            
            }
            
            catch(err) {
                res.status(400).send(err)
            console.log("Something Went Wrong")
            }
            })
        
    
    //Now Let See Delete method -- 
    router.delete("/mens/:id", async (req,res)=>{
        try{
    
    
    const _id = req.params.id;
    
    
    const getmens =  await menRanking.findByIdAndDelete(_id)
         
        res.send(getmens);
        
        
        }
        
        catch(err) {
            res.status(400).send(err)
        console.log("Something Went Wrong")
        }
        })
    
    
    
    
    
    
    
    
    module.exports = router
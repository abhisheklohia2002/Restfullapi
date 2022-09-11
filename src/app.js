


const express = require("express");
const mongoose = require("mongoose");
require("./db/conn") // we can do connected the database 

const menRanking = require("../src/model/mens");
const router = require("./router/men");
const app = express();

const Port = 8000 || process.env.PORT;

app.use(express.json());

// app.post("/mens", async (req,res)=>{
// try{
// const adddata = new menRanking(req.body);
// console.log(req.body)
//  const insertmens = await  adddata.save();
// res.status(200).send(insertmens);


// }

// catch(err) {
//     res.status(400).send(err)
// console.log("Something Went Wrong")
// }
// })


// //get Request

// app.get("/mens/:id", async (req,res)=>{
//     try{


// const _id = req.params.id

// const getmens =  await menRanking.findById(_id)
     
//     res.send(getmens);
    
    
//     }
    
//     catch(err) {
//         res.status(400).send(err)
//     console.log("Something Went Wrong")
//     }
//     })




//     //update method -- we can use patch method 


//     app.patch("/mens/:id", async (req,res)=>{
//         try{
    
    
//     const _id = req.params.id
    
//     const getmens =  await menRanking.findByIdAndUpdate(_id,req.body,{
//         new:true
//     })
         
//         res.send(getmens);
        
        
//         }
        
//         catch(err) {
//             res.status(400).send(err)
//         console.log("Something Went Wrong")
//         }
//         })
    

// //Now Let See Delete method -- 
// app.delete("/mens/:id", async (req,res)=>{
//     try{


// const _id = req.params.id;


// const getmens =  await menRanking.findByIdAndDelete(_id)
     
//     res.send(getmens);
    
    
//     }
    
//     catch(err) {
//         res.status(400).send(err)
//     console.log("Something Went Wrong")
//     }
//     })

app.use(router)







app.listen(Port,()=>{
    console.log(`connected successfull ${Port}`)
})
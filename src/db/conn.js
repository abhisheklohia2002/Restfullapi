const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/Dataolympic",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");

}).catch((err)=>{
    console.log("Database not Connected")
})
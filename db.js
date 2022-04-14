const mongoose=require("mongoose");

const CONNECT_URL = process.env.CONNECT_URL
require('dotenv').config()


module.exports=()=>{
    
    mongoose.connect(CONNECT_URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true}, 
	(err)=>{
	if (!err) {console.log("connected başarılı")} 
    else {console.log("no connect.")} }
)
    mongoose.connection.on("open",()=>{console.log("MongoDB Connected.")})
    mongoose.connection.on("error",(err)=>{console.log("MongoDB Connect Failed. Error:" + err)})

} 


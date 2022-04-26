const mongoose=require("mongoose");
const User=require("./models/user.model");
const Role=require("./models/role.model")
const CONNECT_URL = process.env.CONNECT_URL
require('dotenv').config()

module.exports=()=>{
    mongoose.connect(CONNECT_URL,{useNewUrlParser: true,useUnifiedTopology: true})
    mongoose.connection.on("open",()=>{console.log("MongoDB Connected."); initial()})
    mongoose.connection.on("error",(err)=>{console.log("MongoDB Connect Failed. Error:" + err); process.exit()})
    }


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0){
            new Role({name: "user"})
            .save(err => {if (err) {console.log("error", err);}console.log("added 'user' to roles collection");});
            new Role({name: "admin"})
            .save(err => {if (err) {console.log("error", err);}console.log("added 'admin' to roles collection");});
        }});
    
    User.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            const admin = await Role.findOne({ name: "admin" });
            const admin_id = mongoose.Types.ObjectId(admin._id);
        
            new User({
                role:admin_id,
                status: true,
                password:"$2a$10$Y.U61DvYfu3WhgQShzy7UubzCOaBRdMCmMmM.UX/9ACjg/rT2Av9W",
                email: "admin@admin.com",
                showOperator:true,
                firstName: "admin",
                lastName: "admin"})
            .save((err) => {if (err) {console.log("error", err);}console.log("added admin to user collection");});
        }});
}

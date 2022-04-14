var mongoose=require("mongoose")
var Schema=mongoose.Schema;

const postSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
    website:String,
    street:String,
    suite:String,
    city:String,
    zipcode:Number,
    createdAt: {type: Date,default: new Date(),},
});

module.exports= mongoose.model("post", postSchema);







/* 
const postSchema=mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    phone:{type:Number},
    website:{type:String},
    street:{type:String},
    suite:{type:String},
    city:{type:String},
    zipcode:{type:Number},
    createdAt:{type:Date,default:new Date()}

})

const myPost = mongoose.model("myPost",postSchema);

exports.module=myPost; */
const randomstring = require("randomstring"); //rastgele dizi 
const helpers = require("../helpers/helper");
const User=require("../models/user.model")
const Role = require("../models/role.model");
const Notification =require("../models/notification.model");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



//--------------------------------signup start-----------------------------------------
exports.signup = (req, res) => {
  const user=new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    showOperator:true,
    password:bcrypt.hashSync(req.body.password,8)})
  user.save((err, user) => {if (err) {res.status(500).send(console.log("hata usercontroller"+ err ));return;}

  Role.findOne({name:"user"},(err,role)=>{
    if(err){res.status(500).send({ message: err });return;}
    user.role = role._id;
    user.save((err)=>{if (err) {res.status(500).send({ message: err });return;}
        const newNotification = new Notification({email:req.body.email,firstName:req.body.firstName,lastName:req.body.lastName,user_id: user._id,notification_name:'New register.',notification_code:201});
        newNotification.save();
        res.send({ message: "A notification has been sent to admin. You will be able to login after your registration is being approved!" });
    });});
});};
//--------------------------------signup end-----------------------------------------


//--------------------------------signin start-----------------------------------------
exports.signin = (req,res)=>{
  User.findOne({email:req.body.email})
  .populate("role", "-__v")
  .exec(async (err, user)=>{
    
        if(err){res.status(500).send({ message: err });return;}
        else if(!user){return res.status(404).send({ message: "User Not found." })}
        else if(!bcrypt.compareSync(req.body.password,user.password)){return res.status(401).send({accessToken:null,message: "Invalid Password!"})}
        else if (!user.status){return res.status(404).send({ message: "You are not confirmed yet, contact your admin please." })}
        else{var token = jwt.sign({ id: user.id }, helpers.secret, {expiresIn: 86400});
        res.status(200).send({firstName:user.firstName,lastName:user.lastName,showOperator:true,id:user._id,company:user.company, email:user.email, role:["ROLE_" + user.role.name.toUpperCase()],imgUrl:user.imgUrl,accessToken:token});
        //await  User.findOneAndUpdate({email: req.body.email},{showOperator:true}).catch((err)=>{next({message:'showOperator not update' + err})});
        //res.redirect("/")
        }
    })
}
//--------------------------------signin end-----------------------------------------



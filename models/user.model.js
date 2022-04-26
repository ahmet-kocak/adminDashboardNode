var mongoose=require("mongoose")
var Schema=mongoose.Schema;

const signupSchema = new Schema({
   
        imgUrl: { trim: true, type: String, default: "default_avatar.png" },
         email: { trim: true, type: String, required: true, unique: true },
         password: { trim: true, type: String, required: true },
         code: { trim: true, type: String, unique: true },
         firstName: { trim: true, type: String, required: true, lowercase: true },
         middlename: { trim: true, type: String, lowercase: true, default: "" },
         lastName: { trim: true, type: String, required: true,  lowercase: true },
         phone1: { trim: true, type: String, default: "" },
         phone2: { trim: true, type: String, default: "" },
         status: { type: Boolean, default: false },
         showOperator: { type: Boolean, default: false },
         birthDate: { type: String, default: "" },
         placeOfBirth: { trim: true, type: String, default: "" },
         nativeLanguage: { trim: true, type: String, default: "" },
        gender: { trim: true, type: String, default: "" },
        countryOrigin: { trim: true, type: String, default: "" },
         race: { trim: true, type: String, default: "" },
         address:{
     address_line_1: { type: String, default: "" },
    address_line_2: { type: String, default: "" },
           city: { type: String, default: "" },
           state: { type: String, default: "" },
          zip_code: { type: String, default: "" }},
    company: {type: Array},
    role: {type: mongoose.Schema.Types.ObjectId, ref:"Role"}
},{timestamps: true})

module.exports= mongoose.model("signup", signupSchema);
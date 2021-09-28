// const mongodb=require("mongoose")

// const userSchema=new mongodb.Schema({
//     name: {type: String,required:true},
//     email:{type: String,required:true},
//     password:{type:String,required:true}
// })

// const User=mongodb.model("User",userSchema)

// module.exports=User;

const mongoose = require("mongoose");
const jwt=require('jsonwebtoken')
const user_schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

user_schema.methods.getSignedToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRE})
}

const User = mongoose.model("User", user_schema)

module.exports = User;
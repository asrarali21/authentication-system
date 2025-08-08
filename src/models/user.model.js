import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
    },
    otpExpiry: {
        type: Date,
      
    },
     refreshtoken :{
           type:String,
    },   
  
    
}, {timestamps:true})


userSchema.pre("save" , async function (next) {
    if (this.isModified("password")) {
       this.password =  await bcrypt.hash(this.password , 10)
       next()
    }else{
        next()
    }
})

userSchema.method.IsPasswordCorrect = async function (password) {
          return await bcrypt.compare(password , this.password)
}


userSchema.method.generateAccessToken = function(){
    return jwt.sign(
        {_id:this._id, 
        email:this.email,
        name:this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY}
    )
}


userSchema.method.generateRefreshToken = function(){
    return jwt.sign(
        {_id:this._id},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
    )
}


export const User = mongoose.model("User" , userSchema)
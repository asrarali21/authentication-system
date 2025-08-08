import mongoose, { Schema } from "mongoose";

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
        required:true
    },
    otpExpiry: {
        type: Date,
    },
     refreshtoken :{
           type:String,
        required:true
    },   
  
    
})

export const User = mongoose.model("User" , userSchema)
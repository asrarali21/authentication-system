import mongoose, { Schema } from "mongoose";




const addPatientSchema = new Schema({
     bookingforWhom :{
        type:String,
        enum:["Myself" ,"Mother" ,  "Father", "son", "Daughter", "Other"],
        required :true
     },
     name :{
        type:String,
        required : true
     },
      DOB :{
        type:Number,
        required : true
     },
         gender :{
        type:String,
        enum :["male" , "female" , "others"],
        required : true
     }
     
},{})
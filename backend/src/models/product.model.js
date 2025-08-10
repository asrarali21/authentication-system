import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     price:{
        type:Number,
        required:true
    },
    image:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        required:true
    },
     subcategory:{
        type:String,
        required:true
    },
    sizes:{
        type:Array,
        required : true
    },
    bestSeller:{
        type:Boolean
    }

},{timestamps:true})


export const Product = mongoose.model("Product" , productSchema)
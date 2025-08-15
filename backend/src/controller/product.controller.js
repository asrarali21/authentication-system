import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";



const addProduct = asyncHandler(async(req ,res)=>{
        const {name , description , price , category , bestSeller} = req.body



        const imagesLocalpath = req.files.map(file=>file.path)
        console.log(req.files);
        console.log(imagesLocalpath);
        

        

   const results = await Promise.all(
      imagesLocalpath.map(path=> uploadoncloudinary(path))
   )
   console.log(results);
   
   // we can have secure url for production
   const imageUrls = results.map(file => file.url)

   console.log(imageUrls);


   const product  = await Product.create({
    name,
    description,
    price,
    category,
    bestSeller,
    image : imageUrls
   })
   

     return res.status(200)
     .json(new ApiResponse(200 , product , "successfully added product"))

})


const listProduct = asyncHandler(async(req, res)=>{
        
    const allproducts = await Product.find()

    if (!allproducts) {
        throw new ApiError(401 , "no products found")
    }

    res.status(200).json(new ApiResponse(200 , allproducts , "successfully got all the products"))

})

const removiingProduct = asyncHandler(async(req ,res)=>{
      
    const {id} = req.params

   const deletedproduct =  await Product.findByIdAndDelete(id)

    if (!deletedproduct) {
        throw new ApiError(401 , "product not found")
    }


      return res.status(200).json(new ApiResponse(200 , deletedproduct , "successfully deleted the product") )
})

const singleproduct = asyncHandler (async(req , res)=>{
    const {id} = req.params

    const singleproduct = await Product.findById(id)

    if (!singleproduct) {
       throw new ApiError(401 , "couldnt find product")
    }
  

    res.status(200).json(new ApiResponse(200 , singleproduct , "successfully got single product"))


})
export{addProduct, listProduct , removiingProduct , singleproduct}
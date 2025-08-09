import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadoncloudinary } from "../utils/cloudinary.js";



const addProduct = asyncHandler(async(req ,res)=>{
        const {name , description , price , category , subcategory , sizes, bestSeller} = req.body


        if ([name , description , price , category , subcategory , sizes, bestSeller].some((item)=>item.trim() === "")) {
            throw new ApiError(401 , "all fields are required")
        }


        const imagesLocalpath = req.files.map(file=>file.path)

        console.log(imagesLocalpath);
        

        

   const results = await Promise.all(
      imagesLocalpath.map(path=> uploadoncloudinary(path))
   )
   
   const imageUrls = results.map(file => file.url)


     






})


export{addProduct}
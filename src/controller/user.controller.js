import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";




const registerUser = asyncHandler(async(req , res)=>{
    const {name ,email , password} = req.body
    
    if ([name ,email , password].some((item)=>item.trim() === "")) {
        throw new ApiError(401 , "all feilds are required")
    }
     
     
    const user = User.create({
        name,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select("-password")

    if (!createdUser) {
        throw new ApiError(402 , "something went wrong while creating user")
    }

    return res.status(200).json(ApiResponse(200 , createdUser , "user registered successfully"))

})

export{registerUser}
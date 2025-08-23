import { ApiError } from "../utils/ApiError"
import jwt from "jsonwebtoken"



const verifyuser = async(req , res)=>{
try {
    const token = req.cookies?.accessToken || req.headers
    
    
    if (!token) {
         throw new ApiError(400 , "no token found")
    }
    
     const decodetoken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    
     if (!decodetoken) {
        throw new ApiError(400 , "invlaid credentials ")
     }
    
     req.user = decodetoken
     
     next()
} catch (error) {
    throw new ApiError(400 , "invalid or expired token ")
}
}

export default verifyuser
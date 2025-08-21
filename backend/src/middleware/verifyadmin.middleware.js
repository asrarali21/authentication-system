import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"


const verifyadmin = asyncHandler (async(req , res , next)=>{
  try {
 
    const token = req.cookies?.accessToken || req.header("authorization")?.replace("Bearer ", "").trim();

      if (!token) {
          throw new ApiError(401 , "unauthorized access")
      }
  
  
      const decodedtoken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
  
  
      if (decodedtoken.role !== "admin") {
          throw new ApiError(401 , "access denied admin only")
      }
  
      req.admin = decodedtoken
  
      next()
  } catch (error) {
    throw new ApiError(401 , "invlaid or expired token")
  }
}
)

export default verifyadmin
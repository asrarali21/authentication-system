import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addProduct } from "../controller/product.controller.js";



const Productroute = Router()



Productroute.route("/addproduct").post(upload.array("image" , 5), addProduct)


export default Productroute

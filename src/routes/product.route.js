import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addProduct, listProduct } from "../controller/product.controller.js";



const Productroute = Router()



Productroute.route("/addproduct").post(upload.array("image" , 5), addProduct)
Productroute.route("/productlist").get(listProduct)


export default Productroute

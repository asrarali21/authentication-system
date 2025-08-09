import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addProduct, listProduct, removiingProduct } from "../controller/product.controller.js";



const Productroute = Router()



Productroute.route("/addproduct").post(upload.array("image" , 5), addProduct)
Productroute.route("/productlist").get(listProduct)
Productroute.route("/deleteproduct/:id").delete(removiingProduct)


export default Productroute

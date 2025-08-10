import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { addProduct, listProduct, removiingProduct, singleproduct } from "../controller/product.controller.js";
import verifyadmin from "../middleware/verifyadmin.middleware.js";



const Productroute = Router()



Productroute.route("/addproduct").post(verifyadmin,upload.array("image" , 5), addProduct)
Productroute.route("/productlist").get(listProduct)
Productroute.route("/deleteproduct/:id").delete(verifyadmin,removiingProduct)
Productroute.route("/singleproduct/:id").get(singleproduct)


export default Productroute

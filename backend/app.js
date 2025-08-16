
import express from "express";
import cors from "cors"
import { urlencoded } from "express";
import Userrouter from "./src/routes/user.route.js";
import cookieParser from "cookie-parser";
import Productroute from "./src/routes/product.route.js";
import { errorHandler } from "./src/middleware/error.middleware.js";

const app = express()

app.use(cors({
    origin:  ["http://localhost:5143", "http://localhost:5173", "http://localhost:5174"],
    credentials:true
}
))



app.use(express.json())
app.use(cookieParser())

app.use(urlencoded({extended:true}))
app.use(express.static("public"))


//routes


app.use("/api/v1/users" , Userrouter)
app.use("/api/v1/products" , Productroute)


app.use(errorHandler)


export default app